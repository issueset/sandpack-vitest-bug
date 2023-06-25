import "./App.css";

import { Sandpack } from "@codesandbox/sandpack-react";
import { buildFiles } from "./template";

function App() {
  return (
    <>
      <h1>With latest dependencies</h1>
      <Sandpack
        files={buildFiles(devDependenciesNew)}
        customSetup={{
          environment: "node",
        }}
        options={{
          showInlineErrors: true,
          showConsole: true,
        }}
      />

      <h1>With older dependencies</h1>
      <Sandpack
        files={buildFiles(devDependenciesOld)}
        customSetup={{
          environment: "node",
        }}
        options={{
          showInlineErrors: true,
          showConsole: true,
        }}
      />
    </>
  );
}

const devDependenciesNew = {
  "@vitejs/plugin-react": "4.0.1",
  vite: "4.3.9",
  typescript: "5.1.3",
  "esbuild-wasm": "0.17.19",
  // "esbuild-wasm": "0.18.8",
};

const devDependenciesOld = {
  "@vitejs/plugin-react": "3.1.0",
  vite: "4.1.4",
  typescript: "4.9.5",
  "esbuild-wasm": "0.17.19",
};

export default App;
