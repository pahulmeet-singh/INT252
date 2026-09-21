// GENERIC PRICING PAGE (ChatGPT-style: 3 plan cards, middle one highlighted)
// Swap the text for whatever the exam gives you — the STRUCTURE is what matters.
// Recipe: Section -> Container -> Header block -> Grid -> Card (one card per plan)

const plans = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    note: 'forever',
    cta: 'Get started',
    features: ['Basic access', 'Limited messages', 'Community support'],
    popular: false,
  },
  {
    id: 'plus',
    name: 'Plus',
    price: '$20',
    note: 'per month',
    cta: 'Upgrade to Plus',
    features: ['Everything in Free', 'Higher limits', 'Faster responses', 'Priority support'],
    popular: true,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$200',
    note: 'per month',
    cta: 'Upgrade to Pro',
    features: ['Everything in Plus', 'Unlimited usage', 'Early access to new features'],
    popular: false,
  },
]

function PlanCard({ name, price, note, cta, features, popular }) {
  return (
    // ternary = "either/or" class choice. "border" alone has NO colour in Tailwind v4, so always add one.
    <li
      className={`relative flex flex-col rounded-2xl border bg-white p-8 ${
        popular ? 'border-slate-900 shadow-xl' : 'border-slate-200'
      }`}
    >
      {/* && = show this badge only when popular is true */}
      {popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
          Most popular
        </span>
      )}

      <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
      <p className="mt-4 text-4xl font-bold text-slate-900">{price}</p>
      <p className="text-sm text-slate-500">{note}</p>

      <button
        type="button"
        className={`mt-6 rounded-lg px-4 py-3 text-sm font-semibold ${
          popular
            ? 'border border-slate-900 bg-slate-900 text-white hover:bg-slate-700'
            : 'border border-slate-300 text-slate-900 hover:bg-slate-100'
        }`}
      >
        {cta}
      </button>

      <ul className="mt-8 space-y-3 text-sm text-slate-600">
        {features.map((f) => (
          <li key={f} className="flex gap-2">
            <span aria-hidden="true">✓</span>
            {f}
          </li>
        ))}
      </ul>
    </li>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-slate-800 sm:text-4xl">Plans &amp; Pricing</h2>
          <p className="mt-3 text-sm text-slate-500">Pick the plan that fits how you work.</p>
        </div>

        {/* 1 column on phone, 3 columns from md */}
        <ul className="mt-14 grid gap-8 md:grid-cols-3">
          {plans.map((p) => (
            <PlanCard
              key={p.id}
              name={p.name}
              price={p.price}
              note={p.note}
              cta={p.cta}
              features={p.features}
              popular={p.popular}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}
