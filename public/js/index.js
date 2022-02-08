console.log(`client side javascript is available`);

// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then((data)=>{
//         console.log(data);
//     })
    
// })

const weatherForm=document.querySelector('form');
const search=document.querySelector('input')
const messageOne=document.querySelector('#message-1')

messageOne.textContent='From Nodejs'
weatherForm.addEventListener('submit',(event)=>{
    event.preventDefault()
    const location =search.value
    console.log(location);
})