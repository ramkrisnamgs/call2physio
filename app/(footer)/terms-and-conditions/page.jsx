import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import React from 'react'
import Link from 'next/link'
import { ChevronsRight } from 'lucide-react'

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Breadcrumb */}
      <div
        className="flex flex-col items-center justify-center text-white h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/service1.jpg')" }}
      >
        <div className="flex flex-col items-center justify-center gap-2 w-full h-full bg-[#003A70] opacity-80">
          <h1 className="text-2xl font-bold text-center">Terms & Conditions</h1>
          <nav className="flex items-center justify-center text-sm space-x-2">
            <Link
              href="/"
              className="text-white hover:font-bold hover:decoration-underline hover:text-gray-200 transition-colors"
            >
              Home
            </Link>
            <ChevronsRight size={16} className="text-white" />
            <span className="text-white">Terms & Conditions</span>
          </nav>
        </div>
      </div>


      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Call2Physio Terms & Conditions</h1>
        <p className="text-gray-600 mb-8">Last Updated: May 9, 2025</p>
        {/* {new Date().toLocaleDateString()} */}

        {/* Platform Role & Liability Disclaimer */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Platform Role & Liability Disclaimer</h2>
          <p className="text-gray-700 mb-4">Call2Physio operates strictly as a technology service provider that:</p>
          <ul className="list-none space-y-2 mb-4">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              <span>Connects licensed physiotherapists with patients</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              <span>Facilitates appointment scheduling and payments</span>
            </li>
            <li className="flex items-center">
              <span className="text-red-500 mr-2">✗</span>
              <span>Does NOT provide medical services or guarantee treatment outcomes</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Critical Limitations:</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>No Liability for Practitioner Actions: We are not responsible for:
              <ul className="list-disc pl-6 mt-2">
                <li>Fraud/misconduct by users (patients or physiotherapists)</li>
                <li>Clinical negligence or malpractice</li>
                <li>Personal/institutional disputes between connected parties</li>
              </ul>
            </li>
            <li>User Verification: While we conduct license checks, users must independently verify credentials</li>
          </ul>
        </section>

        {/* Fraud Prevention & Reporting */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Fraud Prevention & Reporting</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Payment-Related Fraud:</h3>
          <p className="text-gray-700 mb-4">For Platform-Processed Payments ONLY:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Refund claims must be filed within 48 hours of service completion</li>
            <li>Valid grounds:
              <ul className="list-disc pl-6 mt-2">
                <li>Undelivered services</li>
                <li>Identity fraud (proven impersonation)</li>
                <li>Payment fraud (unauthorized transactions)</li>
              </ul>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Investigation Process:</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Complaint submission via support@call2physio.com</li>
            <li>7-working day investigation:
              <ul className="list-disc pl-6 mt-2">
                <li>Practitioner response review</li>
                <li>Session evidence analysis (logs/records)</li>
                <li>Internal fraud team assessment</li>
              </ul>
            </li>
            <li>Resolution: Full/partial refund or case dismissal</li>
          </ul>
        </section>

        {/* Fraud Prevention Pledge */}
        <section className="mb-8 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Call2Physio Fraud Prevention Pledge</h2>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Zero-Tolerance Commitment to Secure Healthcare Connections</h3>

          <h4 className="text-lg font-semibold text-gray-800 mb-2">1. Our Anti-Fraud Promises</h4>
          <ul className="list-none space-y-2 mb-4">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">◆</span>
              <div>
                <strong>Verify Every Practitioner</strong>
                <ul className="list-disc pl-6 mt-1">
                  <li>Cross-check licenses with US state boards/Indian councils</li>
                  <li>Require active malpractice insurance (for US providers)</li>
                  <li>Conduct quarterly credential reverification</li>
                </ul>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">◆</span>
              <div>
                <strong>Protect All Platform Payments</strong>
                <ul className="list-disc pl-6 mt-1">
                  <li>PCI-DSS compliant payment processing</li>
                  <li>Encrypted transaction records stored for 7 years</li>
                  <li>Mandatory payment receipts with service details</li>
                </ul>
              </div>
            </li>
          </ul>

          <h4 className="text-lg font-semibold text-gray-800 mb-2">2. User Protection Guarantees</h4>
          <ul className="list-none space-y-2 mb-4">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <div>
                <strong>If You're Defrauded:</strong>
                <ul className="list-disc pl-6 mt-1">
                  <li>For platform-processed payments: 100% refund upon verified claim</li>
                  <li>For identity theft: Free credit monitoring for 1 year</li>
                </ul>
              </div>
            </li>
          </ul>

          <div className="mt-6 text-gray-700 italic">
            "We built Call2Physio to heal, not harm. Fraud erodes trust in healthcare—we will pursue all legal remedies against bad actors."
            <p className="mt-2">- Call2Physio Leadership Team</p>
          </div>
        </section>

        {/* User Responsibilities */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. User Responsibilities</h2>
          <p className="text-gray-700 mb-4">By using Call2Physio, you agree:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>To conduct due diligence on matched parties</li>
            <li>Not to share sensitive data (bank/CVV) outside our platform</li>
            <li>That we may cooperate with legal authorities in fraud cases</li>
          </ul>
        </section>

        {/* Payment & Refund Specifics */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Payment & Refund Specifics</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 text-center">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b text-start">Scenario</th>
                  <th className="px-4 py-2 border-b">Refundable</th>
                  <th className="px-4 py-2 border-b">Non-Refundable</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b text-start">Service not rendered</td>
                  <td className="px-4 py-2 border-b text-green-500">✓ Full refund</td>
                  <td className="px-4 py-2 border-b">N/A</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b text-start">Dissatisfaction with treatment</td>
                  <td className="px-4 py-2 border-b text-green-500">✓ Partial*</td>
                  <td className="px-4 py-2 border-b text-red-500">✗ After 48hrs</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b text-start">Practitioner no-show</td>
                  <td className="px-4 py-2 border-b text-green-500">✓ 200% credit</td>
                  <td className="px-4 py-2 border-b">N/A</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-2">*Partial refunds require documented proof of service deficiency</p>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default TermsAndConditions