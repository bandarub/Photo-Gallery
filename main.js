const imgUrl = 'images/';
data1=datafn();
let i=0;
let info=document.getElementById('information');
let image=document.getElementById('images');
let btn=document.getElementById('button');

//function to display next student's datails

function displayNext(){
 
  
    let img = document.createElement('img');
    img.id="images";
    img.className="images";
    img.src= `images/${data1[i].firstName}.jpg`;


    let hide_button=document.createElement('button');
    hide_button.textContent="...";
    hide_button.id="hide-show";
    hide_button.className="button1";
    hide_button.addEventListener("click",toggle);

    let next_button=document.createElement('button');
    next_button.textContent=">>>";
    next_button.id="next-button";
    next_button.className="button1";
    next_button.addEventListener("click",displayNext);
    i++;
   

    let h2 = document.createElement('h2');
    h2.textContent = data1[i].firstName + " " + data1[i].lastName;


    let p1=document.createElement('p');
    p1.textContent="Title:"+data1[i].title;

    let p2=document.createElement('p');
    p2.textContent="Nationality:"+data1[i].nationality;

    let p3=document.createElement('p');
    p3.textContent="skills:"+data1[i].skills;

    let p4=document.createElement('p');
    p4.textContent="whySofterDeveloper:"+data1[i].whySofterDeveloper;

    let p5=document.createElement('p');
    p5.textContent="longTermVision:"+data1[i].longTermVision;

    let p6=document.createElement('p');
    p6.textContent="motivatesMe:"+data1[i].motivatesMe;

    let p7=document.createElement('p');
    p7.textContent="favoriteQuote:"+data1[i].favoriteQuote;

    let p8=document.createElement('p');
    p8.textContent="joinedOn:"+data1[i].joinedOn;

    document.body.appendChild(image);
    image.appendChild(img);
    document.body.appendChild(btn);
    btn.appendChild(hide_button);
    btn.appendChild(next_button);
    document.body.appendChild(info);
    info.appendChild(h2);
    info.appendChild(p1);
    info.appendChild(p2);
    info.appendChild(p3);
    info.appendChild(p4);
    info.appendChild(p6);
    info.appendChild(p7);
    info.appendChild(p8);    
 }
displayNext();

//function to toggle the details

function toggle(){
    if(info.style.display==="none"){
        info.style.display = "block";
    }
    else{
        info.style.display = "none";
    }   

}