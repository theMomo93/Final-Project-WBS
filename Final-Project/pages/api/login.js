// pages/api/login.js

export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }
  
    const { email, password } = req.body;
  
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log('Login successful:', responseData.message);
        // Optionally, redirect the user to a success page or handle it as needed
        // router.push('/dashboard'); // Import router from 'next/router'
        res.status(200).json({ message: 'Login successful' });
      } else {
        const errorData = await response.json();
        console.error('Login failed:', errorData.error);
        res.status(401).json({ error: 'Login failed' });
      }
    } catch (error) {
      console.error('Error during login:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  