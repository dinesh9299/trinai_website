// // src/App.jsx - PRODUCTION READY (4-SEGMENT ROUTES)
// import "./App.css";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// // ============ MAIN PAGES ============
// import Home from "./pages/Home";
// import Contact from "./pages/Contact";
// import Solutions from "./pages/Solutions";
// import About from "./pages/About";
// import Main from "./pages/Main";
// import Categories from "./pages/Categories";
// import Cameraproductdetails from "./pages/Cameraproductdetails";
// import Viewproducts from "./pages/Viewproducts";
// import Products from "./pages/Products";
// import Details from "./components/Extra";
// import MyCarousel from "./pages/Other";
// import FluidTabs from "./Practice/Lucidtab";
// import FileUpload from "./pages/image";
// import Smartbus from "./pages/Smartbus";
// import Vms from "./components/vms";
// import Securitysolutions from "./components/Securitysolutions";
// import ScenarioDetails from "./pages/ScenarioDetails";
// import Privacy_policy from "./components/privacy_policy";

// // ============ SECURITY SOLUTIONS ============
// import SecuritySolutionPage from "./components/SecuritySolutionPage";

// // ============ ADMIN PAGES ============
// import Dashboard from "./admin/Home";
// import Login from "./admin/Login";
// import AMain from "./admin/Main";
// import Users from "./admin/Users";
// import Stock from "./admin/Stock";
// import AProducts from "./admin/Products";
// import Acameras from "./admin/Acameras";
// import Nvr from "./admin/Nvr";
// import Poe from "./admin/Poe";
// import Server from "./admin/Server";

// // ============ UTILITY: Redirect old query-param URLs ============
// const OldUrlRedirect = () => {
//   const searchParams = new URLSearchParams(window.location.search);
//   const id = searchParams.get("query");
//   if (id) {
//     return <Navigate to={`/products/bullet-cameras/${id}`} replace />;
//   }
//   return <Navigate to="/products" replace />;
// };

// function App() {
//   return (
//     <BrowserRouter basename="/">
//       <Routes>
//         {/* ============ MAIN LAYOUT ROUTES ============ */}
//         <Route path="/" element={<Main />}>
//           <Route index element={<Home />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="solutions" element={<Solutions />} />
//           <Route path="about" element={<About />} />

//           {/* ✅ PRODUCTS - 4-SEGMENT ROUTING */}
//           <Route path="products" element={<Products />} />

//           {/* ✅ Category Page: /products/bullet-cameras */}
//           <Route path="products/:category" element={<Categories />} />

//           {/* ✅ Product Type Page: /products/bullet-cameras/2mp-hd-bullet-camera */}
//           <Route
//             path="products/:category/:productType"
//             element={<Categories />}
//           />

//           {/* ✅ Product Model Page: /products/bullet-cameras/2mp-hd-bullet-camera/AI02B030L67 */}
//           <Route
//             path="products/:category/:productType/:model"
//             element={<Categories />}
//           />

//           {/* ✅ Specific Product Page WITH ID: /products/bullet-cameras/2mp-hd-bullet-camera/AI02B030L67/1 */}
//           <Route
//             path="products/:category/:productType/:model/:id"
//             element={<Cameraproductdetails />}
//           />

//           <Route path="cemaradetails" element={<OldUrlRedirect />} />

//           {/* ✅ OTHER ROUTES */}
//           <Route path="viewproducts" element={<Viewproducts />} />
//           <Route path="extra" element={<Details />} />
//           <Route path="carousel" element={<MyCarousel />} />
//           <Route path="fluid" element={<FluidTabs />} />
//           <Route path="image" element={<FileUpload />} />
//           <Route path="privacy-policy" element={<Privacy_policy />} />

//           {/* ✅ SMARTBUS & VMS */}
//           <Route path="smartbus" element={<Smartbus />} />
//           <Route path="vms" element={<Vms />} />

//           {/* ✅✅✅ SECURITY SOLUTIONS - DYNAMIC ROUTE */}
//           <Route path="security/:slug" element={<SecuritySolutionPage />} />

//           {/* ✅ SCENARIO DETAILS */}
//           <Route path="solutions/:id" element={<ScenarioDetails />} />
//         </Route>

