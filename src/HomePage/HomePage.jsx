import React from 'react';

import {AgGridReact} from 'ag-grid-react';

// import './../../node_modules/ag-grid/dist/styles/ag-grid.css';
// import './../../node_modules/ag-grid/dist/styles/ag-theme-dark.css';


// import 'ag-grid/dist/styles/ag-grid.css';
// import 'ag-grid/dist/styles/ag-theme-dark.css';


class HomePage extends React.Component {
    constructor(props) {
        super();
        this.state = {
            columnDefs: [
                { headerName: 'Name', field: 'name', filter: "agTextColumnFilter", sortable: true },
                { headerName: 'Username', field: 'username', filter: "agTextColumnFilter", sortable: true },
                { headerName: 'Email', field: 'email', filter: "agTextColumnFilter", sortable: true },
                { headerName: 'Phone', field: 'phone', filter: "agNumberColumnFilter", sortable: true },
                { headerName: 'Website', field: 'website', filter: "agTextColumnFilter" },
                {
                    headerName: 'Address', field: 'address', filter: "agTextColumnFilter", cellRenderer: function (element) {
                        return element.value.street + ', ' + element.value.suite + ', ' + element.value.city + ', ' + element.value.zipcode;
                    }
                },
            ],
            users: []
        }

    }

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(res => res.json())
            .then(json => this.setState({ users: json }));
    }

    render() {
        return (
            <div
                style={{
                    height: '500px',
                    width: '100%'
                }}
            >
                <AgGridReact
                    columnDefs={this.state.columnDefs}
                    rowData={this.state.users}>
                </AgGridReact>
            </div>
        );
    }
}

export { HomePage };