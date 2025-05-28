'use client'

import { useState } from "react";
import { supabase } from '@/config/supabaseClient';

export default function Signup() {
   const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
    async function signUpNewUser() {
    try {
      const { data: userData, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          emailRedirectTo: `http://localhost:3001`,
        },
      });

      if (error) {
        console.error('Error during sign-up:', error.message);
        return;
      }

      if (userData) {
        alert("Verification email sent! Please check your inbox (and spam folder).");
        console.log('User signed up successfully:', userData);
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
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={signUpNewUser}>
        <label>Email: </label>
        <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange}/>
        <br/>
        <br/>
        <label>Password: </label>
        <input id="password" name="password" type="password" required value={formData.password} onChange={handleChange}/>
        <br/>
        <br/>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
