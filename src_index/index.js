import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Receipt from './components/Receipt';

ReactDOM.render(
    <React.StrictMode>
        <Header />
        <App />
        <ExpenseForm />
        <ExpenseList expenses={[]} />
        <Receipt receipt="Sample receipt data" />
    </React.StrictMode>,
    document.getElementById('root')
);
