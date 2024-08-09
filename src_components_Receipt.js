import React from 'react';
import './Receipt.css';

function Receipt({ receipt }) {
    return (
        <div className="receipt">
            <h2>Receipt</h2>
            <p>{receipt}</p>
        </div>
    );
}

export default Receipt;
