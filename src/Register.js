import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './UserRegistrationForm.css';

const Signup = () => {
    const [role, setRole] = useState('vendor'); // Default role
    const [fullName, setFullName] = useState('');
    const [dob, setDob] = useState(''); // Date of Birth
    const [phone, setPhone] = useState(''); // Phone number
    const [address, setAddress] = useState(''); // Address
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const url = role === 'vendor' ? 'http://localhost:5000/api/vendor/signup' : 'http://localhost:5000/api/farmer/signup';
            const response = await axios.post(url, { fullName, dob, phone, address, email, password });
            console.log('Signup response:', response); // Log full response for debugging
            navigate('/login'); // Redirect to login page after signup
        } catch (err) {
            if (err.response) {
                // Server responded with a status code other than 2xx
                console.error('Server Error:', err.response.data);
                alert(`Error: ${err.response.data.message || 'Signup failed.'}`);

            } else if (err.request) {
                // Request was made but no response was received
                console.error('No Response:', err.request);
                alert('No response from server. Please try again later.');
            } else {
                // Something else happened
                console.error('Error:', err.message);
                alert('Error during signup. Please check the console for more details.');
            }
        }
    };

    return (
        <div className='row1'>
        <div className="signup-container">
            <h2>Signup</h2>
            <form onSubmit={handleSignup} className="signup-form">
                
                <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Full Name"
                    className="input-field"
                />
                <input
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    placeholder="Date of Birth"
                    className="input-field"
                />
                <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone Number"
                    className="input-field"
                />
                <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Address"
                    className="input-field"
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="input-field"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="input-field"
                />
                
                <button type="submit" className="signup-button">Signup</button>
            </form>
        </div>
        <div className='about-container'>
            <h1>We Transform the Agriculture World</h1>
            <p>Join us to revolutionize farming and trade in the agriculture sector. Our platform connects farmers and vendors, empowering growth and innovation in the industry.</p>
        </div>
        </div>
    );
};

export default Signup;
