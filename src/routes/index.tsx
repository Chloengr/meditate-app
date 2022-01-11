import React, { useContext } from "react";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import AuthContext from "../contexts/Authcontext";

const Routes: React.FC = () => {
  const { signed, user } = useContext(AuthContext);

  return signed ? <AppRoutes auth={user} /> : <AuthRoutes />;
};

export default Routes;
