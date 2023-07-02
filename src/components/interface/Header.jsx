import { For } from 'solid-js';
import { createScrollPosition } from '@solid-primitives/scroll';

export default function Header() {
  const scroll = createScrollPosition();

  return (
    <header
      className={`${
        scroll.y === 0
          ? 'bg-none'
          : `${
              scroll.y >= 2200
                ? 'bg-seasalt shadow'
                : 'bg-seasalt/10 shadow backdrop-blur'
            }`
      } w-full h-20 rounded-2xl mt-4 sticky top-6 transition-colors duration-100 flex items-center justify-between px-4 z-50`}
    >
      <a href="/" className="flex gap-2 cursor-pointer">
        <img src="/images/logo-svg.svg" alt="company logo" className="w-14" />
        <h1 className="text-2xl font-calistoga">
          Majic
          <br />
          Web Design
        </h1>
      </a>
      <nav className="flex gap-2">
        <For each={['About us', 'Examples', 'Services', 'Contact']}>
          {(navLink) => (
            <p className="py-2 px-3 font-semibold text-lg bg-primary-gradient bg-bottom bg-[length:100%_0%] bg-no-repeat hover:bg-[length:100%_100%] transition-[background-size] rounded-xl hover:text-seasalt cursor-pointer">
              {navLink}
            </p>
          )}
        </For>
      </nav>
    </header>
  );
}
