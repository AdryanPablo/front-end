import Button from './Button.js'

export default function Menu() {

    const List = document.createElement('ul')
    List.setAttribute('class', 'List')

    List.append(Button('Home'))
    List.append(Button('Login'))
    List.append(Button('About'))

    const Menu = document.createElement('nav')
    Menu.setAttribute('class', 'Menu')

    Menu.append(List)

    return Menu
}