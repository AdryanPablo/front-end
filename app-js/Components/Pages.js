import Home from '../Pages/Home.js'
import Login from '../Pages/Login.js'
import About from '../Pages/About.js'

export default function CurrentPage(name) {

    let CurrentPage

    if (name == 'Login') {

        CurrentPage = Login()

    } else if (name == 'About') {

        CurrentPage = About()

    } else {

        CurrentPage = Home()
    }

    return CurrentPage
}