const galleryImage=document.querySelector("#gallery-images");
const galleryDetails=document.querySelector(".gallery-details")
const backButton=document.querySelector("#back-button");
const hideButton=document.querySelector("#hide-button");
const nextButton=document.querySelector("#next-button");
const galleryPhoto=document.querySelector("#image");

let data=datafn();

let backgroundGallery=[];
backgroundGallery[0]="url('group1.jpg')";
backgroundGallery[1]="url('group2.jpg')";

let count=0;
details(0);
nextButton.addEventListener('click',displayNextPhoto);
backButton.addEventListener('click',displayPreviousPhoto);
hideButton.addEventListener('click',toggle);
function displayNextPhoto(){
    
     if(count>=data.length-1){
        count=0;
        details(count);
    }
    else{
        count++;  
        details(count);
           
    }
    
 }
function displayPreviousPhoto(){  
    count--;  
    if(count<0){             
        count=data.length-1; 
        details(count); 
            
    }else{
        details(count); 
    }
         
}
galleryDetails.style.display = "none";
function toggle(){     
    if (galleryDetails.style.display === "none") {
        hideButton.textContent="◄";
        galleryDetails.style.display = "block";
    } else {
        hideButton.textContent="►";
        galleryDetails.style.display = "none";
    }    
    }
function details(count){
        galleryDetails.innerHTML="";
        let imgUrl = 'images/' + data[count].src;
        galleryPhoto.src = imgUrl;
        galleryImage.appendChild(galleryPhoto);        

        let h2 = document.createElement('h2');
        h2.innerHTML = data[count].firstName + " " + data[count].lastName;
      
        let p1=document.createElement('p');
        p1.innerHTML = "<strong>Title:</strong>"+" "+ data[count].title;    
    
        let p2=document.createElement('p');
        p2.innerHTML = "<strong>Nationality:</strong>"+" "+data[count].nationality;
    
        let p3=document.createElement('p');
        p3.innerHTML = "<strong>Skills:</strong>"+" "+data[count].skills.length;

        let expand_btn=document.createElement('button');
        expand_btn.textContent="▼";
        
        expand_btn.className="skills-expand";
        let ul=document.createElement('ul');
        for(let k=0;k<data[count].skills.length;k++) {
            let li=document.createElement('li');
             li.textContent=data[count].skills[k];
             ul.appendChild(li);                        
           }
       ul.style.display="none";
        expand_btn.addEventListener('click',expand);
        function expand(){
           
            if(ul.style.display==='none'){
                expand_btn.textContent="▲";
                ul.style.display="block";
            }
            else{
                ul.style.display="none";
                expand_btn.textContent="▼";
            }  
                          
        }
        let p4=document.createElement('p');
        p4.innerHTML = "<strong>WhySofterDeveloper:</strong>"+" "+data[count].whySofterDeveloper;
    
        let p5=document.createElement('p');
        p5.innerHTML="<strong>LongTermVision:</strong>"+" "+data[count].longTermVision;
    
        let p6=document.createElement('p');
        p6.innerHTML="<strong>MotivatesMe:</strong>"+" "+data[count].motivatesMe;
    
        let p7=document.createElement('p');
        p7.innerHTML="<strong>FavoriteQuote:</strong>"+" "+data[count].favoriteQuote;
    
        let p8=document.createElement('p');
        p8.innerHTML="<strong>JoinedOn:</strong>"+" "+data[count].joinedOn;
    
        galleryImage.appendChild(galleryPhoto);
        galleryDetails.appendChild(h2);
        galleryDetails.appendChild(p1);
        galleryDetails.appendChild(p2);
        galleryDetails.appendChild(p3);
        galleryDetails.appendChild(expand_btn);
        galleryDetails.appendChild(ul);    
        galleryDetails.appendChild(p4);
        galleryDetails.appendChild(p5);
        galleryDetails.appendChild(p6);
        galleryDetails.appendChild(p7);
        galleryDetails.appendChild(p8);
}
let n=0;
function changeBackground(){
    if(n<=backgroundGallery.length){
        document.getElementById("main-container").style.backgroundImage = backgroundGallery[n];
        document.getElementById("main-container").style.backgroundSize = "cover";
        document.getElementById("main-container").style.backgroundRepeat="no-repeat";
        n++;
    }
    else{
        n=0;
    }  
    setTimeout("changeBackground()", 1100);    
};
window.onload = changeBackground;