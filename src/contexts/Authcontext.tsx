import React, { createContext, useState } from "react";
import * as auth from "../services/auth";
import { Auth } from "../services/auth";

interface AuthContextData {
  signed: boolean;
  user: Auth | null;
  signIn(): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<Auth | null>(null);

  async function signIn() {
    const response = await auth.signIn();
    setUser(response);
  }

  function signOut() {
    setUser(null);
  }

  console.log("Connected : ",user);
  
  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
