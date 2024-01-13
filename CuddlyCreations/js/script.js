
let imgArray = ['../images/card1.png', '../images/card2.png', '../images/card3.png', '../images/card4.png']
let heading = ['Teddy-Bear', 'Elephant', 'Unicorn', 'Giraffe']
let imgElement = document.getElementById("slider-img")
let slider_heading = document.getElementById("slider-heading")

var currentIndex = 0;


function change() {
    if (currentIndex < imgArray.length - 1) {
        currentIndex++
    }

    else if (currentIndex == imgArray.length - 1) {
        currentIndex = 0
    }

    imgElement.src = imgArray[currentIndex]
    slider_heading.innerHTML = heading[currentIndex]

}

let dispalyElements = ['../images/card1.png', '../images/card1b.png', '../images/card1c.png', '../images/card2.png', '../images/card2b.png', '../images/card2c.png', '../images/card4.png', '../images/card4b.png', '../images/card4c.png']

let img1 = document.getElementById("display-img1")
let img2 = document.getElementById("display-img2")
let img3 = document.getElementById("display-img3")

console.log(img2)

function changeD1() {
    img1.src = dispalyElements[0]
    img2.src = dispalyElements[1]
    img3.src = dispalyElements[2]
}
function changeD2() {
    img1.src = dispalyElements[3]
    img2.src = dispalyElements[4]
    img3.src = dispalyElements[5]
}
function changeD3() {
    img1.src = dispalyElements[6]
    img2.src = dispalyElements[7]
    img3.src = dispalyElements[8]
}

dispalyElements = ['../images/card1.png', '../images/card1b.png', '../images/card1c.png', '../images/card2.png', '../images/card2b.png', '../images/card2c.png', '../images/card4.png', '../images/card4b.png', '../images/card4c.png']

let left_arrow = document.getElementById('aleft')
let right_arrow = document.getElementById('aright')
let current_Index = 0
let imgP = document.getElementById("slider-imgP")


function changeR() {

    if (current_Index == ((dispalyElements.length) - 1)) {
        right_arrow.style.color = ' rgba(10, 55, 59, 0.288)';
    }
    else {
        current_Index++
        imgP.src = dispalyElements[current_Index]
    }
    
    if(current_Index!=0){
        left_arrow.style.color = ' rgb(10, 55, 59)';
    }
}

function changeL() {

    if (current_Index == 0) {
        left_arrow.style.color = ' rgba(10, 55, 59, 0.288)';
    }
    else {
        current_Index--
        imgP.src = dispalyElements[current_Index]
    }

    if(current_Index != ((dispalyElements.length) - 1)){
        right_arrow.style.color = ' rgb(10, 55, 59)';
    }

}

