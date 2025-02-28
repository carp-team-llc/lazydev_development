import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "../pages/homeloggedin/DashBoard";
import ProfilePage from "../pages/profile/ProfilePages";
import ExploreHome from "../pages/explore/ExploreHome";
import ProjectHome from "../pages/project/ProjectHome";
import Leaderboard from "../pages/leader/LeaderBoard";
import RankingHome from "../pages/ranking/RankingHome";
import CreateProjecthome from "../pages/createproject/CreateProjectHome";
import MarketHome from "../pages/market/MarketHome";
import WalletHome from "../pages/wallet/WalletHome";
import TransactionsHome from "../pages/transactions/TransactionsHome";
import HistoryTransactionsHome from "../pages/historytransections/HistoryTransectionsHome";

// ✅ Lazy load các pages để tối ưu performance
const Register = lazy(() => import("../pages/auth/register/register"));
const Register2 = lazy(() => import("../pages/auth/register/register2"));
const Login = lazy(() => import("../pages/auth/login/Login"));
const ForgotPassword = lazy(() => import("../pages/auth/login/ForgotPassword"));
const ForgotPassword2 = lazy(() => import("../pages/auth/login/ForgotPassword2"));
const Home = lazy(() => import("../pages/homenonloggin/homepage"));




const router = createBrowserRouter([
  // ✅ Điều hướng mặc định khi vào trang web
  {
    path: "/",
    element: <Navigate to="/home" replace />,
  },

  // ✅ Các trang public (không cần đăng nhập)
  {
    path: "/home",
    element: <Suspense><Home /></Suspense>,
  },
  {
    path: "/explore",
    element: <Suspense><ExploreHome /></Suspense>,
  },
  {
    path: "/project",
    element: <Suspense><ProjectHome /></Suspense>,
  },

  // ✅ Protected Routes (Chỉ user đăng nhập mới vào được)
  {
    path: "/dashboard",
    element: <ProtectedRoute />, // Bảo vệ toàn bộ các route con bên trong
    children: [
      { path: "", element: <Suspense><Dashboard /></Suspense> }, // Mặc định /dashboard là Dashboard
      { path: "profile", element: <Suspense><ProfilePage /></Suspense> },
      { path: "leaderboard", element: <Suspense><Leaderboard /></Suspense> },
      { path: "ranking", element: <Suspense><RankingHome /></Suspense> },
      { path: "createproject", element: <Suspense><CreateProjecthome /></Suspense> },
      { path: "market", element: <Suspense><MarketHome /></Suspense> },
      { path: "wallet", element: <Suspense><WalletHome /></Suspense> },
      { path: "transaction", element: <Suspense><TransactionsHome /></Suspense> },
      { path: "historytransaction", element: <Suspense><HistoryTransactionsHome /></Suspense> },
    ],
  },

  // ✅ Các trang đăng nhập / đăng ký
  { path: "/login", element: <Suspense><Login /></Suspense> },
  { path: "/register", element: <Suspense><Register /></Suspense> },
  { path: "/register2", element: <Suspense><Register2 /></Suspense> },
  { path: "/forgotpassword", element: <Suspense><ForgotPassword /></Suspense> },
  { path: "/forgotpassword2", element: <Suspense><ForgotPassword2 /></Suspense> },

  // ❌ Nếu không tìm thấy route, quay lại `/home`
  { path: "*", element: <Navigate to="/home" replace /> },
]);

export default router;
