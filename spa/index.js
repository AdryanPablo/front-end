import App from './App.js'

window.addEventListener('load', () => {
    const root = document.querySelector('body')

    root.appendChild(App())
})