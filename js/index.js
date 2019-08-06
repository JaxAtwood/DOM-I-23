const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "middle-img-src": "img/mid-page-accent.jpg",

    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//Nav Bar
let nav = document.querySelectorAll('a');
nav.forEach(function (value, i) {
  value.textContent = siteContent.nav[`nav-item-${i +1}`];
})

const newNavStyle = document.querySelectorAll("a");
newNavStyle.forEach (element => {
  element.style.color = 'green';
})

a = document.querySelector("nav");
let pH = document.createElement("a");
pH.textContent = 'Dom & Dom-er';
pH.style.color = 'green';
a.appendChild(pH);
pH.setAttribute('href', "#");

a = document.querySelector("nav");
let pH2 = document.createElement("a");
pH2.textContent = 'Home';
pH2.style.color = 'green';
a.prepend(pH2);
pH2.setAttribute('href', "#");

//round img
let round = document.getElementById ("cta-img");
round.setAttribute ('src', siteContent["cta"]["img-src"])


//Dom is Awesome
let phrase = document.querySelector("h1");
phrase.textContent = siteContent.cta.h1

//button
let btn = document.querySelector("button");
btn.textContent = siteContent.cta.button


//top content
let topperA = document.querySelectorAll(".top-content .text-content h4") [0];
topperA.textContent = siteContent ["main-content"] ["features-h4"]

let topF = document.querySelectorAll(".top-content .text-content p") [0];
topF.textContent = siteContent ["main-content"] ["features-content"]

let topperB = document.querySelectorAll(".top-content .text-content h4") [1];
topperB.textContent = siteContent ["main-content"] ["about-h4"]

let topA = document.querySelectorAll(".top-content .text-content p") [1];
topA.textContent = siteContent ["main-content"] ["about-content"]


//jumbotron img
let jumbotron = document.getElementById ("middle-img");
jumbotron.setAttribute ('src', siteContent["main-content"]["middle-img-src"])


//bottom content
let bottomA = document.querySelectorAll(".bottom-content .text-content h4") [0];
bottomA.textContent = siteContent ["main-content"] ["services-h4"]

let bottomB = document.querySelectorAll(".bottom-content .text-content p") [0];
bottomB.textContent = siteContent ["main-content"] ["services-content"]

let bottomC = document.querySelectorAll(".bottom-content .text-content h4") [1];
bottomC.textContent = siteContent ["main-content"] ["product-h4"]

let bottomD = document.querySelectorAll(".bottom-content .text-content p") [1];
bottomD.textContent = siteContent ["main-content"] ["product-content"]

let bottomE = document.querySelectorAll(".bottom-content .text-content h4") [2];
bottomE.textContent = siteContent ["main-content"] ["vision-h4"]

let bottomF = document.querySelectorAll(".bottom-content .text-content p") [2];
bottomF.textContent = siteContent ["main-content"] ["vision-content"]

//contact
//WHY YOU NO WORK?!?!?!!
// let reachOut = document.querySelectorAll(".contact .h4");
// reachOut.textContent = siteContent.contact.h4

// let addy = document.getElementsByClassName("contact") [0];
// addy.textContent = siteContent.contact.address

let contactInfo = document.querySelectorAll(".contact h4") [0];
contactInfo.textContent = siteContent ["contact"] ["contact-h4"]

let snailMail = document.querySelectorAll(".contact p") [0];
snailMail.textContent = siteContent ["contact"] ["address"]

let callMe = document.querySelectorAll(".contact p") [1];
callMe.textContent = siteContent ["contact"] ["phone"]

let emailMe = document.querySelectorAll(".contact p") [2];
emailMe.textContent = siteContent ["contact"] ["email"]


//footer
let foot = document.querySelector("footer");
foot.textContent = siteContent.footer.copyright