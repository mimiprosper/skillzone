import React from 'react'

const PaginationCard = ({number}) => {
  return (
    <div>
      <h1 className="bg-gray-400 text-white px-5 py-3 rounded-lg">{number}</h1>
    </div>
  );
}

export default PaginationCard