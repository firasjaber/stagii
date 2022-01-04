import axios from 'axios';
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useLocation } from 'react-router-dom';

const API_URL = 'http://localhost:4000';

interface AuthContextType {
  user?: any;
  loading: boolean;
  error?: any;
  login: (email: string, password: string) => Promise<void>;
  register: (
    email: string,
    firstName: string,
    lastName: string,
    type: string,
    password: string
  ) => Promise<void>;
  logout: () => void;
  loadUser: any;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [token, setToken] = useState<String>();
  const [user, setUser] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const location = useLocation();

  useEffect(() => {
    if (error) setError(null);
    //eslint-disable-next-line
  }, [location.pathname]);

  useEffect(() => {
    const authToken = localStorage.getItem('auth-token');
    if (authToken && (!token || !user)) {
      setToken(authToken);
      loadUser();
    }
    //eslint-disable-next-line
  }, [token, user]);

  const loadUser = async () => {
    if (!token) return null;
    const config = {
      headers: {
        'content-type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    };
    try {
      const res = await axios.get(API_URL + '/auth/', config);
      setToken(res.data.token);
      setUser(res.data.user);
    } catch (err) {
      setError(err);
    }
  };

  const login = async (email: string, password: string) => {
    setLoading(true);
    const config = {
      headers: {
        'content-type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    };
    const body = { email, password };
    try {
      const res = await axios.post(API_URL + '/auth/login', body, config);
      setUser(res.data.user);
      setToken(res.data.token);
      setError('');
      localStorage.setItem('auth-token', res.data.token);
    } catch (err: any) {
      setError(err.response.data.message);
    }
    setLoading(false);
  };

  const register = async (
    email: string,
    firstName: string,
    lastName: string,
    password: string,
    type: string
  ) => {
    setLoading(true);
    const body = { email, firstName, lastName, password, type };
    const config = {
      headers: {
        'content-type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    };
    try {
      await axios.post(API_URL + '/auth/register', body, config);
      setError('');
    } catch (err: any) {
      setError(err.response.data.message);
    }
    setLoading(false);
  };

  function logout() {
    setToken('');
    setUser('');
    localStorage.removeItem('auth-token');
  }

  return (
    <AuthContext.Provider
      value={{ user, error, loading, loadUser, login, logout, register }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default function useAuth() {
  return useContext(AuthContext);
}
