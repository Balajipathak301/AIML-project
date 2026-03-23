import React from 'react';

function MemberSection({ member }) {
  return (
    <div id={member.id} className="member-section">
      
      <div className="photo-container">
        <img 
          src={member.photo} 
          alt={`${member.name}'s profile`} 
          className="photo-placeholder" 
          style={{ objectFit: 'cover', borderStyle: 'solid' }} 
        />
      </div>

      <div className="member-info">
        <h2 className="member-name">{member.name}</h2>
        <h3 className="member-role">{member.role}</h3>
        
        <p className="member-description">
          {member.description}
        </p>
        
        <a href={member.exploreLink} className="explore-btn">
          Explore
        </a>
      </div>
      
    </div>
  );
}

export default MemberSection;