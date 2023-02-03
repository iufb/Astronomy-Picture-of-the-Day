import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "./layout/Layout";
import { Home } from "./pages/HomePage";
import { PicturePage } from "./pages/PicturePage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="picture" element={<PicturePage />} />
        </Route>
        <Route path="*" element={<Navigate to="/home" replace />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
