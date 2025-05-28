'use client';
import { useState } from 'react';
import { supabase } from '@/config/supabaseClient';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  async function login(e) {
    e.preventDefault();
    
    try {
      const { data: userData, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        alert(error.message);
        return;
      }

    } catch (err) {
      console.error('Unexpected error:', err);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <h1>Log In</h1>
      <form onSubmit={login}>
        <label>Email: </label>
        <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange}/>
        <br/>
        <br/>
        <label>Password: </label>
        <input id="password" name="password" type="password" required value={formData.password} onChange={handleChange}/>
        <br/>
        <br/>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;