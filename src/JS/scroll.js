let saud = document.querySelector('#saud')
let title = document.querySelector('#title')
let blocks = Array.from(document.querySelectorAll('.blocks'))

window.addEventListener('scroll', () => {
    let value = window.scrollY
    let block1 = blocks[0]
    let block2 = blocks[1]
    let block3 = blocks[2]
    let block4 = blocks[3]
    let block5 = blocks[4]

    block1.style.marginTop = value * -0.4 + 'px'
    block2.style.marginTop = value * -0.3 + 'px'
    block3.style.marginTop = value * -0.3 + 'px'
    block4.style.marginTop = value * -0.1 + 'px'
    block5.style.marginTop = value * -0.2 + 'px'
    title.style.marginTop = value * -2.5 + 'px'

})