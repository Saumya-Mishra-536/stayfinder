import React from 'react';
import Navbar from './NavBar';
import LoginForm from './LoginForm';
import Footer from './Footer';

const LoginPage = () => {
  return (
    <div>
      <Navbar />
      <div>
        <LoginForm />
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
