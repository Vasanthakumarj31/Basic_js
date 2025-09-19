//string methods = allow you to manipulate and work with texts

let username = "vasanth";
let phoneno = "936-160-9206";
console.log(username.charAt(3));
console.log(username.indexOf("a"))
console.log(username.lastIndexOf("a"))
console.log(username.length);
username = username.startsWith(" ");
username = username.includes(" ");
username = username.endsWith(" ");
username = username.replace("a","b");
username = username.repeat(3);
if(username){
    console.log("you can't start with white space");
}else{
    username = "vasanth";
    
phoneno = phoneno.replaceAll("-","");
phoneno = phoneno.padStart(15,"0");
phoneno = phoneno.padEnd(15,"0");
console.log(phoneno);
