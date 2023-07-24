import '../styles/hero.css'
import imgVideo from '../assets/Video.jpg'

export default function Hero(){
    return(
        <>
            <h1 className="main-title">Lobe <span>Tour</span></h1>
            <p className='main-text'>Build your first machine learning model in ten minutes. No code or experience required.</p>
            <figure>
                <img src={imgVideo} alt="imagen principal" loading='lazy'/>
            </figure>

            <h2 className='main-subtitle'>Train your app with Lobe</h2>
            <button>Download</button>
            <hr className="divider" />
        </>
    )
}