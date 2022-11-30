import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';
// import { CartProvider } from 'react-use-cart';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import About from '../pages/About';
import AccountSettings from '../pages/AccountSettings';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Movies from '../pages/Movies';
import PageNotFound from '../pages/PageNotFound';
import PricingPlans from '../pages/PricingPlans';
import Shows from '../pages/Shows';
import SignUp from '../pages/SignUp';
import FavoriteMovie from '../sub_page/FavoriteMovie';
// import FavoriteMovie from '../sub_page/FavoriteMovie';
import MovieInfo from '../sub_page/MovieInfo';
import Play from '../sub_page/Play';
import PrivacyPolicy from '../sub_page/PrivacyPolicy';
import ResetPassword from '../sub_page/ResetPassword';
import TermsOfUse from '../sub_page/TermsOfUse';





const AppRouter = () => {
  return (
    <BrowserRouter>
<CartProvider>
   <Nav/>
    <Switch>
        <Route path="/" exact component={Home} ></Route>
        <Route path="/play"  component={Play} ></Route>
        <Route path="/favorite"  component={FavoriteMovie} ></Route>

        <Route path="/movieinfo"  component={MovieInfo} ></Route>
        <Route path="/movies"  component={Movies} ></Route>
        <Route path="/shows"  component={Shows} ></Route>
        <Route path="/about"  component={About} ></Route>
        <Route path="/contact"  component={Contact} ></Route>
        <Route path="/login"  component={Login} ></Route>
        <Route path="/signup"  component={SignUp} ></Route>
        <Route path="/account"  component={AccountSettings} ></Route>
        <Route path="/pricing"  component={PricingPlans} ></Route>



        <Route path="/terms"  component={TermsOfUse} ></Route>
        <Route path="/policy"  component={PrivacyPolicy} ></Route>



        <Route path="/resetpassword"  component={ResetPassword} ></Route>


        <Route component={PageNotFound} ></Route>

    </Switch>
    <Footer/>
    </CartProvider>
    </BrowserRouter>
  )
}

export default AppRouter