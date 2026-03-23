import { useState } from "react";
import "./App.css";
import MemberSection from "./MemberSection";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const teamMembers = [
    { 
      id: "neev", 
      name: "Neev", 
      role: "Digital Security", 
      linkedin: "https://www.linkedin.com/in/...",
      photo: "/kaizen_pic_Neev.jpg", 
      description: "Securing systems and finding vulnerabilities.",
      exploreLink: "/#"
    },
    { 
      id: "rajvee", 
      name: "Rajvee", 
      role: "Cloud Lead", 
      linkedin: "https://www.linkedin.com/in/...",
      photo: "/kaizen_pic_Rajvee.jpg",
      description: "Architecting scalable cloud infrastructure.",
      exploreLink: "/#"
    },
    { 
      id: "bharvi", 
      name: "Bharvi", 
      role: "Graphics Designer", 
      linkedin: "https://www.linkedin.com/in/...",
      photo: "/kaizen_pic_Bharvi.jpg",
      description: "Bringing creative visions to life through digital art.",
      exploreLink: "/#"
    },
    { 
      id: "jishnu", 
      name: "Jishnu", 
      role: "Applied AI Developer", 
      linkedin: "https://www.linkedin.com/in/...",
      photo: "/kaizen_pic_Jishnu.jpg",
      description: "Developing intelligent algorithms and machine learning models.",
      exploreLink: "/#"
    },
    { 
      id: "suvradeep", 
      name: "Suvradeep", 
      role: "Data Analyst", 
      linkedin: "https://www.linkedin.com/in/...",
      photo: "/kaizen_pic_Suvradeep.jpg",
      description: "Extracting insights and predicting trends from raw data.",
      exploreLink: "/#"
    },
    { 
      id: "balaji", 
      name: "Balaji", 
      role: "Full Stack Developer", 
      linkedin: "https://www.linkedin.com/in/balaji-pathak-78b04a365",
      photo: "/kaizen_pic_Balaji.png", 
      description: "Building the core logic and seamless user interfaces.",
      exploreLink: "/#"
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    const term = searchTerm.toLowerCase().trim();

    const foundMember = teamMembers.find(
      (m) =>
        m.name.toLowerCase().includes(term) ||
        m.role.toLowerCase().includes(term)
    );

    if (foundMember) {
      const section = document.getElementById(foundMember.id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      alert("No team member or role found for that search!");
    }
  };

  return (
    <div className="app">

      
      <div className="header-container">
        <div className="nav-inner">

          
          <h1 className="logo">Hackathon Team Website</h1>

          
          <div className="nav-tabs">
            <button className="tab active">Members</button>
            <button className="tab">Projects</button>
            <button className="tab">Contacts</button>
          </div>

          
          <form className="search-form" onSubmit={handleSearch}>
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="search-btn">
              Search
            </button>
          </form>

        </div>
      </div>

      
      <div className="main-content">
        {teamMembers.map((member) => (
          <MemberSection key={member.id} member={member} />
        ))}
      </div>


    </div>
  );
}

export default App;
