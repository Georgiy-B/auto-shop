import React from 'react';
import './MaterialCard.scss';

function MaterialCard({ title='', titleUnderline=true, className='', children }) {
  const titleStyle = {
    display: title ? 'block' : 'none',
    borderBottomWidth: titleUnderline ? '1px' : '0px'
  };

  return (
    <div className={`material-card ${className}`}>
      <div className="material-card-title" style={titleStyle}>
        {title}
      </div>
      {children}
    </div>
  );
}

export default MaterialCard;