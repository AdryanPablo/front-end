import CurrentPage from './Pages.js'

export default function Main() {

    const Main = document.createElement('main')
    Main.setAttribute('class', 'Main')

    Main.append(CurrentPage())

    return Main
}