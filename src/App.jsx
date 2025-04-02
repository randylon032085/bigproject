import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import Dashboard from "./pages/Dashboard";
import Sales from "./components/Sales";
import Inventory from "./components/Inventory";
import Support from "./components/Support";
import Users from "./components/Users";
import { ContextProvider } from "./contexts/AccountContext";
import { ProductContextProvider } from "./contexts/ProductContext";
import Test from "./components/test";
import Cashier from "./pages/Cashier";

function App() {
  return (
    <ContextProvider>
      <ProductContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/createAccount" element={<CreateAccount />} />
            <Route path="/Cashier" element={<Cashier />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="sales" element={<Sales />} />
              <Route path="inventory" element={<Inventory />} />
              <Route path="support" element={<Support />} />
              <Route path="users" element={<Users />} />
              <Route path="test" element={<Test />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ProductContextProvider>
    </ContextProvider>
  );
}

export default App;
