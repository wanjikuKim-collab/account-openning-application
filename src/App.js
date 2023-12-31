import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Transactions from './Pages/Transactions';
import { ClerkProvider, UserButton, SignedIn,
  SignedOut,
  RedirectToSignIn,
  SignIn,
  SignUp, } from "@clerk/clerk-react";
 
if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
 

function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <SignedIn>
              <Home />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
          } />
     
        <Route path="/login" element={<SignIn />} />
        
        <Route path="/register" element={<SignUp />} />

        <Route path="/transactions" element={
          <>
            <SignedIn>
              <Transactions />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
          } />
       
        <Route path="/account-settings" element={
          <>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
          } />
      </Routes>
    </Router>
    </ClerkProvider>
   
  );
}

export default App;