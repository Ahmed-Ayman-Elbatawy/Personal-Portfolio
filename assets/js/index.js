// Dark Mode

let themeMode = document.getElementById("theme-toggle-button");

themeMode.addEventListener("click", function(){
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("DarkMode", JSON.stringify(document.documentElement.classList.contains("dark")))

})


// testimonialsCarousel

let testimonialsCarousel = document.getElementById("testimonials-carousel");
let testimonialCards = Array.from(document.querySelectorAll(".testimonial-card")) ;
let prevBtn = document.getElementById("prev-testimonial");
let nextBtn = document.getElementById("next-testimonial");
let carouselIndicators = Array.from(document.querySelectorAll(".carousel-indicator"));


let currentTestimonial = 0; 


nextBtn.addEventListener("click", function(){
    currentTestimonial += 1;
    if(currentTestimonial == testimonialCards.length-2)
        currentTestimonial =0;

    updateCarousel();

})

prevBtn.addEventListener("click", function(){

    currentTestimonial -= 1;
    if(currentTestimonial < 0)
        currentTestimonial =3;

    updateCarousel();
})

function updateCarousel(){
           removingTestimonialClass();
   carouselIndicators[currentTestimonial].classList.remove("bg-slate-400", "dark:bg-slate-600");;

   carouselIndicators[currentTestimonial].classList.add("active", "scale-125","bg-accent");




        testimonialsCarousel.style.transform = `translateX(${currentTestimonial * testimonialCards[currentTestimonial].offsetWidth}px)`;
}

function removingTestimonialClass(){
    for (let i = 0; i < carouselIndicators.length; i++) {
        carouselIndicators[i].classList.remove("active", "bg-accent", "scale-125");
        carouselIndicators[i].classList.add("bg-slate-400", "dark:bg-slate-600");

    }
}

for (let i = 0; i < carouselIndicators.length; i++) {
    carouselIndicators[i].addEventListener("click",function(){
        currentTestimonial = i;
        updateCarousel();
    })
}

updateCarousel();


// Scroll Spy

var sections = document.querySelectorAll("section");
var navLinks = document.querySelectorAll(".nav-links a");
var currentId= "";

console.log(sections);
console.log(navLinks);


window.addEventListener("scroll", scrollSpy)

function scrollSpy(){
    for (let i = 0; i < sections.length; i++) {
        if(scrollY >= sections[i].offsetTop - 100){
            currentId = sections[i].id;
        }

        for (let j = 0; j < navLinks.length; j++) {
            let currentLink = navLinks[j];
            if (currentLink.getAttribute("href") == `#${currentId}`) {
                currentLink.classList.add("active")
            }
            else{
                currentLink.classList.remove("active");
            }
        }
    }


}

scrollSpy();


// scrollToTopBtn

let scrollToTopBtn = document.getElementById("scroll-to-top");
scrollToTopBtn.addEventListener("click", function(){
 window.scrollTo({ top: 0, behavior: "smooth" });
});

function showScrollTopBtn(){
    if(currentId != "hero-section"){
                    scrollToTopBtn.classList.add("opacity-100", "visible");
                    scrollToTopBtn.classList.remove("opacity-0", "invisible");

                }else{
                    scrollToTopBtn.classList.remove("opacity-100", "visible");
                    scrollToTopBtn.classList.add("opacity-0", "invisible");
                }
}
window.addEventListener("scroll", showScrollTopBtn);

// Custom Select
let customOptions = document.querySelectorAll(".custom-options");
let customSelects = document.querySelectorAll(".custom-select");
let icon = document.querySelectorAll(".custom-select-wrapper i");
       

for (let i = 0; i < customSelects.length; i++){
     customSelects[i].addEventListener("click", function(e){
            
            customOptions[i].classList.toggle("hidden");
            icon[i].style.transform = `rotate(${customOptions[i].classList.contains("hidden")? '0' : '180deg'})`
        })

}


// Nav And Tabs

var portfolioFilters = document.querySelectorAll(".portfolio-filter")
var appsBtn = document.querySelector("button[data-filter='app']");
var portoflioiItems = document.querySelectorAll(".portfolio-item")


    for (let i = 0; i < portfolioFilters.length; i++) {
       portfolioFilters[i].addEventListener("click", function(){
         for (let j = 0; j < portfolioFilters.length; j++) {
                portfolioFilters[j].classList.remove("active", "bg-linear-to-r", "from-primary", "to-secondary", "text-white", "shadow-lg" ,"shadow-primary/50");
                 portfolioFilters[j].classList.add("bg-white", "dark:bg-slate-800", "text-slate-600", "dark:text-slate-300", "border", "border-slate-300", "dark:border-slate-700");

        }
        portfolioFilters[i].classList.add("active", "bg-linear-to-r", "from-primary", "to-secondary", "text-white", "shadow-lg" ,"shadow-primary/50");
        portfolioFilters[i].classList.remove("bg-white", "dark:bg-slate-800", "text-slate-600", "dark:text-slate-300", "border", "border-slate-300", "dark:border-slate-700");
        for (let k = 0; k < portoflioiItems.length; k++) {
            displayItems(k, i);
        }
    })
    }


