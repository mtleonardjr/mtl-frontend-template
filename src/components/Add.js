const Add = ({ onAdd }) => {
    return (
      <div className="column">
        <form className="card">
          <div className='card-label2'>
            <div className='label-collapsed-invs'></div>
            <label className='label-collapsed'>Add</label>
            <div className='expand' >
              <button onClick={onAdd}>x</button>
            </div>
          </div>
          <input type='text' className='text-input'></input>
          <input type='text' className='text-input'></input>
          <input type='submit'></input>
        </form>
      </div>
    )
  } 
  
export default Add