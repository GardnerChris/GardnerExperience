let days= new Array(7);
    days[0]="Sunday";
    days[1]="Monday";
    days[2]="Tuesday";
    days[3]="Wednesday";
    days[4]="Thursday";
    days[5]="Friday";
    days[6]="Saturday";
    days[7]="Sunday";

let month= new Array(12);
    month[0]= "January";
    month[1]="February";
    month[2]="March";
    month[3]="April";
    month[4]="May";
    month[5]="June";
    month[6]="July";
    month[7]="August";
    month[8]="September";
    month[9]="October";
    month[10]="November";
    month[11]="December";

let date= new Date();
let year=date.getFullYear();
let day= date.getDay()
let months=date.getMonth();
document.getElementById("currYear").innerHTML=year;
document.getElementById("lastMod").innerHTML= "Last Updated: " + days[day] +', '+ month[months]+ ' '+ date.getDate() + ', '+ date.getFullYear();


function toggleMenu(){
document.getElementById("noHide").classList.toggle("hide");
}
