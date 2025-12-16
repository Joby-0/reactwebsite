import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedToken = localStorage.getItem("jwt");
        const storedUser = localStorage.getItem("user");

        if (storedToken && storedUser) {
            setToken(storedToken);
            setUser(JSON.parse(storedUser));
        }

        setLoading(false);
    }, []);

    const login = (loginResponse) => {
        const { jwtToken, userId, userName, userRole } = loginResponse;
        
        
        setToken(jwtToken.encryptedToken);
        setUser({ userId, userName, userRole });

        localStorage.setItem("jwt", jwtToken.encryptedToken);
        localStorage.setItem("user", JSON.stringify({ userId, userName, userRole }));
    };

    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem("jwt");
        localStorage.removeItem("user");
    };

    const isLoggedIn = () => !!token;
  

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                login,
                logout,
                isLoggedIn,
                loading
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
