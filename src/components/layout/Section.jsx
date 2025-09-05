export default function Section({ id, children, className="" }) {
    return(
        <section
            id={id}
            className={`border-t border-white/10 ${className}`}
        >
            {children}
        </section>
    );
}