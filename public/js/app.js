console.log('Client side javascript file is loaded!')



const weatherForm = document.querySelector('form')
const formInput = document.querySelector('input')
const msgOne = document.querySelector('#msgOne')
const msgTwo = document.querySelector('#msgTwo')

msgOne.textContent = 'Weather details: '
msgTwo.textContent = ''

weatherForm.addEventListener('submit',(e) => {
    e.preventDefault()

    const search = formInput.value

    fetch(`/weather?address=${search}`).then((response)=>{
    response.json().then((data)=>{
        if (data.error) {
            console.log(data.error)
            msgOne.textContent = data.error
            msgTwo.textContent = ''
        } else { 
            console.log(data.location)
            msgOne.textContent = data.location
            console.log(data.forecast)
            msgTwo.textContent = data.forecast
        }
    })
})
})