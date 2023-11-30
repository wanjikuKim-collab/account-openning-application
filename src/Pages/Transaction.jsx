// Transaction.js
import React from 'react';

function Transaction({ transaction }) {
    return (
        <table className="table-auto">
     <thead>
    <tr>
      <th className='w-60 mx-10'>Date </th>
      <th className='w-10'>Type</th>
      <th className='w-20'>Amount</th>
    </tr>
  </thead>
        <tr className='w-60'>
            <td className='w-20'>{transaction.date}</td>
            <td className='w-20'>{transaction.type}</td>
            <td>${transaction.amount}</td>
            
        </tr>
        </table>
    );
}

export default Transaction;