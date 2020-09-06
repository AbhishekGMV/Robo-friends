import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import Signin from "./components/Signin";
import 'tachyons';

ReactDOM.render(
    <>
        <Signin>
            <App/>
        </Signin>
    </>,
    document.getElementById('root')
);