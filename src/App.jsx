export default function App() {
  return (
    <>
      <main className="min-h-screen text-neutral-200">
        <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-4">NAVBAR</div>
        </header>

        <section className="mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-4xl font-bold"> Hola, soy Nene</h1>
          <p className="text-neutral-400 mt-3">Fullstack + AI + MLOps</p>
        </section>

        <footer className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-6 text-neutral-400">
              &copy; {new Date().getFullYear()} Nene - Fullstack + AI
          </div>
        </footer>
      </main>
    </>
  )
}