

function upDate(previewPic){
     console.log("success!");

     console.log("src:", previewPic.src);
     console.log("alt:", previewPic.alt);
 
     const imageDiv = document.getElementById('image');
     imageDiv.innerText = previewPic.alt;
 

     imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
 
    
     console.log("updated to:", previewPic.src);

       }
   
       function unDo(){

    console.log("success!");

    
    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('')";

    
    imageDiv.innerText = "Hover over an image below to display kojima.";

    
           
       }