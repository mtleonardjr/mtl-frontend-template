import { useState, useEffect } from 'react';
import Search from './Search';
import CollapsedCard from './CollapsedCard';

const Columns = () => {
  const [showSearch, setShowSearch] = useState(true)

  return (
    <div className="row">
      {showSearch === false && (<Search onAdd={() => setShowSearch(!showSearch)}/>)}
      {showSearch === true && <CollapsedCard onAdd={() => setShowSearch(!showSearch)}/>}
      <div className="column">
        <form className="card">
          <div className='delete' >
            <button>x</button>
          </div>
          <label className='card-label'>Add Note</label>
          <input type='text' className='text-input'></input>
          <input type='text' className='text-input'></input>
          <input type='submit'></input>
        </form>
      </div>
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