import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import { ChevronsRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Breadcrumb */}
      <div
        className="flex flex-col items-center justify-center text-white h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/service1.jpg')" }}
      >
        <div className="flex flex-col items-center justify-center gap-2 w-full h-full bg-[#003A70] opacity-80">
          <h1 className="text-2xl font-bold text-center">Refund Policy</h1>
          <nav className="flex items-center justify-center text-sm space-x-2">
            <Link
              href="/"
              className="text-white hover:font-bold hover:decoration-underline hover:text-gray-200 transition-colors"
            >
              Home
            </Link>
            <ChevronsRight size={16} className="text-white" />
            <span className="text-white">Refund Policy</span>
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Call2Physio Refund Policy</h1>
        <p className="text-gray-600 mb-8">Last Updated: May 9, 2025</p>
          {/* {new Date().toLocaleDateString()} */}


        {/* Our Refund Commitment */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Our Refund Commitment</h2>
          <p className="text-gray-700 mb-4">At Call2Physio, we ensure fair and transparent refunds for services processed through our platform. This policy applies only to payments made via Call2Physio's official payment channels (website/app).</p>
        </section>

        {/* Eligible Refund Scenarios */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Eligible Refund Scenarios</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 text-start">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b text-start">Scenario</th>
                  <th className="px-4 py-2 border-b text-start">Refund Type</th>
                  <th className="px-4 py-2 border-b text-start">Conditions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b">Service Not Rendered</td>
                  <td className="px-4 py-2 border-b">Full refund</td>
                  <td className="px-4 py-2 border-b">Practitioner no-show/cancellation without rescheduling</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Dissatisfaction with Service</td>
                  <td className="px-4 py-2 border-b">Partial refund</td>
                  <td className="px-4 py-2 border-b">Must report within 48 hours with valid reason</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Duplicate/Billing Error</td>
                  <td className="px-4 py-2 border-b">Full refund</td>
                  <td className="px-4 py-2 border-b">Provide transaction proof</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Proven Fraud</td>
                  <td className="px-4 py-2 border-b">Full refund</td>
                  <td className="px-4 py-2 border-b">After investigation (7 working days)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Non-Refundable Cases:</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Services already completed beyond 48 hours</li>
            <li>Cash/third-party payments (e.g., UPI outside app)</li>
            <li>Dissatisfaction without documented evidence</li>
          </ul>
        </section>

        {/* How to Request a Refund */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. How to Request a Refund</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Step 1: Submit a Claim</h3>
              <p className="text-gray-700 mb-2">Log in → Order History → Raise Refund Request</p>
              <p className="text-gray-700 mb-2">OR Email refunds@call2physio.com with:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Transaction ID</li>
                <li>Practitioner name</li>
                <li>Reason + supporting evidence (e.g., screenshots, session notes)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Step 2: Investigation</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Our team verifies with both parties (patient + physiotherapist)</li>
                <li>Timeline: 7 working days</li>
                <li>You'll receive status updates via email</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Step 3: Resolution</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Approved Refunds: Credited to original payment method in 3-5 business days</li>
                <li>Denied Claims: Detailed explanation with appeal options</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Special Cases */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Special Cases</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">For Patients:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Insurance Claims (US): If denied, we assist in reprocessing but don't guarantee approvals.</li>
                <li>Partial Sessions: Refund prorated for unused time.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">For Physiotherapists:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Disputed Earnings: Held funds released after investigation.</li>
                <li>Fraudulent Chargebacks: We provide evidence to payment processors.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Fraud Prevention Note */}
        <section className="mb-8 bg-red-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Fraud Prevention Note</h2>
          <p className="text-gray-700 mb-4">⚠️ False refund claims may lead to:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Account suspension</li>
            <li>Legal action for chargeback abuse</li>
          </ul>
        </section>

        {/* Contact Information */}
        <section className="mb-8 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Need Help?</h2>
          <div className="space-y-2 text-gray-700">
            <p>📞 US: +1 (800) XXX-XXXX | India: +91 XXX XXXX XXX</p>
            <p>📧 support@call2physio.com</p>
          </div>
          <p className="mt-4 text-sm text-gray-600">Call2Physio reserves the right to update this policy. Users will be notified 30 days in advance.</p>
        </section>
      </div>

      <Footer />
    </div>
  )
}

export default page