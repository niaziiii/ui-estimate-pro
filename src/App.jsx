import AppRoutes from "./routes/AppRoutes";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1200,
});

function App() {
  return (
    <div>
      <AppRoutes />
    </div>
  );
}

export default App;
