import CurrentPage from './Pages.js'

export default function Button(name) {

    const Button = document.createElement('li')
    Button.innerText = `${name}`
    Button.setAttribute('class', 'Button')
    Button.setAttribute('id', `Button${name}`)
    Button.onclick = () => console.log('Click')

    return Button
}