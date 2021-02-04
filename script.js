function topbar(){
    
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector(".nav-bar").style.backgroundColor = "white"
        document.querySelector(".nav-bar a:nth-child(8)>button").style.color = "blue"
        document.querySelector(".nav-bar a:nth-child(8)>button").style.border = "2px solid blue"
        document.querySelector(".nav-bar a:nth-child(9)>button").style.backgroundColor="blue"
    } else {
        document.querySelector(".nav-bar").style = "none"
        document.querySelector(".nav-bar a:nth-child(8)>button").style.color = "black"
        document.querySelector(".nav-bar a:nth-child(8)>button").style.border = "2px solid black"
        document.querySelector(".nav-bar a:nth-child(9)>button").style.backgroundColor="black"

      
    }
}
function changeBackground(){
    document.querySelector('.header').style.backgroundImage = "url('https://mk0zofoqaluvgdskgvsb.kinstacdn.com/photos/landing-page-convert-more-sales_sm.jpg')";
    // if(document.querySelector('.header').style.backgroundImage == "url('https://mk0zofoqaluvgdskgvsb.kinstacdn.com/photos/landing-page-convert-more-sales_sm.jpg')"){
    //     document.querySelector('.header').style.backgroundImage = "url('https://mk0zofoqaluvgdskgvsb.kinstacdn.com/photos/landing-page-convert-more-customers_sm.jpg')";
    // }
    // else if(document.querySelector('.header').style.backgroundImage = "url('https://mk0zofoqaluvgdskgvsb.kinstacdn.com/photos/landing-page-convert-more-customers_sm.jpg')"){
    //     document.querySelector('.header').style.backgroundImage = "url('https://mk0zofoqaluvgdskgvsb.kinstacdn.com/photos/landing-page-convert-more-leads_sm.jpg')";  
    // }
}

setInterval(changeBackground,1000)


document.addEventListener('scroll',topbar)