const wrapper = document.querySelector(".wrapper")
const btn = document.querySelector(".btn")



const posData = (url) => {
  const res = fetch(url,{
    method:"GET",
    headers:{"Content-Type":"application/json"}, 
  })
  return res
}
  posData("data.json")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data.results.img)  
     data.results.map((item)=>{
      console.log(item)   
     const block = document.createElement("div")
    //       // const img = document.createElement("img")
    // //   // let img = ["./img/наушники.jpg","./img/кросовки.jpg","./img/смарт-часы.jpg","./img/смартфон.jpg","./img/самакат.jpg","./img/худи.jpg"]
         block.style.height = "250px"
         block.style.width = "250px"
         block.style.marginTop = "10px"
       
         block.innerHTML = '<img src="'+item.img +'">'+  item.name +"<br>" + "Цена: "  + item.price +" coм"  
         wrapper.append(block)
      })
    })
    .catch(()=> console.error('error'))
    .finally(()=>console.warn("finally"))