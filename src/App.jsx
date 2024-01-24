import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Auth from './pages/Auth';
import {AuthContext} from './context/Auth';
import PrivateRoute from './PrivateRoute';
import RootAuth from './RootAuth';
import {Container, Nav, Navbar} from "react-bootstrap";
import NotFoundPage from "./pages/NotFoundPage";
import SinglePost from "./pages/SinglePost";


function App() {
    const [authData, setAuthData] = useState(true);

        const setAuth = data => {
            setAuthData(data);
        };


    const UserInfo = () => {
        if (!authData) return null;
        return <span>Hello {authData.email}</span>;
    };

    return (
        <AuthContext.Provider value={{authData, setAuth}}>
            <Router>
                <RootAuth>

                    <Navbar collapseOnSelect sticky="top" expand='sm' bg='dark' variant='dark'>
                        <Container>
                            <Navbar.Brand className="mb-1 " to="/" > Micro Blog</Navbar.Brand>
                            <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                            <Navbar.Collapse id='responsive-navbar-nav'>
                                <Nav className="mr-auto ">
                                    <Link className="ml-2" to='/'>Home</Link>
                                    {authData ? <Link className="ml-2" to='/admin'>Admin Page</Link> : ""}
                                </Nav>
                                <Nav className='ml-auto mt-2'>
                                    {authData ? <Link className="ml-2" to='/logout'>Logout</Link> : <Link className="ml-2" to='/login'>Login</Link>}
                                    <Link className="ml-2" to='#'><UserInfo/></Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

                </RootAuth>

                <Route component={Home} exact path="/"/>
                <Route component={Login} exact path="/login"/>
                <Route component={Auth} exact path="/auth"/>
                <Route component={Logout} exact path="/logout"/>
                <Route component={SinglePost} exact path="/singlePost"/>

                <Route component={NotFoundPage}  path="/pages/NotFoundPage"/>
                <PrivateRoute component={Admin} path="/admin"/>
            </Router>

        </AuthContext.Provider>
    );
}

export default App;
