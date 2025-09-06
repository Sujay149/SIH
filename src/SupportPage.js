import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Updated mentor data (unchanged)
const mentors = [
  { id: 1, name: 'Anamika Dey', expertise: 'CEO, Gujarat Grassroots Innovation Augmentation Network (GIAN)', profilePic: 'https://startup.gujarat.gov.in/files/2022/10/ccb20d25-02af-450a-beb5-2100bbfc01c1_download.jpg', bio: 'CEO of GIAN with extensive experience in grassroots innovation.' },
  { id: 2, name: 'Dr. Shrinivas Savale', expertise: 'AIC-LMCP Foundation', profilePic: 'https://startup.gujarat.gov.in/files/2022/9/727692c7-1210-4895-9c9c-a195b3e5018b_IMG_E3317.JPG', bio: 'Expert in various aspects of business and innovation with AIC-LMCP Foundation.' },
  { id: 3, name: 'Sudeep Ambare', expertise: 'International Automobile Centre of Excellence', profilePic: 'https://startup.gujarat.gov.in/files/2022/3/294e2bf0-415a-47bb-93fc-dcdab43ac739_Sudeep%20Ambare-Profile%20Photograph.jpg', bio: 'Specialist in automobile engineering and innovation.' },
  { id: 4, name: 'Ravin Bhadja', expertise: 'RB Corporation, Value Plus Group', profilePic: 'https://startup.gujarat.gov.in/files/2023/3/9594712b-bcb9-4c69-835d-d3be39ed313f_WhatsApp%20Image%202023-03-07%20at%2012.18.22.jpeg', bio: 'Experienced professional in corporate development and value addition.' },
  { id: 5, name: 'Harishwar Suru', expertise: 'Kalatvam', profilePic: 'https://startup.gujarat.gov.in/files/2021/11/6df2922d-981e-4c55-b7ab-7a936aa830d1_Harishwar.jpg', bio: 'Expert in innovation and creative development.' },
  { id: 6, name: 'Dr. Raju Shanmugam', expertise: 'Unitedworld School of Computational Intelligence, Karnavati', profilePic: 'https://startup.gujarat.gov.in/files/2021/10/eb1cd982-6ee4-49b3-a4e6-b4a6dec48c0d_Dr%20Raju.jpg', bio: 'Professor specializing in computational intelligence and advanced research.' },
  { id: 7, name: 'Dr. Raashid Saiyed', expertise: 'R&A Advisory', profilePic: 'https://startup.gujarat.gov.in/files/2021/7/d21c099f-1cbb-4091-b6fc-16505e5bbf77_1591868889304.jpg', bio: 'Consultant with expertise in advisory services and innovation.' },
  { id: 8, name: 'LALITKUMAR', expertise: 'Nikseam Consultancy Pvt Ltd', profilePic: 'https://startup.gujarat.gov.in/files/2021/6/eedbc030-c40b-466c-915a-202ba8b642a8_Lalitkumar.jpg', bio: 'Consultant with a focus on business solutions and consultancy.' },
  { id: 9, name: 'CHINTAN SHAH', expertise: 'CHINTAN D SHAH & ASSOCIATES', profilePic: 'https://startup.gujarat.gov.in/files/2021/6/f0df2750-1c19-4e56-9e42-897cc1121f5c_WhatsApp%20Image%202021-06-22%20at%203.26.59%20PM.jpeg', bio: 'Legal expert in business and financial solutions.' },
  { id: 10, name: 'Sandip Nair', expertise: 'Rupay Vidya', profilePic: 'https://startup.gujarat.gov.in/files/2021/3/596c5947-ee84-4f87-826a-b5aa8d126a46_sandip%20-%20Copy.jpg', bio: 'Specialist in educational and technological development.' },
  { id: 11, name: 'Dr. Ripal Ranpara', expertise: 'ATMIYA UNIVERSITY', profilePic: 'https://startup.gujarat.gov.in/files/2021/3/a9842b45-2fa8-439c-b921-77fb0c570bf7_unnamed.jpg', bio: 'Academic with a focus on educational advancement and research.' },
  { id: 12, name: 'HEURISTIC CAPITAL SERVICES PRIVATE LIMITED', expertise: 'HEURISTIC CAPITAL SERVICES PRIVATE LIMITED', profilePic: 'https://startup.gujarat.gov.in/files/2021/6/efec2ceb-29cf-494e-9392-80fcefa2b543_HARDIK_R_PANCHAL_IMG_20190725_115116.jpg', bio: 'Financial services expert with extensive industry experience.' },
  { id: 13, name: 'Dr Parashram Jakappa Patil.', expertise: 'Government of India', profilePic: 'https://startup.gujarat.gov.in/files/2021/6/ddfb8baf-8306-4b7b-bd96-16114347e7ab_Dr_Parashram_Jakappa_Patil_resize.jpg', bio: 'Government body specializing in agricultural and industrial development.' },
  { id: 14, name: 'Sanghi Industries', expertise: 'Sanghi Industries', profilePic: 'https://startup.gujarat.gov.in/files/2021/6/f385b1d6-86ae-4f30-9078-1c97480841b7_Shaileshkumar_Patel_15948173853913569384536952383272.jpg', bio: 'Industry expert with a focus on industrial growth and development.' },
  { id: 15, name: 'Parul University', expertise: 'Educational Institution', profilePic: 'https://startup.gujarat.gov.in/files/2024/2/974295b6-595d-4a72-8c58-405517354b82_Maulesh%20Photo.jpg', bio: 'Institution providing education and research opportunities.' },
  { id: 16, name: 'Canara Bank', expertise: 'Banking Sector', profilePic: 'https://startup.gujarat.gov.in/files/2021/6/70f1890b-355f-4100-bd88-ceea34a48c7a_Sarfaraz_Taibani_1489221509_tmp_photo.jpg', bio: 'Banking expert with experience in financial services and solutions.' },
  { id: 17, name: 'DN Castech', expertise: 'DN Castech', profilePic: 'https://startup.gujarat.gov.in/files/2021/6/687f0873-2c8a-4ae6-b15b-3ad9d054d4f3_DN_Dudhat_8x1202DNP.jpg', bio: 'Technology expert with focus on engineering and development.' },
  { id: 18, name: 'Mechatronics Systems Private Limited', expertise: 'Mechatronics', profilePic: 'https://startup.gujarat.gov.in/files/2021/6/0d2ec3fe-b1d4-4ff6-8a71-09e8d947b80d_Dr._Viraj_Loliyana_Viraj_1.jpg', bio: 'Specialist in mechatronics and integrated systems.' },
  { id: 19, name: 'AASHARA STPC', expertise: 'AASHARA STPC', profilePic: 'https://startup.gujarat.gov.in/files/2021/6/b2656799-31f2-4728-9c89-7e403346fb32_PROF._SAMIR__RAVAL_SAMIRPPPHOTO.jpg', bio: 'Expert in project management and technical consultancy.' },
  { id: 20, name: 'Manubhai & Shah LLP, Chartered Accountants', expertise: 'Chartered Accountancy', profilePic: 'https://startup.gujarat.gov.in/assets/img/icons/startup_mentor.png', bio: 'Financial experts specializing in accountancy and business consulting.' },
  { id: 21, name: 'Grocap Advisory Services Pvt. Ltd.', expertise: 'Advisory Services', profilePic: 'https://startup.gujarat.gov.in/assets/img/icons/startup_mentor.png', bio: 'Consultancy services expert with a focus on business advisory.' },
  { id: 22, name: 'Electronics Department Saurashtra University', expertise: 'Electronics Research', profilePic: 'https://startup.gujarat.gov.in/files/2021/6/23dc7f64-7021-427f-b588-2e761df75618_Mahesh_Jivani_mnj.jpg', bio: 'Academic department specializing in electronics and technology.' },
  { id: 23, name: 'Finotive', expertise: 'Financial Technology', profilePic: 'https://startup.gujarat.gov.in/files/2021/6/c048b118-f7a1-4828-8c03-4a1976576545_Nishant_Vyas_NishantVyas.jpg', bio: 'Expert in financial technology solutions and innovations.' },
  { id: 24, name: 'GIDC DEGREE ENGINEERING COLLEGE, NAVSARI', expertise: 'Engineering Education', profilePic: 'https://startup.gujarat.gov.in/files/2021/6/ffcd02c1-6f01-40b1-a698-98d69739b513_KUSHAL_PATEL_KushalPhoto1.jpg', bio: 'Educational institution focusing on engineering and technical education.' }
];

