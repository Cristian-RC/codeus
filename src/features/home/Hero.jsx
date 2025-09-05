import { hexWithAlpha } from "@/lib/color";

export default function Hero({ accent="#F43F5E" }) {

    const bg = {
        background:
            `radial-gradient(1000px 320px at 20% 8%, ${hexWithAlpha(accent, 0.2)}, transparent),` +
            `radial-gradient(800px 260px at 80% 0%, rgba(99,102,241,0.18), transparent),` +
            `linear-gradient(180deg, #0A0A0A 0%, #0F0F14 100%)`,
    };

    return(
        <section className="relative" style={bg}>
            <div
                className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 md:grid-cols-2 lg:py-20"
            >
                <div className="space-y-5">
                    <span
                        className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-widest text-neutral-400"
                    >
                        IA + Fulstack
                    </span>
                    <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                        Construcción <span style={{ color: accent }}>end-to-end</span> de productos y <span style={{ color: accent }}> AI Solutions</span>
                    </h1>
                    <p className="text-neutral-400">
                        Frontend React/Next, backend FastAPI/Django, orquestación con Docker y pipelines de datos.
                        Integración de modelos de IA en producción.
                    </p>
                    <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                        <a 
                            href="#proyectos" 
                            className="rounded-lg px-4 py-2 text-center text-black"
                            style={{  backgroundColor: "#FD7485" }}
                        >
                            Ver Trabajos
                        </a>

                        <a 
                            href="/contact"
                            className="rounded-lg border border-white/15 px-4 py-2 text-center  text-neutral-200 hover:bg-white/15"
                        >
                            Contacto
                        </a>
                    </div>
                </div>
                <div className="h-64 rounded-2xl bg-gradient-to-br from-white/10 to-white/0 ring-1 ring-inset ring-white/10 md:h-80"/>
            </div>
        </section>
    );
}