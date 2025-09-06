import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import "./HeroAnimations.css";

function HomePage() {
  const impactSectionRef = useRef(null);
  const [isImpactSectionVisible, setIsImpactSectionVisible] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [counts, setCounts] = useState({
    startups: 0,
    fundingRaised: 0,
    programs: 0,
    valuePartners: 0,
    events: 0,
    corporateEngagements: 0,
    internationalConnects: 0,
    mentors: 0,
  });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
    });

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      AOS.refresh();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Typewriter effect for hero text
  useEffect(() => {
    const heroTexts = [
      'Innovation Hub of Gujarat',
      'Unleashing Startup Potential',
      'Building Tomorrow Today',
      'Empowering Entrepreneurs'
    ];
    
    let timeout;
    let currentIndex = 0;
    
    const typeText = () => {
      const currentText = heroTexts[currentTextIndex];
      if (currentIndex <= currentText.length) {
        setTypewriterText(currentText.slice(0, currentIndex));
        currentIndex++;
        timeout = setTimeout(typeText, 100);
      } else {
        timeout = setTimeout(() => {
          setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
          currentIndex = 0;
        }, 2000);
      }
    };

    typeText();
    return () => clearTimeout(timeout);
  }, [currentTextIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsImpactSectionVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const currentRef = impactSectionRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  useEffect(() => {
    if (isImpactSectionVisible) {
      const animateNumbers = (targetValue, key) => {
        let count = 0;
        const step = Math.ceil(targetValue / 80);
        const interval = setInterval(() => {
          if (count < targetValue) {
            count += step;
            if (count > targetValue) count = targetValue;
            setCounts(prev => ({ ...prev, [key]: count }));
          } else {
            clearInterval(interval);
          }
        }, 30);
      };

      animateNumbers(2000, 'startups');
      animateNumbers(194, 'fundingRaised');
      animateNumbers(100, 'programs');
      animateNumbers(100, 'valuePartners');
      animateNumbers(1000, 'events');
      animateNumbers(110, 'corporateEngagements');
      animateNumbers(400, 'internationalConnects');
      animateNumbers(200, 'mentors');
    }
  }, [isImpactSectionVisible]);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', overflowX: 'hidden', margin: 0, padding: 0 }}>
      {/* Enhanced Hero Section - No gap from header */}
      <div style={{ 
        position: 'relative', 
        height: '100vh', 
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '0', // Remove negative margin since we want seamless transition
        paddingTop: '0'   // Remove padding as well
      }}>
        {/* Background Image */}
        <img
          style={{ 
            width: '100%', 
            height: '100%',  
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1 
          }}
          src="/sihgujarat.png"
          alt="Hero"
        />
        
        {/* Enhanced Gradient Overlay */}
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          background: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(59, 130, 246, 0.3) 100%)',
          zIndex: 2 
        }}></div>

        {/* Animated Background Particles */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 3,
          pointerEvents: 'none'
        }}>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                width: Math.random() * 4 + 2 + 'px',
                height: Math.random() * 4 + 2 + 'px',
                background: 'rgba(255, 255, 255, 0.3)',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDelay: Math.random() * 5 + 's',
                animationDuration: Math.random() * 10 + 10 + 's'
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div
          style={{
            position: 'relative',
            zIndex: 4,
            textAlign: 'center',
            color: 'white',
            padding: '40px 20px',
            maxWidth: '900px',
            width: '100%'
          }}
        >
          {/* Main Title */}
          <h1
            className="glow"
            style={{
              fontSize: windowWidth <= 480 ? '2.2rem' : windowWidth <= 768 ? '3.5rem' : '4.5rem',
              fontWeight: 800,
              marginBottom: '20px',
              background: 'linear-gradient(45deg, #fff, #e2e8f0, #3b82f6)',
              backgroundSize: '200% 200%',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              lineHeight: 1.2,
              animation: 'gradientShift 3s ease-in-out infinite'
            }}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Welcome to Innovation
          </h1>

          {/* Animated Subtitle with Typewriter Effect */}
          <div
            style={{
              fontSize: windowWidth <= 480 ? '1.2rem' : windowWidth <= 768 ? '1.6rem' : '2rem',
              marginBottom: '15px',
              fontWeight: 600,
              color: '#fbbf24',
              minHeight: '2.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {typewriterText}
            <span style={{ 
              animation: 'blink 1s infinite',
              marginLeft: '2px',
              color: '#fbbf24'
            }}>|</span>
          </div>

          {/* Subtitle Description */}
          <p
            style={{
              fontSize: windowWidth <= 480 ? '1rem' : windowWidth <= 768 ? '1.2rem' : '1.3rem',
              marginBottom: '40px',
              color: '#e2e8f0',
              fontWeight: 300,
              lineHeight: 1.6,
              maxWidth: '600px',
              margin: '0 auto 40px auto'
            }}
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Connecting startups, corporates, academia, and investors to build the future of innovation in Gujarat
          </p>

          {/* Enhanced Action Buttons */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
              flexWrap: 'wrap',
              marginBottom: '30px'
            }}
          >
            <Link to="/WorkingStartups" style={{ textDecoration: 'none' }}>
              <button
                className="hero-button"
                style={{
                  padding: '16px 32px',
                  background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50px',
                  fontSize: windowWidth <= 480 ? '1rem' : '1.1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 25px rgba(59, 130, 246, 0.3)'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 12px 35px rgba(59, 130, 246, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.3)';
                }}
                data-aos="fade-right"
                data-aos-delay="900"
              >
                🚀 Explore Startups
              </button>
            </Link>
            
            <Link to="/innovation%20projects" style={{ textDecoration: 'none' }}>
              <button
                className="hero-button"
                style={{
                  padding: '16px 32px',
                  background: 'linear-gradient(135deg, #10b981, #047857)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50px',
                  fontSize: windowWidth <= 480 ? '1rem' : '1.1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 25px rgba(16, 185, 129, 0.3)'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 12px 35px rgba(16, 185, 129, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 8px 25px rgba(16, 185, 129, 0.3)';
                }}
                data-aos="fade-left"
                data-aos-delay="1000"
              >
                💡 View Innovations
              </button>
            </Link>
          </div>

          {/* Additional CTA */}
          <div
            style={{
              fontSize: windowWidth <= 480 ? '0.9rem' : '1rem',
              color: '#cbd5e1',
              fontWeight: 300
            }}
            data-aos="fade-up"
            data-aos-delay="1200"
          >
            Join 2000+ startups in Gujarat's innovation ecosystem
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: '30px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 4,
            animation: 'bounce 2s infinite'
          }}
          data-aos="fade-up"
          data-aos-delay="1500"
        >
          <div style={{
            width: '30px',
            height: '50px',
            border: '2px solid rgba(255, 255, 255, 0.5)',
            borderRadius: '25px',
            position: 'relative'
          }}>
            <div style={{
              width: '4px',
              height: '8px',
              background: 'white',
              borderRadius: '2px',
              position: 'absolute',
              top: '8px',
              left: '50%',
              transform: 'translateX(-50%)',
              animation: 'scroll 1.5s infinite'
            }}></div>
          </div>
        </div>
      </div>

      {/* Next Idea Section */}
      <div style={{ display: 'flex', flexWrap: 'wrap', padding: '60px 20px', backgroundColor: '#f8f9fa', gap: '40px', justifyContent: 'center' }}>
        <div style={{ flex: 1, minWidth: '300px', padding: '20px' }} data-aos="fade-right">
          <h2 style={{ fontSize: '1.5rem', color: '#007bff', marginBottom: '10px' }}>We Chase the Next Big Idea With You</h2>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '20px' }}>We are the Trailblazers of Innovation.</h1>
          <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '20px' }}>
            T-Hub stands at the epicenter of innovation, connecting startups, corporates, academia, investors, and governments.
          </p>
          <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '20px' }}>
            Its unrivaled impact is forging new paths and leaving a bold footprint in what we define as "disruptive innovation".
          </p>
          <button
            style={{
              padding: '10px 20px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#218838')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#28a745')}
          >
            Find Out More
          </button>
        </div>
        <div style={{ flex: 1, minWidth: '300px', position: 'relative' }} data-aos="fade-left" data-aos-delay="200">
          <img
            style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
            src="https://tse1.mm.bing.net/th?id=OIP.F4ya2yJYDh4rt-OOmilH5AHaEK&pid=Api&P=0&h=180"
            alt="T-Hub Building"
          />
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '60px',
              height: '60px',
              background: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '50%',
              cursor: 'pointer',
            }}
          ></div>
        </div>
      </div>

      {/* Feature Section */}
      <div style={{ display: 'flex', flexWrap: 'wrap', padding: '60px 20px', gap: '20px', justifyContent: 'center' }}>
        {[
          { icon: '📖', title: 'Startup', desc: 'Inspiring innovation and bold ideas that turn dreams into reality.', delay: 100 },
          { icon: '📖', title: 'Innovations', desc: 'Inspiring innovation and bold ideas that turn dreams into reality.', delay: 200 },
          { icon: '🔧', title: 'IPR', desc: 'Fueling disruptors and building a platform for tomorrow\'s creators.', delay: 300 },
          { icon: '🤝', title: 'Researchers', desc: 'Forging powerful connections for collaborations to flourish.', delay: 400 },
        ].map((item, index) => (
          <div
            key={index}
            style={{
              flex: 1,
              minWidth: '250px',
              maxWidth: '300px',
              padding: '20px',
              textAlign: 'center',
              background: 'white',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
            data-aos="fade-up"
            data-aos-delay={item.delay}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{item.icon}</div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '10px' }}>{item.title}</h2>
            <p style={{ fontSize: '1rem', color: '#666' }}>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Our Impact Section */}
      <div ref={impactSectionRef} style={{ padding: '60px 20px', backgroundColor: '#f1f3f5', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '40px' }} data-aos="fade-up">
          Our Impact on The Innovation Ecosystem
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
          {[
            { icon: '👥', value: counts.startups, label: 'Actively Engaging Startups', delay: 100 },
            { icon: '💵', value: counts.fundingRaised, label: 'Funding Raised by Program Startups', delay: 150 },
            { icon: '📋', value: counts.programs, label: 'Programs', delay: 200 },
            { icon: '🤝', value: counts.valuePartners, label: 'Value Partners', delay: 250 },
            { icon: '📅', value: counts.events, label: 'Events', delay: 300 },
            { icon: '🏢', value: counts.corporateEngagements, label: 'Corporate Engagements', delay: 350 },
            { icon: '🌍', value: counts.internationalConnects, label: 'International Connects', delay: 400 },
            { icon: '👨‍🏫', value: counts.mentors, label: 'Mentors', delay: 450 },
          ].map((metric, index) => (
            <div
              key={index}
              style={{
                flex: 1,
                minWidth: '200px',
                maxWidth: '250px',
                padding: '20px',
                background: 'white',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}
              data-aos="zoom-in"
              data-aos-delay={metric.delay}
            >
              <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{metric.icon}</div>
              <h3 style={{ fontSize: '2rem', fontWeight: 700, color: '#007bff', marginBottom: '10px' }}>{metric.value}+</h3>
              <p style={{ fontSize: '1rem', color: '#555' }}>{metric.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Distinguished Visitors Section */}
      <div style={{ padding: '60px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '40px' }} data-aos="fade-up">
          What Our Distinguished Visitors Have to Say
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
          {[
            { quote: 'It is such a pleasure to know that the entrepreneurial spirit is very much in Hyderabad, with high ambition, in all the folks involved with T-Hub.', img: 'https://t-hub.co/wp-content/uploads/2021/06/Picture4.png', name: 'Satya Nadella', title: 'CEO, Microsoft', delay: 100 },
            { quote: 'India and Hyderabad have a great capacity to combine innovation, enterprise, and skills.', img: 'https://t-hub.co/wp-content/uploads/2021/06/Picture6.png', name: 'Amitabh Kant', title: 'NITI Aayog', delay: 200 },
            { quote: 'Walking around T-Hub makes me feel like I am looking at the new India of tomorrow!', img: 'https://t-hub.co/wp-content/uploads/2021/06/Picture3.png', name: 'Ratan Tata', title: 'Chairman Emeritus, Tata Sons', delay: 300 },
          ].map((testimonial, index) => (
            <div
              key={index}
              style={{
                flex: 1,
                minWidth: '300px',
                maxWidth: '350px',
                padding: '20px',
                background: 'white',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                textAlign: 'left',
              }}
              data-aos="fade-up"
              data-aos-delay={testimonial.delay}
            >
              <div style={{ position: 'relative', marginBottom: '20px' }}>
                <span style={{ fontSize: '2rem', color: '#007bff' }}>"</span>
                <p style={{ fontSize: '1.1rem', color: '#555' }}>{testimonial.quote}</p>
              </div>
              <div>
                <img style={{ width: '60px', height: '60px', borderRadius: '50%', marginBottom: '10px' }} src={testimonial.img} alt={testimonial.name} />
                <p style={{ fontSize: '1.2rem', fontWeight: 600 }}>{testimonial.name}</p>
                <p style={{ fontSize: '1rem', color: '#666' }}>{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Startups Section */}
      <div style={{ padding: '60px 20px', backgroundColor: '#f8f9fa', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '40px' }} data-aos="fade-up">
          Marquee Startups of Startups
        </h2>
        <div style={{ overflow: 'hidden', whiteSpace: 'nowrap' }} data-aos="fade-up">
          <div style={{ display: 'inline-flex', animation: 'marquee 20s linear infinite' }}>
            {[
              "https://www.f6s.com/content-resource/profiles/2211764_th2.jpg",
              "https://www.f6s.com/content-resource/profiles/3541523_th2.jpg",
              "https://www.f6s.com/content-resource/profiles/2371657_th2.jpg",
              "https://www.f6s.com/content-resource/profiles/3422432_th2.jpg",
              "https://www.f6s.com/content-resource/profiles/3485409_th2.jpg",
              "https://www.f6s.com/content-resource/profiles/3725872_th2.jpg",
              "https://www.f6s.com/content-resource/profiles/3466533_th2.jpg",
              "https://www.f6s.com/content-resource/profiles/3335438_th2.jpg",
            ].concat([...Array(4)].map((_, i) => `https://www.f6s.com/content-resource/profiles/${[2211764, 3541523, 2371657, 3422432][i]}_th2.jpg`)).map((src, index) => (
              <div key={index} style={{ flexShrink: 0, padding: '10px' }}>
                <img style={{ width: '100px', height: 'auto' }} src={src} alt="Startup Logo" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div style={{ padding: '60px 20px', backgroundColor: '#f9f9f9' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center' }}>
          <div
            style={{
              flex: 1,
              minWidth: '300px',
              padding: '20px',
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            }}
            data-aos="fade-right"
          >
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#2c3e50', marginBottom: '20px' }}>About Us</h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#555', textAlign: 'justify' }}>
              Startups and Innovation play a key role in economic growth. Besides generating jobs, they focus on smarter, gen-next solutions which bring economic dynamism by bringing in innovation and spurring competition. Gujarat, owing to its inherent strength of widespread entrepreneurial spirit, has gained a significant spot in the national startup ecosystem. The incentives to Startups under the Gujarat Industrial Policy 2015 have supported in creating a strong network of nodal institutions, and several startups have expanded their operations/products both at national and international levels. The key objective of the Gujarat Industrial Policy 2020 is to encourage R&D, start innovation, and entrepreneurship. Hence, the new scheme is being introduced to support startups and innovation at different levels of a startup cycle.
            </p>
          </div>
          <div
            style={{
              flex: 1,
              minWidth: '300px',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            }}
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <iframe
              style={{ width: '100%', height: '315px' }}
              src="https://www.youtube.com/embed/VIDEO_ID" // Replace with actual video ID
              title="Gujarat Startup Ecosystem"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* Chatbot Container */}
      <div style={{ padding: '20px' }}>
        {/* Chatbot code here */}
      </div>
    </div>
  );
}

export default HomePage;