const expertiseOptions = [
  'All',
  'CEO, Gujarat Grassroots Innovation Augmentation Network (GIAN)',
  'AIC-LMCP Foundation',
  'International Automobile Centre of Excellence',
  'RB Corporation, Value Plus Group',
  'Kalatvam',
  'Unitedworld School of Computational Intelligence, Karnavati',
  'R&A Advisory',
  'Nikseam Consultancy Pvt Ltd',
  'CHINTAN D SHAH & ASSOCIATES',
  'Rupay Vidya',
  'ATMIYA UNIVERSITY',
  'HEURISTIC CAPITAL SERVICES PRIVATE LIMITED',
  'Government of India',
  'Sanghi Industries',
  'Educational Institution',
  'Banking Sector',
  'DN Castech',
  'Mechatronics',
  'AASHARA STPC',
  'Chartered Accountancy',
  'Advisory Services',
  'Electronics Research',
  'Financial Technology',
  'Engineering Education'
];

const MentorList = () => {
  const [selectedExpertise, setSelectedExpertise] = useState('All');

  // Filter mentors based on the selected expertise
  const filteredMentors = selectedExpertise === 'All'
    ? mentors
    : mentors.filter(mentor => mentor.expertise === selectedExpertise);

  // Determine screen size for responsive adjustments
  const isMobile = window.innerWidth <= 480;
  const isTablet = window.innerWidth <= 768 && window.innerWidth > 480;

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: isMobile ? '5px' : isTablet ? '10px' : '15px',
      width: '100%',
      boxSizing: 'border-box',
    }}>
      <h1 style={{
        textAlign: 'center',
        color: '#333',
        fontSize: `clamp(1.5rem, 4vw, 2.5rem)`,
        marginBottom: '1.5rem',
      }}>
        Mentor Profiles
      </h1>
      <div style={{
        marginBottom: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '10px',
        flexDirection: isTablet || isMobile ? 'column' : 'row',
      }}>
        <label htmlFor="expertise-filter" style={{
          fontSize: '1.125rem',
          fontWeight: '600',
          color: '#333',
        }}>
          Filter by Expertise:
        </label>
        <select
          id="expertise-filter"
          value={selectedExpertise}
          onChange={(e) => setSelectedExpertise(e.target.value)}
          style={{
            marginLeft: isTablet || isMobile ? '0' : '10px',
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            fontSize: `clamp(0.875rem, 2.5vw, 1rem)`,
            width: isTablet || isMobile ? '100%' : '100%',
            maxWidth: isTablet || isMobile ? 'none' : '200px',
          }}
        >
          {expertiseOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(auto-fit, minmax(200px, 1fr))' : 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: isMobile ? '10px' : isTablet ? '15px' : '20px',
        padding: '0 10px',
      }}>
        {filteredMentors.map((mentor) => (
          <div key={mentor.id} style={{
            backgroundColor: '#fff',
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: isMobile ? '10px' : isTablet ? '10px' : '15px',
            textAlign: 'center',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease',
            width: '100%',
            boxSizing: 'border-box',
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <img src={mentor.profilePic} alt={mentor.name} style={{
              width: isMobile ? '60px' : `clamp(80px, 20vw, 100px)`,
              height: isMobile ? '60px' : `clamp(80px, 20vw, 100px)`,
              borderRadius: '50%',
              objectFit: 'cover',
              marginBottom: '10px',
            }} />
            <h2 style={{
              fontSize: `clamp(1rem, 3vw, 1.25rem)`,
              margin: '10px 0',
              color: '#2c3e50',
            }}>
              {mentor.name}
            </h2>
            <p style={{
              color: '#16a085',
              fontSize: `clamp(0.875rem, 2.5vw, 1rem)`,
              marginBottom: '10px',
            }}>
              {mentor.expertise}
            </p>
            <p style={{
              color: '#7f8c8d',
              fontSize: `clamp(0.75rem, 2vw, 0.9rem)`,
              marginBottom: '15px',
            }}>
              {mentor.bio}
            </p>
            <Link to={`/mentors/${mentor.id}`} style={{
              display: 'inline-block',
              padding: isMobile ? '6px 12px' : '8px 16px',
              color: '#fff',
              backgroundColor: '#3498db',
              borderRadius: '4px',
              textDecoration: 'none',
              transition: 'background-color 0.3s ease',
              fontSize: `clamp(0.875rem, 2.5vw, 1rem)`,
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2980b9'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3498db'}
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
      <Link to="/add-mentor" style={{
        display: 'block',
        textAlign: 'center',
        padding: isMobile ? '6px 12px' : '10px 20px',
        backgroundColor: '#2ecc71',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '5px',
        margin: '20px auto 0',
        width: `clamp(150px, 50%, 200px)`,
        fontSize: `clamp(0.875rem, 2.5vw, 1rem)`,
      }}
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#27ae60'}
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2ecc71'}
      >
        Add New Mentor
      </Link>
    </div>
  );
};

export default MentorList;