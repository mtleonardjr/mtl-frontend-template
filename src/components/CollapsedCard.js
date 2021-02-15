const CollapsedComponent = ({ onAdd }) => {
    return (
        <div className="column">
        <div className="card">
          <div className='delete' >
            <button onClick={onAdd}>x</button>
          </div>
          <label className='card-label'>CollapsedComponent Label</label>
        </div>
      </div>
    )
  } 
  
export default CollapsedComponent