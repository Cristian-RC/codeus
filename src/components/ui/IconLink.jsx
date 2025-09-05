export default function IconLink({ href="#", ariaLabel="", accent="#F43F5E", hoverColor, children}) {
    return (
        <a 
            href={href}
            aria-label={ariaLabel}
            className="
                inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 p-2 
                text-neutral-200 transition 
                hover:bg-[var(--hover)] hover:text-white
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)]
                "
            style={{ '--accent': accent, '--hover': hoverColor || accent }}
        >
            {children}
        </a>
    );
}