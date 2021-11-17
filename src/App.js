import './App.css';
import Header from './Component/Shared/Header/Header';
import Login from './Component/Login/Login/Login';
import AuthProvider from './Context/AuthProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Component/Home/Home/Home';
import Registration from './Component/Registration/Registration';
import PrivateRoute from './Component/Login/PrivateRoute/PrivateRoute';
import NotFound from './Component/NotFound/NotFound';
import Footer from './Component/Shared/Footer/Footer';
import AboutUs from './Component/AboutUs/AboutUs';
import PlaceOrder from './Component/PlaceOrder/PlaceOrder';
import ManageOrders from './Component/ManageOrders/ManageOrders';
import Dashboard from './Component/Dashboard/Dashboard';
import AddReview from './Component/Dashboard/AddReview/AddReview';
import Pay from './Component/Dashboard/Pay/Pay';
import AllProducts from './Component/AllProducts/AllProducts';
import MakeAdmin from './Component/Dashboard/MakeAdmin/MakeAdmin';
import AddProducts from './Component/AddProduct/AddProduct';
import ManageProducts from './Component/ManageProducts/ManageProducts';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/registration'>
              <Registration></Registration>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/about'>
              <AboutUs></AboutUs>
            </Route>
            <Route path='/all-products'>
              <AllProducts></AllProducts>
            </Route>
            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path='/reviews'>
              <AddReview></AddReview>
            </Route>
            <Route path='/pay'>
              <Pay></Pay>
            </Route>
            <Route path='/make-admin'>
              <MakeAdmin></MakeAdmin>
            </Route>
            <PrivateRoute path='/orderProduct/:orderId'>
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path='/manage-orders'>
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <PrivateRoute path='/manage-products'>
              <ManageProducts></ManageProducts>
            </PrivateRoute>
            <Route path='/add-products'>
              <AddProducts></AddProducts>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
