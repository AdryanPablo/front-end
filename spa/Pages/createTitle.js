export default function createTitle(name) {

    const Title = document.createElement('h1')
    Title.setAttribute('class', 'Title')
    Title.innerText = `${name}`

    return Title
}