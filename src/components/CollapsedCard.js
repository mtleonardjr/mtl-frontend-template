const CollapsedComponent = ({ onAdd, title }) => {
    return (
        <div className="column">
        <div className="card-collapsed">
          <div className='label-collapsed-invs'></div>
          <label className='label-collapsed'>{title}</label>
          <div className='expand' >
            <button onClick={onAdd}>+</button>
          </div>
        </div>
      </div>
    )
  } 
  
export default CollapsedComponent