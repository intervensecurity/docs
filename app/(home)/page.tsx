import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      {/* Hero */}
      <section className="relative px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-fd-primary mb-4">
            🛡️ Interven
          </p>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight">
            Security firewall for what
            <br />
            AI agents do.
          </h1>
          <p className="mt-6 text-lg text-fd-muted-foreground max-w-2xl mx-auto">
            Inline policy and risk-scoring on every tool call. Block secret egress, redact PII, gate
            sensitive writes with human approval — without changing your agent code.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href="/docs"
              className="inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-semibold bg-fd-primary text-fd-primary-foreground hover:opacity-90 transition"
            >
              Read the docs →
            </Link>
            <Link
              href="/docs/quickstart"
              className="inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-semibold border border-fd-border hover:bg-fd-muted transition"
            >
              Quickstart in 5 lines
            </Link>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="border-t border-fd-border px-6 py-16">
        <div className="mx-auto max-w-5xl grid sm:grid-cols-3 gap-8">
          <Feature
            title="Every call scanned"
            body="ALLOW / DENY / SANITIZE / REQUIRE_APPROVAL on every outbound API call your agent makes — Slack, GitHub, Jira, Salesforce, HubSpot, Workday, and any URL you point at us."
          />
          <Feature
            title="Human-in-the-loop"
            body="When a write is sensitive, the agent pauses, the analyst approves in the Console, and the agent finishes the task in the same conversation turn."
          />
          <Feature
            title="Drop-in for any framework"
            body="Native adapters for LangChain, CrewAI, OpenAI Assistants, OpenClaw — or use the Bearer-token /v1/scan API directly. Five-line integration."
          />
        </div>
      </section>

      <footer className="border-t border-fd-border px-6 py-8 mt-auto">
        <div className="mx-auto max-w-5xl flex flex-wrap items-center justify-between gap-4 text-sm text-fd-muted-foreground">
          <p>© {new Date().getFullYear()} Interven Security. Beta.</p>
          <div className="flex gap-4">
            <Link href="/docs" className="hover:text-fd-foreground">Docs</Link>
            <a href="https://app.intervensecurity.com" className="hover:text-fd-foreground">Console</a>
            <a href="https://status.intervensecurity.com" className="hover:text-fd-foreground">Status</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Feature({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h3 className="text-lg font-semibold tracking-tight mb-2">{title}</h3>
      <p className="text-sm text-fd-muted-foreground leading-relaxed">{body}</p>
    </div>
  );
}
