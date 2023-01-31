const som = document.querySelector("#som")
const usd = document.querySelector("#usd")
const eur = document.querySelector("#eur")
// som.addEventListener("input" ,(e)=> {
//   console.log(e.target.value)
//   const req = new XMLHttpRequest
//   req.open("GET", "data.json")
//   req.setRequestHeadert("Content-type", "application/json")
//   req.send()
//   req.addEventListener("load", ()=>{
//     const data = JSON.parse(req.response)
//     console.log(data)
//     usd.value = (som.value / data.usd).toFixed(2)  ///////  <------ Вот Это <------ ААААААААААААААААААААААААА НА ДОЛЛОР
//   })
// })

const postData = (url)=>{
  const res = fetch(url
//  method: "GET",
//  headers: {"Content-Type": "application/json"},
//  body: data
)
  return res
}



const convert = (elem, target,target2) => {
   elem.addEventListener("input", ()=> {
    // const req = new XMLHttpRequest()
    // req.open("GET", "data.json")
    // req.setRequestHeader("Content-type", "application/json")
    // req.send()
    // req.addEventListener("load", ()=>{

     postData("data.json")
    .then((response) => response.json())
    .then((data) => {
    if( elem === som){
      target.value = (elem.value /  data.usd).toFixed(2)
      target2.value = (elem.value / data.eur).toFixed(2)
       console.log("aaa")
    }else if(elem === usd) {
      target.value = (elem.value * data.usd).toFixed(2)
      target2.value = (target.value / data.eur).toFixed(2)
       console.log("hhh")
    }else if(elem === eur){
      target.value = (elem.value * data.eur).toFixed(2)
      target2.value = (target.value / data.usd).toFixed(2)
       console.log("ssss")
    }

    elem.value === "" && (target.value = "")   //они уберает 0,000 
    return elem.value === "" && (target2.value = "")

    })
    .catch(()=> console.error('error'))
    .finally(()=>console.log("finally"))

      // if(elem === som){
      //    target.value = (elem.value / data.usd).toFixed(2)
      //    target2.value = (elem.value / data.eur).toFixed(2)
      //    console.log("oooo")
      //  }else if(elem === usd) {
      //    target.value = (elem.value * data.usd).toFixed(2)
      //    target2.value = (target.value / data.eur).toFixed(2)
      //    console.log("hhh")
      //  }else if(elem === eur){
      //   target.value = (elem.value * data.eur).toFixed(2)
      //   target2.value = (target.value / data.usd).toFixed(2)
      //     console.log("iiii")
      //   }
      // elem.value === "" && (target.value = "")   //они уберает 0,000 
      // elem.value === "" && (target2.value = "")         // 0ни уберает 0,000 
    })
   }

convert(som,usd,eur)
convert(usd,som,eur)
convert(eur,som,usd)