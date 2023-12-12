import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./ShotLinkForm.css"
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../actions/userAction';
import { useNavigate } from 'react-router-dom';


const ShortLinkForm = () => {
    const [url, setUrl] = useState('');
    const navigate = useNavigate();
    const [shortId, setShortId] = useState('');
    const [error, setError] = useState('');
    const { isAuthenticated } = useSelector((state) => state.user);
    console.log(isAuthenticated);

    const dispatch = useDispatch();

    const createShortLink = async () => {
        try {
            const response = await axios.post('https://shortlink-bakcend.onrender.com/api/v1/short-links', { url });
            setShortId(response.data.id);
            setError('');
        } catch (error) {
            setShortId('');
            setError('Error creating short link');
            console.error('Error creating short link', error);
        }
    };

    const handleLogout = () => {
        // Add any additional logout logic here
        dispatch(logout());  // Dispatch the logout action
    };
    const handleLogin = () => {
        navigate("/")
    };

    const handleShortId = () => {
        navigate("/shortanalytic")
    }

    return (
        <div className="app-container">
            <h1>URL Shortener</h1>
            <div className="form-container">
                <label htmlFor="url">Enter URL:</label>
                <input
                    type="text"
                    id="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />
                <button onClick={createShortLink}>Create Short Link</button>
                {shortId && <p>Short Link: {shortId}</p>}

                {error && <p className="error">{error}</p>}

                {/* Conditional rendering for logout/login button */}
                <div className="button-container">
                    <button onClick={handleShortId}>To Get ShortId</button>
                    {isAuthenticated ? (
                        <button onClick={handleLogout}>Logout</button>
                    ) : (
                        <button onClick={handleLogin}>Login</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ShortLinkForm;
