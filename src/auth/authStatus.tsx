import React from "react";
import { useAuth } from "./authProvider";
import { useNavigate } from "react-router-dom";

type Props = {};

const AuthStatus = (props: Props) => {
  const auth = useAuth();
  const navigate = useNavigate();

  if (!auth.user) {
    return <p>You are not logged in.</p>;
  }

  return (
    <p>
      Welcome {auth.user}! <button onClick={() => auth.signout(() => navigate("/"))}>Sign out</button>
    </p>
  );
};

export default AuthStatus;
