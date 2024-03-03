// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";


// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <section className="w-[90%] mx-auto mt-6">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/details" element={<MovieDetails />} />
//         </Routes>
//       </section>
//     </BrowserRouter>
//   );
// }

// export default App;

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/details/:id", element: <MovieDetails /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;

};

export default App;
