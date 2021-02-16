const CollapsedComponent = ({ onAdd }) => {
    return (
        <div className="column">
        <div className="card-collapsed">
          <div className='label-collapsed-invs'></div>
          <label className='label-collapsed'>Collapsed Component Label</label>
          <div className='expand' >
            <button onClick={onAdd}>x</button>
          </div>
        </div>
      </div>
    )
  } 
  
export default CollapsedComponent