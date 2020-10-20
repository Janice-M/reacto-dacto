import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
} from '@material-ui/core';

    const AppHeader = () => (
        <AppBar position="static">
        <Toolbar>
            <Typography variant="h4" color="inherit">
            Jan Reacto Dacto Scato App
            </Typography>
        </Toolbar>
        </AppBar>
    );

export default AppHeader;