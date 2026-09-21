// SCREENSHOT 3 — Testimonials (dark section, 3 cards)
// Same recipe as Team.jsx: Section -> Container -> Header block -> Grid -> Card.
// Only changes: dark background, 3 columns, card = translucent box with stars + quote + author.

const reviews = [
  {
    id: 1,
    quote: "The onboarding took minutes and the support team answered every question we had within the hour. Couldn't ask for more.",
    name: 'Neha Kulkarni',
    role: 'Operations Head, Finlyt',
    initials: 'NK',
    avatar: 'bg-emerald-300 text-emerald-900',
  },
  {
    id: 2,
    quote: "We switched three months ago and haven't looked back. The dashboard alone saves our team hours every single week.",
    name: 'Arjun Joshi',
    role: 'Founder, Northstar Labs',
    initials: 'AJ',
    avatar: 'bg-yellow-300 text-yellow-900',
  },
  {
    id: 3,
    quote: 'Clean interface, fair pricing, and it just works. Our whole design team adopted it within the first week.',
    name: 'Simran Rao',
    role: 'Design Lead, Pixelwave',
    initials: 'SR',
    avatar: 'bg-pink-300 text-pink-900',
  },
]

function ReviewCard({ quote, name, role, initials, avatar }) {
  return (
    // flex-col + justify-between pushes the author row to the bottom, so all 3 cards line up
    <li className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6">
      <div>
        <p role="img" aria-label="5 out of 5 stars" className="text-yellow-400">
          ★★★★★
        </p>
        <blockquote className="mt-4 text-sm leading-relaxed text-slate-300">“{quote}”</blockquote>
      </div>

      {/* author row: avatar on the left, text on the right */}
      <div className="mt-6 flex items-center gap-3">
        <div className={`grid h-10 w-10 place-items-center rounded-full text-xs font-bold ${avatar}`}>
          {initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{name}</p>
          <p className="text-xs text-slate-400">{role}</p>
        </div>
      </div>
    </li>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-slate-900 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-sky-400">Testimonials</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">What Our Clients Say</h2>
          <p className="mt-3 text-sm text-sky-200/70">
            Real feedback from teams who use the product every day.
          </p>
        </div>

        {/* grid: stacked on phone, 3 columns from md (768px) up */}
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <ReviewCard
              key={r.id}
              quote={r.quote}
              name={r.name}
              role={r.role}
              initials={r.initials}
              avatar={r.avatar}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}
