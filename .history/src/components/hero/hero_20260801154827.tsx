export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[85vh] max-w-7xl items-center px-6">
      <div className="max-w-3xl">
        <p className="mb-4 text-blue-600 font-semibold">
          Infrastructure & Cloud Solutions Architect
        </p>

        <h1 className="text-6xl font-black leading-tight">
          Designing Secure
          <br />
          Enterprise Infrastructure
        </h1>

        <p className="mt-8 text-lg text-gray-600">
          I design, deploy and operate enterprise-grade private cloud,
          virtualization, networking and cybersecurity solutions using
          open-source and enterprise technologies.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-xl bg-blue-600 px-6 py-3 text-white">
            View Projects
          </button>

          <button className="rounded-xl border px-6 py-3">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
}