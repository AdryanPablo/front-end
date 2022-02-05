import Header from './Components/Header.js'
import Main from './Components/Main.js'
import Footer from './Components/Footer.js'

export default function App() {

    const App = document.createElement('div')
    App.setAttribute('class', 'App')

    App.append(Header())
    App.append(Main())
    App.append(Footer())
    
    return App
}