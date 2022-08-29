const options = document.querySelectorAll('.circle')
const submitButton = document.querySelector('.submitButton')
const mainPage = document.querySelector('.content')
const thankyouPage = document.querySelector('.thankYou')
let acc = 0

options.forEach((option, index) => {
    option.onclick = () => {
        options[acc].removeAttribute('active')
        options[index].setAttribute('active', '')
        acc = index
        submitButton.removeAttribute('disabled')
    }
})

submitButton.onclick = () => {
    mainPage.classList.add('hidden')
    thankyouPage.classList.add('active')
    document.querySelector('.rateText').innerText = `You selected ${acc + 1} out of 5`
}