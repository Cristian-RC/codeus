import Section from "@components/layout/Section";
import SectionTitle from "@components/ui/SectionTitle";


export default function AboutMe({ accent = "#F43F5E" }) { 
  return (
    <Section id="sobre">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-14 md:grid-cols-3">
        <div className="md:col-span-2">
          <SectionTitle accent={accent} title="Sobre mí" />
          <p className="text-neutral-300">
            Fullstack con enfoque en IA y datos. Me gusta construir productos end-to-end:
            UI/UX en React/Next, APIs robustas con FastAPI/Django, bases de datos en PostgreSQL
            y pipelines con Docker/CI/CD. Experiencia en MLOps para llevar modelos de visión a
            producción con trazabilidad y observabilidad.
          </p>
        </div>

        <div className="grid content-start gap-3">
          {[
            { k: "Rol", v: "Fullstack & AI Developer" },
            { k: "Periodo", v: "2022–2025" },
            { k: "Equipo", v: "Club América" },
          ].map((it) => (
            <div key={it.k} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-xs uppercase tracking-wider text-neutral-400">{it.k}</div>
              <div className="text-base font-semibold text-white">{it.v}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
