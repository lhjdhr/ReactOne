import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, HashRouter} from 'react-router-dom'
import Pinfo from './components/pinfo'

ReactDOM.render(
    (
        <BrowserRouter>
            <Pinfo/>
        </BrowserRouter>
    ),
    document.getElementById('pinfo')
)