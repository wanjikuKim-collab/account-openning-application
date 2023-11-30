import React, { useState } from 'react';
import './Transactions.css';

function Transactions() {
  const [amount, setAmount] = useState('');

  const handleCredit = () => {
    // Implement credit logic here
  };

  const handleDebit = () => {
    // Implement debit logic here
  };

  return (
    <div>
      <h2>Transactions</h2>
      <form>
        <label>Amount:</label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />

        <button type="button" onClick={handleCredit}>
          Credit
        </button>

        <button type="button" onClick={handleDebit}>
          Debit
        </button>
      </form>
    </div>
  );
}

export default Transactions;