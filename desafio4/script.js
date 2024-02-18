const $form = document.querySelector('.form')
const $inputNumber = document.querySelector('.insert-field')
const $textNumber = document.querySelector('.text-number')

$form.addEventListener('submit', function(event){
    event.preventDefault()

    $textNumber.textContent = ''

    const number = Number($inputNumber.value)

    for (let index = 0; index <= number; index ++){
        $textNumber.textContent = $textNumber.textContent + index + ''
    }
})