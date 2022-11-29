import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router/Router";
import './assets/css/main/main.css'
import 'animate.css';
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
