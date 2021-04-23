// define all UI variables
let index = 0;
let counter=0;
let navigation = "Menu";
let selectIdMenu = ('#d' + index);
let inMobileMenu = "out";
let desktopOrMobile;

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
 * @param {*} result 
 */
function processResult(result) {
    if (result["name"] === "BrainRes") {
        if(desktopOrMobile == "desktop") {
            switch (result["result"]) {
               case "right":
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
        case "drop":
            bodyNavigation("drop");
            break;

        case "left":
            if (index > 1 && navigation == "Menu") {
                index--;
                idFocus(index);
            } else if (index <= 1 && navigation == "Menu") {
                index = 4;
                idFocus(index);
            }
            if (navigation == "Body") {
                bodyNavigation("left");
            }
            break;
        case "lift":
            bodyNavigation("lift");
            break;
        case "push":
            if (navigation == "Menu") {
                clickInLink();
            }
            bodyNavigation("push");
            bodyNavigation("delete");
            break;
            }
        }
        //mobile  Navigation
        if(desktopOrMobile == "mobile") {
            switch (result["result"]) {
                case "left":
                    bodyNavigation("left");
                    break;
                    case "right":
                    bodyNavigation("right");
                    break;
                    case "drop":
                        if (navigation == "Menu"){
                            startMobilMenu(inMobileMenu);
                            i = 0;          
                        }
                        if ( counter==2) {
                            navigation="Body";
                            bodyNavigationMobile("drop");
                        }
            
                        break;
                        case "lift":                
                        if (navigation == "Menu"){
                            inMobileMenu ="inUp";
                            startMobilMenu(inMobileMenu);
                        }else if (navigation == "Body"){
                            bodyNavigationMobile("lift");
                        }
                        break;
                    case "push":
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
     }//else {
    //     console.log(`message from server received : `, message.data)
    // }
}