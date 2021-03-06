import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/authProvider";

type Props = {};

const Login = (props: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();
  console.log(location, 'location')
  //@ts-ignore
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get("username") as string;

    auth.signin(username, () => {
      navigate(from, { replace: true });
    });
  };
  return (
    <div>
      <p>You must log in to view the page at {from}</p>

      <form onSubmit={handleSubmit}>
        <label>
          Username: <input name="username" type="text" />
        </label>{" "}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
