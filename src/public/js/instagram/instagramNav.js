const writingBox = document.querySelector('.writing-box');
/**
 * 
 */

function searchewords(SearcheShortCut, area) {

    let alias = {
        "epe": "ge.ff@gmail.com",
        "spl": "salut",
        "bpj": "bonjour"
    };

    for (const property in alias) {

        let indexofShortCut = SearcheShortCut.lastIndexOf(property);

        console.log("Index of shortcut =", indexofShortCut);
        console.log("Char = ", SearcheShortCut.charAt(indexofShortCut-1));

        // if indexShortcut === 0 c'est que le premier mot est un raccourci,
        // la lettre précédente n'existant pas on remplace direct
        if( (indexofShortCut != -1 && SearcheShortCut.charAt(indexofShortCut-1) === " " ) || indexofShortCut === 0) {  
        
            SearcheShortCut=SearcheShortCut.substr(0,indexofShortCut);
            area.value= SearcheShortCut +  " "  + alias[property] + " ";

        }
    }    
}

function writeText() {
    if (indexDeleteTextInput != 5) {
        area.value = area.value + slider[indexOfCenterLetter];
        let SearcheShortCut=area.value;
        searchewords(SearcheShortCut, area);
        testarray = area.value.split("");
    }
}
/**
 * 
 */
function deleteText() {
    if (indexDeleteTextInput == 5) {
        testarray.pop();
        area.value = testarray.join("");
        console.log(testarray);
    }
}
/**
 * 
 * @param {*} newSliderValue 
 */
function addNewSlider(newSliderValue) {
    slider = newSliderValue;
    LenghtOfValueSlider = slider.length;
    indexOfCenterLetter = 2;
    alphabetSliderBox(LenghtOfValueSlider, indexOfCenterLetter);
    console.log(LenghtOfValueSlider);
    pTagNextulTagAlphabet.innerHTML = `<p class="next-block">${nameOfSlides[nextSlider]}</p>`;
    nextSlider++;
}
/**
 * 
 * @param {*} indexSlider 
 */
function chooseSlider(indexSlider) {
    switch (indexSlider) {

        case 1:
            indexDeleteTextInput = 0;
            addNewSlider(VowelForSlider); 
            break;
        case 2:
            addNewSlider(ConsonantsForSlider);
            break;
        case 3:
            addNewSlider(NumberForSlider);
            break;
        case 4:
            addNewSlider(CharactersForSlider);
            break;
        case 5:
            alphabetSliderBox(LenghtOfValueSlider, indexOfCenterLetter);
            indexDeleteTextInput = 5;
            pTagNextulTagAlphabet.innerHTML = `<p class="next-block">${nameOfSlides[nextSlider]}</p>`;
            nextSlider++;
            break;
    }
}
/**
 * 
 * @param {*} indexChoiceInput 
 */
function chooseInput(indexChoiceInput) {
    switch (indexChoiceInput) {

        case 1:

            navigation = "Body";
            console.log(indexChoiceInput);
            area = idUser;
            area.focus();

            break;
        case 2:
            area = idPassword;
            area.focus();

            break;
        case 3:
            idBtnLog.focus();
            console.log(indexChoiceInput);
            area.value;
            break;
        case 4:
            navigation = "Menu";
            counter=0;
            idBtnLog.blur();
            console.log(indexChoiceInput);
            indexChoiceInput = 1;
            
            break;
    }
}
/**
 * 
 * @param {*} order 
 */
function bodyNavigation(order) {
    switch (order) {
        case "lift": {
            if (indexSlider < 5) {
                indexSlider++;
            } else if (indexSlider == 5) {
                indexSlider = 1;
                nextSlider = 0;
            }
            chooseSlider(indexSlider);
        }
        break;
    case "right":
        if (indexOfCenterLetter < LenghtOfValueSlider - 2) {
            indexOfCenterLetter++;
            alphabetSliderBox(LenghtOfValueSlider, indexOfCenterLetter);
        } else {
            indexOfCenterLetter = 1;
            alphabetSliderBox(LenghtOfValueSlider, indexOfCenterLetter);
        }
        break;
    case "left":
        if (indexOfCenterLetter == 1) {
            indexOfCenterLetter = LenghtOfValueSlider - 1;
        }
        indexOfCenterLetter--;
        alphabetSliderBox(LenghtOfValueSlider, indexOfCenterLetter);
        break;
    case "drop":
        writingBox.classList.add('open');
        chooseInput(indexChoiceInput);
        if (indexChoiceInput != 4) {
            indexChoiceInput++;
        } else {
            indexChoiceInput = 1;
        }
        break;

    case "push":
        if (indexChoiceInput != 4) {
            writeText();
        }
        break;
    case "delete":
        if (indexChoiceInput != 4) {
            deleteText();
        }
        break;
    }
}
/**
 * 
 * @param {*} order 
 */
function bodyNavigationMobile(order) {
    bodyNavigation(order);
}