const infoTab = document.querySelector("#info-tab");
    const newsTab = document.querySelector("#news-tab");
    const infoDetay = document.querySelector(".info-detay");
    const newsDetay = document.querySelector(".news-detay");
    const heroMain = document.querySelector(".hero-main");
    const hero = document.querySelector(".hero");
    const searchBar = document.querySelector(".search-bar");
    const footer = document.querySelector("#footer");

    function infoShow(){
        console.log("asdas");
        infoTab.style.display = "flex";
        infoDetay.style.display = "flex";
        newsTab.style.display = "none";
        newsDetay.style.display = "none";
        footer.className = "active";
    }

    function newsShow(){
        newsTab.style.display = "flex";
        newsDetay.style.display = "flex";
        infoTab.style.display = "none";
        infoDetay.style.display = "none";
        footer.className = "passive";
    }

    var infoIndex = 0;
    var newsIndex = 0;

    function prevNews(){
        if(infoDetay.style.display == "flex"){
            if(infoDetay.children[0].className != "news-active" ){
                infoDetay.children[infoIndex].className = "news-passive";
                infoDetay.children[infoIndex-1].className = "news-active";
                infoIndex--;
            }
        }
        else if(newsDetay.style.display == "flex")
        {
            if(newsDetay.children[0].className != "news-active" ){
                newsDetay.children[newsIndex].className  = "news-passive";
                newsDetay.children[newsIndex-1].className  = "news-active";
                newsIndex--;
            }
        }
        
    }

    function nextNews(){
        if(infoDetay.style.display == "flex"){
            if(infoDetay.children[infoIndex+1] != null)
            {
                infoDetay.children[infoIndex].className  = "news-passive";
                infoDetay.children[infoIndex+1].className = "news-active";
                infoIndex++; 
            }
        }
        else if(newsDetay.style.display == "flex")
        {
            if(newsDetay.children[newsIndex+1] != null)
            {
                newsDetay.children[newsIndex].className  = "news-passive";
                newsDetay.children[newsIndex+1].className = "news-active";
                newsIndex++; 
            }
        }
    }

    var sliderIndex = 0;

    function prevSlider(){
        if(heroMain.children[0].className != "news-active" )
        {
            heroMain.children[sliderIndex].className  = "news-passive";
            heroMain.children[sliderIndex-1].className  = "news-active";
            hero.style.backgroundImage = "url('./img/bg.png')";
            sliderIndex--;
        }
        
    }

    function nextSlider(){
        if(heroMain.children[sliderIndex+1] != null)
        {
            heroMain.children[sliderIndex].className  = "news-passive";
            heroMain.children[sliderIndex+1].className = "news-active";
            hero.style.backgroundImage = "url('./img/bg2.png')";
            sliderIndex++; 
        }
    }

    var count = 0;
    function searchButton(){
        if(count%2 == 0){
            searchBar.style.display = "flex";
        }else if(count%2 != 0){
            searchBar.style.display = "none";
        }
        count++;
    }