import React, { useState, useEffect } from 'react';
  import { Link } from 'react-router-dom';
  import './HomePage.css'; // Adjust the path as necessary
  import Carousel from 'react-bootstrap/Carousel'; // Ensure react-bootstrap is installed
  import jjjImage from './jjj.png';

  function HomePage() {

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
      const animateNumbers = (targetValue, key) => {
        let count = 0;
        const step = Math.ceil(targetValue / 80);
        const interval = setInterval(() => {
          if (count < targetValue) {
            count += step;
            if (count > targetValue) count = targetValue;
            setCounts(prevCounts => ({ ...prevCounts, [key]: count }));
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
    }, []);

    return (
      <div className="homepage">
        {/* Hero Section with Carousel */}
        <div className="hero-section">
          <Carousel className="carousel-container">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.tnhglobal.com/wp-content/uploads/2016/05/82-1900x700_c.jpg"
              
                alt="First slide"
              />
              <Carousel.Caption>
                {/* <h3>Shaping Innovation</h3>
                <p>Building a Future-Ready Innovation Ecosystem.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.imd.org/ibyimd/wp-content/uploads/2024/04/shutterstock_2358722117.jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
                {/* <h3>Scaling Entrepreneurship</h3>
                <p>Supporting Entrepreneurs to Soar.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://imgcld.yatra.com/ytimages/image/upload/t_yt_blog_c_fill_q_auto:good_f_auto_w_800_h_500/v1543910413/StatueofUnity1_1543908986.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                {/* <h3>Innovate and Collaborate</h3>
                <p>Creating Opportunities for Innovators.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.theindia.co.in/blog/wp-content/uploads/2022/03/Gujarat-Tourism-Guide.jpg"
                alt="Fourth slide"
              />
              <Carousel.Caption>
                {/* <h3>Empowering Startups</h3>
                <p>Building a Sustainable Startup Culture.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <div className="hero-overlay" />
          <div className="hero-content">
            <h1 className="hero-title">Shaping Innovation. Scaling Entrepreneurship.</h1>
            <p className="hero-subtitle">
              Building a Future-Ready Innovation Ecosystem where Entrepreneurs Soar
            </p>
            <div className="hero-buttons">
              <button className="hero-button">
                <Link to="/WorkingStartups" className="hero-link">
                  Startups
                </Link>
              </button>
              <button className="hero-button">
                <Link to="/innovation%20projects" className="hero-link">
                  Innovations
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="next-idea-section">
          <div className="idea-content">
            <h2 className="idea-heading">We Chase the Next Big Idea With You</h2>
            <h1 className="idea-title">We are the Trailblazers of Innovation.</h1>
            <p className="idea-description">
              T-Hub stands at the epicenter of innovation, connecting startups, corporates,
              academia, investors, and governments.
            </p>
            <p className="idea-description">
            Its unrivaled impact is forging new paths and
            leaving a bold footprint in what we define as “disruptive innovation”.
            </p>
            <button className="idea-button">Find Out More</button>
          </div>
          <div className="idea-video">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.F4ya2yJYDh4rt-OOmilH5AHaEK&pid=Api&P=0&h=180"
              alt="T-Hub Building"
              className="idea-video-thumbnail"
            />
            <div className="play-button"></div>
          </div>
        </div>
        <div>
     
      <img src={jjjImage} alt="jjj" />
    </div>
        {/* Inspire, Build, Collaborate Section */}
        <div className="feature-section">
          <div className="feature-item">
            <div className="feature-icon">📖</div>
            <h2 className="feature-title">Startup</h2>
            <p className="feature-description">
              Inspiring innovation and bold ideas that turn dreams into reality.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">📖</div>
            <h2 className="feature-title">Innovations</h2>
            <p className="feature-description">
              Inspiring innovation and bold ideas that turn dreams into reality.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🔧</div>
            <h2 className="feature-title">IPR</h2>
            <p className="feature-description">
              Fueling disruptors and building a platform for tomorrow’s creators.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🤝</div>
            <h2 className="feature-title">Researchers</h2>
            <p className="feature-description">
              Forging powerful connections for collaborations to flourish.
            </p>
          </div>
        </div>
              {/* Our Impact Section */}
              <div className="impact-section">
        <h2 className="impact-title">Our Impact on The Innovation Ecosystem</h2>
        <div className="impact-metrics">
          <div className="metric-item">
            <div className="metric-icon">👥</div>
            <h3 className="metric-value">{counts.startups}+</h3>
            <p className="metric-label">Actively Engaging Startups</p>
          </div>
          <div className="metric-item">
            <div className="metric-icon">💵</div>
            <h3 className="metric-value">{counts.fundingRaised}+</h3>
            <p className="metric-label">Funding Raised by Program Startups</p>
          </div>
          <div className="metric-item">
            <div className="metric-icon">📋</div>
            <h3 className="metric-value">{counts.programs}+</h3>
            <p className="metric-label">Programs</p>
          </div>
          <div className="metric-item">
            <div className="metric-icon">🤝</div>
            <h3 className="metric-value">{counts.valuePartners}+</h3>
            <p className="metric-label">Value Partners</p>
          </div>
          <div className="metric-item">
            <div className="metric-icon">📅</div>
            <h3 className="metric-value">{counts.events}+</h3>
            <p className="metric-label">Events</p>
          </div>
          <div className="metric-item">
            <div className="metric-icon">🏢</div>
            <h3 className="metric-value">{counts.corporateEngagements}+</h3>
            <p className="metric-label">Corporate Engagements</p>
          </div>
          <div className="metric-item">
            <div className="metric-icon">🌍</div>
            <h3 className="metric-value">{counts.internationalConnects}+</h3>
            <p className="metric-label">International Connects</p>
          </div>
          <div className="metric-item">
            <div className="metric-icon">👨‍🏫</div>
            <h3 className="metric-value">{counts.mentors}+</h3>
            <p className="metric-label">Mentors</p>
          </div>
        </div>
      </div>
              {/* Distinguished Visitors Section */}
              <div className="distinguished-visitors-section">
          <h2 className="section-title">What Our Distinguished Visitors Have to Say</h2>
          <div className="testimonial-cards">
            <div className="testimonial-card">
              <div className="testimonial-quote">
                <span className="quote-icon">“</span>
                <p>It is such a pleasure to know that the entrepreneurial spirit is very much in Hyderabad, with high ambition, in all the folks involved with T-Hub.</p>
                <span className="quote-icon"></span>
              </div>
              <div className="testimonial-author">
                <img src="https://t-hub.co/wp-content/uploads/2021/06/Picture4.png" alt="Satya Nadella" />
                <p>Satya Nadella</p>
                <p>CEO, Microsoft</p>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-quote">
                <span className="quote-icon">“</span>
                <p>India and Hyderabad have a great capacity to combine innovation, enterprise, and skills.</p>
                <span className="quote-icon"></span>
              </div>
              <div className="testimonial-author">
                <img src="https://t-hub.co/wp-content/uploads/2021/06/Picture6.png" alt="Amitabh Kant" />
                <p>Amitabh Kant</p>
                <p>NITI Aayog</p>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-quote">
                <span className="quote-icon">“</span>
                <p>Walking around T-Hub makes me feel like I am looking at the new India of tomorrow!</p>
                <span className="quote-icon"></span>
              </div>
              <div className="testimonial-author">
                <img src="https://t-hub.co/wp-content/uploads/2021/06/Picture3.png" alt="Ratan Tata" />
                <p>Ratan Tata</p>
                <p>Chairman Emeritus, Tata Sons</p>
              </div>
            </div>
          </div>
        </div>
          {/* Marquee Startups Section */}
          <div className="marquee-startups-section">
    <h2 className="section-title">Marquee Startups of Startups</h2>
    <div className="marquee">
      <div className="startups-container">
        <div className="startup-item">
          <img src="https://www.f6s.com/content-resource/profiles/2211764_th2.jpg" alt="Startup Logos" className="startups-image" />
        </div>
        <div className="startup-item">
          <img src="https://www.f6s.com/content-resource/profiles/3541523_th2.jpg" alt="Startup Logos" className="startups-image" />
        </div>
        <div className="startup-item">
          <img src="https://www.f6s.com/content-resource/profiles/2371657_th2.jpg" alt="Startup Logos" className="startups-image" />
        </div>
        <div className="startup-item">
          <img src="https://www.f6s.com/content-resource/profiles/3422432_th2.jpg" alt="Startup Logos" className="startups-image" />
        </div>
        <div className="startup-item">
          <img src="https://www.f6s.com/content-resource/profiles/3485409_th2.jpg" alt="Startup Logos" className="startups-image" />
        </div>
        <div className="startup-item">
          <img src="https://www.f6s.com/content-resource/profiles/3725872_th2.jpg" alt="Startup Logos" className="startups-image" />
        </div>
        <div className="startup-item">
          <img src="https://www.f6s.com/content-resource/profiles/3466533_th2.jpg" alt="Startup Logos" className="startups-image" />
        </div>
        <div className="startup-item">
          <img src="https://www.f6s.com/content-resource/profiles/3335438_th2.jpg" alt="Startup Logos" className="startups-image" />
        </div>
      </div>
    </div>
  </div>

  <div className="about-us-section">
  <div className="about-us-content">
    <div className="about-us-text">
      <h2>About Us</h2>
      <p>
        Startups and Innovation play a key role in economic growth. Besides generating jobs, they focus on smarter, gen-next solutions which bring economic dynamism by bringing in innovation and spurring competition. Gujarat, owing to its inherent strength of widespread entrepreneurial spirit has gained a significant spot in the national startup ecosystem. The incentives to Startups under the Gujarat Industrial Policy 2015 have supported in creating a strong network of nodal institutions and several startups have expanded their operations/products both at national and international levels. The key objective of the Gujarat Industrial Policy 2020 is to encourage R&D, start innovation and entrepreneurship. Hence, the new scheme is being introduced in order to support startups and innovation at different levels of a startup cycle.
      </p>
    </div>
    <div className="about-us-video">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" title="Gujarat Startup Ecosystem" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
