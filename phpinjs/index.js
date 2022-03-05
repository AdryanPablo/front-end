import PHP from './components/PHP.js'
import Message from './components/Message.js'

const root = document.querySelector('body')

window.addEventListener('load', () => {

    root.innerHTML = PHP(Message())

})