function displayItems(Itemindex, Filterindex){
    if(portfolioFilters[Filterindex].getAttribute("data-filter") == "all"){
        portoflioiItems[Itemindex].classList.remove("hidden");
    }
    else if (portoflioiItems[Itemindex].getAttribute("data-category") == portfolioFilters[Filterindex].getAttribute("data-filter")) {
        portoflioiItems[Itemindex].classList.remove("hidden");
    }
    else{
        portoflioiItems[Itemindex].classList.add("hidden");
    }
}


// Side Bar Setting

var settingsBtn = document.getElementById("settings-toggle");
var settings = document.getElementById("settings-sidebar");
var closeSettingsBtn = document.getElementById("close-settings");

settingsBtn.addEventListener("click", function(e){
    e.stopPropagation();
    settingsBtn.style.right = "20rem";
    settings.classList.remove("translate-x-full");
})

closeSettingsBtn.addEventListener("click", function(){
    settingsBtn.style.right = "0";
    settings.classList.add("translate-x-full");
})

settings.addEventListener("click", function(e) {
    e.stopPropagation();
})

document.addEventListener("click", function(){

    settingsBtn.style.right = "0";
    settings.classList.add("translate-x-full");
})


// Fonts

var fontOptions = document.querySelectorAll(".font-option");

for (let i = 0; i < fontOptions.length; i++) {
    fontOptions[i].addEventListener("click", function(){
        for (let j = 0; j < fontOptions.length; j++) {
            fontOptions[j].classList.remove("active", "border-primary", "bg-slate-50", "dark:bg-slate-800");
                    fontOptions[j].classList.add("border-slate-200", "dark:border-slate-700")

            document.body.classList.remove(`font-${fontOptions[j].getAttribute("data-font")}`)

        }

        document.body.classList.add(`font-${fontOptions[i].getAttribute("data-font")}`)
        fontOptions[i].classList.add("active", "border-primary", "bg-slate-50", "dark:bg-slate-800")
        fontOptions[i].classList.remove("border-slate-200", "dark:border-slate-700")
        localStorage.setItem("font", `font-${fontOptions[i].getAttribute("data-font")}`)

    })
    }

    // 

    var themeColorsGrid = document.getElementById("theme-colors-grid");
    var colorBtnsArray  = [] ; 

    const themeColors = [
    { title: "Purple Blue",  primary: "#6366f1", secondary: "#8b5cf6", accent: "#a855f7"},
    { title: "Pink Orange",  primary: "#ec4899", secondary: "#f97316", accent: "#fb923c" },
    { title: "Green Emerald",   primary: "#10b981", secondary: "#059669", accent: "#34d399"},
    { title: "Blue Cyan",   primary: "#3b82f6", secondary: "#06b6d4", accent:"#22d3ee"},
    { title: "Red Rose",  primary: "#ef4444", secondary: "#f43f5e", accent:"#fb7185"},
    { title: "Amber Orange",  primary: "#f59e0b", secondary: "#ea580c", accent: "#fbbf24" },
];


