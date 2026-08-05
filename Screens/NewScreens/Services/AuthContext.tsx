import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getStudentId, getStudentData, getAuthToken, logoutStudent as logoutApi } from './api';

interface StudentData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

interface AuthContextType {
  studentId: string | null;
  studentData: StudentData | null;
  authToken: string | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  setAuth: (id: string, data: StudentData, token?: string) => void;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  studentId: null,
  studentData: null,
  authToken: null,
  isLoggedIn: false,
  isLoading: true,
  setAuth: () => {},
  logout: async () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [studentId, setStudentId] = useState<string | null>(null);
  const [studentData, setStudentData] = useState<StudentData | null>(null);
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadAuth();
  }, []);

  const loadAuth = async () => {
    try {
      const id = await getStudentId();
      const data = await getStudentData();
      const token = await getAuthToken();
      if (id) {
        setStudentId(id);
        setStudentData(data);
        setAuthToken(token);
      }
    } catch (error) {
      console.error('Error loading auth:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const setAuth = (id: string, data: StudentData, token?: string) => {
    setStudentId(id);
    setStudentData(data);
    if (token) {
      setAuthToken(token);
    }
  };

  const logout = async () => {
    await logoutApi();
    setStudentId(null);
    setStudentData(null);
    setAuthToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        studentId,
        studentData,
        authToken,
        isLoggedIn: !!studentId,
        isLoading,
        setAuth,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
