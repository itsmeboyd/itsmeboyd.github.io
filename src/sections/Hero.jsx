function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-80 md:min-h-125 w-full overflow-hidden bg-[#0c0d0d] text-white flex items-center md:px-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(34,197,94,0.15),transparent_60%)]" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] bg-size-[16px_16px] opacity-60" />
      <div className="container mx-auto px-4">
        <div className="relative z-10 max-w-2xl space-y-4">
          <p className="text-gray-400 text-lg">Hello! My name is</p>

          <h1 className="text-5xl md:text-8xl font-bold text-(--accent)">
            Boyd Delfin
          </h1>

          <p className="text-gray-300 text-xl font-light">
            I'm a web developer and I make websites for a living.
          </p>

          <div className="pt-2">
            <a
              href="#projects"
              className="inline-block rounded-full bg-(--accent) px-6 py-3 text-(--accent-fg) hover:bg-[#0c581a] hover:text-white transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
