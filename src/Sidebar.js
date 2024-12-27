import React, { useState } from "react";

const Sidebar = ({ setNodes, setEdges }) => {
  const [nodeName, setNodeName] = useState("");
  const [nodeType, setNodeType] = useState("default");

  const addNode = () => {
    const id = `${Date.now()}`;
    const newNode = {
      id,
      type: nodeType,
      data: { label: nodeName },
      position: { x: Math.random() * 300, y: Math.random() * 300 },
    };
    setNodes((nodes) => [...nodes, newNode]);
  };

  return (
    <div className="sidebar">
      <h3>Node Management</h3>
      <input
        type="text"
        placeholder="Node Name"
        value={nodeName}
        onChange={(e) => setNodeName(e.target.value)}
      />
      <select value={nodeType} onChange={(e) => setNodeType(e.target.value)}>
        <option value="default">Default</option>
        <option value="input">Input</option>
        <option value="output">Output</option>
      </select>
      <button onClick={addNode}>Add Node</button>
    </div>
  );
};

export default Sidebar;
