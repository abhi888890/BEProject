// AuthPage.js
import React, { useState } from 'react';
import '../css/Login.css';
import Layout from './Layout';

const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleToggleMode = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSubmit = () => {
    if (isSignIn) {
      // Implement sign-in logic
      console.log('Signing in with:', { username, password });
    } else {
      // Implement sign-up logic
      console.log('Signing up with:', { name, email, username, password, confirmPassword });
    }
  };

  return (
    <Layout>
    <div className="auth-form">
      <h2>{isSignIn ? 'Sign In' : 'Sign Up'}</h2>
      <form>
        {!isSignIn && (
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
        )}
        {!isSignIn && (
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
        )}
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        {!isSignIn && (
          <label>
            Confirm Password:
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </label>
        )}
        <button type="button" onClick={handleSubmit}>{isSignIn ? 'Sign In' : 'Sign Up'}</button>
      </form>
      <p onClick={handleToggleMode}>
        {isSignIn ? 'Don\'t have an account? Sign up.' : 'Already have an account? Sign in.'}
      </p>
    </div>
    </Layout>
  );
};

export default AuthPage;


