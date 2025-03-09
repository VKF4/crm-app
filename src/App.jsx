import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import QuotationList from "./pages/QuotationList";
import CustomerList from "./pages/CustomerList";
import Sidebar from "./components/Sidebar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ArticleIcon from "@mui/icons-material/Article";
import PeopleIcon from "@mui/icons-material/People";
import Header from "./components/Header";

function App() {
  const tabButton = [
    { text: "Tableau de bord", icon: <DashboardIcon />, path: "/" },
    { text: "Devis", icon: <ArticleIcon />, path: "/quotation/list" },
    { text: "Clients", icon: <PeopleIcon />, path: "/customer/list" },
  ];
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header title={"CRM App"} />
        <div className="content-wrapper">
          <Sidebar tabButton={tabButton} />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/quotation/list" element={<QuotationList />} />
              <Route path="/customer/list" element={<CustomerList />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
