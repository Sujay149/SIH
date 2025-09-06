import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            // Your login logic here
            console.log('Logging in with:', email, password);
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            navigate('/dashboard');
        } catch (err) {
            console.error('Error:', err);
            alert('Invalid credentials. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleLogin = () => {
        // Implement Google OAuth here
        console.log('Signing in with Google');
        // Redirect or handle Google auth
    };

    const handleSignup = () => {
        navigate('/register');
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                when: "beforeChildren"
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    return (
        <motion.div 
            className="login-page"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            style={{
                display: 'flex',
                minHeight: '100vh',
                fontFamily: "'Inter', sans-serif",
                background: '#f8fafc'
            }}
        >
            {/* Left Side - Illustration */}
            <motion.div 
                className="illustration-side"
                variants={itemVariants}
                style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                    color: 'white',
                    padding: '2rem',
                    textAlign: 'center'
                }}
            >
              
                <motion.h1 
                    style={{ 
                        fontSize: '2.5rem', 
                        fontWeight: '700',
                        marginBottom: '1rem'
                    }}
                >
                    Welcome Back
                </motion.h1>
                <motion.p 
                    style={{ 
                        fontSize: '1.1rem',
                        maxWidth: '500px',
                        lineHeight: '1.6'
                    }}
                >
                    Sign in to access your account and continue your journey with us.
                </motion.p>
            </motion.div>

            {/* Right Side - Login Form */}
            <motion.div 
                className="form-side"
                variants={itemVariants}
                style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '2rem',
                    background: 'white'
                }}
            >
                <motion.h2
                    style={{
                        fontSize: '2rem',
                        fontWeight: '700',
                        marginBottom: '2rem',
                        color: '#1e293b'
                    }}
                    variants={itemVariants}
                >
                    Sign In
                </motion.h2>

                {/* Google Sign-In Button */}
                <motion.button
                    onClick={handleGoogleLogin}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.75rem',
                        width: '100%',
                        maxWidth: '400px',
                        padding: '0.75rem',
                        borderRadius: '8px',
                        background: 'white',
                        color: '#1e293b',
                        border: '1px solid #e2e8f0',
                        fontSize: '1rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        marginBottom: '1.5rem'
                    }}
                    whileHover={{ 
                        background: '#f8fafc',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                    }}
                    whileTap={{ scale: 0.98 }}
                    variants={itemVariants}
                >
                    <FcGoogle style={{ fontSize: '1.5rem' }} />
                    Continue with Google
                </motion.button>

                <motion.div 
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                        maxWidth: '400px',
                        margin: '1.5rem 0',
                        color: '#94a3b8'
                    }}
                    variants={itemVariants}
                >
                    <div style={{ flex: 1, height: '1px', background: '#e2e8f0' }} />
                    <span style={{ padding: '0 1rem' }}>or</span>
                    <div style={{ flex: 1, height: '1px', background: '#e2e8f0' }} />
                </motion.div>

                <motion.form 
                    onSubmit={handleLogin}
                    style={{
                        width: '100%',
                        maxWidth: '400px'
                    }}
                    variants={containerVariants}
                >
                    <motion.div 
                        className="input-group"
                        variants={itemVariants}
                        style={{ marginBottom: '1.5rem' }}
                    >
                        <label 
                            htmlFor="email"
                            style={{
                                display: 'block',
                                marginBottom: '0.5rem',
                                color: '#475569',
                                fontWeight: '500'
                            }}
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={{
                                width: '100%',
                                padding: '0.75rem 1rem',
                                borderRadius: '8px',
                                border: '1px solid #e2e8f0',
                                fontSize: '1rem',
                                transition: 'all 0.2s ease',
                                outline: 'none'
                            }}
                            whileFocus={{
                                borderColor: '#6366f1',
                                boxShadow: '0 0 0 3px rgba(99, 102, 241, 0.2)'
                            }}
                        />
                    </motion.div>

                    <motion.div 
                        className="input-group"
                        variants={itemVariants}
                        style={{ marginBottom: '2rem' }}
                    >
                        <label 
                            htmlFor="password"
                            style={{
                                display: 'block',
                                marginBottom: '0.5rem',
                                color: '#475569',
                                fontWeight: '500'
                            }}
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={{
                                width: '100%',
                                padding: '0.75rem 1rem',
                                borderRadius: '8px',
                                border: '1px solid #e2e8f0',
                                fontSize: '1rem',
                                transition: 'all 0.2s ease',
                                outline: 'none'
                            }}
                            whileFocus={{
                                borderColor: '#6366f1',
                                boxShadow: '0 0 0 3px rgba(99, 102, 241, 0.2)'
                            }}
                        />
                    </motion.div>

                    <motion.button
                        type="submit"
                        disabled={isLoading}
                        style={{
                            width: '100%',
                            padding: '0.75rem',
                            borderRadius: '8px',
                            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                            color: 'white',
                            border: 'none',
                            fontSize: '1rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            marginBottom: '1.5rem',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {isLoading ? (
                            <motion.span
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                style={{
                                    display: 'inline-block'
                                }}
                            >
                                ⏳
                            </motion.span>
                        ) : (
                            'Sign In'
                        )}
                    </motion.button>
                </motion.form>

                <motion.div 
                    variants={itemVariants}
                    style={{
                        textAlign: 'center',
                        color: '#64748b'
                    }}
                >
                    <p style={{ marginBottom: '1rem' }}>Don't have an account?</p>
                    <motion.button
                        onClick={handleSignup}
                        style={{
                            padding: '0.75rem 1.5rem',
                            borderRadius: '8px',
                            background: 'white',
                            color: '#6366f1',
                            border: '1px solid #6366f1',
                            fontSize: '1rem',
                            fontWeight: '600',
                            cursor: 'pointer'
                        }}
                        whileHover={{ 
                            background: '#f1f5f9'
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Create Account
                    </motion.button>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Login;