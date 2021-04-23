// define all UI variables
let indexBody;
let i = 0;
let active = "";
let selectIdBody = ('#d' + indexBody);

/**
 * 
 * @param {*} active 
 */
function deleteStyle(active) {
    if (active == "active") {
        document.querySelector(selectIdBody).style.opacity = "";
        document.querySelector(selectIdBody).style.border = "";
    }
}

/**
 * 
 * @param {*} active 
 */
function addStyle(active) {
    if (active == "active") {
        document.querySelector(selectIdBody).scrollIntoView();
        document.querySelector(selectIdBody).style.opacity = "1";
        document.querySelector(selectIdBody).style.border = "3px solid #a259ff";
    }
}

/**
 * 
 * @param {*} order 
 */
function bodyNavigation(order) {
    switch (order) {
        case "drop":
            navigation = "Body";
            for (; i < 1; i++) {
                if (active == "active") {
                    deleteStyle(active);
                }
                indexBody = 3;
                selectIdBody = ('#d' + indexBody);
                addStyle("active");
            }
            if (indexBody < 10 && indexBody != 9) {
                deleteStyle("active");
                indexBody = indexBody + 2;
                selectIdBody = ('#d' + indexBody);
                addStyle("active");
                console.log(indexBody)
            } else if (indexBody == 10) {
                deleteStyle("active");
                indexBody = 6;
                selectIdBody = ('#d' + indexBody);
                addStyle("active");

            }
            if (indexBody == 9) {
                selectIdBody = ('#d' + indexBody);
                addStyle("active");
                i = 0;
                active = "active";
            }
            break;
        case "right":
            if (indexBody < 10) {
                deleteStyle("active");
                indexBody++;
                selectIdBody = ('#d' + indexBody);
                addStyle("active");
            } else if (indexBody == 10) {
                deleteStyle("active");
                indexBody = 5;
                selectIdBody = ('#d' + indexBody);
                addStyle("active");
            }
            break;
        case "left":
            if (indexBody > 5) {
                deleteStyle("active");
                indexBody--;
                selectIdBody = ('#d' + indexBody);
                addStyle("active");
            } else if (indexBody == 5) {
                deleteStyle("active");
                indexBody = 10;
                selectIdBody = ('#d' + indexBody);
                addStyle("active");
            }
            break;
        case "lift":
            if (indexBody == 5 || indexBody == 6) {
                deleteStyle("active");
                navigation = "Menu";
                active = "";
                indexBody = 3;
                i = 1;
            }
            if (indexBody > 6 && indexBody <= 10) {
                deleteStyle("active");
                indexBody = indexBody - 2;
                selectIdBody = ('#d' + indexBody);
                addStyle("active");
                i = 1;
            }
            break;
    }
}

/**
 * 
 * @param {*} order 
 */
function bodyNavigationMobile(order) {
    switch (order) {
        case "drop":
            for (; i < 1; i++) {
                if (active == "active") {
                    deleteStyle(active);
                }
                indexBody = 4;
                selectIdBody = ('#d' + indexBody);
                addStyle("active");
            }
            if (indexBody < 10) {
                deleteStyle("active");
                indexBody++;
                selectIdBody = ('#d' + indexBody);
                addStyle("active");
            } else if (indexBody == 10) {
                deleteStyle("active");
                indexBody = 5;
                selectIdBody = ('#d' + indexBody);
                addStyle("active");
            }
            
            break;
        case "lift":
            if (indexBody > 5) {
                deleteStyle("active");
                indexBody--;
                selectIdBody = ('#d' + indexBody);
                addStyle("active");
            } else if (indexBody == 5) {
                deleteStyle("active");
                navigation="Menu";
                inMobileMenu="out";
                counter=0;
                
            }

            break;      
    }
}