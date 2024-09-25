import { useNavigate } from 'react-router-dom';

const FeatureItem = ({ icon, title, description, navigateTo }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(navigateTo); // Navigate to the provided route path
  };

  return (
    <div className="feature-item" onClick={handleNavigation} style={{ cursor: 'pointer' }}>
      <div className="feature-icon">{icon}</div>
      <h2 className="feature-title">{title}</h2>
      <p className="feature-description">{description}</p>
    </div>
  );
};

export default FeatureItem;
