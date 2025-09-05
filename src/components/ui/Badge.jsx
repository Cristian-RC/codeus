export default function Badge({ children, accent="#F43F5E" }) {
    return (
        <span
            className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
            style={{ backgroundColor: `color-mix(in oklab, ${accent} 12%, transparent)`, color: accent }}
        >
            {children}
        </span>
    );
}