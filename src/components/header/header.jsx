import '../../styles/header.css'
import Logo from './logo'
import Button from '../button'
import Navigation from './nav'

export default function Header(){
    function menu(){
        const nav = document.getElementById('nav');
        nav.classList.toggle('show');
    }

    return(
        <header>
            <Logo/>
            <p onClick={menu}>menu</p>
            <Navigation/>
            <Button name='Donwload'/>
        </header>
    )
}

