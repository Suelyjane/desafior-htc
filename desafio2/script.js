const $boxRed = document.querySelector('.box-1')
const $boxBlue = document.querySelector('.box-2')
const $boxGreen = document.querySelector('.box-3')
const $boxYellow = document.querySelector('.box-4')

function removeBox(numberBox){
    const $box = document.querySelector('.box-' + numberBox)

    $box.remove()
}
$boxRed.addEventListener('click', function(){
    removeBox(1)
})

$boxBlue.addEventListener('click', function(){
    removeBox(2)
})

$boxGreen.addEventListener('click', function(){
    removeBox(3)
})

$boxYellow.addEventListener('click', function(){
    removeBox(4)
})