import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="app">
        <div className="banner">
          <div>Banner</div>
        </div>
        <div className="main-body">
          <div className="header-1">
            <div>
              Header-1
            </div>
          </div>
          <div className="header-2">
            <div>
              Header-2
            </div>
            <div>
              Header-2
            </div>
            <div>
              Header-2
            </div>
          </div>
          
          <div className="row">
            <div className="column">
              <div className="column-1">
                <div className="column-item">Column 1</div>
                <div className="column-item">Column 1</div>
                <div className="column-item">Column 1</div>
              </div>
            </div>
            <div className="column">
              <div className="column-2">
                <div className="column-item">Column 2</div>
                <div className="column-item">Column 2</div>
                <div className="column-item">Column 2</div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div>Footer</div>
        </div>
      </div>
    </div>
  );
}

export default App;
