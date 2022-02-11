import Home from '../Pages/Home.js'
import Login from '../Pages/Login.js'
import About from '../Pages/About.js'

window.addEventListener('hashchange', () => {
    const Main = document.querySelector('.Main')

    let newPage = CurrentPage(window.location.hash)
    let oldPage = Main.firstChild

    Main.replaceChild(newPage, oldPage)
})

export default function CurrentPage(page) {
    let CurrentPage

    if (page == '#Login') {

        CurrentPage = Login()

    } else if (page == '#About') {

        CurrentPage = About()

    } else {

        CurrentPage = Home()
    }

    return CurrentPage
}