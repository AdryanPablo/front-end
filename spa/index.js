import Header from './Components/Header.js'
import Main from './Components/Main.js'
import Footer from './Components/Footer.js'

const root = document.querySelector('body')

window.addEventListener('load', () => {
    
    root.appendChild(Header())
    root.appendChild(Main())
    root.appendChild(Footer())
    
})