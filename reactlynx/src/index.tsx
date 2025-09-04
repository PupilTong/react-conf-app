import "@lynx-js/preact-devtools";
import { root } from "@lynx-js/react";
import { MemoryRouter, Routes, Route } from "react-router";
import { Schedule } from "./App.jsx";
import "./index.css";
import TalkDetail from "./routes/talk.jsx";

root.render(
  <page
    style={{
      display: "flex",
      flexDirection: "column",
    }}
  >
    <MemoryRouter>
      <Schedule />
      <Routes>
        <Route path="/talk/:talk" element={<TalkDetail />} />
      </Routes>
    </MemoryRouter>
  </page>,
);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
