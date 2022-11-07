import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router/Router";
import './assets/css/main/main.css'
import 'animate.css';
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
