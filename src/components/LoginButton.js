import React, { Component } from 'react';
import {
    Button,
    IconButton,
    Menu,
    MenuItem,
    ListItemText,
} from '@material-ui/core';

import { AccountCircle } from '@material-ui/icons';
import { withAuth } from '@okta/okta-react';


class LoginButton extends Component {
    state = {
        authenticated: null,
        user: null,
        menuAnchorEl: null,
    };
    componentDidUpdate() {
        this.checkAuthentication();
    }
    componentDidMount() {
        this.checkAuthentication();
    }