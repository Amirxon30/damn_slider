const pictures = ["1", "2", "3", "4", "5", "6"];

const buttons = document.querySelectorAll('.btn')
const imgDiv = document.querySelector('.img_holder')

let counter = 0

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        if (button.classList.contains('btn_left')) {
            counter--
            if(counter < 0) {
                counter = pictures.length - 1
            }
            imgDiv.style.background = `url('./image/${pictures[counter]}.jpg')`
            imgDiv.style.backgroundPosition = "bottom";
            imgDiv.style.backgroundSize = "cover";
            imgDiv.style.backgroundRepeat = "no-repeat";
        }
        if (button.classList.contains('btn_right')) {
            counter++
            if(counter > pictures.length - 1) {
                counter = 0
            }
            imgDiv.style.background = `url('/image/${pictures[counter]}.jpg')`
            imgDiv.style.backgroundPosition = "center";
            imgDiv.style.backgroundSize = "cover";
            imgDiv.style.backgroundRepeat = "no-repeat";
        }
    })
});