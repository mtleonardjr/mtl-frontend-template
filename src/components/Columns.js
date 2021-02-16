import { useState, useEffect } from 'react';
import Search from './Search';
import CollapsedCard from './CollapsedCard';
import Add from './Add'
import Records from './Records'

const Columns = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [showRecords, setShowRecords] = useState(false);

  return (
    <div className="row">
      {showSearch === true && (<Search onAdd={() => setShowSearch(!showSearch)}/>)}
      {showSearch === false && <CollapsedCard onAdd={() => setShowSearch(!showSearch)} title='Search'/>}

      {showAdd === true && (<Add onAdd={() => setShowAdd(!showAdd)}/>)}
      {showAdd === false && <CollapsedCard onAdd={() => setShowAdd(!showAdd)} title='Add'/>}

      {showRecords === true && (<Records onAdd={() => setShowRecords(!showRecords)}/>)}
      {showRecords === false && <CollapsedCard onAdd={() => setShowRecords(!showRecords)} title='Records'/>}
    </div>
  )
} 
  
export default Columns