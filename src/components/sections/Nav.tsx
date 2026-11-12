import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navLinks, profile } from '@/data/profile';

export default function Nav() {
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);

  // Highlight the link for whichever section sits in the middle of the viewport.
  // Sections below the hero mount lazily, so watch <main> and pick them up as they arrive.
  useEffect(() => {
    const ids = [...navLinks.map(link => link.id), 'top', 'contact'];
    const seen = new Set<Element>();

    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    const observeNew = () => {
      for (const id of ids) {
        const section = document.getElementById(id);
        if (section && !seen.has(section)) {
          seen.add(section);
          observer.observe(section);
        }
      }
    };
    observeNew();

    const main = document.querySelector('main');
    const mutations = new MutationObserver(observeNew);
    if (main) mutations.observe(main, { childList: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-3xl items-center justify-between gap-2 rounded-full border border-line bg-ink/70 p-1.5 shadow-[0_8px_32px_-12px_rgb(0_0_0/0.8)] backdrop-blur-xl"
      >
        <a href="#top" className="flex items-center gap-2.5 rounded-full py-1 pr-3 pl-1">
          <span
            aria-hidden="true"
            className="grid size-8 place-items-center rounded-full bg-accent font-mono text-[10px] font-semibold tracking-wider text-accent-ink"
          >
            {profile.monogram}
          </span>
          <span className="sr-only text-sm font-medium tracking-tight sm:not-sr-only">{profile.nameLines[0]}</span>
          <span className="sr-only">, back to top</span>
        </a>

        <ul className="hidden items-center md:flex">
          {navLinks.map(link => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? 'true' : undefined}
                className={`rounded-full px-3 py-2 text-sm transition-colors ${
                  active === link.id ? 'bg-white/[0.07] text-fg' : 'text-muted hover:text-fg'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          <a
            href="#contact"
            className="rounded-full bg-fg px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-accent"
          >
            Get in touch
          </a>
          <button
            type="button"
            className="grid size-9 place-items-center rounded-full border border-line text-fg md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen(value => !value)}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {open ? (
        <ul
          id="mobile-menu"
          className="mx-auto mt-2 max-w-3xl rounded-3xl border border-line bg-ink/90 p-2 backdrop-blur-xl md:hidden"
        >
          {navLinks.map(link => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className={`block rounded-2xl px-4 py-3 text-base ${active === link.id ? 'bg-white/[0.07] text-fg' : 'text-muted'}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  );
}
