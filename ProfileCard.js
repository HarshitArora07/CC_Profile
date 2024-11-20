// src/components/ProfileCard.js
import React from 'react';
import PropTypes from 'prop-types';

const ProfileCard = ({ name, age, location, bio }) => {
  return (
    <div className="profile-card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
      <p>{bio}</p>
    </div>
  );
};

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired
};

export default ProfileCard;
