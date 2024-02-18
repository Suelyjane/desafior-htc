const $textAuthor = document.querySelector('.text-author')
const $textField = document.querySelector('.text-field')
const $form = document.querySelector('.form')

$form.addEventListener('submit', function(event){
    event.preventDefault()

    $textAuthor.textContent = $textField.value
})

$textField.addEventListener('input', function(){
    $textAuthor.textContent = $textField.value
})
