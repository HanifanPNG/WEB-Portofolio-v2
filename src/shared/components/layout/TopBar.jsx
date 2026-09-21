import AnimatedLetterText from '../ui/PortfolioText'

export default function TopBar({ isOpen }) {
  return (
    <header
      className={`fixed top-0 right-0 h-16 bg-surface flex items-center justify-end border-b-2 border-black header-shadow z-40 transition-all duration-300 ease-in-out overflow-hidden ${
        isOpen
          ? 'md:left-[240px] left-0 px-4 sm:px-6'
          : 'left-0 pl-[56px] sm:pl-[60px] pr-4 sm:pr-6'
      }`}
    >
      <div className="overflow-hidden h-full flex items-center">
        <AnimatedLetterText
          text="Portfolio"
          letterToReplace="o"
          className="text-2xl sm:text-3xl lg:text-4xl text-on-surface whitespace-nowrap"
        />
      </div>
    </header>
  );
}