import * as React from 'react';
import './Dashboard.css'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";

import { NavHashLink } from 'react-router-hash-link';
import { Nav } from 'react-bootstrap';
import MyOrders from './MyOrders/MyOrders';
import AddReview from './AddReview/AddReview';
import Pay from './Pay/Pay';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import useAuth from '../../hooks/useAuth';
import AddProducts from '../AddProduct/AddProduct';
import ManageProducts from '../ManageProducts/ManageProducts';
import ManageOrders from '../ManageOrders/ManageOrders';
const drawerWidth = 240;

function Dashboard(props) {
    const { admin } = useAuth();
    let { path, url } = useRouteMatch();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <div className="w-full px-4 py-5 text-left ml-auto">
                <ul className="list-unstyled">
                    {admin || <div>
                        <li>
                            <Nav.Link as={NavHashLink} className="text-blue-200 font-semibold transform hover:text-white transition duration-500 border-b border-gray-500" to={`${url}`} activeStyle={{ color: 'white' }}>My Orders</Nav.Link>

                        </li>
                        <li>
                            <Nav.Link as={NavHashLink} className="text-blue-200 font-semibold transform hover:text-white transition duration-500 border-b border-gray-500" to={`${url}/reviews`} activeStyle={{ color: 'white' }}>Reviews</Nav.Link>
                        </li>
                        <li>
                            <Nav.Link as={NavHashLink} className="text-blue-200 font-semibold transform hover:text-white transition duration-500 border-b border-gray-500" to={`${url}/pay`} activeStyle={{ color: 'white' }}>Pay</Nav.Link>
                        </li>
                    </div>}
                    {admin && <div>
                        <li>
                            <Nav.Link as={NavHashLink} className="text-blue-200 font-semibold transform hover:text-white transition duration-500 border-b border-gray-500" to={`${url}`} activeStyle={{ color: 'white' }}>Make Admin</Nav.Link>
                        </li>
                        <li>
                            <Nav.Link as={NavHashLink} className="text-blue-200 font-semibold transform hover:text-white transition duration-500  border-b border-gray-500" to={`${url}/add-products`} activeStyle={{ color: 'white' }}>Add a Products</Nav.Link>
                        </li>
                        <li>
                            <Nav.Link as={NavHashLink} className="text-blue-200 font-semibold transform hover:text-white transition duration-500  border-b border-gray-500" to={`${url}/manage-products`} activeStyle={{ color: 'white' }}>Manage Products</Nav.Link>
                        </li>
                        <li>
                            <Nav.Link as={NavHashLink} className="text-blue-200 font-semibold transform hover:text-white transition duration-500" to={`${url}/manage-orders`} activeStyle={{ color: 'white' }}>Manage Orders</Nav.Link>
                        </li>
                    </div>}
                </ul>
            </div>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar className="bg-white shadow-sm">
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className="mx-auto">
                        <h3 className=" text-center text-4xl font-semibold text-gray-800">Dashboard</h3>
                    </div>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    {admin || <Route exact path={path}>
                        <MyOrders></MyOrders>
                    </Route>}
                    <Route path={`${path}/reviews`}>
                        <AddReview></AddReview>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    {admin && <Route exact path={path}>
                        <MakeAdmin></MakeAdmin>
                    </Route>}
                    <Route path={`${path}/add-products`}>
                        <AddProducts></AddProducts>
                    </Route>
                    <Route path={`${path}/manage-products`}>
                        <ManageProducts></ManageProducts>
                    </Route>
                    <Route path={`${path}/manage-orders`}>
                        <ManageOrders></ManageOrders>
                    </Route>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    window: PropTypes.func,
};

export default Dashboard;
