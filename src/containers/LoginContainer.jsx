import Login from "../components/Login";
import { NavigationProvider } from "../context/NavigationContext";

export default function LoginContainer() {
  return (
    <NavigationProvider>
      <Login />
    </NavigationProvider>
  );
}
