import React from "react";
import ReactDOM from "react-dom/client";
import { ObserverContextProvider } from "./contexts/observerContext.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/home/home.tsx";
import PokemonListView from "./views/list/pokemonListView.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ObserverContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<PokemonListView />} />
        </Routes>
      </BrowserRouter>
    </ObserverContextProvider>
  </React.StrictMode>
);
