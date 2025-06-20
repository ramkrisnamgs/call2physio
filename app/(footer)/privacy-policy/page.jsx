import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { ChevronsRight } from "lucide-react";
import Link from "next/link";
import React from "react";

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
          <h1 className="text-2xl font-bold text-center">Privacy Policy</h1>
          <nav className="flex items-center justify-center text-sm space-x-2">
            <Link
              href="/"
              className="text-white hover:font-bold hover:decoration-underline hover:text-gray-200 transition-colors"
            >
              Home
            </Link>
            <ChevronsRight size={16} className="text-white" />
            <span className="text-white">Privacy Policy</span>
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Call2Physio Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last Updated: May 9, 2025</p>
        {/* {new Date().toLocaleDateString()} */}

        {/* Introduction */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
          <p className="text-gray-700 mb-4">
            Call2Physio ("we," "us," or "our") respects your privacy and is committed to protecting your personal data. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our 
            platform (website, mobile app, and services) in the USA and India.
          </p>
          <p className="text-gray-700">
            By accessing or using Call2Physio, you agree to this Privacy Policy. If you disagree, please do not use our services.
          </p>
        </section>

        {/* Information We Collect */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Information We Collect</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">A. Personal Data</h3>
              <p className="text-gray-700 mb-3">We may collect:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Identity Data:</strong> Name, age, gender, profile photo</li>
                <li><strong>Contact Data:</strong> Email, phone number, address</li>
                <li><strong>Health Data:</strong> Medical history, treatment records, prescriptions</li>
                <li><strong>Financial Data:</strong> Payment details (for transactions processed via our platform)</li>
                <li><strong>Technical Data:</strong> IP address, device type, browser, location</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">B. Sensitive Data</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Health Information:</strong> Shared during consultations</li>
                <li><strong>Biometric Data:</strong> If used for therapy (e.g., motion tracking)</li>
              </ul>
              <p className="text-gray-700 mt-3">
                We do not store credit card details. Payments are processed via PCI-DSS compliant gateways.
              </p>
            </div>
          </div>
        </section>

        {/* How We Use Your Data */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. How We Use Your Data</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 text-start">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b text-start">Purpose</th>
                  <th className="px-4 py-2 border-b text-start">Legal Basis (USA & India)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b">Provide physiotherapy services</td>
                  <td className="px-4 py-2 border-b">Contractual necessity</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Process payments</td>
                  <td className="px-4 py-2 border-b">Legal obligation</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Improve platform performance</td>
                  <td className="px-4 py-2 border-b">Legitimate interest</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Send appointment reminders</td>
                  <td className="px-4 py-2 border-b">User consent</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Comply with healthcare laws</td>
                  <td className="px-4 py-2 border-b">Regulatory requirement</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Data Sharing & Disclosure */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Data Sharing & Disclosure</h2>
          <p className="text-gray-700 mb-4">We may share data with:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Licensed Physiotherapists (only relevant treatment details)</li>
            <li>Payment Processors (Stripe, Razorpay)</li>
            <li>Cloud Storage Providers (AWS, HIPAA-compliant servers)</li>
            <li>Government Authorities (if required by law)</li>
          </ul>
          <p className="text-gray-700 mt-4">We never sell your data to third parties.</p>
        </section>

        {/* Data Security */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Data Security</h2>
          <p className="text-gray-700 mb-4">We implement:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Encryption:</strong> AES-256 for data transmission & storage</li>
            <li><strong>Access Controls:</strong> Role-based permissions</li>
            <li><strong>Audit Logs:</strong> Track all data access</li>
          </ul>
        </section>

        {/* Your Rights */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Your Rights</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">For USA Users (Under HIPAA & CCPA):</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Request access to your health records</li>
                <li>Opt out of data sharing for marketing</li>
                <li>Delete non-essential personal data</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">For India Users (Under DISHA & IT Act 2000):</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Request data correction</li>
                <li>Withdraw consent for data processing</li>
                <li>File grievances with the Data Protection Officer</li>
              </ul>
            </div>

            <p className="text-gray-700">
              To exercise rights, email: <a href="mailto:privacy@call2physio.com" className="text-blue-600 hover:underline">privacy@call2physio.com</a>
            </p>
          </div>
        </section>

        {/* Data Retention */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Data Retention</h2>
          <p className="text-gray-700 mb-4">We retain data:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Active Users:</strong> Until account deletion</li>
            <li><strong>Inactive Users (3+ years):</strong> Anonymized or deleted</li>
            <li><strong>Medical Records (USA):</strong> 6 years (HIPAA requirement)</li>
            <li><strong>Medical Records (India):</strong> 5 years (DISHA guideline)</li>
          </ul>
        </section>

        {/* Cookies & Tracking */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Cookies & Tracking</h2>
          <p className="text-gray-700 mb-4">We use:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Essential Cookies:</strong> For platform functionality</li>
            <li><strong>Analytics Cookies:</strong> Google Analytics (anonymized data)</li>
          </ul>
          <p className="text-gray-700 mt-4">You can disable cookies via browser settings.</p>
        </section>

        {/* International Data Transfers */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. International Data Transfers</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>USA-India Transfers: Protected by Standard Contractual Clauses (SCCs)</li>
            <li>EU Users: GDPR-compliant safeguards</li>
          </ul>
        </section>

        {/* Updates to This Policy */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Updates to This Policy</h2>
          <p className="text-gray-700 mb-4">We may update this policy. Changes will be:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Posted on this page</li>
            <li>Emailed to registered users</li>
            <li>Effective after 30 days</li>
          </ul>
        </section>

        {/* Contact Us */}
        <section className="mb-8 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Contact Us</h2>
          <p className="text-gray-700 mb-4">For privacy concerns or data requests:</p>
          <div className="space-y-2">
            <p className="text-gray-700"><strong>Data Protection Officer:</strong></p>
            <p className="text-gray-700">📧 <a href="mailto:dpo@call2physio.com" className="text-blue-600 hover:underline">dpo@call2physio.com</a></p>
            <p className="text-gray-700">📞 US: +1 (800) XXX-XXXX | India: +91 XXX XXXX XXXX</p>
            <p className="text-gray-700">Address: [Registered Office Location]</p>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default page;
