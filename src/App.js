//import logo from './logo.svg';
import './App.css';
import SortingVisuallizer from './SortingVisuallizer/SortingVisuallizer';

function App() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
  <a className="navbar-brand" href="#">Sorting-Algorithms ➡️</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="btn-group" role="group" aria-label="Basic example">
  <button type="button" className="btn btn-dark" >Merge</button>
  <button type="button" className="btn btn-dark">Bubble</button>
  <button type="button" className="btn btn-dark">Selection</button>
  <button type="button" className="btn btn-dark">Heap</button>
  <button type="button" className="btn btn-dark">Quick</button>
</div>

<ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="https://github.com/Arpcoder">Build by Arpcoder <span className="sr-only">(current)</span></a>
      </li>
</ul>
  
</nav>
    <div className="App" style={{backgroundColor:"black"}}>
      <SortingVisuallizer></SortingVisuallizer>
      
    </div>
    </>
  );
}

export default App;





