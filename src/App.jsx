import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import QuotationList from "./pages/QuotationList";
import CustomerList from "./pages/CustomerList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/quotation/list" element={<QuotationList />} />
          <Route path="/customer/list" element={<CustomerList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
