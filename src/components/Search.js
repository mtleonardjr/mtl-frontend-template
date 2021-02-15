const Search = ({ onAdd }) => {
    return (
        <div className="column">
        <form className="card">
          <div className='delete' >
            <button onClick={onAdd}>x</button>
          </div>
          <label className='card-label'>Search Label</label>
          <input type='text' className='text-input'></input>
          <input type='submit'></input>
        </form>
      </div>
    )
  } 
  
export default Search