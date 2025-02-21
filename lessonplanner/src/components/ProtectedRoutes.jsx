import { Navigate } from "react-router-dom";
import { PlannerAI } from "./PlannerAI";

const ProtectedRoutes = ({ allowedRole }) => {
  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");
  const role = localStorage.getItem("role");

  // 🚨 If there is no token, send the user to the respective login page
  if (!email && !password) {
    console.log(`Redirecting to ${allowedRole === "user" ? "/login" : ""}`);
    return <Navigate to={allowedRole === "user" ? "/login" : ""} replace />;
  }

  // 🚨 If role is missing or not matching, send to unauthorized page
  if (!role || role !== allowedRole) {
    console.log("Redirecting to unauthorized page");
    return <Navigate to="/unauthorized" replace />;
  }
  return <PlannerAI />
};

export default ProtectedRoutes;
