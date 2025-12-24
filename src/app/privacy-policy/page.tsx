export default function PrivacyPolicyPage() {
  return (
    <section className="bg-[#fff5f7] py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4">

        <h1 className="text-3xl md:text-4xl font-semibold text-[#ff2e74] mb-6">
          Privacy Policy
        </h1>

        <div className="bg-white rounded-2xl p-6 md:p-8 text-sm leading-7 space-y-5">

          <p>
            At <strong>Estailo Fashion</strong>, we value your privacy and are
            committed to protecting your personal information.
          </p>

          <h2 className="font-semibold text-base">Information We Collect</h2>
          <p>
            We collect personal information such as name, email address,
            shipping address, phone number, and payment details when you place
            an order or contact us.
          </p>

          <h2 className="font-semibold text-base">How We Use Your Information</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>To process orders and payments</li>
            <li>To provide customer support</li>
            <li>To improve our website and services</li>
            <li>To send updates and offers (only if subscribed)</li>
          </ul>

          <h2 className="font-semibold text-base">Data Protection</h2>
          <p>
            We implement strict security measures to ensure your personal data
            is safe and secure.
          </p>

          <h2 className="font-semibold text-base">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, you can contact
            us at:
            <br />
            <strong>Email:</strong>{" "}
            <a
              href="mailto:support@Kaliido.in"
              className="underline"
            >
              support@estailofashion.com
            </a>
          </p>

        </div>
      </div>
    </section>
  )
}