export default function FAQPage() {
  return (
    <section className="bg-[#fff5f7] py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-semibold text-[#ff2e74] mb-6">
          Frequently Asked Questions
        </h1>

        <div className="bg-white rounded-2xl p-6 space-y-5 text-sm">
          <div>
            <strong>Q. Is COD available?</strong>
            <p>Yes, Cash on Delivery is available.</p>
          </div>

          <div>
            <strong>Q. Are your products anti-tarnish?</strong>
            <p>Yes, selected products are anti-tarnish.</p>
          </div>

          <div>
            <strong>Q. How can I track my order?</strong>
            <p>You will receive tracking details via SMS/email.</p>
          </div>
        </div>
      </div>
    </section>
  )
}