function About() {
  return (
    <main className="dashboard">
      <section className="hero">
        <div>
          <p className="eyebrow">
            khg5293 technical notebook
          </p>

          <h1>
            Research
            <span> Notes</span>
          </h1>

          <p className="hero-copy">
            A collection of small computational experiments
            exploring algorithms, graph structures, complexity,
            TypeScript, and interactive visualization.
          </p>
        </div>
      </section>

      <section className="technical-grid">
        <article className="technical-card">
          <h3>React</h3>
          <p>
            Component based interfaces with reactive application
            state and interactive visualization.
          </p>
        </article>

        <article className="technical-card">
          <h3>TypeScript</h3>
          <p>
            Explicit models for algorithms, graph structures,
            application state, and runtime metadata.
          </p>
        </article>

        <article className="technical-card">
          <h3>Algorithms</h3>
          <p>
            Experimental implementations of sorting, traversal,
            searching, and computational procedures.
          </p>
        </article>

        <article className="technical-card">
          <h3>Instrumentation</h3>
          <p>
            Runtime counters and state inspection expose
            intermediate computational behavior.
          </p>
        </article>
      </section>
    </main>
  );
}

export default About;