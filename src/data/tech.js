import {
  SiReact, SiNextdotjs, SiTailwindcss, SiFastapi, SiDjango, SiPostgresql, SiSqlalchemy,
  SiTensorflow, SiPytorch, SiScikitlearn, SiDocker, SiGithubactions, SiApacheairflow,
  SiMlflow, SiPandas, SiNumpy, SiGooglecloud, SiKubernetes, SiTypescript, SiNodedotjs,
  SiPython, SiApachespark,
} from "react-icons/si";

export const TECH_GROUPS = [
  {
    group: "IA",
    items: [
      { name: "TensorFlow", Icon: SiTensorflow },
      { name: "PyTorch", Icon: SiPytorch },
      { name: "scikit-learn", Icon: SiScikitlearn },
      { name: "Pandas", Icon: SiPandas },
      { name: "NumPy", Icon: SiNumpy },
      { name: "Python", Icon: SiPython },
    ],
  },
  {
    group: "Backend & DB",
    items: [
      { name: "FastAPI", Icon: SiFastapi },
      { name: "Django", Icon: SiDjango },
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "SQLAlchemy", Icon: SiSqlalchemy },
      { name: "PostgreSQL", Icon: SiPostgresql },
    ],
  },
  {
    group: "Frontend",
    items: [
      { name: "React", Icon: SiReact },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "TailwindCSS", Icon: SiTailwindcss },
    ],
  },
  {
    group: "DevOps",
    items: [
      { name: "Docker", Icon: SiDocker },
      { name: "GitHub Actions", Icon: SiGithubactions },
      { name: "Kubernetes", Icon: SiKubernetes },
    ],
  },
  {
    group: "MLOps y Nube",
    items: [
      { name: "Airflow", Icon: SiApacheairflow },
      { name: "MLflow", Icon: SiMlflow },
      { name: "Google Cloud", Icon: SiGooglecloud },
      { name: "Spark", Icon: SiApachespark },
    ],
  },
];
