export default function ContactPage() {
  return (
    <section className="bg-[#fff5f7] py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-semibold text-[#ff2e74] mb-6">
          Contact Us
        </h1>

        <div className="bg-white rounded-2xl p-6 text-sm space-y-3">
          <p><strong>Phone:</strong> 9350840880</p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:support@estailofashion.com" className="underline">
              support@estailofashion.com
            </a>
          </p>
          <p>
            <strong>Address:</strong> Plot No. 676, Pace City II, Sector 37,
            Gurugram, Haryana 122004
          </p>
        </div>
      </div>
    </section>
  )
}