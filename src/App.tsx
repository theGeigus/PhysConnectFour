import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Connect 4!</h1>
      <div className="card">
        <button className='play-button'>
          Click here to play!
        </button>
        <p>
          You will be matched with another waiting player...
        </p>
      </div>
      <div className="footer">
        <p>
          Made by Winona State Computer Science and Physics Club
        </p>
      </div>
    </>
  )
}

export default App
