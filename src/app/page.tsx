import { projects } from "@/data/projects";

const howWeWork = [
  {
    step: "Idea",
    detail:
      "A concept worth testing, scoped tightly enough to validate cheaply.",
  },
  {
    step: "Validate",
    detail:
      "Real signal before heavy build investment: a landing page, a community post, a waitlist.",
  },
  {
    step: "Build",
    detail:
      "Small, then smaller. Ship the thin slice that answers the validation question.",
  },
  {
    step: "Launch & support",
    detail:
      "Marketing, monetization, and the unglamorous work of keeping it running.",
  },
];

const statusLabel: Record<string, string> = {
  "in-development": "In development",
  live: "Live",
};

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-24 px-6 py-24 sm:px-8">
        <section>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
            Small software, built all the way through.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
            UNRULENT is an indie dev studio. We pick ideas, test whether anyone
            actually wants them, build them, and stay on the hook for marketing,
            monetization, and support after they ship.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
            What we do
          </h2>
          <div className="mt-4 flex flex-col gap-4 text-lg leading-8 text-zinc-700">
            <p>
              We&apos;re a small studio that builds small products — games, web
              apps, and tools — end to end. That means the same team (human and
              AI) that comes up with an idea is the one that validates it,
              builds it, launches it, and sticks around to run it. No hand-off
              to a separate marketing department, no &ldquo;someone else&apos;s
              problem&rdquo; once it&apos;s live.
            </p>
            <p>
              We&apos;d rather ship a handful of things properly than
              half-finish a lot of things. If something doesn&apos;t clear a
              real validation bar, we say so and move on instead of building it
              anyway.
            </p>
          </div>

          <ol className="mt-10 grid grid-cols-1 gap-6 border-t border-zinc-200 pt-10 sm:grid-cols-4">
            {howWeWork.map(({ step, detail }, index) => (
              <li key={step} className="flex flex-col gap-2">
                <span className="text-sm font-mono text-zinc-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-semibold text-zinc-900">{step}</span>
                <span className="text-sm leading-6 text-zinc-600">
                  {detail}
                </span>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
            What we&apos;re building
          </h2>
          <div className="mt-6 flex flex-col gap-4">
            {projects.map((project) => (
              <div
                key={project.slug}
                className="flex flex-col gap-2 rounded-lg border border-zinc-200 p-6"
              >
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-semibold text-zinc-950">
                    {project.title}
                  </h3>
                  <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600">
                    {statusLabel[project.status] ?? project.status}
                  </span>
                </div>
                <p className="text-base leading-7 text-zinc-600">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-zinc-500">
            More projects will land here as they ship.
          </p>
        </section>
      </main>

      <footer className="border-t border-zinc-200 px-6 py-8 sm:px-8">
        <div className="mx-auto max-w-3xl text-sm text-zinc-500">UNRULENT</div>
      </footer>
    </div>
  );
}
