/* eslint-disable no-dupe-keys */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Pie, Line } from 'react-chartjs-2';
import axios from 'axios';

ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const About = () => {
  const [counts, setCounts] = useState({
    newTickets: 0,
    closedToday: 0,
    newReplies: 0,
    followers: 0,
    earnings: 0,
    products: 0,
  });
  const [modalContent, setModalContent] = useState(null);

  const cardRefs = useRef([]);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0) scale(1)';
        }
      });
    }, { threshold: 0.2 });

    cardRefs.current.forEach(card => card && observer.observe(card));
    sectionRefs.current.forEach(section => section && observer.observe(section));

    return () => {
      cardRefs.current.forEach(card => card && observer.unobserve(card));
      sectionRefs.current.forEach(section => section && observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const countsResponse = await axios.get('/api/dashboard/counts');
        setCounts(countsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchCounts();
  }, []);

  useEffect(() => {
    const animateNumbers = (targetValue, setState) => {
      let count = 0;
      const step = Math.ceil(targetValue / 80);
      const interval = setInterval(() => {
        if (count < targetValue) {
          count += step;
          if (count > targetValue) count = targetValue;
          setState(count);
        } else {
          clearInterval(interval);
        }
      }, 20);
    };

    animateNumbers(10, (value) => setCounts(prev => ({ ...prev, newTickets: value })));
    animateNumbers(100, (value) => setCounts(prev => ({ ...prev, closedToday: value })));
    animateNumbers(20, (value) => setCounts(prev => ({ ...prev, newReplies: value })));
    animateNumbers(50, (value) => setCounts(prev => ({ ...prev, followers: value })));
  }, []);

  const pieData = {
    labels: ['Research', 'IPR', 'Innovation', 'Startups', 'Support'],
    datasets: [{
      data: [40, 30, 20, 50, 10],
      backgroundColor: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD'],
      borderWidth: 2,
      borderColor: '#ffffff',
      hoverOffset: 10,
    }],
  };

  const lineData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Activity Trend',
      data: [12, 19, 3, 5, 2, 3, 9],
      fill: true,
      backgroundColor: 'rgba(78, 205, 196, 0.2)',
      borderColor: '#4ECDC4',
      tension: 0.4,
      pointBackgroundColor: '#fff',
      pointBorderColor: '#4ECDC4',
      pointHoverRadius: 8,
      pointHoverBackgroundColor: '#4ECDC4',
    }],
  };

  const cardData = [
    { value: counts.newTickets >= 10 ? '10+' : counts.newTickets, label: 'Start-Ups', icon: '🚀' },
    { value: counts.closedToday >= 100 ? '100+' : counts.closedToday, label: 'Researches', icon: '🔬' },
    { value: counts.newReplies >= 20 ? '20+' : counts.newReplies, label: 'Innovations', icon: '💡' },
    { value: counts.followers >= 50 ? '50+' : counts.followers, label: 'IPR', icon: '📝' },
  ];

  const features = [
    {
      title: 'Research Management',
      icon: '🔍',
      image: 'https://images.unsplash.com/photo-1552664688-66b0f2fc3170?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
      shortDescription: 'Add, track, and manage research projects efficiently.',
      fullDescription: 'Our Research Management feature provides a robust system for researchers to add, track, and manage their projects efficiently. Users can create detailed project profiles, set milestones, monitor progress through intuitive dashboards, and generate comprehensive reports. The system supports document uploads, team collaboration, and integrates with external research databases to streamline workflows and ensure all research activities are centralized and accessible.'
    },
    {
      title: 'IPR & Patent Management',
      icon: '📜',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlijf=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
      shortDescription: 'Monitor patent statuses and manage intellectual property.',
      fullDescription: 'The IPR & Patent Management module offers a sophisticated platform to monitor patent statuses, track application processes, and manage intellectual property portfolios. It includes automated alerts for renewal deadlines, detailed tracking of patent examination stages, and secure storage for sensitive IP documents. This feature helps inventors and organizations protect their innovations while maintaining compliance with legal requirements.'
    },
    {
      title: 'Innovation Support',
      icon: '💡',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
      shortDescription: 'Resources and funding for innovators.',
      fullDescription: 'Innovation Support is designed to nurture creativity by providing innovators with essential resources, funding opportunities, and collaboration tools. This feature connects users with industry experts, offers access to innovation labs, and facilitates grant applications. It also includes a dedicated space for idea incubation, prototyping support, and feedback mechanisms to help transform concepts into viable products or services.'
    },
    {
      title: 'Start-up Assistance',
      icon: '🚀',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
      shortDescription: 'Support for start-up registration and growth.',
      fullDescription: 'Our Start-up Assistance feature simplifies the journey for entrepreneurs by facilitating start-up registration, providing access to critical resources, and offering mentorship programs. It includes a step-by-step registration wizard, a curated library of business templates, and connections to funding opportunities. Additionally, it offers one-on-one mentorship from seasoned entrepreneurs and regular workshops to enhance business skills.'
    },
    {
      title: 'Collaboration & Networking',
      icon: '🤝',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
      shortDescription: 'Connect researchers, start-ups, and investors.',
      fullDescription: 'Collaboration & Networking connects researchers, start-ups, and investors to foster a vibrant innovation ecosystem. This feature includes a professional networking platform, virtual meeting rooms, and community forums. Users can join interest-based groups, participate in collaborative projects, and attend networking events, all designed to build meaningful partnerships and drive collective success.'
    },
    {
      title: 'Funding & Support Programs',
      icon: '💰',
      image: 'https://images.unsplash.com/photo-1551288049-b5f3c2c8c354?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
      shortDescription: 'Financial and mentorship support for projects.',
      fullDescription: 'Funding & Support Programs provide financial and mentorship backing for emerging projects. This feature offers access to government grants, private investment opportunities, and crowdfunding support. It includes detailed application guides, financial planning tools, and personalized mentorship from industry leaders to ensure projects have the resources and guidance needed to thrive.'
    },
  ];

  const openModal = (feature) => {
    setModalContent(feature);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <div style={{
      maxWidth: '1440px',
      margin: '0 auto',
      padding: '3rem 2.5rem',
      fontFamily: "'Inter', sans-serif",
      color: '#1F2937',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e7eb 100%)',
      minHeight: '100vh',
      position: 'relative',
    }}>
      {/* Header Section */}
      <div style={{
        textAlign: 'center',
        marginBottom: '4rem',
        position: 'relative',
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: '800',
          marginBottom: '1.5rem',
          background: 'linear-gradient(90deg, #3B82F6, #9333EA)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          letterSpacing: '-0.025em',
        }}>
          About GRISMP
        </h1>
        <p style={{
          fontSize: '1.25rem',
          color: '#6B7280',
          maxWidth: '800px',
          margin: '0 auto',
          lineHeight: '1.6',
        }}>
          Gujarat Research, Innovation, and Start-up Management Platform
        </p>
      </div>

      {/* Features Section */}
      <div style={{
        marginBottom: '4rem',
      }}>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: '700',
          marginBottom: '2.5rem',
          color: '#1F2937',
          textAlign: 'center',
          background: 'linear-gradient(90deg, #3B82F6, #9333EA)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
        }}>
          Our Features
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
        }}>
          {features.map((feature, index) => (
            <div key={index} style={{
              background: 'white',
              borderRadius: '16px',
              padding: '1.5rem',
              boxShadow: '0 6px 25px rgba(0, 0, 0, 0.08)',
              border: '1px solid rgba(0, 0, 0, 0.03)',
              display: 'flex',
              flexDirection: 'column',
              height: '350px', // Fixed height for consistency
            }}>
              <img src={feature.image} alt={feature.title} style={{
                width: '100%',
                height: '120px',
                objectFit: 'cover',
                borderRadius: '8px',
                marginBottom: '1rem',
              }} />
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '0.5rem',
              }}>
                <span style={{
                  fontSize: '1.5rem',
                  marginRight: '0.75rem',
                  color: '#3B82F6',
                }}>{feature.icon}</span>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: '#1F2937',
                }}>{feature.title}</h3>
              </div>
              <p style={{
                fontSize: '1rem',
                color: '#4B5563',
                lineHeight: '1.6',
                flexGrow: 1,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
              }}>{feature.shortDescription}</p>
              <button
                onClick={() => openModal(feature)}
                style={{
                  background: 'linear-gradient(90deg, #3B82F6, #9333EA)',
                  color: 'white',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  transition: 'all 0.3s ease',
                  marginTop: '1rem',
                  alignSelf: 'flex-start',
                }}
                onMouseEnter={(e) => e.target.style.opacity = '0.9'}
                onMouseLeave={(e) => e.target.style.opacity = '1'}
              >
                View More
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalContent && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
        }}>
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '2rem',
            width: '90%',
            maxWidth: '600px',
            maxHeight: '80vh',
            overflowY: 'auto',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
            position: 'relative',
          }}>
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: '#6B7280',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => e.target.style.color = '#3B82F6'}
              onMouseLeave={(e) => e.target.style.color = '#6B7280'}
            >
              ×
            </button>
            <h3 style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              marginBottom: '1rem',
              color: '#1F2937',
              display: 'flex',
              alignItems: 'center',
            }}>
              <span style={{ marginRight: '0.75rem', color: '#3B82F6' }}>{modalContent.icon}</span>
              {modalContent.title}
            </h3>
            <img src={modalContent.image} alt={modalContent.title} style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '8px',
              marginBottom: '1.5rem',
            }} />
            <p style={{
              fontSize: '1.1rem',
              color: '#4B5563',
              lineHeight: '1.8',
            }}>{modalContent.fullDescription}</p>
          </div>
        </div>
      )}

      {/* Dashboard Section */}
      <div style={{
        marginTop: '4rem',
      }}>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: '700',
          marginBottom: '2.5rem',
          color: '#1F2937',
          textAlign: 'center',
          background: 'linear-gradient(90deg, #3B82F6, #9333EA)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
        }}>
          Platform Dashboard
        </h2>

        {/* Stats Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2rem',
          marginBottom: '3.5rem',
        }}>
          {cardData.map((card, index) => (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el}
              style={{
                background: 'white',
                borderRadius: '16px',
                padding: '1.5rem',
                boxShadow: '0 6px 25px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                opacity: 0,
                transform: 'translateY(40px) scale(0.95)',
                border: '1px solid rgba(0, 0, 0, 0.03)',
                position: 'relative',
                overflow: 'hidden',
                height: '150px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, {
                transform: 'translateY(-8px) scale(1.02)',
                boxShadow: '0 12px 35px rgba(0, 0, 0, 0.12)',
              })}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, {
                transform: 'translateY(0) scale(1)',
                boxShadow: '0 6px 25px rgba(0, 0, 0, 0.08)',
              })}
            >
              <span style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                fontSize: '1.5rem',
                opacity: 0.1,
              }}>{card.icon}</span>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '800',
                margin: '0.5rem 0',
                background: 'linear-gradient(90deg, #3B82F6, #9333EA)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}>{card.value}</h2>
              <p style={{
                color: '#6B7280',
                fontSize: '1rem',
                margin: 0,
                fontWeight: '500',
              }}>{card.label}</p>
            </div>
          ))}
        </div>

        {/* Line Chart */}
        <div
          ref={el => sectionRefs.current[0] = el}
          style={{
            background: 'white',
            borderRadius: '16px',
            padding: '2rem',
            boxShadow: '0 6px 25px rgba(0, 0, 0, 0.08)',
            marginBottom: '2.5rem',
            opacity: 0,
            transform: 'translateY(40px) scale(0.95)',
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            border: '1px solid rgba(0, 0, 0, 0.03)',
          }}
        >
          <h3 style={{
            fontSize: '1.75rem',
            fontWeight: '700',
            marginBottom: '2rem',
            color: '#1F2937',
          }}>Development Activity</h3>
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '2rem',
            boxShadow: '0 6px 25px rgba(0, 0, 0, 0.08)',
            transition: 'all 0.3s ease',
          }}>
            <Line 
              data={lineData} 
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top',
                    labels: { font: { size: 14, weight: '600' }, padding: 20 },
                  },
                  tooltip: {
                    backgroundColor: 'rgba(31, 41, 55, 0.9)',
                    titleFont: { size: 14 },
                    bodyFont: { size: 12 },
                    padding: 12,
                  },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    grid: { color: 'rgba(0, 0, 0, 0.03)', borderDash: [5, 5] },
                    ticks: { font: { size: 12 } },
                  },
                  x: {
                    grid: { display: false },
                    ticks: { font: { size: 12 } },
                  },
                },
                animation: { duration: 1500, easing: 'easeOutQuart' },
              }}
            />
          </div>
        </div>

        {/* Pie Chart */}
        <div
          ref={el => sectionRefs.current[1] = el}
          style={{
            background: 'white',
            borderRadius: '16px',
            padding: '2rem',
            boxShadow: '0 6px 25px rgba(0, 0, 0, 0.08)',
            marginBottom: '2.5rem',
            opacity: 0,
            transform: 'translateY(40px) scale(0.95)',
            transition: 'all 0.5s cubic-bezier(0, 0, 0.2, 1)',
            border: '1px solid rgba(0, 0, 0, 0.03)',
          }}
        >
          <h3 style={{
            fontSize: '1.75rem',
            fontWeight: '700',
            marginBottom: '2rem',
            color: '#1F2937',
          }}>Sector Distribution</h3>
          <div style={{ maxWidth: '550px', margin: '0 auto' }}>
            <Pie 
              data={pieData} 
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'right',
                    labels: {
                      font: { size: 14, weight: '500' },
                      padding: 20,
                      boxWidth: 12,
                      usePointStyle: true,
                    },
                  },
                  tooltip: {
                    backgroundColor: 'rgba(31, 41, 55, 0.9)',
                    titleFont: { size: 14 },
                    bodyFont: { size: 12 },
                    padding: 12,
                  },
                },
                animation: {
                  animateScale: true,
                  animateRotate: true,
                  duration: 1000,
                  easing: 'easeOutQuart',
                },
              }}
            />
          </div>
        </div>
      </div>

      {/* Global Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        
        * {
          scrollbar-width: thin;
          scrollbar-color: #3B82F6 #E5E7EB;
        }

        .chartjs-render-monitor {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 12px;
        }
        
        .chartjs-render-monitor:hover {
          transform: scale(1.015);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
};

export default About;