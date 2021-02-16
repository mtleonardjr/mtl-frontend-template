import RecordItems from './RecordItems'

const Records = ({ onAdd }) => {
    return (
      <div className="column">
        <div className="card">
          <div className='card-label'>
            <div className='label-collapsed-invs'></div>
            <label className='label-collapsed'>Records</label>
            <div className='expand' >
              <button onClick={onAdd}>x</button>
            </div>
          </div>
          <div className="card-records">
              <RecordItems />
          </div>
        </div>
      </div>
    )
  } 
  
export default Records