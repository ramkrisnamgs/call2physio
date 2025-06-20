"use client"

import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import React, { useState } from 'react'
import Link from 'next/link'
import { ChevronsRight, ChevronDown, ChevronUp } from 'lucide-react'

const FAQSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        {isOpen ? <ChevronUp className="text-gray-500" /> : <ChevronDown className="text-gray-500" />}
      </button>
      {isOpen && (
        <div className="pb-4 space-y-4">
          {children}
        </div>
      )}
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        className="flex justify-between items-center w-full py-3 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-gray-700">{question}</h3>
        {isOpen ? <ChevronUp className="text-gray-500" /> : <ChevronDown className="text-gray-500" />}
      </button>
      {isOpen && (
        <div className="pb-3 text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
};

const Faq = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Header /> */}

      {/* Breadcrumb */}
      {/* <div
        className="flex flex-col items-center justify-center text-white h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/service1.jpg')" }}
      >
        <div className="flex flex-col items-center justify-center gap-2 w-full h-full bg-[#003A70] opacity-80">
          <h1 className="text-2xl font-bold text-center">FAQ</h1>
          <nav className="flex items-center justify-center text-sm space-x-2">
            <Link
              href="/"
              className="text-white hover:font-bold hover:decoration-underline hover:text-gray-200 transition-colors"
            >
              Home
            </Link>
            <ChevronsRight size={16} className="text-white" />
            <span className="text-white">FAQ</span>
          </nav>
        </div>
      </div> */}

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Call2Physio FAQs</h1>
        <p className="text-gray-600 mb-8">Last Updated: May 9, 2025</p>
        {/* {new Date().toLocaleDateString()} */}

        {/* General Questions */}
        <FAQSection title="General Questions">
          <FAQItem
            question="What is Call2Physio?"
            answer="Call2Physio is a digital platform that connects patients with licensed physiotherapists for online consultations, appointment scheduling, and treatment management. We facilitate secure interactions but do not provide medical services directly."
          />
          <FAQItem
            question="How does Call2Physio work?"
            answer={
              <div className="space-y-2">
                <p><strong>For Patients:</strong> Book appointments, consult with physiotherapists, and manage treatment plans.</p>
                <p><strong>For Physiotherapists:</strong> Offer services, manage schedules, and receive payments securely.</p>
              </div>
            }
          />
          <FAQItem
            question="Is Call2Physio available in both the USA and India?"
            answer="Yes, our platform operates in both countries, complying with local healthcare regulations (HIPAA in the USA and DISHA in India)."
          />
          <FAQItem
            question="How do I sign up?"
            answer={
              <div className="space-y-2">
                <p><strong>Patients:</strong> Register via the website/app with basic details.</p>
                <p><strong>Physiotherapists:</strong> Submit professional credentials for verification before approval.</p>
              </div>
            }
          />
        </FAQSection>

        {/* Privacy & Security */}
        <FAQSection title="Privacy & Security">
          <FAQItem
            question="How does Call2Physio protect my data?"
            answer={
              <ul className="list-disc pl-6 space-y-2">
                <li>AES-256 encryption for data transmission and storage.</li>
                <li>HIPAA/DISHA-compliant servers for health records.</li>
                <li>Role-based access controls to limit data exposure.</li>
              </ul>
            }
          />
          <FAQItem
            question="What personal data is collected?"
            answer={
              <ul className="list-disc pl-6 space-y-2">
                <li>Identity & Contact Info (name, email, phone).</li>
                <li>Health Data (medical history, treatment notes).</li>
                <li>Payment Details (processed securely; we don't store card numbers).</li>
              </ul>
            }
          />
          <FAQItem
            question="Can I delete my data?"
            answer={
              <div className="space-y-2">
                <p><strong>Yes:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>USA Users: Request deletion of non-essential data (medical records retained for 6 years per HIPAA).</li>
                  <li>India Users: Request corrections or deletions per IT Act 2000.</li>
                </ul>
                <p>Email <a href="mailto:privacy@call2physio.com" className="text-blue-600 hover:underline">privacy@call2physio.com</a> for requests.</p>
              </div>
            }
          />
          <FAQItem
            question="Are consultations confidential?"
            answer="Absolutely. Only you and your physiotherapist access session details unless legally required otherwise."
          />
        </FAQSection>

        {/* Payments & Refunds */}
        <FAQSection title="Payments & Refunds">
          <FAQItem
            question="What payment methods are accepted?"
            answer={
              <ul className="list-disc pl-6 space-y-2">
                <li>Credit/debit cards (via Stripe/Razorpay).</li>
                <li>UPI (India).</li>
                <li>Insurance claims (USA; approval not guaranteed).</li>
              </ul>
            }
          />
          <FAQItem
            question="When can I request a refund?"
            answer={
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 border-b text-start">Scenario</th>
                      <th className="px-4 py-2 border-b text-start">Refund Type</th>
                      <th className="px-4 py-2 border-b text-start">Conditions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 border-b">No-show by therapist</td>
                      <td className="px-4 py-2 border-b">Full refund</td>
                      <td className="px-4 py-2 border-b">Must report within 48 hrs</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b">Dissatisfaction</td>
                      <td className="px-4 py-2 border-b">Partial refund</td>
                      <td className="px-4 py-2 border-b">Valid proof required</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b">Billing error</td>
                      <td className="px-4 py-2 border-b">Full refund</td>
                      <td className="px-4 py-2 border-b">Provide transaction proof</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            }
          />
          <FAQItem
            question="How long do refunds take?"
            answer="Approved refunds are processed in 3–5 business days to the original payment method."
          />
          <FAQItem
            question="What's non-refundable?"
            answer={
              <ul className="list-disc pl-6 space-y-2">
                <li>Completed sessions after 48 hours.</li>
                <li>Cash/third-party payments (outside Call2Physio).</li>
              </ul>
            }
          />
        </FAQSection>

        {/* For Patients */}
        <FAQSection title="For Patients">
          <FAQItem
            question="How do I book an appointment?"
            answer={
              <ol className="list-decimal pl-6 space-y-2">
                <li>Search for a licensed physiotherapist.</li>
                <li>Select a slot and pay securely.</li>
                <li>Receive confirmation and join the session via link.</li>
              </ol>
            }
          />
          <FAQItem
            question="Can I reschedule/cancel appointments?"
            answer="Yes, up to 24 hours before the session. Late cancellations may incur fees."
          />
          <FAQItem
            question="How do I verify a physiotherapist's credentials?"
            answer={
              <ul className="list-disc pl-6 space-y-2">
                <li>Check their profile for license numbers.</li>
                <li>Cross-verify with state/council registries (links provided).</li>
              </ul>
            }
          />
          <FAQItem
            question="What if I'm unhappy with my session?"
            answer="Report within 48 hours with evidence (e.g., session notes) for a partial refund."
          />
        </FAQSection>

        {/* For Physiotherapists */}
        <FAQSection title="For Physiotherapists">
          <FAQItem
            question="How do I join Call2Physio?"
            answer={
              <ol className="list-decimal pl-6 space-y-2">
                <li>Submit your license and ID for verification.</li>
                <li>Set up your profile and availability.</li>
                <li>Start receiving bookings.</li>
              </ol>
            }
          />
          <FAQItem
            question="How are payments handled?"
            answer={
              <ul className="list-disc pl-6 space-y-2">
                <li>Earnings are deposited weekly (after platform fees).</li>
                <li>Disputes are investigated before release.</li>
              </ul>
            }
          />
          <FAQItem
            question="What if a patient falsely claims fraud?"
            answer="You can submit counter-evidence. Unjust chargebacks may lead to patient account suspension."
          />
          <FAQItem
            question="Are there fees for using Call2Physio?"
            answer="Yes, a service fee applies per transaction (details in your provider agreement)."
          />
        </FAQSection>

        {/* Fraud Prevention */}
        <FAQSection title="Fraud Prevention">
          <FAQItem
            question="What's Call2Physio's fraud policy?"
            answer={
              <ul className="list-disc pl-6 space-y-2">
                <li>Zero tolerance for scams or identity theft.</li>
                <li>100% refunds for verified fraud cases.</li>
                <li>Legal action against malicious actors.</li>
              </ul>
            }
          />
          <FAQItem
            question="How do I report suspicious activity?"
            answer="Email support@call2physio.com or use our whistleblower portal."
          />
          <FAQItem
            question="What if I'm asked for payment outside the app?"
            answer="Decline and report immediately—this violates our policy and risks account bans."
          />
        </FAQSection>

        {/* Technical Support */}
        <FAQSection title="Technical Support">
          <FAQItem
            question="The app isn't working. What should I do?"
            answer={
              <ul className="list-disc pl-6 space-y-2">
                <li>Clear cache or update the app.</li>
                <li>Contact support@call2physio.com for help.</li>
              </ul>
            }
          />
          <FAQItem
            question="How do I disable cookies?"
            answer="Adjust browser settings or use our opt-out tool in Privacy Preferences."
          />
        </FAQSection>

        {/* Legal & Compliance */}
        <FAQSection title="Legal & Compliance">
          <FAQItem
            question="Which laws govern Call2Physio?"
            answer={
              <ul className="list-disc pl-6 space-y-2">
                <li>USA: HIPAA, CCPA.</li>
                <li>India: DISHA, IT Act 2000.</li>
              </ul>
            }
          />
          <FAQItem
            question="Can minors use Call2Physio?"
            answer="Only with consent from a parent/guardian (age verification required)."
          />
          <FAQItem
            question="How are international data transfers handled?"
            answer="Protected by Standard Contractual Clauses (SCCs) for USA-India transfers."
          />
        </FAQSection>

        {/* Contact & Support */}
        <FAQSection title="Contact & Support">
          <FAQItem
            question="How do I reach customer service?"
            answer={
              <div className="space-y-2">
                <p>Email: <a href="mailto:support@call2physio.com" className="text-blue-600 hover:underline">support@call2physio.com</a></p>
                <p>Phone:</p>
                <ul className="list-disc pl-6">
                  <li>USA: +1 (800) XXX-XXXX</li>
                  <li>India: +91 XXX XXXX XXXX</li>
                </ul>
              </div>
            }
          />
          <FAQItem
            question="Who's your Data Protection Officer?"
            answer={
              <div className="space-y-2">
                <p>Email <a href="mailto:dpo@call2physio.com" className="text-blue-600 hover:underline">dpo@call2physio.com</a> for privacy-related concerns.</p>
                <p>Need more help? Visit Call2Physio Support Center for live chat or detailed guides.</p>
              </div>
            }
          />
        </FAQSection>
      </div>

    </div>
  )
}

export default Faq;