import React from 'react';
import './ExpenseList.css';

function ExpenseList({ expenses }) {
    return (
        <div className="list">
            <ul>
                {expenses.map((expense, index) => (
                    <li key={index}>{expense}</li>
                ))}
            </ul>
        </div>
    );
}

export default ExpenseList;
