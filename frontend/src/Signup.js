// src/App.js
import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [phone, setPhone] = useState('');
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');

    const handleSignup = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/signup', { fname,lname,  username, email, phone, password });
            // console.log(response.data); 
            if (response.data.message) {
                setMessage(response.data.message);
            } else {
                setMessage('Error: Something went wrong');
            }
        } catch (error) {
            // console.error('Signup error:', error); 
            setMessage('Error: ' + error.response?.data.error || 'Something went wrong');
        }
    };


    return (
        <div>
            <h1>Sign Up</h1>

            <input
                type="text"
                name="fname"
                placeholder="Last Name"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
            />

            <input
                type="text"
                name="lname"
                placeholder="Last Name"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
            />

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <input
                type="number"
                name="phone"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSignup}>Sign Up</button>
            {message && <p>{message}</p>}
        </div>
    );
};
export default Signup;
