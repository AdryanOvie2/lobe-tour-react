import './App.css'
import Header from './components/header/header'

function App() {
  return (
    <>
      <Header/>

      <main>
        <h1>Lobe Tour</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id et officiis eligendi non, voluptates consequuntur.</p>
        <figure>
          <img src="" alt="imagen principal" />
        </figure>

        <h2>Train your app with Lobe</h2>
        <button>Download</button>
        <hr className="divider" />
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
