/*-------------------------
This Code Reversed a String
--------------------------*/

const value="Revers Me";
let reversesedvalue="";

value.split("").forEach((char)=>{
    reversesedvalue=char+reversesedvalue;
});
console.log(reversesedvalue);