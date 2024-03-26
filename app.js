


let title = document.querySelector('#title')
let btn = document.querySelector('button')
let div = document.querySelector('#div1')

function colorGenerator(){
    let red = Math.floor(Math.random()*256)
    let green = Math.floor(Math.random()*256)
    let blue = Math.floor(Math.random()*256)
    return  `rgb(${red}, ${green}, ${blue})`;
}

btn.addEventListener('click', () => {
    let colorChange = colorGenerator()
    document.body.style.backgroundColor = colorChange
    title.textContent = colorChange 
    // btn.style.backgroundColor = colorChange
    // div.style.backgroundColor = colorChange

})



