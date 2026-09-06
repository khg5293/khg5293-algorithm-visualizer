import { useState } from "react";

function ComplexityLab() {
  const [n, setN] = useState(32);

  const logarithmic = Math.log2(n);
  const linear = n;
  const linearithmic = n * Math.log2(n);
  const quadratic = n * n;

  return (
    <main className="dashboard">
      <section className="hero">
        <div>
          <p className="eyebrow">
            khg5293 asymptotic analysis
          </p>

          <h1>
            Complexity
            <span> Sandbox</span>
          </h1>

          <p className="hero-copy">
            Compare theoretical operation growth across common
            asymptotic complexity classes.
          </p>
        </div>
      </section>

      <section className="panel">
        <span className="panel-label">
          INPUT DOMAIN
        </span>

        <h2>Dataset size: n = {n}</h2>

        <input
          type="range"
          min="2"
          max="200"
          value={n}
          onChange={(event) =>
            setN(Number(event.target.value))
          }
        />

        <div className="metrics complexity-metrics">
          <ComplexityMetric
            label="O(log n)"
            value={logarithmic}
          />

          <ComplexityMetric
            label="O(n)"
            value={linear}
          />

          <ComplexityMetric
            label="O(n log n)"
            value={linearithmic}
          />

          <ComplexityMetric
            label="O(n²)"
            value={quadratic}
          />
        </div>
      </section>
    </main>
  );
}

function ComplexityMetric({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="metric-card">
      <span>{label}</span>
      <strong>{Math.round(value).toLocaleString()}</strong>
      <small>estimated operations</small>
    </div>
  );
}

export default ComplexityLab;