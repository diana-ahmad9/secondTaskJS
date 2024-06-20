var language = ["c++ ", "java" , "c#"];
var list ="";
for(var count = 0 ; count <=2 ; count++ )
{
   list += `<li> ${language[count]} </li>`
};
document.querySelector("ul").innerHTML = list;
