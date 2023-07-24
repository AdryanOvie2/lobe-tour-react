import './App.css'
import Header from './components/header/header'
import Hero from './components/hero'

function App() {
  return (
    <>
      <Header/>

      <main>
        <Hero/>
      </main>

      <footer>
        <div className="footer-column">
          <h3>Logo</h3>
          <ul>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            </ul>
        </div>
        <div className="footer-column">
          <h3>About</h3>
          <ul>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>General</h3>
          <ul>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Social Media</h3>
        </div>
      </footer>
    </>
  )
}

export default App
