const Search = () => {
    return (
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
    )
  } 
  
export default Search