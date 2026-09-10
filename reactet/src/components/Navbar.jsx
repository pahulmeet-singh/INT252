export default function Navbar() {
    return (
        <header className="absolute inset-x-0 top-0">
            <nav 
            aria-label="Primary navigation" 
            className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6 sm:px-8 lg:px-10">
                <a href="#home" 
                className="flex items-center gap-2 text-lg font-semibold text-white">
                    <span aria-hidden="true">&</span>
                    <span>QuickDine</span>
                </a>
                {/* Navigation  */}
                <div className="hidden items-center gap-8 text-sm text-white/85 md:flex">
                    <a
                    href="#discover"
                    className="border-b border-white pb-1">
                    Discover
                    </a>
                    <a
                    href="#restaurants">
                    Restaurants</a>
                    <a
                    href="#bookings">
                    Bookings</a>
                </div>

                {/* user */}
                <button
                type="button"
                aria-label="Open Account Menu for Alex"
                className="flex items-center gap-2 text-sm text-white"
                >
                    <span className="grid h-7 w-7 place-items-center rounded-full border-white/70 text-xs">
                        A
                    </span>
                    <span className="hidden sm:inline">
                        Alex
                    </span>
                </button>
            </nav>
        </header>
    )
}