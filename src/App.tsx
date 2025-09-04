import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Auth Pages
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Verify from "./pages/auth/Verify";
import Forgot from "./pages/auth/Forgot";
import Reset from "./pages/auth/Reset";
import PendingApproval from "./pages/auth/PendingApproval";
import RegisterCompany from './pages/auth/RegisterCompany'

// Company Pages
import CompanyRegister from "./pages/company/Register";
import InviteAccept from "./pages/invite/Accept";

// Company Admin Pages
import CompanyAdminLayout from "./pages/company-admin/Layout";
import Roles from "./pages/company-admin/Roles";
import Users from "./pages/company-admin/Users";
import RegisterUnderCompany from "./pages/auth/RegisteredUnderCompany";

// User Dashboard Pages
import DashboardLayout from "./pages/dashboard/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import Requests from "./pages/dashboard/Requests";
import Suppliers from "./pages/dashboard/Suppliers";
import Analytics from "./pages/dashboard/Analytics";
import Orders from "./pages/dashboard/Orders";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Auth Routes */}
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/verify" element={<Verify />} />
          <Route path="/auth/forgot" element={<Forgot />} />
          <Route path="/auth/reset" element={<Reset />} />
          <Route path="/auth/pending-approval" element={<PendingApproval />} />
          <Route path="/auth/register-company" element={<RegisterCompany />} />
          <Route path="/auth/register-under-company" element={<RegisterUnderCompany />} />
          
          {/* Company Routes */}
          <Route path="/company/register" element={<CompanyRegister />} />
          <Route path="/invite/accept" element={<InviteAccept />} />
          
          {/* Company Admin Routes */}
          <Route path="/company-admin" element={<CompanyAdminLayout />}>
            <Route path="roles" element={<Roles />} />
            <Route path="users" element={<Users />} />
          </Route>

          {/* User Dashboard Routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="requests" element={<Requests />} />
            <Route path="suppliers" element={<Suppliers />} />
            <Route path="orders" element={<Orders />} />
            <Route path="analytics" element={<Analytics />} />
          </Route>
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
