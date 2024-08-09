import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm() {
    const [expense, setExpense] = useState('');

    const handleChange = (e) => {
        setExpense(e.target.value);
    };

    return (
        <div className="form">
            <input type="text" value={expense} onChange={handleChange} placeholder="Enter expense" />
        </div>
    );
}

export default ExpenseForm;
