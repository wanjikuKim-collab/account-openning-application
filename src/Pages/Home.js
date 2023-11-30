// src/components/Home.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { ClerkProvider, UserButton, SignedIn,
   } from "@clerk/clerk-react";
 
   import Transaction from './Transaction';

const Home = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const storedTransactions = JSON.parse(localStorage.getItem('transactions')) || [];
    setTransactions(storedTransactions);
  }, []);
  const [balance, setBalance] = useState()
  // Fetch the balance of the account on page load
  // useEffect(() => {
  //   const storedBalance = JSON.parse(localStorage.getItem('balance')) || [];
  //   setBalance(storedBalance);
  // }, []);

  return (
    <div className=" relative flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className='absolute top-3 right-3 '>
          <UserButton/>
        </div>
      <div className="w-1/4 bg-white border-r p-4">
      

        <div className="dashboard-section">
            <h3 className="section-title">Quick Actions</h3>
            <ul className="section-list">
              <li>Make a transaction</li>
              <Link to="/transactions" className="block p-2 bg-blue-500 text-white rounded-full">
          Transactions
           </Link>
            </ul>
          </div>
      </div>

      {/* Main Dashboard */}
      <div className="w-3/4 p-8">
        <h2 className="text-3xl font-bold mb-6 text-center mt-20">Welcome to the Account Opening App</h2>

        {/* Dashboard Sections */}
        <div className="flex-col">
          {/* Account Overview */}
          <div className="mb-10">
            <h3 className="font-bold">Account Overview</h3>
            <p className="section-description">
              View a summary of your account, including current balance, recent transactions, and account status.
            </p>
            <div className='my-8'>
            <p className=''> Balance</p>
            <p className=''> ${balance}</p>
            </div>
            <div className=''>
            {transactions.slice(-5).map((transaction, index) => (
    <Transaction key={index} transaction={transaction} />
  ))}
  </div>
          </div>

          {/* Quick Actions */}
          

          {/* Notifications */}
          <div className=" bg-slate-300 w-70 h-full">
            <h3 className="font-bold">Notifications</h3>
            <p className="font font-medium">
              Stay informed about account updates, 
              transaction confirmations, and important announcements.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
      
      </div>
    </div>
  );
};

export default Home;