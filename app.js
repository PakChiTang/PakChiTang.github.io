//create socials 
const socialSection = document.querySelector(".socials");
const socialList = ["instagram", "linkedin", "twitter"];
const urlList = ["https://www.instagram.com/patrickpaddypacman/",
"https://www.linkedin.com/in/patrick-tang-60a70a1a/",
"https://twitter.com/MrPatrickPCT/"
]

for(let i=0; i<socialList.length; i++){
    let container = document.createElement("div");
    container.className="social-container";
    container.innerHTML =
    `
    <a href="${urlList[i]}" target="_blank"><img src="svgs/${socialList[i]}.svg" alt="${socialList[i]} logo"></a>
    `
    socialSection.appendChild(container);
}

//function to create a card
function createCard(cards, languages, img, url, text, alt, projectTitle){
    let cardDiv = document.createElement("div");
    cardDiv.className = "card reveal";
    
    cardDiv.innerHTML =
    `
    ${createImageWithUrlButton(url, img, alt)}
    <h3>${projectTitle}</h3>
    <div class= cardText>
        <p>${text}</p>
    </div>                    
    `
    let languageList = document.createElement("ul");
    languageList.className="languages";
    for(let i = 0; i<languages.length; i++){
        let li = document.createElement("li")
        li.textContent = languages[i];
        languageList.appendChild(li);
    }
    
    cardDiv.appendChild(languageList);   
    cards.push(cardDiv);
}

function createImageWithUrlButton(url, img, alt){
    let image;   
    image =
    `
    <img src="images/${img}" alt="${alt}">

    <a class="project-button "href="${url}"  target="_blank">See Project     
    </a>
            
    `
    return image;
}

//function to set the cards on a page
function setCards(div, cards){
    for(let i = 0; i<cards.length; i++){
        if(i==0){
            div.appendChild(cards[i]);
        }else{
            div.insertBefore(cards[i], div.childNodes[0]);
        }        
    }
}


//create cards with content for Web development page
let webDevCards = [];
let webDevDiv = document.querySelector(".webDevCards")


    createCard(webDevCards, ["HTML", "CSS"], "responsive-website_desktop1024 copy.png", 
    "https://PakChiTang.github.io/mytechdegreeproject2/", 
    "I made a site using CSS and media queries that is responsive for three different screen sizes (desktop, mobile and tablet).", 
    "Screenshot of Responsive design project", "Responsive design project");

    createCard(webDevCards, ["CSS", "SASS"], "sass.png", 
    "https://PakChiTang.github.io/Techdegreeproject4/style_guide_v7/resources/", 
    "Create an awesome site styled with Sass", 
    "Screenshot of Sass Styling project", "Sass styling project");
    
    createCard(webDevCards,["HTML", "CSS", "Javascript"], "gallery_mockup copy.png", 
    "https://PakChiTang.github.io/techdegreeproject5/", 
    "I implemented an existing JavaScript feature called 'baguetteBox' for this project. I also utilized JavaScript code to make a custom search bar.", 
    "Screenshot of Photo gallery project", "Photo gallery project");
    
    createCard(webDevCards,["HTML", "CSS", "Javascript"], "wheelofsuccess.png", 
    "https://PakChiTang.github.io/techdegreeproject6/game_show_app_v1.2/index.html",
    "I used Javascript to build Wheel of Success, a word guessing game.",
    "Screenshot of Wheel of Success project", "Wheel of Success");
    
    createCard(webDevCards,["HTML", "CSS", "Javascript"], "dashboard copy.png", 
    "https://PakChiTang.github.io/techdegreeproject7/", 
    "Make my page function like a dashboard by using tons of CSS and JavaScript", 
    "screenshot of the WebApp project", "WebApp project"); 

    createCard(webDevCards,["HTML", "CSS", "Javascript"], "employee_directory copy.png", 
    "https://PakChiTang.github.io/techdegreeproject8/", 
    "I used JavaScript in making this employee directory. It's filled with random users that are fetched from an API and later displayed on the site. ", 
    "screenshot of the API project", "Using an API to build a page"); 
    
    
setCards(webDevDiv, webDevCards);

// Awesome site features

webDevDiv.addEventListener('mouseover', (e)=>{
    if(e.target !== webDevDiv){
        showOrHideButton(e.target, true);
    }

});

webDevDiv.addEventListener('mouseout', (e)=>{
    if(e.target !== webDevDiv){
        showOrHideButton(e.target, false)
    }

});

function showOrHideButton(target, hover){
    const card = target.closest(".card");
    const button = card.querySelector(".project-button")
    const img = card.querySelector("img");
   if(hover){
    img.style.opacity = "0.3";
    button.style.display = "block";
   }else{
    img.style.opacity = "1";
    button.style.display = "none";
   }
   
}

window.addEventListener('scroll', reveal);

function reveal(){
    let reveals = document.querySelectorAll(".reveal");
    for(let i=0; i< reveals.length; i++){
        let windowHeight = window.innerHeight;
        let revealtop = reveals[i].getBoundingClientRect().top;
        let revealpoint = 150;

        if(revealtop < windowHeight - revealpoint){
            reveals[i].classList.add('active');
        }else{
            reveals[i].classList.remove('active');
        }
    }
}
