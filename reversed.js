// Anuther Revers String

function reverseStriong(str){
    var splitString=str.split("");

    var reverseArray=splitString.reverse();

    var joinArray=reverseArray.join("");
    return joinArray;
}
console.log(reverseStriong("Hello"));