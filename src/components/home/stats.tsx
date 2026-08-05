const stats = [
  {
    value: "7+",
    label: "Years Experience",
  },
  {
    value: "80+",
    label: "Solutions Deployed",
  },
  {
    value: "10+",
    label: "Companies",
  },
  {
    value: "8",
    label: "Node Cluster",
  },
];

export default function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border p-8 text-center"
          >
            <h2 className="text-5xl font-black text-blue-600">
              {item.value}
            </h2>

            <p className="mt-3 text-gray-600">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}