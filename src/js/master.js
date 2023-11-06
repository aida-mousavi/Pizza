
let scrollTopScreen
let headerImg = document.querySelectorAll('#headFood')
let pizzaSlice = document.querySelector('#pizzaSlice')
let pizzaSliceImgs = document.querySelectorAll('#pizzaSlice>img')
let chefImgs = document.querySelectorAll('#chef>img')
let follow = document.querySelector('#follow')
let mainSection = document.querySelector('#mainSection')
document.addEventListener("resize",()=>{

let allHeightScreen=document.getElementsByTagName('main')[0].scrollHeight
mainSection.style.height=allHeightScreen+'px'
})

document.getElementsByTagName('main')[0].addEventListener("scroll", (e) => {

    scrollTopScreen = e.target.scrollTop
    headerImg[0].classList.remove("animate-headImgTop")
    headerImg[1].classList.remove("animate-headImgBottom")
    headerImg[0].style.transform = "rotate(" + (scrollTopScreen + 220) / 25 + "deg)"
    headerImg[1].style.transform = "rotate(-" + (scrollTopScreen + 220) / 25 + "deg)"

    document.querySelector('#goodFood').style.transform = "translateX(-" + scrollTopScreen / 200 + "%)"

    if ((scrollTopScreen + 200) > (pizzaSlice.offsetTop)) {
        pizzaSliceImgs[1].classList.remove("opacity-0")
        pizzaSliceImgs[1].classList.add("animate-starRed")
        pizzaSliceImgs[2].classList.remove("opacity-0")
        pizzaSliceImgs[2].classList.add("animate-starRed")
    }
 
    if ((scrollTopScreen) > (document.querySelector('#since').offsetTop)) {
      
        let bomb=document.querySelectorAll("#bomb>img")
        bomb.forEach((val)=>{
            val.classList.add("animate-heartBomb")
        })
    }

      if(scrollTopScreen>follow.offsetTop){
        chefImgs.forEach((val)=>{
            let data=val.getAttribute('data-rotate')
            data=+data 
            val.style.transform = "rotate("+ (data * (scrollTopScreen-(follow.offsetTop))/500) + "deg) translateY(-"+(scrollTopScreen-(follow.offsetTop)) + "px)"

        })
        

      }

})


