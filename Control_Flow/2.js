// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "jan"
switch (month) {
    case "jan":
        console.log("january");
        break;
    case 'feb':
        console.log("Feb");
        break; //whenever key is match  break help to block the control flow
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
        

    default:
        console.log("Default case match");
        
        break;
}

