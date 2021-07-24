import React from 'react';
import NameCard from '../NameCard/NameCard';
import './Results.css';

const Results = ({ suggestedNames }) => {
  const suggest = suggestedNames.map((suggestedName) => {
    return <NameCard key={suggestedName} suggestedName={suggestedName} />;
  });
  return <div className='results-container'>{suggest}</div>;
};

export default Results;
