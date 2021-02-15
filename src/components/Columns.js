const Columns = () => {
    return (
      <div className="row">
        <div className="column-search">
          <form className="card-search">
            <div className='delete' >
              <button>x</button>
            </div>
            <label className='card-label'>Search Label</label>
            <input type='text' className='text-input'></input>
            <input type='submit'></input>
          </form>
        </div>
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