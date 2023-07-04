import {
  BrowserRouter as Router,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Routes,
  Route,
  Navigate,

} from "react-router-dom";

// components
import { ScrollToTop } from "./components/ScrollToTop";
import { BackToTop } from "./components/BackToTop";

// pages
import { PageNotFound } from "./pages/PageNotFound";
import { Home } from "./pages/Home";
import { CarouselProperty } from "./components/CarouselProperty";
import { Careers } from "./pages/careers/Careers";
import { Ourteam } from "./pages/careers/Ourteam";
import { About } from "./pages/About";
import { ContactUs } from "./pages/ContactUs";

// layout
import { RootLayout } from "./layouts/RootLayout";
import { CareerLayout } from "./layouts/CareerLayout";
import { CardPropertyList } from "./components/CardPropertyList";
import { PropertyDetails } from "./pages/PropertyDetails";
import { FeaturedProperty } from "./pages/FeaturedProperty";
import TermsAndConditionsModal from "./pages/TermsAndConditionsModal.js";
import { Licensing } from "./pages/Licensing";
import { Affiliates } from "./pages/Affiliates";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Routes path='/' element={<RootLayout />}>
//       <Route index element={<Home />} />
//       <Route path='/carousel' element={<Carousel />} />
//       <Route path='/careers' element={<Careers />} />
//       <Route path='/ourteam' element={<Ourteam />} />

//       <Route path='pages' element={<CareerLayout />}>
//       </Route>



//       <Route path='*' element={<PageNotFound />} />
//     </Routes>
//   )
// )

// ================= {backend components import} ======================
import Login from "./components/BackendComponents/login_component";
import SignUp from "./components/BackendComponents/signup_component";
import UserDetails from "./components/BackendComponents/userDetails";
import AdminHome from "./components/BackendComponents/adminHome";
import AddProperties from "./components/BackendComponents/addProperties";
import Inquiries from "./components/BackendComponents/inquiries";
import Users from "./components/BackendComponents/user";
import SendInquiries from "./components/BackendComponents/sampleSendInquiries";
// import UpdateProperty from "./components/BackendComponents/updateProperty";
import Sidebar from "./components/BackendComponents/Sidebar";
import Main from "./components/BackendComponents/Main";
import SearchProperty from "./pages/SearchProperty";
// import PropertySearch from "./pages/Search";

function App() {

  // backend
  const isLoggedIn = window.localStorage.getItem("loggedIn");

  // Function to check if the user is authenticated
  const isAuthenticated = () => {
    return isLoggedIn === "false";
  };

  // Function to handle unauthorized access
  const handleUnauthorizedAccess = () => {
    return <Navigate to="/sign-in" />;
  };


  return (
    <div className="App">
      <Router>
        <Routes path='/' element={<RootLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/carousel' element={<CarouselProperty />} />
          <Route path='/careers' element={<Careers />} />
          <Route path='/ourteam' element={<Ourteam />} />
          <Route path='/featured-properties' element={<FeaturedProperty />} />
          <Route path='/property-details' element={<PropertyDetails />} />
          <Route path='/terms-and-conditions' element={<TermsAndConditionsModal />} />
          {/* <Route path='/contact' element={<ContactUs />} /> */}
          <Route path='/about' element={<About />} />
          <Route path='/licensing' element={<Licensing />} />
          <Route path='/affiliates' element={<Affiliates />} />
          <Route path='/search' element={<SearchProperty />} />


          <Route path='/pages' element={<CareerLayout />}>
          </Route>



          <Route path='*' element={<PageNotFound />} />
          <Route
            path="/sign-in"
            element={
              isAuthenticated(false) ? handleUnauthorizedAccess() : <Login />
            }
          />

        </Routes>
        {/* <RouterProvider router={router} /> */}
        <ScrollToTop />
        <BackToTop />

        {/* backend */}
        <Routes>
          <Route
            exact
            path="/contact"
            element={
              isAuthenticated() ? (
                <div className="flex">
                  <div className="basis-[12%] h-[100vh] border">
                    <Sidebar />
                  </div>
                  <div className="basis-[88%] border">
                    <div>
                      <UserDetails />
                    </div>
                  </div>
                </div>
              ) : (
                handleUnauthorizedAccess()
              )
            }
          />

          <Route
            path="/adminhome"
            element={
              isAuthenticated() ? (
                <div className="flex">
                  <div className="basis-[12%] h-[100vh] border">
                    <Sidebar />
                  </div>
                  <div className="basis-[88%] border">
                    <div>
                      <Main />
                    </div>
                  </div>
                </div>
              ) : (
                handleUnauthorizedAccess()
              )
            }
          />
          <Route
            path="/inquiries"
            element={
              isAuthenticated() ? (
                <div className="flex">
                  <div className="basis-[12%] h-[100vh] border">
                    <Sidebar />
                  </div>
                  <div className="basis-[88%] border">
                    <div>
                      <Inquiries />
                    </div>
                  </div>
                </div>
              ) : (
                handleUnauthorizedAccess()
              )
            }
          />
          <Route
            path="/users"
            element={isAuthenticated() ? <Users /> : handleUnauthorizedAccess()}
          />
          <Route
            path="/sendinquiry"
            element={
              isAuthenticated() ? (
                <div className="flex">
                  <div className="basis-[12%] h-[100vh] border">
                    <Sidebar />
                  </div>
                  <div className="basis-[88%] border">
                    <div>
                      <SendInquiries />
                    </div>
                  </div>
                </div>
              ) : (
                handleUnauthorizedAccess()
              )
            }
          />
          <Route
            path="/addproperty"
            element={
              isAuthenticated() ? (
                <div className="flex">
                  <div className="basis-[25%] border sticky top-0 left-0">
                    <Sidebar />
                  </div>
                  <div className="basis-[75%] w-full justify-center border right-0">
                    <div>
                      <AddProperties />
                    </div>
                  </div>
                </div>
              ) : (
                handleUnauthorizedAccess()
              )
            }
          />
          {/* <Route
            path="/updateproperty"
            element={
              isAuthenticated() ? (
                <div className="flex">
                  <div className="basis-[12%] h-[100vh] border">
                    <Sidebar />
                  </div>
                  <div className="basis-[88%] w-full h-full border">
                    <div>
                      <UpdateProperty />
                    </div>
                  </div>
                </div>
              ) : (
                handleUnauthorizedAccess()
              )
            }
          /> */}
        </Routes>
        {/* <Routes> */}
        {/* <Route path="/sign-up" element={<SignUp />} /> */}
        {/* <Route
            path="/sign-in"
            element={
              isAuthenticated(false) ? handleUnauthorizedAccess() : <Login />
            }
          /> */}
        {/* </Routes> */}
      </Router>
    </div>
  );
}

export default App;
