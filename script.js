/*let not = prompt("Notunuzu giriniz");

if (not>100 || not<0 || not=="")
{
    alert("Hatali giris yaptiniz");
}

else {

not > 80 ? alert("A ile gectiniz") : not >= 70 && not < 79 ? alert("B ile gectiniz") : not >= 60 && not < 69 ? alert("C ile gectiniz") : not >= 50 && not < 59 ? alert("D ile gectiniz") : alert("F ile gectiniz");

} 


let month = prompt("Write a month.").toLowerCase().trim();

switch (month) {
    case "september": case "october": case "november":
        alert("Autumn")
        break;

    case "december" :  case "january": case  "february":
        alert("Winter")
        break;

    case "march" : case "april" : case "may":
        alert("Spring")
        break;

    case "june" : case "july" : case "august":
        alert("Summer")
        break;

    default:
        alert("Wrong!!!")
        break;
}
*/

let month=prompt("ay yaz").toLowerCase().trim();

if(month=="ocak" || month=="mart" || month=="mayis" || month=="temmuz" || month=="agustos" || month=="ekim" || month=="aralik")

alert(`${month} 31 gun`);

else if(month=="nisan" || month=="haziran" || month=="eylul" || month=="kasim") {
    alert(`${month} 30 gun`);
}

else if (month=="subat")
{
    alert(`${month} 28 gun`);
}

else{
    alert("hata!!!")
}