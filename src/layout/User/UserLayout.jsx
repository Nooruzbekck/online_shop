import { SignIn } from "../../components/auth/SignUp";
import { Header } from "./Header";

export const UserLayout = () => {
  return (
    <div>
      <Header />
      <SignIn />
    </div>
  );
};
