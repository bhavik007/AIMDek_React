import React from 'react';
import { Router, Route } from 'react-router-dom';
import { history } from '../_helpers';

import { PrivateRoute } from '@/_components';
import { HomePage } from '@/HomePage';
import { PhotosPage } from '@/PhotosPAge';

// import 'ag-grid/dist/styles/ag-grid.css';
// import 'ag-grid/dist/styles/ag-theme-dark.css';


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router history={history}>
                <div className="container-fullwidth">
                    <PrivateRoute exact path="/" component={HomePage} />
                    <Route path="/photo" component={PhotosPage} />
                </div>
            </Router>
        );
    }
}

export { App }; 