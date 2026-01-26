import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, projectName } = body;

    // Validate input
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Use Resend API to send email
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Send the deletion request to admin
    const adminResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: 'Ephileo Account Deletion <admin@ephileo.us>',
        to: ['admin@ephileo.us'],
        reply_to: email,
        subject: `Account Deletion Request - ${projectName}`,
        html: `
          <h2>Account Deletion Request</h2>
          <p><strong>Product:</strong> ${projectName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Requested at:</strong> ${new Date().toISOString()}</p>
          <p><strong>Deletion deadline:</strong> ${new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()}</p>
          <br>
          <p>Please process this account deletion request within 30 days.</p>
        `,
      }),
    });

    if (!adminResponse.ok) {
      const error = await adminResponse.json();
      console.error('Resend API error (admin email):', error);
      return NextResponse.json(
        { error: 'Failed to send request' },
        { status: 500 }
      );
    }

    // Send confirmation email to the user
    const userResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: 'Ephileo <admin@ephileo.us>',
        to: [email],
        subject: `Account Deletion Request Received - ${projectName}`,
        html: `
          <h2>Account Deletion Request Received</h2>
          <p>Hi,</p>
          <p>We have received your request to delete your account associated with <strong>${projectName}</strong>.</p>
          <p>Your account and all associated data will be permanently deleted within <strong>30 days</strong> from the date of this request.</p>
          <p><strong>Request date:</strong> ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          <p><strong>Estimated deletion date:</strong> ${new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          <br>
          <p>If you did not make this request or wish to cancel it, please contact us immediately at <a href="mailto:admin@ephileo.us">admin@ephileo.us</a>.</p>
          <br>
          <p>Best regards,<br>The Ephileo Team</p>
        `,
      }),
    });

    if (!userResponse.ok) {
      const error = await userResponse.json();
      console.error('Resend API error (user confirmation):', error);
      // Don't fail the request if user confirmation fails
    }

    return NextResponse.json(
      { success: true, message: 'Deletion request submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing deletion request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
