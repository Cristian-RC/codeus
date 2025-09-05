export default function SectionTitle({ title, accent="#F43F5E", actionLabel, actionHref }) {
    return (
        <section
            className="mb-6 flex items-end justify-between"
        >
            <h3
                className="text-2xl font-semibold text-white"
            >
                <span
                    className="mr-2 inline-block h-3 w-3 rounded-sm"
                    style={{ backgroundColor: accent }}
                />
                {title}
            </h3>
            {actionLabel && actionHref ? (
                <a 
                    href={actionHref}
                    className="text-sm text-neutral-300 underline hover:text-white"
                    style={{ color: accent }}
                >
                    {actionLabel}
                </a>
            ): null}
        </section>
    );
}