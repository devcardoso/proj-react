import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './tab.css';

const Tab = props => {
  const { tabtext, icon, activetab, cardindex, onClick } = props,
        isActive = activetab === cardindex ? ' active' : '';

  return (
    <div className={`tab${isActive}`} onClick={onClick}>
      {icon ? <FontAwesomeIcon icon={icon} style={{ color: 'red' }}/> : ''}
      {tabtext}
    </div>
  );
};

export default Tab;