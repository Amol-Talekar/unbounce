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
document.addEventListener('scroll',topbar)
var images =[
    "url('https://mk0zofoqaluvgdskgvsb.kinstacdn.com/photos/landing-page-convert-more-sales_sm.jpg')",
    "url('https://mk0zofoqaluvgdskgvsb.kinstacdn.com/photos/landing-page-convert-more-customers_sm.jpg')",
    "url('https://mk0zofoqaluvgdskgvsb.kinstacdn.com/photos/landing-page-convert-more-leads_sm.jpg')"
]
function changeBackground(){
    document.querySelector('.header').style.backgroundImage =images[0]
    document.querySelector('.inside_cont_text > p').innerHTML ="Convert More Sales"
}
function changeBackground_1(){
    document.querySelector('.header').style.backgroundImage =images[1]
    document.querySelector('.inside_cont_text > p').innerHTML ="Convert More Customers"
}
function changeBackground_2(){
    document.querySelector('.header').style.backgroundImage =images[2]
    document.querySelector('.inside_cont_text > p').innerHTML ="Convert More leads"
}
setInterval(changeBackground,2000)
setInterval(changeBackground_1,4000)
setInterval(changeBackground_2,6000)


function backgroundChangeToPink(){
    document.querySelector('.pricing-header-cont').style.backgroundColor = "pink"
    document.querySelector('.pricing-header>p:nth-child(1)').innerHTML="<b>Save 21% on Select Annual Plans*"
    document.querySelector('.pricing-header>p:nth-child(2)').innerHTML="Get a head start on this year’s conversion goal using our AI-powered <br> tools at a discount, until<b> February 21<b>.<br><h6>Use code at signup: 21_off</h6>"
    document.querySelector('.pricing-header>p:nth-child(3').innerHTML="*Optimize, Accelerate and Scale annual plans only. <a href=index.html>Terms & Conditions apply.</a>"
}
function backgroundChangeToWhite(){
    document.querySelector('.pricing-header-cont').style.backgroundColor = "white"
    document.querySelector('.pricing-header>p:nth-child(1)').innerHTML="Plans That Scale As You Grow"
    document.querySelector('.pricing-header>p:nth-child(2)').innerHTML="Whether you’re just getting started with landing pages or you’re already a call to action wizard, we’ve got a conversion-based pricing plan that fits."
    document.querySelector('.pricing-header>p:nth-child(3)').innerHTML=" Get instant access to Unbounce with your free 14-day trial."
}

var annaul = document.querySelector('.pricing-header>button:nth-child(5)')
var monthly = document.querySelector('.pricing-header>button:nth-child(4)')
monthly.addEventListener('click',backgroundChangeToWhite)
annaul.addEventListener('click',backgroundChangeToPink)
