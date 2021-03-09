$(document).ready(function(){


    $(".modalTrigger").on("click", function(){
        $(".modal").toggle();
    })

    var languages = ["हिन्दी" ,"বাংলা","తెలుగు","मराठी","தமிழ்","ગુજરાતી","ಕನ್ನಡ<","മലയാളം","ਪੰਜਾਬੀ" ]

    languages.forEach(language => {
        $(".languages").append(`<li><a href="">${language}</a></li>`)

    });

    var iconArray=[{
        loc:"./icons/googleSearch.svg",
        desc:"Search",
    },
    {
        loc:"./icons/gmail.svg",
        desc:"Gmail",
    },{
        loc:"./icons/photos.svg",
        desc:"Photos",
    },{
        loc:"./icons/appStore.svg",
        desc:"App Store",
    },
    {
        loc:"./icons/calender.svg",
        desc:"Calender",
    },
    {
        loc:"./icons/youtube.svg",
        desc:"Youtube",
    },{
        loc:"./icons/maps.svg",
        desc:"Maps",
    },{
        loc:"./icons/docs.svg",
        desc:"Docs",
    },{
        loc:"./icons/drive.svg",
        desc:"Drive",
    },{
        loc:"./icons/sheets.svg",
        desc:"Sheets",
    },{
        loc:"./icons/translate.svg",
        desc:"Translate",
    },{
        loc:"./icons/keyboard.svg",
        desc:"Keyboard"
    }
    ]

    iconArray.forEach(icon=>{
        console.log(icon.loc ,icon.desc)
        $("#iconsToAppend").append(`<div class="modal-grid-item"><img src="${icon.loc}" alt=""><p>${icon.desc}</p></div>`)
    })

  });