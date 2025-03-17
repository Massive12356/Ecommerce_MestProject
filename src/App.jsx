
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import Shop from "./Pages/Shop";
import About from "./components/About";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {path:'/', element: <Home />},
  {path:'/shop', element: <Shop />},
  {path:'/about', element: <About />},
  {path:'/contact', element: <Contact />},
  // {path:'/products/:id', element: <ProductDetails />}, path parameter
  {path:'/product-detail', element: <ProductDetails />},
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
