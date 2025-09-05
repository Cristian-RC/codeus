export default function TechPill({ children }) {
    return (
        <span
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-200 shadow-sm hover:ring-white/10"
        >
            {children}
        </span>
    );
}