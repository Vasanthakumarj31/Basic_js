//Switch = can be efficient replacement to many else if statement

var mark = 44;
var result;
switch(true){
    case mark>=90:
        result = "pass";
        break;
    case mark>=80:
        result = " good mark";
        break;
    case mark>=70:
        result = "average mark";
        break;
    case mark>=60:
        result = "below average";
        break;
    case mark>=50:
        result = "poor";
        break;
    default:
        result = "fail";

}
console.log(result);
