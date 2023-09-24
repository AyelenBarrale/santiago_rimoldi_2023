import React, {useState} from 'react'
import WorkListContainer from '../WorkListContainer/WorkListContainer'

const Work = () => {
  const [filter, setFilter] = useState('All');

  const handleFilterChange = newFilter => {
    setFilter(newFilter);
  };

  return (
      <div className="work-container">
          <div className="filterBar" id="filterBar">
        <ul className="filterList" id="filterList">
          <li className="filterList-Item" onClick={() => handleFilterChange('All')} >All</li>
          <li className="filterList-Item" onClick={() => handleFilterChange('Branding')} >Branding</li>
          <li className="filterList-Item" onClick={() => handleFilterChange('Photo Manipulation')} >Photo Manipulation</li>
        </ul>
      </div>
      <WorkListContainer filter={filter}/>
      </div>
  )
}

export default Work
