import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Router from './Router'

const WithRouter = () => {
    return(
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    )
}

ReactDOM.render( 
    <WithRouter />,
document.getElementById('root')
);