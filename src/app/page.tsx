export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col gap-10 lg:flex-row">
        {/* Left: Hero + stats */}
        <section className="w-full space-y-6 lg:w-7/12">
          <div className="space-y-4">
            <p className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 ring-1 ring-indigo-100 dark:bg-indigo-500/10 dark:text-indigo-300 dark:ring-indigo-500/40">
              Q&A playground
            </p>

            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Ask questions. Share answers.{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-400 bg-clip-text text-transparent">
                Level up your thinking.
              </span>
            </h1>

            <p className="max-w-xl text-sm text-zinc-600 dark:text-zinc-400 sm:text-base">
              This is your space to experiment. We&apos;ll add real data,
              filters, and interactions later. For now, use this layout as a
              playground for your ideas.
            </p>
          </div>

          {/* Search + quick filters */}
          <div className="space-y-3 rounded-2xl border border-zinc-200 bg-white/80 p-4 shadow-sm backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/80">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search questions, tags, or users..."
                  className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm outline-none ring-0 transition placeholder:text-zinc-400 focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100 dark:border-zinc-700 dark:bg-zinc-900 dark:placeholder:text-zinc-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-500/40"
                />
              </div>
              <button className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs font-medium text-zinc-700 shadow-sm transition hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-zinc-600 dark:hover:bg-zinc-800">
                Advanced filters
              </button>
            </div>

            <div className="flex flex-wrap gap-2 text-xs">
              <span className="text-zinc-500 dark:text-zinc-400">
                Quick filters:
              </span>
              <button className="rounded-full bg-zinc-100 px-3 py-1 text-zinc-700 transition hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700">
                Newest
              </button>
              <button className="rounded-full bg-zinc-100 px-3 py-1 text-zinc-700 transition hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700">
                Unanswered
              </button>
              <button className="rounded-full bg-zinc-100 px-3 py-1 text-zinc-700 transition hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700">
                Most voted
              </button>
              <button className="rounded-full bg-zinc-100 px-3 py-1 text-zinc-700 transition hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700">
                My questions
              </button>
            </div>
          </div>

          {/* Placeholder: recent questions */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100 sm:text-base">
                Recent questions
              </h2>
              <button className="text-xs font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
                View all
              </button>
            </div>

            <div className="space-y-3 rounded-2xl border border-dashed border-zinc-300 bg-zinc-50/80 p-4 text-xs text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-400">
              <p>
                You can map over real questions here later. For now, this block
                just shows how a list could look.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start justify-between gap-3 rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                  <div>
                    <p className="font-medium text-zinc-800 dark:text-zinc-100">
                      Example: &quot;How do I design a voting system for
                      answers?&quot;
                    </p>
                    <p className="mt-1 text-[11px] text-zinc-500 dark:text-zinc-400">
                      Later you can show tags, author, time, and stats here.
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-col items-end gap-1 text-[11px] text-zinc-500 dark:text-zinc-400">
                    <span>3 answers</span>
                    <span>12 votes</span>
                  </div>
                </li>
                <li className="flex items-start justify-between gap-3 rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                  <div>
                    <p className="font-medium text-zinc-800 dark:text-zinc-100">
                      Example: &quot;What&apos;s a clean schema for comments and
                      replies?&quot;
                    </p>
                    <p className="mt-1 text-[11px] text-zinc-500 dark:text-zinc-400">
                      Replace this with real data from Appwrite once the API is
                      ready.
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-col items-end gap-1 text-[11px] text-zinc-500 dark:text-zinc-400">
                    <span>1 answer</span>
                    <span>5 votes</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Right: sidebar */}
        <aside className="w-full space-y-6 lg:w-5/12">
          {/* Stats */}
          <section className="rounded-2xl border border-zinc-200 bg-white/80 p-4 shadow-sm backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/80">
            <h2 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
              Snapshot
            </h2>
            <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
              Fake numbers for now — wire up real counts later.
            </p>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs">
              <div className="rounded-xl bg-zinc-50 p-3 dark:bg-zinc-900">
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                  Questions
                </p>
                <p className="mt-1 text-lg font-semibold">128</p>
              </div>
              <div className="rounded-xl bg-zinc-50 p-3 dark:bg-zinc-900">
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                  Answers
                </p>
                <p className="mt-1 text-lg font-semibold">342</p>
              </div>
              <div className="rounded-xl bg-zinc-50 p-3 dark:bg-zinc-900">
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                  Active users
                </p>
                <p className="mt-1 text-lg font-semibold">24</p>
              </div>
            </div>
          </section>

          {/* Categories / tags */}
          <section className="rounded-2xl border border-zinc-200 bg-white/80 p-4 shadow-sm backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/80">
            <h2 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
              Explore by topic
            </h2>
            <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
              Replace these pills with dynamic tags later.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {[
                "javascript",
                "nextjs",
                "appwrite",
                "clerk-auth",
                "database-design",
                "ui-ux",
                "typescript",
                "zustand",
              ].map((tag) => (
                <button
                  key={tag}
                  className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-zinc-700 transition hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-indigo-500/60 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-300"
                >
                  #{tag}
                </button>
              ))}
            </div>
          </section>

          {/* Getting started / CTA */}
          <section className="rounded-2xl border border-dashed border-zinc-300 bg-gradient-to-br from-indigo-50 via-sky-50 to-emerald-50 p-4 text-xs text-zinc-700 dark:border-zinc-700 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900 dark:text-zinc-200">
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
              What you can wire up next
            </h2>
            <ul className="mt-2 space-y-1.5">
              <li>– Connect this UI to Appwrite collections for questions.</li>
              <li>– Swap the fake stats with real counts.</li>
              <li>– Use Clerk auth to protect &quot;Ask a question&quot; and voting.</li>
              <li>– Add routing: question detail pages, user profiles, tag pages.</li>
            </ul>
          </section>
        </aside>
      </div>
    </div>
  );
}
