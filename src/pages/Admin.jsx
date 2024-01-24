import React from 'react';
import {Container, Nav} from "react-bootstrap";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Posts from "./Posts";
import Users from "./Users";
import AddAdmin from "./AddAdmin";
import EditAdmin from "./EditAdmin";
import AddPost from "./AddPost";
import EditPost from "./EditPost";

function Admin() {


    return (
        <>
            <div>
                <Router>
                    <Container className="mt-3">
                        <Nav fill variant="tabs" sticky="top" defaultActiveKey="/users">
                            <Link className="ml-5" to="/users">Users</Link>
                            <Link className="ml-5" to="/posts">Posts</Link>
                        </Nav>
                    </Container>
                    <Route component={Users} exact path="/users"/>
                    <Route component={Posts} exact path="/posts"/>
                    <Route component={AddAdmin} exact path="/addAdmin"/>
                    <Route component={EditAdmin} exact path="/editAdmin"/>
                    <Route component={AddPost} exact path="/addPost"/>
                    <Route component={EditPost} exact path="/editPost"/>
                </Router>
            </div>
        </>
    );
}

export default Admin;
