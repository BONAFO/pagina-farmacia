import Register from "../components/Register";
import { NavigationProvider } from "../context/NavigationContext";

export default function RegisterContainer() {
  return (
    <NavigationProvider>
      <Register />
    </NavigationProvider>
  );
}
