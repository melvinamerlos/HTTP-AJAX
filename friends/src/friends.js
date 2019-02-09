import React from 'react';
import PropTypes from 'prop-types';

function Friend ({ friend }) {
    const { name, age, email } = friend;
    return (
      <div className="summary">
        <div className="name">
          Name: {name}
        </div>
        <div className="age">
          Age: {age}
        </div>
        <div className="email">
          Email: {email}        
        </div><br/>
      </div>
    );
  }

  Friend.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string
  }
  
  export default Friend;