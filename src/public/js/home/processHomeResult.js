// //CODE POUR LE CASQUE CMD MIND 
// function processResult(result) {
//     if (result["name"] === "BrainRes") {
//         if(navigation=="menu") {
//             switch (result["result"]) {
//                 case "left":
//                     if (index < 5) {
//                         if (index != 0) {
//                         }
//                         index++;
//                         change = ('#d' + index);
//                         document.querySelector(change).focus();
//                         console.log(index);
//                     } else {
//                         index = 1;
//                         change = ('#d' + index);
//                         document.querySelector(change).focus();
//                         console.log(index);
//                     }
//                     break;
//                 case "right":
                    
//                 break;
//                  case "drop":
//                     navigation="body";
//                     index = 5;
//                  break;
//                 case "push":
//                     let el = document.querySelector(change);
//                     let link = el.attributes.href.value;
//                     window.location = link;
//                  break;
//             }
//         }
//         //body  Navigation
//         if(navigation=="body") {
//             switch (result["result"]) {
//                 case "left":
//                     for (; i < 1; i++) {
//                         change = ('#d' + index);
//                         addStyle();
//                     }
//                     if (index <= 10) {
//                         deleteCss();
//                         index++;
            
//                         change = ('#d' + index);
//                         addStyle();
//                         console.log(change);
//                     } else {
//                         i = 0;
//                         deleteCss();         
//                     }

//                     break;
//                 case "right":
                    
//                 break;
//                  case "down":
                   
//                  break;
//                 case "push":
//                  break;
//             }
//         } else {
//             console.log(`message from server received : `, message.data)
//         }
//     }
// }