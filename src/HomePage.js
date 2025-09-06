import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Adjust the path as necessary
import Carousel from 'react-bootstrap/Carousel';
import jjjImage from './jjj.png';
import AOS from "aos";
import "aos/dist/aos.css";

function HomePage() {
  const impactSectionRef = useRef(null);
  const [isImpactSectionVisible, setIsImpactSectionVisible] = useState(false);
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

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
    });
    
    window.addEventListener('resize', () => AOS.refresh());
    return () => window.removeEventListener('resize', () => AOS.refresh());
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsImpactSectionVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (impactSectionRef.current) observer.observe(impactSectionRef.current);
    return () => {
      if (impactSectionRef.current) observer.unobserve(impactSectionRef.current);
    };
  }, []);

  useEffect(() => {
    if (isImpactSectionVisible) {
      const animateNumbers = (targetValue: number, key: string) => {
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
    <div className="homepage">
      {/* Hero Section with Carousel */}
      <div className="hero-section">
        <Carousel className="carousel-container" fade interval={5000}>
          <Carousel.Item>
            <img className="d-block w-100" src="https://www.tnhglobal.com/wp-content/uploads/2016/05/82-1900x700_c.jpg" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="https://www.imd.org/ibyimd/wp-content/uploads/2024/04/shutterstock_2358722117.jpg" alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="https://imgcld.yatra.com/ytimages/image/upload/t_yt_blog_c_fill_q_auto:good_f_auto_w_800_h_500/v1543910413/StatueofUnity1_1543908986.jpg" alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="https://www.theindia.co.in/blog/wp-content/uploads/2022/03/Gujarat-Tourism-Guide.jpg" alt="Fourth slide" />
          </Carousel.Item>
        </Carousel>
        <div className="hero-overlay" />
        <div className="hero-content" data-aos="fade-up">
          <h1 className="hero-title">Shaping Innovation. Scaling Entrepreneurship.</h1>
          <p className="hero-subtitle">Building a Future-Ready Innovation Ecosystem where Entrepreneurs Soar</p>
          <div className="hero-buttons">
            <button className="hero-button" data-aos="fade-right" data-aos-delay="200">
              <Link to="/WorkingStartups" className="hero-link">Startups</Link>
            </button>
            <button className="hero-button" data-aos="fade-left" data-aos-delay="300">
              <Link to="/innovation%20projects" className="hero-link">Innovations</Link>
            </button>
          </div>
        </div>
      </div>

      {/* Next Idea Section */}
      <div className="next-idea-section">
        <div className="idea-content" data-aos="fade-right">
          <h2 className="idea-heading">We Chase the Next Big Idea With You</h2>
          <h1 className="idea-title">We are the Trailblazers of Innovation.</h1>
          <p className="idea-description">T-Hub stands at the epicenter of innovation, connecting startups, corporates, academia, investors, and governments.</p>
          <p className="idea-description">Its unrivaled impact is forging new paths and leaving a bold footprint in what we define as "disruptive innovation".</p>
          <button className="idea-button">Find Out More</button>
        </div>
        <div className="idea-video" data-aos="fade-left" data-aos-delay="200">
          <img src="https://tse1.mm.bing.net/th?id=OIP.F4ya2yJYDh4rt-OOmilH5AHaEK&pid=Api&P=0&h=180" alt="T-Hub Building" className="idea-video-thumbnail" />
          <div className="play-button"></div>
        </div>
      </div>

      {/* JJJ Image Section */}
      <div className="jjj-section" data-aos="zoom-in">
        <img src={jjjImage} alt="jjj" className="jjj-image" />
      </div>

      {/* Feature Section */}
      <div className="feature-section">
        <div className="feature-item" data-aos="fade-up" data-aos-delay="100">
          <div className="feature-icon">📖</div>
          <h2 className="feature-title">Startup</h2>
          <p className="feature-description">Inspiring innovation and bold ideas that turn dreams into reality.</p>
        </div>
        <div className="feature-item" data-aos="fade-up" data-aos-delay="200">
          <div className="feature-icon">📖</div>
          <h2 className="feature-title">Innovations</h2>
          <p className="feature-description">Inspiring innovation and bold ideas that turn dreams into reality.</p>
        </div>
        <div className="feature-item" data-aos="fade-up" data-aos-delay="300">
          <div className="feature-icon">🔧</div>
          <h2 className="feature-title">IPR</h2>
          <p className="feature-description">Fueling disruptors and building a platform for tomorrow's creators.</p>
        </div>
        <div className="feature-item" data-aos="fade-up" data-aos-delay="400">
          <div className="feature-icon">🤝</div>
          <h2 className="feature-title">Researchers</h2>
          <p className="feature-description">Forging powerful connections for collaborations to flourish.</p>
        </div>
      </div>

      {/* Our Impact Section */}
      <div className="impact-section" ref={impactSectionRef}>
        <h2 className="impact-title" data-aos="fade-up">Our Impact on The Innovation Ecosystem</h2>
        <div className="impact-metrics">
          {[
            { icon: "👥", value: counts.startups, label: "Actively Engaging Startups", delay: 100 },
            { icon: "💵", value: counts.fundingRaised, label: "Funding Raised by Program Startups", delay: 150 },
            { icon: "📋", value: counts.programs, label: "Programs", delay: 200 },
            { icon: "🤝", value: counts.valuePartners, label: "Value Partners", delay: 250 },
            { icon: "📅", value: counts.events, label: "Events", delay: 300 },
            { icon: "🏢", value: counts.corporateEngagements, label: "Corporate Engagements", delay: 350 },
            { icon: "🌍", value: counts.internationalConnects, label: "International Connects", delay: 400 },
            { icon: "👨‍🏫", value: counts.mentors, label: "Mentors", delay: 450 },
          ].map((metric, index) => (
            <div key={index} className="metric-item" data-aos="zoom-in" data-aos-delay={metric.delay}>
              <div className="metric-icon">{metric.icon}</div>
              <h3 className="metric-value">{metric.value}+</h3>
              <p className="metric-label">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Distinguished Visitors Section */}
      <div className="distinguished-visitors-section">
        <h2 className="section-title" data-aos="fade-up">What Our Distinguished Visitors Have to Say</h2>
        <div className="testimonial-cards">
          {[
            { quote: "It is such a pleasure to know that the entrepreneurial spirit is very much in Hyderabad, with high ambition, in all the folks involved with T-Hub.", img: "https://t-hub.co/wp-content/uploads/2021/06/Picture4.png", name: "Satya Nadella", title: "CEO, Microsoft", delay: 100 },
            { quote: "India and Hyderabad have a great capacity to combine innovation, enterprise, and skills.", img: "https://t-hub.co/wp-content/uploads/2021/06/Picture6.png", name: "Amitabh Kant", title: "NITI Aayog", delay: 200 },
            { quote: "Walking around T-Hub makes me feel like I am looking at the new India of tomorrow!", img: "https://t-hub.co/wp-content/uploads/2021/06/Picture3.png", name: "Ratan Tata", title: "Chairman Emeritus, Tata Sons", delay: 300 },
          ].map((testimonial, index) => (
            <div key={index} className="testimonial-card" data-aos="fade-up" data-aos-delay={testimonial.delay}>
              <div className="testimonial-quote">
                <span className="quote-icon">"</span>
                <p>{testimonial.quote}</p>
                <span className="quote-icon"></span>
              </div>
              <div className="testimonial-author">
                <img src={testimonial.img} alt={testimonial.name} />
                <p>{testimonial.name}</p>
                <p>{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Startups Section */}
      <div className="marquee-startups-section">
        <h2 className="section-title" data-aos="fade-up">Marquee Startups of Startups</h2>
        <div className="marquee" data-aos="fade-up">
          <div className="startups-container">
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
              <div key={index} className="startup-item">
                <img src={src} alt="Startup Logo" className="startups-image" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="about-us-section">
        <div className="about-us-content">
          <div className="about-us-text" data-aos="fade-right">
            <h2>About Us</h2>
            <p>Startups and Innovation play a key role in economic growth. Besides generating jobs, they focus on smarter, gen-next solutions which bring economic dynamism by bringing in innovation and spurring competition. Gujarat, owing to its inherent strength of widespread entrepreneurial spirit, has gained a significant spot in the national startup ecosystem. The incentives to Startups under the Gujarat Industrial Policy 2015 have supported in creating a strong network of nodal institutions, and several startups have expanded their operations/products both at national and international levels. The key objective of the Gujarat Industrial Policy 2020 is to encourage R&D, start innovation, and entrepreneurship. Hence, the new scheme is being introduced to support startups and innovation at different levels of a startup cycle.</p>
          </div>
          <div className="about-us-video" data-aos="fade-left" data-aos-delay="200">
            <iframe
              width="100%"
              height="315"
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
      <div className="chatbot-container">
        {/* Chatbot code here */}
      </div>
    </div>
  );
}

export default HomePage;