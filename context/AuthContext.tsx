import React, { createContext, useContext, useState, useEffect } from "react";
interface User {
  id: string;
  email: string;
  role: string;
  fullName?: string;
}

interface LoginCredentials {
  email?: string;
  password?: string;
}

interface RegisterData {
  email: string;
  fullName: string;
  password?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (data: LoginCredentials) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");
      const storedUser = localStorage.getItem("user");

      if (token && storedUser) {
        setUser(JSON.parse(storedUser));
      }
      setLoading(false);
    };
    checkAuth();
  }, []);

  const login = async (credentials: LoginCredentials) => {
    const mockUser = {
      id: "USR-MOCK-001",
      email: credentials.email || "demo@example.com",
      role: credentials.email?.includes("admin") ? "ADMIN" : "USER",
      fullName: "Demo User",
    };

    localStorage.setItem("token", "MOCK_JWT_TOKEN");
    localStorage.setItem("user", JSON.stringify(mockUser));
    setUser(mockUser);
  };

  const register = async (data: RegisterData) => {
    const mockUser = {
      id: "USR-MOCK-" + Math.floor(Math.random() * 1000),
      email: data.email,
      role: "USER",
      fullName: data.fullName,
    };

    localStorage.setItem("token", "MOCK_JWT_TOKEN");
    localStorage.setItem("user", JSON.stringify(mockUser));
    setUser(mockUser);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    window.location.href = "/auth/login";
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
