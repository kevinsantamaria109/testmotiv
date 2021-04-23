/**
 * Nom du module, but, auteur.
 */
// selecting required alphabetSliderBox
const ulTagAlphabetSlider = document.getElementById("write-texte-slide");
const pTagNextulTagAlphabet = document.getElementById("next-block");
const idUser = document.getElementById("user");
const idPassword = document.getElementById("password");
const idBtnLog = document.querySelector("#btnLog");
let indexChoiceInput = 1;
let indexSlider = 1;
let indexOfCenterLetter = 2;
let nextSlider = 0;
let slider;
let indexDeleteTextInput;
let nameOfSlides = ['Thought  up to change to Consonants.',
                    'Thought  up to chang to Number.',
                    'Thought  up to change to Characters.',
                    'Thought  up to change to Delete.',
                    'Thought  up to change to Vowel.'
]
let VowelForSlider = ['y', 'a', 'e', 'i', 'o', 'u', 'y', 'a'];
let NumberForSlider = ['9', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
let CharactersForSlider = ['#', ',', '.', ' ', '@', '&', '/', '%', '*', '#', ','];
let ConsonantsForSlider = ['z', 'b', 'c', 'd', 'f', 'g', 'h', 'j',
                         'k', 'l', 'm', 'n', 'p', 'q', 'r', 's',
                         't', 'v', 'w', 'x', 'z', 'b'
];
slider = VowelForSlider;
let LenghtOfValueSlider = slider.length;

pTagNextulTagAlphabet.innerHTML = `<p class="next-block">${nameOfSlides[nextSlider]}</p>`;
nextSlider++;

alphabetSliderBox(LenghtOfValueSlider, indexOfCenterLetter);

//calling function with passing parameters and adding inside alphabetSliderBox which is ul tag
/**
 * 
 * synthèse et but de la fonction
 * @param {*} LenghtOfValueSlider description des params 
 * @param {*} letter 
 */
//alphabetSliderBox
function alphabetSliderBox(LenghtOfValueSlider, CenterLetter) {
    let sliderDisplay = '';
    let DeleteActive = "active";
    let active;
    let beforeletters;
    let afterletters;
    if (indexSlider == 5) {

        ulTagAlphabetSlider.innerHTML = `<li class="delete ${DeleteActive}"><span>X</span></li>`;

    } else {
        beforeletters = CenterLetter - 1;
        afterletters = CenterLetter + 1;


        if (CenterLetter > 1) { //show the next button if the letter value is greater than 1
            sliderDisplay += `<li class="btn prev" onclick="alphabetSliderBox(LenghtOfValueSlider,
            ${CenterLetter - 1})"><span><i class="fas fa-angle-left"></i> Prev</span></li>`;
        } else {
            sliderDisplay += `<li class="btn prev" onclick="alphabetSliderBox(LenghtOfValueSlider,
             ${CenterLetter + LenghtOfValueSlider-3})"><span><i class="fas fa-angle-left"></i> Prev</span></li>`;
        }

        for (let letterLength = beforeletters; letterLength <= afterletters; letterLength++) {
            if (CenterLetter == letterLength) {
                active = "active";
            } else {
                active = "";
            }
            sliderDisplay += `<li class="numb ${active}"><span>${slider[letterLength]}</span></li>`;

        }
        if (CenterLetter < LenghtOfValueSlider - 2) {
            sliderDisplay += `<li class="btn next"  onclick="alphabetSliderBox(LenghtOfValueSlider,
            ${CenterLetter + 1})"><span>Next <i class="fas fa-angle-right"></i></span></li>`;
        } else {
            sliderDisplay += `<li class="btn next"  onclick="alphabetSliderBox(LenghtOfValueSlider, 
            ${CenterLetter =1})"><span>Next <i class="fas fa-angle-right"></i></span></li>`;
        }
        ulTagAlphabetSlider.innerHTML = sliderDisplay;
    }
}