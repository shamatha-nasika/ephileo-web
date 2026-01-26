'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function RoamatesPrivacyPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/projects/roamates">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to Roamates
            </motion.button>
          </Link>
          <Link href="/" className="text-xl font-bold text-white">
            ephileo
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{
              backgroundColor: '#10B98120',
              color: '#10B981',
            }}
          >
            Roamates
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Privacy Policy
          </h1>

          <p className="text-zinc-400 mb-8">
            <strong>Last Updated:</strong> January 11, 2025
          </p>

          <div className="prose prose-invert prose-zinc max-w-none">
            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p className="text-zinc-400 leading-relaxed">
                Welcome to Roamates, a product of Ephileo (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application Roamates (the &quot;App&quot;). Please read this privacy policy carefully. By using the App, you agree to the collection and use of information in accordance with this policy.
              </p>
              <p className="text-zinc-400 leading-relaxed mt-4">
                If you do not agree with the terms of this privacy policy, please do not access the App.
              </p>
            </section>

            {/* Section 2 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.1 Personal Information You Provide</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                When you register for an account or use our App, we may collect the following personal information:
              </p>
              <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4">
                <li><strong className="text-zinc-300">Name (First and Last):</strong> To identify you within the App and display to other users in your groups</li>
                <li><strong className="text-zinc-300">Email Address:</strong> For account creation, authentication, password recovery, and account-related communications</li>
                <li><strong className="text-zinc-300">Phone Number (optional):</strong> For contact matching to help you find friends on Roamates</li>
                <li><strong className="text-zinc-300">Profile Photo (optional):</strong> To personalize your profile and help friends identify you</li>
                <li><strong className="text-zinc-300">Password:</strong> For account authentication (stored securely using industry-standard hashing)</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.2 Information from Third-Party Authentication</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                If you choose to sign in using Google, we receive:
              </p>
              <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4">
                <li><strong className="text-zinc-300">Google Sign-In:</strong> Name, email address, profile picture</li>
              </ul>
              <p className="text-zinc-400 leading-relaxed mt-4">
                We only receive the information you authorize Google to share with us.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.3 Location Data</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                With your explicit consent, we collect:
              </p>
              <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4">
                <li><strong className="text-zinc-300">Precise Location:</strong> GPS coordinates (latitude and longitude) for real-time location sharing with friends and groups</li>
                <li><strong className="text-zinc-300">Location Accuracy:</strong> Metadata about the precision of your location data</li>
                <li><strong className="text-zinc-300">Timestamp:</strong> When your location was last updated</li>
              </ul>
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 mt-4">
                <p className="text-zinc-300 font-semibold mb-2">You have full control over location sharing:</p>
                <ul className="list-disc list-inside text-zinc-400 space-y-1 ml-4">
                  <li>Location sharing is optional and disabled by default</li>
                  <li>You can enable/disable location sharing at any time</li>
                  <li>You can choose which groups or individuals can see your location</li>
                  <li>You can stop sharing your location instantly</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.4 Contacts Data</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                When you use the friend discovery feature:
              </p>
              <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4">
                <li>We access your device contacts <strong className="text-zinc-300">only with your permission</strong></li>
                <li>Contact emails and phone numbers are <strong className="text-zinc-300">hashed using SHA-256</strong> on your device before transmission</li>
                <li>We <strong className="text-zinc-300">never store your raw contacts</strong> — only cryptographic hashes are sent to our servers</li>
                <li>Hashes are used solely to match you with existing Roamates users</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.5 Financial and Expense Data</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                When you use expense tracking features, we collect:
              </p>
              <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4">
                <li>Expense amounts and descriptions</li>
                <li>Currency preferences</li>
                <li>Payment records between users</li>
                <li>Group expense splits and balances</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.6 Device and Technical Information</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                We automatically collect:
              </p>
              <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4">
                <li><strong className="text-zinc-300">Device Tokens:</strong> For push notification delivery via Firebase Cloud Messaging</li>
                <li><strong className="text-zinc-300">Device Information:</strong> Device type, operating system, device name</li>
                <li><strong className="text-zinc-300">Platform:</strong> iOS or Android</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.7 Usage Data</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                We collect information about how you interact with the App:
              </p>
              <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4">
                <li>Activity logs (expenses created, payments made, group actions)</li>
                <li>Timestamps of actions</li>
                <li>Feature usage patterns</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <p className="text-zinc-400 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-zinc-800 text-sm">
                  <thead>
                    <tr className="bg-zinc-900">
                      <th className="border border-zinc-800 px-4 py-3 text-left text-zinc-300 font-semibold">Purpose</th>
                      <th className="border border-zinc-800 px-4 py-3 text-left text-zinc-300 font-semibold">Legal Basis</th>
                    </tr>
                  </thead>
                  <tbody className="text-zinc-400">
                    <tr>
                      <td className="border border-zinc-800 px-4 py-3">Create and manage your account</td>
                      <td className="border border-zinc-800 px-4 py-3">Contract performance</td>
                    </tr>
                    <tr className="bg-zinc-900/50">
                      <td className="border border-zinc-800 px-4 py-3">Enable expense tracking and splitting with friends</td>
                      <td className="border border-zinc-800 px-4 py-3">Contract performance</td>
                    </tr>
                    <tr>
                      <td className="border border-zinc-800 px-4 py-3">Facilitate location sharing between users</td>
                      <td className="border border-zinc-800 px-4 py-3">Consent</td>
                    </tr>
                    <tr className="bg-zinc-900/50">
                      <td className="border border-zinc-800 px-4 py-3">Send push notifications about expenses, payments, and group activities</td>
                      <td className="border border-zinc-800 px-4 py-3">Legitimate interest</td>
                    </tr>
                    <tr>
                      <td className="border border-zinc-800 px-4 py-3">Help you find friends who use Roamates</td>
                      <td className="border border-zinc-800 px-4 py-3">Consent</td>
                    </tr>
                    <tr className="bg-zinc-900/50">
                      <td className="border border-zinc-800 px-4 py-3">Authenticate your identity and secure your account</td>
                      <td className="border border-zinc-800 px-4 py-3">Contract performance</td>
                    </tr>
                    <tr>
                      <td className="border border-zinc-800 px-4 py-3">Prevent fraud and ensure security</td>
                      <td className="border border-zinc-800 px-4 py-3">Legitimate interest</td>
                    </tr>
                    <tr className="bg-zinc-900/50">
                      <td className="border border-zinc-800 px-4 py-3">Improve and optimize the App</td>
                      <td className="border border-zinc-800 px-4 py-3">Legitimate interest</td>
                    </tr>
                    <tr>
                      <td className="border border-zinc-800 px-4 py-3">Respond to your inquiries and provide support</td>
                      <td className="border border-zinc-800 px-4 py-3">Contract performance</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">4. How We Share Your Information</h2>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">4.1 With Other Users</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                Based on your settings and actions, we share:
              </p>
              <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4">
                <li>Your name and profile photo with group members</li>
                <li>Your location with users you&apos;ve chosen to share with</li>
                <li>Expense and payment information with relevant group members</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">4.2 With Service Providers</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                We use trusted third-party services to operate the App:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-zinc-800 text-sm">
                  <thead>
                    <tr className="bg-zinc-900">
                      <th className="border border-zinc-800 px-4 py-3 text-left text-zinc-300 font-semibold">Service</th>
                      <th className="border border-zinc-800 px-4 py-3 text-left text-zinc-300 font-semibold">Purpose</th>
                      <th className="border border-zinc-800 px-4 py-3 text-left text-zinc-300 font-semibold">Data Shared</th>
                    </tr>
                  </thead>
                  <tbody className="text-zinc-400">
                    <tr>
                      <td className="border border-zinc-800 px-4 py-3 font-medium text-zinc-300">Firebase Cloud Messaging</td>
                      <td className="border border-zinc-800 px-4 py-3">Push notifications</td>
                      <td className="border border-zinc-800 px-4 py-3">Device tokens, notification content</td>
                    </tr>
                    <tr className="bg-zinc-900/50">
                      <td className="border border-zinc-800 px-4 py-3 font-medium text-zinc-300">Google Sign-In</td>
                      <td className="border border-zinc-800 px-4 py-3">Authentication</td>
                      <td className="border border-zinc-800 px-4 py-3">OAuth tokens</td>
                    </tr>
                    <tr>
                      <td className="border border-zinc-800 px-4 py-3 font-medium text-zinc-300">Google Maps</td>
                      <td className="border border-zinc-800 px-4 py-3">Location display and places search</td>
                      <td className="border border-zinc-800 px-4 py-3">Location coordinates</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">4.3 Legal Requirements</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                We may disclose your information if required to:
              </p>
              <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4">
                <li>Comply with applicable laws or legal processes</li>
                <li>Protect and defend our rights or property</li>
                <li>Prevent or investigate possible wrongdoing</li>
                <li>Protect the personal safety of users or the public</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">4.4 We Do NOT</h3>
              <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4">
                <li>Sell your personal information to third parties</li>
                <li>Share your data with advertisers</li>
                <li>Use your data for targeted advertising</li>
                <li>Share your information with data brokers</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
              <p className="text-zinc-400 leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect your data:
              </p>
              <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4">
                <li><strong className="text-zinc-300">Passwords</strong> are hashed using bcrypt with industry-standard security</li>
                <li><strong className="text-zinc-300">Authentication tokens</strong> use JWT with short expiration times</li>
                <li><strong className="text-zinc-300">Refresh tokens</strong> are securely stored and rotated on each use</li>
                <li><strong className="text-zinc-300">Contact data</strong> is hashed using SHA-256 before transmission</li>
                <li><strong className="text-zinc-300">Data in transit</strong> is encrypted using TLS/HTTPS</li>
                <li><strong className="text-zinc-300">Sensitive data on device</strong> is stored in iOS Keychain / Android Secure Storage</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">6. Data Retention</h2>
              <p className="text-zinc-400 leading-relaxed mb-4">
                We retain your information for as long as necessary to provide our services:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-zinc-800 text-sm">
                  <thead>
                    <tr className="bg-zinc-900">
                      <th className="border border-zinc-800 px-4 py-3 text-left text-zinc-300 font-semibold">Data Type</th>
                      <th className="border border-zinc-800 px-4 py-3 text-left text-zinc-300 font-semibold">Retention Period</th>
                    </tr>
                  </thead>
                  <tbody className="text-zinc-400">
                    <tr>
                      <td className="border border-zinc-800 px-4 py-3">Account information</td>
                      <td className="border border-zinc-800 px-4 py-3">Until account deletion</td>
                    </tr>
                    <tr className="bg-zinc-900/50">
                      <td className="border border-zinc-800 px-4 py-3">Access tokens</td>
                      <td className="border border-zinc-800 px-4 py-3">15 minutes</td>
                    </tr>
                    <tr>
                      <td className="border border-zinc-800 px-4 py-3">Refresh tokens</td>
                      <td className="border border-zinc-800 px-4 py-3">30 days</td>
                    </tr>
                    <tr className="bg-zinc-900/50">
                      <td className="border border-zinc-800 px-4 py-3">Location data</td>
                      <td className="border border-zinc-800 px-4 py-3">Until you disable sharing or delete account</td>
                    </tr>
                    <tr>
                      <td className="border border-zinc-800 px-4 py-3">Expense records</td>
                      <td className="border border-zinc-800 px-4 py-3">Until deleted by user or account deletion</td>
                    </tr>
                    <tr className="bg-zinc-900/50">
                      <td className="border border-zinc-800 px-4 py-3">Activity logs</td>
                      <td className="border border-zinc-800 px-4 py-3">Duration of account existence</td>
                    </tr>
                    <tr>
                      <td className="border border-zinc-800 px-4 py-3">Device tokens</td>
                      <td className="border border-zinc-800 px-4 py-3">Until device is unregistered or account deletion</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 7 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights and Choices</h2>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">7.1 Access and Control</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4">
                <li><strong className="text-zinc-300">Access</strong> your personal data stored in your profile</li>
                <li><strong className="text-zinc-300">Update</strong> your name, email, phone number, and profile photo</li>
                <li><strong className="text-zinc-300">Control</strong> location sharing (enable/disable at any time)</li>
                <li><strong className="text-zinc-300">Control</strong> which groups and individuals can see your location</li>
                <li><strong className="text-zinc-300">Delete</strong> expenses and payment records you&apos;ve created</li>
                <li><strong className="text-zinc-300">Leave</strong> groups you no longer wish to be part of</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">7.2 Device Permissions</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                You can control the following permissions on your device:
              </p>
              <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4">
                <li><strong className="text-zinc-300">Location:</strong> Required only for location sharing feature</li>
                <li><strong className="text-zinc-300">Contacts:</strong> Required only for friend discovery</li>
                <li><strong className="text-zinc-300">Notifications:</strong> Required only for push notifications</li>
              </ul>
              <p className="text-zinc-400 leading-relaxed mt-4">
                You can revoke these permissions at any time through your device settings.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">7.3 Account Deletion</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                To delete your account and all associated data, please contact us at{' '}
                <a href="mailto:privacy@ephileo.us" className="text-[#10B981] hover:underline">
                  privacy@ephileo.us
                </a>
                . Upon request, we will:
              </p>
              <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4">
                <li>Delete your account and personal information</li>
                <li>Remove your data from active databases</li>
                <li>Note: Some information may be retained in backups for a limited period</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">7.4 Rights for EEA/UK Residents (GDPR)</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                If you are located in the European Economic Area or United Kingdom, you have additional rights:
              </p>
              <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4">
                <li><strong className="text-zinc-300">Right to erasure</strong> (&quot;right to be forgotten&quot;)</li>
                <li><strong className="text-zinc-300">Right to data portability</strong></li>
                <li><strong className="text-zinc-300">Right to restrict processing</strong></li>
                <li><strong className="text-zinc-300">Right to object</strong> to processing</li>
                <li><strong className="text-zinc-300">Right to withdraw consent</strong> at any time</li>
                <li><strong className="text-zinc-300">Right to lodge a complaint</strong> with a supervisory authority</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">7.5 Rights for California Residents (CCPA)</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                California residents have the right to:
              </p>
              <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4">
                <li>Know what personal information is collected</li>
                <li>Know whether personal information is sold or disclosed</li>
                <li>Say no to the sale of personal information (we do not sell your data)</li>
                <li>Access your personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Equal service and price (non-discrimination)</li>
              </ul>
            </section>

            {/* Section 8 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">8. Children&apos;s Privacy</h2>
              <p className="text-zinc-400 leading-relaxed">
                Roamates is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately. If we discover that a child under 13 has provided us with personal information, we will delete such information from our servers.
              </p>
            </section>

            {/* Section 9 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">9. International Data Transfers</h2>
              <p className="text-zinc-400 leading-relaxed">
                Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that are different from the laws of your country.
              </p>
              <p className="text-zinc-400 leading-relaxed mt-4">
                When we transfer data internationally, we ensure appropriate safeguards are in place to protect your information in accordance with this privacy policy.
              </p>
            </section>

            {/* Section 10 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">10. Third-Party Links</h2>
              <p className="text-zinc-400 leading-relaxed">
                The App may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to read the privacy policies of any third-party services you access.
              </p>
            </section>

            {/* Section 11 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">11. Push Notifications</h2>
              <p className="text-zinc-400 leading-relaxed mb-4">
                We may send you push notifications regarding:
              </p>
              <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4">
                <li>Expense and payment updates</li>
                <li>Group activity notifications</li>
                <li>Friend requests and social updates</li>
                <li>Location sharing updates</li>
                <li>Important account information</li>
              </ul>
              <p className="text-zinc-400 leading-relaxed mt-4">
                You can opt out of push notifications through your device settings at any time.
              </p>
            </section>

            {/* Section 12 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">12. Changes to This Privacy Policy</h2>
              <p className="text-zinc-400 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by:
              </p>
              <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4">
                <li>Posting the new Privacy Policy in the App</li>
                <li>Updating the &quot;Last Updated&quot; date at the top of this policy</li>
                <li>Sending you a notification for significant changes</li>
              </ul>
              <p className="text-zinc-400 leading-relaxed mt-4">
                Your continued use of the App after any changes constitutes acceptance of the updated Privacy Policy.
              </p>
            </section>

            {/* Section 13 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">13. Contact Us</h2>
              <p className="text-zinc-400 leading-relaxed mb-4">
                If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
                <p className="text-zinc-300 mb-2">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:privacy@ephileo.us" className="text-[#10B981] hover:underline">
                    privacy@ephileo.us
                  </a>
                </p>
                <p className="text-zinc-300">
                  <strong>Website:</strong>{' '}
                  <a href="https://ephileo.us" target="_blank" rel="noopener noreferrer" className="text-[#10B981] hover:underline">
                    https://ephileo.us
                  </a>
                </p>
              </div>
            </section>

            {/* Summary Table */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">Summary of Data Collection</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-zinc-800 text-sm">
                  <thead>
                    <tr className="bg-zinc-900">
                      <th className="border border-zinc-800 px-4 py-3 text-left text-zinc-300 font-semibold">Category</th>
                      <th className="border border-zinc-800 px-4 py-3 text-left text-zinc-300 font-semibold">Data Collected</th>
                      <th className="border border-zinc-800 px-4 py-3 text-left text-zinc-300 font-semibold">Purpose</th>
                      <th className="border border-zinc-800 px-4 py-3 text-left text-zinc-300 font-semibold">Linked to Identity</th>
                      <th className="border border-zinc-800 px-4 py-3 text-left text-zinc-300 font-semibold">Used for Tracking</th>
                    </tr>
                  </thead>
                  <tbody className="text-zinc-400">
                    <tr>
                      <td className="border border-zinc-800 px-4 py-3">Contact Info</td>
                      <td className="border border-zinc-800 px-4 py-3">Name, Email</td>
                      <td className="border border-zinc-800 px-4 py-3">Account & authentication</td>
                      <td className="border border-zinc-800 px-4 py-3">Yes</td>
                      <td className="border border-zinc-800 px-4 py-3">No</td>
                    </tr>
                    <tr className="bg-zinc-900/50">
                      <td className="border border-zinc-800 px-4 py-3">Location</td>
                      <td className="border border-zinc-800 px-4 py-3">Precise GPS</td>
                      <td className="border border-zinc-800 px-4 py-3">Location sharing with friends</td>
                      <td className="border border-zinc-800 px-4 py-3">Yes</td>
                      <td className="border border-zinc-800 px-4 py-3">No</td>
                    </tr>
                    <tr>
                      <td className="border border-zinc-800 px-4 py-3">Identifiers</td>
                      <td className="border border-zinc-800 px-4 py-3">User ID</td>
                      <td className="border border-zinc-800 px-4 py-3">Account identification</td>
                      <td className="border border-zinc-800 px-4 py-3">Yes</td>
                      <td className="border border-zinc-800 px-4 py-3">No</td>
                    </tr>
                    <tr className="bg-zinc-900/50">
                      <td className="border border-zinc-800 px-4 py-3">Contacts</td>
                      <td className="border border-zinc-800 px-4 py-3">Hashed emails/phones</td>
                      <td className="border border-zinc-800 px-4 py-3">Friend discovery</td>
                      <td className="border border-zinc-800 px-4 py-3">No (hashed)</td>
                      <td className="border border-zinc-800 px-4 py-3">No</td>
                    </tr>
                    <tr>
                      <td className="border border-zinc-800 px-4 py-3">Financial</td>
                      <td className="border border-zinc-800 px-4 py-3">Expenses, payments</td>
                      <td className="border border-zinc-800 px-4 py-3">Expense splitting</td>
                      <td className="border border-zinc-800 px-4 py-3">Yes</td>
                      <td className="border border-zinc-800 px-4 py-3">No</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          {/* Request Account Deletion Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Request Account Deletion</h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              If you wish to delete your Roamates account and all associated data, you can submit a deletion request. Your account and all personal data will be permanently deleted within 30 days of your request.
            </p>
            <Link
              href="/projects/roamates/delete-account"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-xl transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6" />
              </svg>
              Request Account Deletion
            </Link>
          </section>

          {/* Footer note */}
          <div className="border-t border-zinc-800 pt-8 mt-12">
            <p className="text-zinc-500 text-center">
              <strong className="text-zinc-400">Roamates by Ephileo</strong>
              <br />
              Copyright 2025 Ephileo. All Rights Reserved.
            </p>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 px-6 py-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/" className="text-xl font-bold text-white">
            ephileo
          </Link>
          <p className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} Ephileo. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
