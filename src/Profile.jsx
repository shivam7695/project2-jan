import React, { useState, useEffect } from 'react';

const Profile = ({ user }) => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/users/${user.id}`);
        if (response.ok) {
          const details = await response.json();
          setUserDetails(details);
        }
      } catch (error) {
        console.error('Fetch user details error:', error);
      }
    };

    fetchUserDetails();
  }, [user.id]);

  return (
    <div>
      <h1>Profile Page</h1>
      {userDetails && (
        <div>
          <p>ID: {userDetails.id}</p>
          <p>Name: {userDetails.name}</p>
          <p>Username: {userDetails.username}</p>
          <p>Email: {userDetails.email}</p>
          <p>Age: {userDetails.age}</p>
          <p>BirthDate: {userDetails.birthDate}</p>
          <p>Gender: {userDetails.gender}</p>
          <p>BloodGroup: {userDetails.bloodGroup}</p>
          
        </div>
      )}
    </div>
  );
};

export default Profile;
