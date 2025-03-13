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
    // displayVideos(categories)
    
    for(let cat of categories){
        const catagoryDiv =document.createElement("div") 
        
        catagoryDiv.setAttribute(`id`,`${cat.category_id}`)

        catagoryDiv.innerHTML=`
        <button class="btn btn-sm btn-catagory">${cat.category}</button>
        `
        catagoryContainer.appendChild(catagoryDiv)
      
    }
    
    const btnCatagory=document.getElementsByClassName("btn-catagory") 
    
    
    Array.from(btnCatagory).forEach(elementBtn => {
        elementBtn.addEventListener("click",(event)=>{
            for(let btn2 of btnCatagory){
                
                btn2.classList.remove("hoverStyle")
            }
            event.currentTarget.classList.add("hoverStyle")

          
            const getID=event.target.parentNode.getAttribute("id")
           
           
      
 
            fetchVideo(getID)
        })
    });

}
const fetchVideo =(id)=>{
    console.log(id)
    if(id){
        fetch(`https://openapi.programming-hero.com/api/phero-tube/category/1001`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data.videos)
            displayVideos(data.videos
            )
           
        })
        
    }
    else{
        fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
        .then(res=>res.json())
        .then(data=>{
            displayVideos(data.videos
            )
        })
        
    }
   
}

const displayVideos =(videos)=>{
    console.log(videos)
    const videoContainer =document.getElementById("video-container")
    videos.forEach(video => {
        
        const videoDiv=document.createElement("div")
        
        videoDiv.innerHTML=`
        <div class="card  h-full flex flex-col justify-between border border-gray-100">
                <figure class="">
                  <img
                    src="${video.thumbnail}"
                    alt="Shoes"
                    class="" />
                </figure>
                <div class="flex gap-4 pt-3  ">
                    <!-- user  Profile picture -->
                  <div>  
                  <div class="avatar">
                    <div class="ring-primary ring-offset-base-100 w-6 ml-1
                     rounded-full ring ring-offset-2">
                      <img class="" src="${video.authors[0].profile_picture}" />
                    </div>
                  </div>
                  </div>
                  <!-- text -->
                  <div>
                    <h2 class="text-gray-800">${video.title}</h2>
                    <div class="flex gap-2 items-center justify-start">
                        <p class="text-gray-600">${video.authors[0].profile_name}</p>
                        <div>
                        ${video.authors[0].verified? `<img class="w-4 h-4 " src="https://cdn-icons-png.flaticon.com/128/3633/3633484.png" alt="">`:`` }
                        </div>
                    </div>
                    <p class="text-gray-500">${video.others.views}</p>
                  </div>
                </div>
                <button class="btn btn-block  bg-blue-700 text-white">Details</button>
              </div>
        `
        videoContainer.appendChild(videoDiv)
    });
}
fetchCatagory()






