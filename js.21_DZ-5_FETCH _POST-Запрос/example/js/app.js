const tabs = document.querySelectorAll(".tabheader__item")
const tabsParent = document.querySelector(".tabheader__items")
const tabContent = document.querySelectorAll(".tabcontent")
const tabContentImages = document.querySelectorAll('.tabcontent img')

// cnrl f поииск слова
const hideTabContent = () => {
  tabContent.forEach((item) => {
      item.style.display = "none"
  })
  tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active")
  })
  tabContentImages.forEach((item) => {
      item.style.opacity = '0.5'
  })
}
const showTabContent = (i = 3) => {
  tabContent[i].style.display = "block"
  setTimeout(() => {
      tabContentImages[i].style.opacity = '1'
  },0)
  tabs[i].classList.add("tabheader__item_active")
}

hideTabContent()
showTabContent()

// tabsParent.addEventListener("click", (event) => {
//   const target = event.target

//   if(target.classList.contains("tabheader__item")){
//       tabs.forEach((item, i) => {
//         // fotEach - это главное ,  все просматривает 
//           if(target === item){
//               console.log(i)
//               hideTabContent()
//               showTabContent(i)
//           }
//       })
//   }
// })


let currSlide = 0;
setInterval(() => {
    if (currSlide <= 3) {
        hideTabContent()
        showTabContent(currSlide)
        currSlide++
    } else {
        currSlide = 0
        hideTabContent()
        showTabContent(currSlide)
    }
},2000);


const modal = document.querySelector(".modal")
const modalTrigger = document.querySelector(".btn_white")
const closeModalBtn = document.querySelector(".modal__close")

const openModal = () => {
  modal.classList.add("show")
  modal.classList.remove("hide")
  document.body.style.overflow = "hidden"

}
modalTrigger.addEventListener("click", openModal)



const closeModal = () => {
  modal.classList.add("hide")
  modal.classList.remove("show")
  document.body.style.overflow = ""
}

// Крестик 
closeModalBtn.addEventListener('click',closeModal);

// Модальная окно затемненая часть 
document.body.addEventListener('click', (e) => {
  if (e.target.classList.contains('show')) {
      closeModal();
  }
});
// Модальная окно в конце сайта 
let modalOpened = false
window.onscroll = () => {
    if (document.documentElement.scrollTop >= 3400 && modalOpened === false) {
        modalOpened = true
        openModal();
    }
}



//e.preventDefaut() /// остоновливает загрузку/обнавляет страницу 

const forms = document.querySelectorAll("form")

const posData = (url,data) => {
  const res = fetch(url,{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: data 
  })
  return res
}


const bindPostData = (form) => {
  form.addEventListener("submit", (e) =>{
      e.preventDefault()

      // const request = new XMLHttpRequest()
      // request.open("POST","server.php")
      // request.setRequestHeader("Content-type","application/json")

      const formData = new FormData(form)
      const object = {}

      formData.forEach((item,name) => {
      // console.log(item,name)
      object[name] = item 
    })
    // console.log(object)

    const json = JSON.stringify(object)
    // console.log(json)


    posData("server.php", json)
    .then((response) => response.status)
    .then((res) => res === 200 ? swal("Отлично!"," ", "success")  :  swal("Ошибка!"," ", "error"))
    .catch(()=> console.error('error'))
    .finally(()=>console.log("finally"))
         
    // swal("Ошибка!"," ", "error"))
    // swal("Отлично!"," ", "success")
    // .catch(()=> console.error('error'))
    // .finally(()=>console.log("finally"))
    // request.send(json)

    // request.addEventListener("load", ()=>{
    //   if (request.status === 200 ){
    //     swal("Отлично!"," ", "success");
    //     console.log("ok")
    //   }else{
    //     swal("Ошибка!"," ", "error");
    //     console.log("not ok")
    //   }
      })
  }
  


  forms.forEach((item) => {
    bindPostData(item)
}) 