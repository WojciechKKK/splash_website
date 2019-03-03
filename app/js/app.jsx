import ReactDOM from 'react-dom';
import React, { Component } from 'react'
import '../styles/style.css'
import Design from '../components/Design.jsx'


const App = () => <Design />

ReactDOM.render(
    <App />,
    document.getElementById('app')
)
