// import './App.css';

function App() {
  const name = 'Loren'
  const x = false

  return (
    <div className='container'>
     <h1>Hello From {name}</h1>
     <h2> ternary {x ? 'yes' : 'no' } </h2>

    </div>
  );
}

export default App;
