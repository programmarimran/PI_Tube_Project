

//fetch catagory in API
const fetchCatagory =()=>{
fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
.then(res=>res.json())
.then(data=>{
    // console.log(data.categories)
    displayCatagory(data.categories)
})
}


const displayCatagory =(categories)=>{
    //catagory container
    const catagoryContainer =document.getElementById("catagory-container")
    // single catagory
    // console.log(categories)
    for(let cat of categories){
        // console.log(cat)
        const catagoryDiv =document.createElement("div")
        
        catagoryDiv.innerHTML=`
        <button class="btn btn-sm btn-catagory">${cat.category}</button>
        `
        catagoryContainer.appendChild(catagoryDiv)
    }

    const btnCatagory=document.getElementsByClassName("btn-catagory")   
    for(let btn of btnCatagory){
        
        
        btn.addEventListener("click",(event)=>{
            for(let btn2 of btnCatagory){

                btn2.classList.remove("hoverStyle")
            }

            event.currentTarget.classList.add("hoverStyle")
        })
    }

}



fetchCatagory()






