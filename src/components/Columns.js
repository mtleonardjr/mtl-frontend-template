import { useState, useEffect } from 'react';
import Search from './Search';
import CollapsedCard from './CollapsedCard';
import Add from './Add'

const Columns = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showAdd, setShowAdd] = useState(false);

  return (
    <div className="row">
      {showSearch === true && (<Search onAdd={() => setShowSearch(!showSearch)}/>)}
      {showSearch === false && <CollapsedCard onAdd={() => setShowSearch(!showSearch)}/>}

      {showAdd === true && (<Add onAdd={() => setShowAdd(!showAdd)}/>)}
      {showAdd === false && <CollapsedCard onAdd={() => setShowAdd(!showAdd)}/>}
      <div className="column">
        <div className="card-records">
          <div className="column-item">Column 1</div>
          <div className="column-item">Column 1</div>
          <div className="column-item">Column 1</div>
          <div className="column-item">Column 1</div>
          <div className="column-item">Column 1</div>
          <div className="column-item">Column 1</div>
          <div className="column-item">Column 1</div>
          <div className="column-item">Column 1</div>
          <div className="column-item">Column 1</div>
          <div className="column-item">Column 1</div>
          <div className="column-item">Column 1</div>
          <div className="column-item">Column 1</div>
          <div className="column-item">Column 1</div>
          <div className="column-item">Column 1</div>
          <div className="column-item">Column 1</div>
          <div className="column-item">Column 1</div>
          <div className="column-item">Column 1</div>
          <div className="column-item">Column 1</div>
          <div className="column-item">Column 1</div>
        </div>
      </div>
    </div>
  )
} 
  
export default Columns