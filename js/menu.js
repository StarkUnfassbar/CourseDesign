let header = document.querySelector("header .content");

let popup;
let popupHtml = `
    <div class="popup none">
        <div class="popup_content">
            <nav>
                <a href="">О курсе</a>
                <a href="">Преподаватели</a>
                <a href="">Отзывы</a>
                <a href="">Вопросы</a>
            </nav>

            <h4>Мы в соц. сетях:<h4>

            <div class="links_img">
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
            </div>
        </div>
    </div>
`;


let mobileMenuAdded = false;



if(window.innerWidth <= 760){
    let linksImg = header.querySelector(".links_img");
    let navMenu = header.querySelector("nav");

    header.removeChild(linksImg);
    header.removeChild(navMenu);
    
    header.insertAdjacentHTML("beforeend", `
        <a href="" class="popup_open"><span></span></a> 
    `);

    mobileMenuAdded = true;

    popupMenu(header.querySelector(".popup_open"));
}


window.addEventListener('resize', function(event){
    if(window.innerWidth <= 760 && !mobileMenuAdded){
        let linksImg = header.querySelector(".links_img");
        let navMenu = header.querySelector("nav");
    
        header.removeChild(linksImg);
        header.removeChild(navMenu);
        
        header.insertAdjacentHTML("beforeend", `
            <a href="" class="popup_open"><span></span></a> 
        `);

        mobileMenuAdded = true;

        popupMenu(header.querySelector(".popup_open"));
    } else if(window.innerWidth > 760 && mobileMenuAdded){
        let popupOpen = header.querySelector(".popup_open");
    
        header.removeChild(popupOpen);
        
        header.insertAdjacentHTML("beforeend", `
            <div class="links_img">
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
            </div>

            <nav>
                <a href="">О курсе</a>
                <a href="">Преподаватели</a>
                <a href="">Отзывы</a>
                <a href="">Вопросы</a>
            </nav>
        `);

        mobileMenuAdded = false;
    }
});



function popupMenu(popupButtonOpen){
    document.querySelector("body").insertAdjacentHTML("beforeend", popupHtml);
    popup = document.querySelector(".popup");

    popupButtonOpen.addEventListener("click", (e) => {
        e.preventDefault();

        if(popup.classList.contains("none")){
            popup.classList.remove("none");

            window.scrollTo({top: 0, behavior: 'smooth'});
            setTimeout(() => {
                document.querySelector("body").classList.add("lock");
            }, 300);

            setTimeout(() => {
                popup.classList.add("_active");
            }, 50);

            popupButtonOpen.classList.add("_active");
        } else{
            popup.classList.remove("_active");
            
            setTimeout(() => {
                popup.classList.add("none");
                document.querySelector("body").classList.remove("lock");
            }, 710);

            popupButtonOpen.classList.remove("_active");
        }
    });
};