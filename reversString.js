/*-------------------------
This Code Reversed a String
--------------------------*/

const value="Revers Me";
let reversedvalue="";

value.split("").forEach((char)=>{
    reversedvalue=char+reversedvalue;
});
console.log(reversedvalue);