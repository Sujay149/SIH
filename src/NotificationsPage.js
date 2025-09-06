import React, { useState, useEffect } from 'react';
import './NotificationsPage.css'; // Custom CSS for styling

const NotificationsPage = ({ setNotificationCount }) => {
    const [notifications, setNotifications] = useState([]);

    // Example Gujarat-based startup notification data
    const notificationData = [
        {
            profileImage: 'https://via.placeholder.com/40', // Placeholder, replace with actual image URL
            name: "GreenTech Innovations",
            time: "2h",
            message: "GreenTech is revolutionizing clean energy solutions in Gujarat with solar power initiatives for rural areas.",
        },
        {
            profileImage: 'https://via.placeholder.com/40',
            name: "AgroNext",
            time: "3h",
            message: "AgroNext uses AI to help farmers in Gujarat with crop yield predictions, pest management, and market analytics.",
        },
        {
            profileImage: 'https://via.placeholder.com/40',
            name: "EduCare Solutions",
            time: "5h",
            message: "EduCare is transforming the education landscape in Gujarat by providing affordable and accessible e-learning platforms.",
        },
        {
            profileImage: 'https://via.placeholder.com/40',
            name: "HealthHub Gujarat",
            time: "8h",
            message: "HealthHub focuses on telemedicine and remote patient monitoring services, making healthcare more accessible in Gujarat's rural areas.",
        },
        {
            profileImage: 'https://via.placeholder.com/40',
            name: "SmartCity Innovations",
            time: "12h",
            message: "SmartCity Innovations is working on smart traffic and waste management solutions to help make cities in Gujarat more efficient.",
        },
        {
            profileImage: 'https://via.placeholder.com/40',
            name: "SmartCity Innovations",
            time: "12h",
            message: "SmartCity Innovations is working on smart traffic and waste management solutions to help make cities in Gujarat more efficient.",
        },
        {
            profileImage: 'https://via.placeholder.com/40',
            name: "SmartCity Innovations",
            time: "12h",
            message: "SmartCity Innovations is working on smart traffic and waste management solutions to help make cities in Gujarat more efficient.",
        },
        {
            profileImage: 'https://via.placeholder.com/40',
            name: "SmartCity Innovations",
            time: "12h",
            message: "SmartCity Innovations is working on smart traffic and waste management solutions to help make cities in Gujarat more efficient.",
        },
        {
            profileImage: 'https://via.placeholder.com/40',
            name: "SmartCity Innovations",
            time: "12h",
            message: "SmartCity Innovations is working on smart traffic and waste management solutions to help make cities in Gujarat more efficient.",
        },
        {
            profileImage: 'https://via.placeholder.com/40',
            name: "SmartCity Innovations",
            time: "12h",
            message: "SmartCity Innovations is working on smart traffic and waste management solutions to help make cities in Gujarat more efficient.",
        },
        {
            profileImage: 'https://via.placeholder.com/40',
            name: "SmartCity Innovations",
            time: "12h",
            message: "SmartCity Innovations is working on smart traffic and waste management solutions to help make cities in Gujarat more efficient.",
        },
        {
            profileImage: 'https://via.placeholder.com/40',
            name: "SmartCity Innovations",
            time: "12h",
            message: "SmartCity Innovations is working on smart traffic and waste management solutions to help make cities in Gujarat more efficient.",
        },  {
            profileImage: 'https://via.placeholder.com/40',
            name: "SmartCity Innovations",
            time: "12h",
            message: "SmartCity Innovations is working on smart traffic and waste management solutions to help make cities in Gujarat more efficient.",
        },
        {
            profileImage: 'https://via.placeholder.com/40',
            name: "SmartCity Innovations",
            time: "12h",
            message: "SmartCity Innovations is working on smart traffic and waste management solutions to help make cities in Gujarat more efficient.",
        },
    ];

    useEffect(() => {
        setNotifications(notificationData);
        setNotificationCount(notificationData.length);
    }, [setNotificationCount]);

    return (
        <div className="notifications-page">
            <h1>Notifications</h1>
            <div className="notification-list">
                {notifications.map((notification, index) => (
                    <div key={index} className="notification-item">
                        <img
                            src={notification.profileImage}
                            alt="Profile"
                            className="profile-image"
                        />
                        <div className="notification-content">
                            <div className="notification-header">
                                <strong>{notification.name}</strong>
                                <span className="notification-time">{notification.time}</span>
                            </div>
                            <p className="notification-message">{notification.message}</p>
                            {notification.action && (
                                <button className="action-button">{notification.action}</button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NotificationsPage;
