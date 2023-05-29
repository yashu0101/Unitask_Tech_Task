import { lazy } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";

const Dashboard = lazy(() =>
  import("../../features/admin/dashboard/Dashboard")
);

export default [
  {
    label: "Dashboard",
    path: "",
    showInMenu: true,
    component: <Dashboard />,
    icon: <DashboardIcon />,
    roles: ["admin", "users"],
    hasSubRoutes: false,
  },
];
