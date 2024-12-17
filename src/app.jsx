import { createSignal } from "solid-js";
import "./app.css";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";

export default function App() {
  const [count, setCount] = createSignal(0);

  return (
    <main>
      <Router
        root={props => (
          <Suspense>{props.children}</Suspense>
        )}
      >
        <FileRoutes />
      </Router>
    </main>
  );
}
