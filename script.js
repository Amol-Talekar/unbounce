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