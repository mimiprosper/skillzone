// import LogIn from "./components/LogIn";
// import AboutUs from "./sections/AboutUs";
// import CreateAccount from "./sections/CreateAccount";
// import CustomerReview from "./sections/CustomerReview";
// import Footer from "./sections/Footer";
// import Hero from "./sections/Hero";
// import Message from "./sections/Message";
// import Inbox from "./sections/Inbox";
// import MyAccount from "./sections/MyAccount";
// import PopularProducts from "./sections/PopularProducts";
// import Profile from "./sections/Profile";
// import SearchResults from "./sections/SearchResults";
// import Services from "./sections/Services";
// import SignUp from "./sections/SignUp";
// import Subscribe from "./sections/Subscribe";
// import SuperQuality from "./sections/SuperQuality";


import Nav from "./components/Nav";


import { Routes, Route } from "react-router-dom";
import Home from "./sections/Home";
import SignIn from "./sections/SignIn";
import SignUp from "./sections/SignUp";
import NoMatch from "./components/NoMatch";
import AboutUs from "./sections/AboutUs";
import PopularProducts from "./sections/PopularProducts";
import ContactUs from "./sections/ContactUs";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/join" element={<SignUp />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<PopularProducts/>}/>
        <Route path='/contact-us' element={<ContactUs/>}/>
        <Route path="*" element={<NoMatch />} />

        {/* <Nav /> */}
        {/* <Hero /> */}
        {/* <AboutUs /> */}
        {/* <PopularProducts /> */}
        {/* <SuperQuality /> */}
        {/* <Services /> */}
        {/* <CustomerReview /> */}
        {/* <Subscribe /> */}
        {/* <CreateAccount/> */}
        {/* <LogIn/> */}
        {/* <SignUp/> */}
        {/* <SearchResults/> */}
        {/* <MyAccount /> */}
        {/* <Profile /> */}
        {/* <Inbox/> */}
        {/* <Message/> */}
        {/* <Footer /> */}
      </Routes>
    </>

  );
};

export default App;
