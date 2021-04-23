// define all UI variables
let index = 0;
let counter=0;
let navigation = "Menu";
let selectIdMenu = ('#d' + index);
let inMobileMenu = "out";

/**
 * 
 * @param {*} index 
 */
function idFocus(index){
    selectIdMenu = ('#d' + index);
    document.querySelector(selectIdMenu).focus();
}

/**
 * 
 * @param {*} inMenu 
 */
function startMobilMenu (inMenu){
    if(inMenu=="out"){
    index=11;
    selectIdMenu = ('#d' + index);
    idFocus(index);
    counter++;
    }else if(inMenu=="in") {
        if (index < 4 ) {
            index++;
            idFocus(index);
               
        } else if (index == 4) {
            index = 1;
            idFocus(index);

        }
    }else if(inMenu=="inUp") {
        if (index > 1 && index < 5 ) {
            index--;
            idFocus(index);
        } else if (index == 1) {
            togglerClick();
            inMobileMenu ="out";
            index=11;
            idFocus(index);
        }else{
            inMobileMenu ="out";
        }
        counter=0;
    }
}

/**
 * 
 */
function clickInLink(){
    let el = document.querySelector(selectIdMenu);
    let link = el.attributes.href.value;
    window.location = link;
}
/**
 * 
 * @param {*} event 
 */
function keyForDesktopMenu(event) {
    toucheFleche = event.keyCode;

    switch (toucheFleche) {
        case 39:
            if (index < 4 && navigation == "Menu") {
                index++;
                idFocus(index);
                i = 0;
            } else if (index == 4 && navigation == "Menu") {
                index = 1;
                idFocus(index);
                i = 0;
            }
            if (navigation == "Body") {
                bodyNavigation("right");
            }
            break;
        case 40:
            bodyNavigation("drop");
            break;

        case 37:
            if (index > 1 && navigation == "Menu") {
                index--;
                console.log(index,"jsl");
                idFocus(index);
            } else if (index <= 1 && navigation == "Menu") {
                index = 4;
                idFocus(index);
            }
            if (navigation == "Body") {
                bodyNavigation("left");
            }
            break;
        case 38:
            bodyNavigation("lift");
            break;
        case 80:
            if (navigation == "Menu") {
                clickInLink();
            }
            bodyNavigation("push");
            bodyNavigation("delete");
            break;
    }
}
/**
 * 
 * @param {*} event 
 */
function keyForMobileMenu(event) {
    toucheFleche = event.keyCode;
    switch (toucheFleche){
        case 37:
        bodyNavigation("left");
        break;
        case 39:
        bodyNavigation("right");
        break;
        case 40:
            if (navigation == "Menu"){
                startMobilMenu(inMobileMenu);
                i = 0;          
            }
            if ( counter==2) {
                navigation="Body";
                bodyNavigationMobile("drop");
            }

            break;
            case 38:                
            if (navigation == "Menu"){
                inMobileMenu ="inUp";
                startMobilMenu(inMobileMenu);
            }else if (navigation == "Body"){
                bodyNavigationMobile("lift");
            }
            break;
        case 80:
            if (inMobileMenu == "in" || inMobileMenu == "inUp") {
                clickInLink();
            }
            if (navigation == "Menu"){
                togglerClick();
                inMobileMenu="in";
                index=1;
                idFocus(index);
                counter=0;
            }   
            bodyNavigation("push");
            bodyNavigation("delete");    
            break;
    }
}