//         {/* ============ ADMIN ROUTES ============ */}
//         <Route path="dashboard/login" element={<Login />} />
//         <Route path="dashboard/home" element={<Dashboard />}>
//           <Route index element={<AMain />} />
//           <Route path="users" element={<Users />} />
//           <Route path="stock" element={<Stock />} />
//           <Route path="products" element={<AProducts />} />
//           <Route path="cameras" element={<Acameras />} />
//           <Route path="nvr" element={<Nvr />} />
//           <Route path="poe" element={<Poe />} />
//           <Route path="server" element={<Server />} />
//         </Route>

//         {/* ============ 404 CATCH-ALL ============ */}
//         <Route
//           path="*"
//           element={
//             <div className="min-h-screen flex items-center justify-center">
//               <div className="text-center">
//                 <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
//                 <p className="text-gray-600 mb-6">Page not found</p>
//                 <Navigate to="/" replace />
//               </div>
//             </div>
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// src/App.jsx - PRODUCTION READY (SEO + STRAPI + CORRECT ROUTE ORDER)
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// ============ MAIN PAGES ============
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Solutions from "./pages/Solutions";
import About from "./pages/About";
import Main from "./pages/Main";
import Categories from "./pages/Categories";
import Cameraproductdetails from "./pages/Cameraproductdetails";
import Viewproducts from "./pages/Viewproducts";
import Products from "./pages/Products";
import Details from "./components/Extra";
import MyCarousel from "./pages/Other";
import FluidTabs from "./Practice/Lucidtab";
import FileUpload from "./pages/image";
import Smartbus from "./pages/Smartbus";
import Vms from "./components/vms";
import Securitysolutions from "./components/Securitysolutions";
import ScenarioDetails from "./pages/ScenarioDetails";
import Privacy_policy from "./components/privacy_policy";
import SecuritySolutionPage from "./components/SecuritySolutionPage";

// ============ ADMIN PAGES ============
import Dashboard from "./admin/Home";
import Login from "./admin/Login";
import AMain from "./admin/Main";
import Users from "./admin/Users";
import Stock from "./admin/Stock";
import AProducts from "./admin/Products";
import Acameras from "./admin/Acameras";
import Nvr from "./admin/Nvr";
import Poe from "./admin/Poe";
import Server from "./admin/Server";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        {/* ============ MAIN LAYOUT ============ */}
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="about" element={<About />} />

          {/* ✅ PRODUCTS ROUTES - ORDER MATTERS! (Most specific FIRST) */}
          <Route path="products" element={<Products />} />

          {/* ✅ Category Page: /products/bullet-cameras */}
          <Route path="products/:category" element={<Categories />} />

          {/* ✅ Product Type/Detail Page: /products/bullet-cameras/2mp-hd-bullet-camera?model=&id= */}
          {/* This route handles BOTH product lists AND individual product details via query params */}
          <Route
            path="products/:category/:productType"
            element={<Categories />}
          />

          {/* ✅ OTHER ROUTES */}
          <Route path="viewproducts" element={<Viewproducts />} />
          <Route path="extra" element={<Details />} />
          <Route path="carousel" element={<MyCarousel />} />
          <Route path="fluid" element={<FluidTabs />} />
          <Route path="image" element={<FileUpload />} />
          <Route path="privacy-policy" element={<Privacy_policy />} />
          <Route path="smartbus" element={<Smartbus />} />
          <Route path="vms" element={<Vms />} />
          <Route path="security/:slug" element={<SecuritySolutionPage />} />
          <Route path="solutions/:id" element={<ScenarioDetails />} />
        </Route>

        {/* ============ ADMIN ROUTES ============ */}
        <Route path="dashboard/login" element={<Login />} />
        <Route path="dashboard/home" element={<Dashboard />}>
          <Route index element={<AMain />} />
          <Route path="users" element={<Users />} />
          <Route path="stock" element={<Stock />} />
          <Route path="products" element={<AProducts />} />
          <Route path="cameras" element={<Acameras />} />
          <Route path="nvr" element={<Nvr />} />
          <Route path="poe" element={<Poe />} />
          <Route path="server" element={<Server />} />
        </Route>

        {/* ============ 404 CATCH-ALL ============ */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
