import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'

export const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
            <BrowserRouter>
                <Switch>
                    <Route 
                        exact
                        path="/auth/login"
                        component={ Login }
                    />

                    <Route 
                        exact
                        path="/auth/register"
                        component={ Register }
                    />

                    <Redirect to="/auth/login" />

                </Switch>
                </BrowserRouter>
            </div>

        </div>
    )
}