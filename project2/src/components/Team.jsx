// SCREENSHOT 2 — "Meet The Team" (this is the classic About-page section)
// Recipe: Section -> Container -> Header block -> Grid -> Card (one card per array item)

const team = [
  { id: 1, initials: 'AM', name: 'Aditi Mehra', role: 'Founder & CEO', color: 'bg-[#b8875c]' },
  { id: 2, initials: 'RS', name: 'Rohan Sethi', role: 'Lead Designer', color: 'bg-[#4fb5a5]' },
  { id: 3, initials: 'PK', name: 'Priya Kapoor', role: 'Product Manager', color: 'bg-[#b8476a]' },
  { id: 4, initials: 'SV', name: 'Sahil Verma', role: 'Engineering Lead', color: 'bg-[#5b63d3]' },
]
// TRICK: bg-[#b8875c] = any exact colour from a screenshot (use a colour picker).
// GOTCHA: never build class names like `bg-${c}-500` — Tailwind can't see them.
// Always write the FULL class string (as above).

const socials = [
  { id: 'in', label: 'LinkedIn' },
  { id: 'tw', label: 'Twitter' },
  { id: 'gh', label: 'GitHub' },
]

function TeamCard({ initials, name, role, color }) {
  return (
    <li className="flex flex-col items-center text-center">
      {/* circle avatar: grid + place-items-center = centers the initials both ways */}
      <div className={`grid h-28 w-28 place-items-center rounded-full text-3xl font-bold text-white ${color}`}>
        {initials}
        
      </div>
      <h3 className="mt-5 text-base font-bold text-slate-700">{name}</h3>
      <p className="mt-1 text-xs font-semibold text-amber-700">{role}</p>

      <div className="mt-4 flex gap-2">
        {socials.map((s) => (
          <a
            key={s.id}
            href="#team"
            aria-label={s.label}
            className="grid h-8 w-8 place-items-center rounded-full bg-slate-200 text-xs font-semibold text-slate-500 hover:bg-slate-300"
          >
            {s.id}
          </a>
        ))}
      </div>
    </li>
  )
}

export default function Team() {
  return (
    <section id="team" className="bg-slate-50 py-20">
      {/* container: centers content and stops it stretching on huge screens */}
      <div className="mx-auto max-w-6xl px-6">
        {/* header block */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Our People</p>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-700 sm:text-4xl">
            Meet The Team Behind It All
          </h2>
          <p className="mt-3 text-sm text-slate-500">
            A small, dedicated crew turning ideas into products people love.
          </p>
        </div>

        {/* grid: 1 column on phone, 2 on sm, 4 on lg */}
        <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <TeamCard key={m.id} initials={m.initials} name={m.name} role={m.role} color={m.color} />
          ))}
        </ul>
      </div>
    </section>
  )
}
