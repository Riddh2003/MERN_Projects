import { useEffect, useState } from "react";

export const useAuthentication = () => {
    const [userRole, setUserRole] = useState();
    useEffect(() => {
        const role = localStorage.getItem('role')
        if (role) {
            setUserRole(role);
        } else {
            setUserRole("guest");
        }
    }, [])

    const isAdmin = userRole === "ADMIN" || userRole === "admin"
    const isUser = userRole === "USER" || userRole === "user"
    const isManager = userRole === "MANAGER" || userRole === "manager"

    return { isAdmin, isUser, isManager }
}