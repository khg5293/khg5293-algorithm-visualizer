import { useState } from "react";

type NodeName = "A" | "B" | "C" | "D" | "E" | "F";

const adjacency: Record<NodeName, NodeName[]> = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};

function GraphExplorer() {
  const [selected, setSelected] =
    useState<NodeName>("A");

  return (
    <main className="dashboard">
      <section className="hero">
        <div>
          <p className="eyebrow">
            khg5293 graph systems laboratory
          </p>

          <h1>
            Graph
            <span> Explorer</span>
          </h1>

          <p className="hero-copy">
            Interactive inspection of vertices, adjacency
            relationships, traversal structures, and graph
            connectivity.
          </p>
        </div>
      </section>

      <section className="workspace">
        <div className="panel">
          <span className="panel-label">GRAPH TOPOLOGY</span>
          <h2>Interactive node matrix</h2>

          <div className="node-grid">
            {(Object.keys(adjacency) as NodeName[]).map(
              (node) => (
                <button
                  key={node}
                  className={
                    selected === node
                      ? "node-button selected-node"
                      : "node-button"
                  }
                  onClick={() => setSelected(node)}
                >
                  {node}
                </button>
              )
            )}
          </div>
        </div>

        <aside className="panel">
          <span className="panel-label">
            NODE INSPECTOR
          </span>

          <h2>Vertex {selected}</h2>

          <p className="description">
            Degree: {adjacency[selected].length}
          </p>

          <div className="info-row">
            <span>Adjacent vertices</span>
            <strong>
              {adjacency[selected].join(", ")}
            </strong>
          </div>

          <div className="info-row">
            <span>Representation</span>
            <strong>Adjacency List</strong>
          </div>

          <div className="info-row">
            <span>Graph type</span>
            <strong>Undirected</strong>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default GraphExplorer;