const heading = document.getElementById('title')
//const heading2 = document.getElementsByTagName('h2')[0]
//const heading2 = document.getElementsByClassName('h2')
//const heading2 = document.querySelector('.h2')
const heading2 = document.querySelector('#sub-hello')// завжди 1 елемент



 //const heading3 = heading2.nextElementSibling
 const h2list = document.querySelectorAll('p')
 const heading3 = h2list[h2list.length - 1]

//console.log(heading3)

setTimeout(() => {
    addStylesTo(heading, 'Js')
}, 1500)

const link = heading3.querySelector('a')

link.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('click on link', event.target.getAttribute('href'))
    const url =  event.target.getAttribute('href')
    
    window.location = url
})

setTimeout(() => {
    addStylesTo(heading3.children[0], 'Work', 'yellow')
}, 3000)


setTimeout(() => {
    addStylesTo(heading2, 'Come on', 'blue', '2rem')
}, 4500)


function addStylesTo(node, text, color = 'red', fontSize) {
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'black'
    node.style.padding = '2rem'
    node.style.display = 'block'
    node.style.width = '100%'
    // falsy: '', undefined, null, 0, false
    if (fontSize) {
        node.style.fontSize = fontSize
    }
}

heading.onclick = () => {
    if (heading.style.color === 'red') {
        heading.style.color = '#000'
        heading.style.backgroundColor = '#fff'
    }   else {
        heading.style.color = 'red'
        heading.style.backgroundColor = '#000'
    }
}

heading2.addEventListener('dblclick', () => {
    if (heading2.style.color === 'yellow') {
        heading2.style.color = '#000'
        heading2.style.backgroundColor = '#fff'
    }   else {
        heading2.style.color = 'yellow'
        heading2.style.backgroundColor = '#000'
    }
})
