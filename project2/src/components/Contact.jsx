// GENERIC CONTACT PAGE: info on the left, form on the right (stacks on phone).
// Recipe: Section -> Container -> Header block -> 2-column grid (info | form)
import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault() // stop the browser reloading the page
    setSent(true)
  }

  // Same classes on all three fields -> write them once
  const input =
    'w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800'
  const label = 'mb-1 block text-sm font-medium text-slate-700'

  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Contact</p>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-800 sm:text-4xl">Get in touch</h2>
          <p className="mt-3 text-sm text-slate-500">
            Questions? Send us a message and we&apos;ll reply within a day.
          </p>
        </div>

        {/* 1 column on phone, 2 columns from md */}
        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {/* LEFT: contact info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-slate-800">Email</h3>
              <p className="text-sm text-slate-500">hello@example.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">Phone</h3>
              <p className="text-sm text-slate-500">+91 00000 00000</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">Address</h3>
              <p className="text-sm text-slate-500">123 Sample Street, Your City</p>
            </div>
          </div>

          {/* RIGHT: form. label htmlFor must match the input id (accessibility) */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-slate-200 p-6 shadow-sm"
          >
            <div>
              <label htmlFor="name" className={label}>Name</label>
              <input id="name" type="text" required className={input} />
            </div>
            <div>
              <label htmlFor="email" className={label}>Email</label>
              <input id="email" type="email" required className={input} />
            </div>
            <div>
              <label htmlFor="message" className={label}>Message</label>
              <textarea id="message" rows={4} required className={input} />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-700"
            >
              Send message
            </button>

            {/* conditional rendering: only appears after submit */}
            {sent && (
              <p role="status" className="text-center text-sm text-emerald-600">
                Thanks! We&apos;ll be in touch.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
