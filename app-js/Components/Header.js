import Logo from './Logo.js'
import Menu from './Menu.js'

export default function Header() {

    const Header = document.createElement('div')
    Header.setAttribute('class', 'Header')

    Header.append(Logo())
    Header.append(Menu())

    return Header
}