// creating Btns
for (let i = 0; i < themeColors.length; i++) {
        let ThemeBtn = document.createElement("button");
        ThemeBtn.className = "w-12 h-12 rounded-full cursor-pointer transition-transform hover:scale-110 border-2 border-slate-200 dark:border-slate-700 hover:border-primary shadow-sm";
        let title = themeColors[i].title;
        let Secondary = themeColors[i].secondary;
        let primary = themeColors[i].primary;
        let accent = themeColors[i].accent;

        ThemeBtn.setAttribute("title", title);
        ThemeBtn.setAttribute("data-primary", primary);
        ThemeBtn.setAttribute("data-secondary", Secondary);
        ThemeBtn.setAttribute("data-accent", accent);

        ThemeBtn.style.background = `linear-gradient(to right, ${primary}, ${Secondary})`

        themeColorsGrid.appendChild(ThemeBtn);
        colorBtnsArray.push(ThemeBtn);

    }   

    themeBtns = document.querySelectorAll("#theme-colors-grid button");
    
           for (let i = 0; i < themeBtns.length; i++) {

            themeBtns[i].addEventListener("click", function(){
                for (let j = 0; j < themeBtns.length; j++) {
                themeBtns[j].classList.remove("ring-2", "ring-primary", "ring-offset-2", "ring-offset-white", "dark:ring-offset-slate-900")

            }
                            themeBtns[i].classList.add("ring-2", "ring-primary", "ring-offset-2", "ring-offset-white", "dark:ring-offset-slate-900")
                            document.documentElement.style = `--color-primary: ${themeBtns[i].getAttribute("data-primary")}; --color-secondary: ${themeBtns[i].getAttribute("data-secondary")}; --color-accent: ${themeBtns[i].getAttribute("data-accent")};`
                            localStorage.setItem("primaryColor", `${themeBtns[i].getAttribute("data-primary")}`);
                            localStorage.setItem("secondaryColor", `${themeBtns[i].getAttribute("data-secondary")}`);
                            localStorage.setItem("accentColor", `${themeBtns[i].getAttribute("data-accent")}`);           
            })
           }


        //    reset btn

        let resetSettings = document.getElementById("reset-settings");

        resetSettings.addEventListener("click", function(){
            
            for (let j = 0; j < fontOptions.length; j++) {
            fontOptions[j].classList.remove("active", "border-primary", "bg-slate-50", "dark:bg-slate-800");
                    fontOptions[j].classList.add("border-slate-200", "dark:border-slate-700")

            document.body.classList.remove(`font-${fontOptions[j].getAttribute("data-font")}`)

        }

        document.body.classList.add(`font-${fontOptions[0].getAttribute("data-font")}`)
        fontOptions[0].classList.add("active", "border-primary", "bg-slate-50", "dark:bg-slate-800")
        fontOptions[0].classList.remove("border-slate-200", "dark:border-slate-700")
        localStorage.setItem("font", `font-${fontOptions[0].getAttribute("data-font")}`)


            for (let i = 0; i < themeBtns.length; i++) {
             themeBtns[i].classList.remove("ring-2", "ring-primary", "ring-offset-2", "ring-offset-white", "dark:ring-offset-slate-900")

            }
         themeBtns[0].classList.add("ring-2", "ring-primary", "ring-offset-2", "ring-offset-white", "dark:ring-offset-slate-900")
         document.documentElement.style = `--color-primary: ${themeBtns[0].getAttribute("data-primary")}; --color-secondary: ${themeBtns[0].getAttribute("data-secondary")}; --color-accent: ${themeBtns[0].getAttribute("data-accent")};`
       

        localStorage.setItem("primaryColor", `${themeBtns[0].getAttribute("data-primary")}`);
        localStorage.setItem("secondaryColor", `${themeBtns[0].getAttribute("data-secondary")}`);
        localStorage.setItem("accentColor", `${themeBtns[0].getAttribute("data-accent")}`);
        })





        function UserPreferences(){
            let DarkMode = JSON.parse(localStorage.getItem("DarkMode"));
            let font = localStorage.getItem("font");
            let primary = localStorage.getItem("primaryColor");
            let secondary = localStorage.getItem("secondaryColor");
            let accent = localStorage.getItem("accentColor");

            // DarkMode

            DarkMode? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
            
            // Fonts
            if (font) {

                for (let i = 0; i < fontOptions.length; i++) {
                    let fontClass = `font-${fontOptions[i].getAttribute("data-font")}`;
                    document.body.classList.remove(fontClass);
                    fontOptions[i].classList.remove("active", "border-primary", "bg-slate-50", "dark:bg-slate-800");
                    fontOptions[i].classList.add("border-slate-200", "dark:border-slate-700");

                    if (fontClass === font) {
                        fontOptions[i].classList.add("active", "border-primary", "bg-slate-50", "dark:bg-slate-800");
                        fontOptions[i].classList.remove("border-slate-200", "dark:border-slate-700");
                    }

                    
                    }
                document.body.classList.add(font);
            }           
        

            // Colors

            if (primary && secondary && accent) {

                        for (let i = 0; i < themeBtns.length; i++) {
                            themeBtns[i].classList.remove("ring-2", "ring-primary", "ring-offset-2", "ring-offset-white", "dark:ring-offset-slate-900")

                        }

                        
                        for (let i = 0; i < themeBtns.length; i++) {
                            if(primary === themeBtns[i].getAttribute("data-primary")){
                            themeBtns[i].classList.add("ring-2", "ring-primary", "ring-offset-2", "ring-offset-white", "dark:ring-offset-slate-900")
                                break;
                            }
                        }


                    document.documentElement.style.setProperty("--color-primary", primary);
                    document.documentElement.style.setProperty("--color-secondary", secondary);
                    document.documentElement.style.setProperty("--color-accent", accent);
                    }


                    
        }

    
        UserPreferences();


        // MobileNav
        var menubtn = document.querySelector(".mobile-menu-btn");
        var mobileNav = document.querySelector(".nav-links");

        menubtn.addEventListener("click", function(){
            mobileNav.classList.toggle("active")
            if( mobileNav.classList.contains("active")){
                menubtn.setAttribute("aria-label","غلق القائمة")
            }
            else{
                menubtn.setAttribute("aria-label","فتح القائمة")
            }
        })


