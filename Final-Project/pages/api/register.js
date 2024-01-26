// pages/api/register.js

export default async function handler(req, res) {
    const { username, email, password } = req.body;
  
    try {
        const response = await fetch('http://localhost:5000/api/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log('Registration successful:', responseData.message);
        // Optionally, redirect the user to a success page or handle it as needed
        // router.push('/success'); // Import router from 'next/router'
        res.status(200).json({ message: 'Registration successful' });
      } else {
        const errorData = await response.json();
        console.error('Registration failed:', errorData.error);
        res.status(500).json({ error: 'Registration failed' });
      }
    } catch (error) {
      console.error('Error during registration:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  