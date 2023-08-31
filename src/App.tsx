import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout, NotFound } from "./components";
import { About, Home } from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Layout />}
            errorElement={<NotFound />}
          >
            <Route
              index={true}
              element={<Home />}
            />
            <Route
              path="/about"
              element={<About />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
