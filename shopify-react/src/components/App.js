import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Product from "../pages/Product";
import ShopProvider from "../context/Shop";

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

const engine = new Styletron();

function App() {
  return (
    <ShopProvider>
      <StyletronProvider value={engine} debug={debug} debugAfterHydration>
        <Router>
          <Switch>
            <Route path="/product">
              <Product />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </StyletronProvider>
    </ShopProvider>
  );
}

export default App;
