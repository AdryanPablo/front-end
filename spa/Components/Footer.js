export default function Footer() {

    const Footer = document.createElement('div')
    Footer.setAttribute('class', 'Footer')
    
    let content = document.createElement('p')
    content.innerText = 'Footer'

    Footer.append(content)

    return Footer
}