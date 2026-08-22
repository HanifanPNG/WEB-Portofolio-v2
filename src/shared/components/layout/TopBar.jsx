export default function TopBar({ isOpen, showNavText }) {
  return (
    <header
      className={`fixed top-0 right-0 h-16 bg-surface flex items-center justify-between border-b-2 border-black header-shadow z-40 transition-all duration-300 ease-in-out overflow-hidden ${
        isOpen
          ? 'md:left-[240px] left-0 px-4 sm:px-6'
          : 'left-0 pl-[56px] sm:pl-[60px] pr-4 sm:pr-6'
      }`}
    >
      <div className="overflow-hidden h-full flex items-center">
        <span
          className={`font-black text-on-surface whitespace-nowrap uppercase transition-all duration-300 ease-in-out ${
            showNavText
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-2 pointer-events-none'
          } text-2xl sm:text-3xl lg:text-4xl`}
        >
        </span>
      </div>

      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        <img
          src="/images/profile.jpg"
          alt="Hanifan Pangabekti"
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-black object-cover hover:scale-105 transition-transform duration-200"
        />
        <span className="hidden sm:inline font-black text-sm sm:text-lg text-on-surface truncate max-w-[120px] sm:max-w-[200px]">
          Hanifan Pangabekti
        </span>
      </div>
    </header>
  );
}