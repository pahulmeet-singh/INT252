// SCREENSHOT 1 — QuickDine hero + search bar
// Recipe: relative <section> -> dark overlay -> centered content -> search bar.
// The Navbar (Navbar.jsx) floats on top of this because it is absolute + z-20.

function SearchBar() {
  // Same classes on every field -> write them ONCE in a constant (reusable styling pattern)
  const field =
    'w-full min-w-0 rounded px-3 py-3 text-sm text-slate-800 placeholder:text-slate-400 md:flex-1'

  return (
    <form
      role="search"
      onSubmit={(e) => e.preventDefault()} // stops the page reloading on submit
      className="mx-auto mt-10 flex w-full max-w-4xl flex-col gap-2 rounded-md bg-white p-2 text-left shadow-2xl md:flex-row md:items-center"
    >
      <input type="text" aria-label="Search cuisines" placeholder="Search cuisines" className={field} />
      <input type="text" aria-label="Location" placeholder="Location (e.g. Mumbai)" className={field} />
      <input type="date" aria-label="Date" className={field} />
      <select aria-label="Number of guests" defaultValue="2" className={field}>
        <option value="1">1 Guest</option>
        <option value="2">2 Guests</option>
        <option value="3">3 Guests</option>
        <option value="4">4 Guests</option>
      </select>
      <button
        type="submit"
        className="rounded bg-slate-900 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white hover:bg-slate-700"
      >
        Find a table
      </button>
    </form>
  )
}

export default function Hero() {
  return (
    // relative = the overlay below is positioned against THIS box
    // With a real photo: add style={{ backgroundImage: `url(${img})` }} and classes "bg-cover bg-center"
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-linear-to-b from-amber-900 to-stone-900 px-5 py-28"
    >
      {/* dark overlay so white text is readable on top of a photo */}
      <div className="absolute inset-0 bg-black/30" />

      {/* content: relative + z-10 puts it ABOVE the overlay */}
      <div className="relative z-10 w-full max-w-4xl text-center text-white">
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/80">
          Exquisite Dining Experiences
        </p>
        <h1 className="font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          Curation for the Discerning Palette
        </h1>
        <SearchBar />
      </div>
    </section>
  )
}
