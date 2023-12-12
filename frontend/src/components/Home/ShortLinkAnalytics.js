// ShortLinkAnalytics.js
import React, { useState } from 'react';
import axios from 'axios';

const ShortLinkAnalytics = () => {
    const [shortId, setShortId] = useState('');
    const [analytics, setAnalytics] = useState(null);
    const [error, setError] = useState('');

    const getAnalytics = async () => {
        try {
            const response = await axios.get(`https://shortlink-bakcend.onrender.com/api/v1/analytics/${shortId}`);
            setAnalytics(response.data);
            setError('');
        } catch (error) {
            setAnalytics(null);
            setError('Error fetching analytics');
            console.error('Error fetching analytics', error);
        }
    };

    return (
        <div className="app-container">
            <h1>Short Link Analytics</h1>
            <div className="form-container">
                <label htmlFor="shortId">Enter Short Link ID:</label>
                <input
                    type="text"
                    id="shortId"
                    value={shortId}
                    onChange={(e) => setShortId(e.target.value)}
                />
                <button onClick={getAnalytics}>Get Analytics</button>
                {analytics && (
                    <div className="analytics-container">
                        <p>Total Clicks: {analytics.totalClicks}</p>
                        <p>Analytics: {JSON.stringify(analytics.analytics)}</p>
                    </div>
                )}
                {error && <p className="error">{error}</p>}
            </div>
        </div>
    );
};

export default ShortLinkAnalytics;
