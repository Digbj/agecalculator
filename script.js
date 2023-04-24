const date=document.querySelector('.inp1').value
const month=document.querySelector('.inp2').value
const year=document.querySelector('.inp3').value



function eval(){
    const date=document.querySelector('.inp1').value
const month=document.querySelector('.inp2').value
const year=document.querySelector('.inp3').value

const error=document.querySelector('.err');

if(+date<=0||+date>31||date.length<=0||date.length>2){
    // error.innertext(`<p>wrong date<p>`)
        console.log(date)
        error.innerHTML="wrong date"
   console.log("wrong date") 
}else if(month<=0||month>12||month.length>2){
    console.log(month)
    error.innerHTML="wrong month"
    console.log("wrong month")
}else if(year.length>4||year.length<=0||year>2023||year<1900){
    console.log("enter a valid year")
    error.innerHTML="enter a valid year"

}else{
    Calc(date,month,year)
}


function Calc(){
    let date1=24;
    let month1=04;
    let year1=2023;

    let d=date1-date;
    let m=month1-month;
    let y=year1-year;
    error.innerHTML="your age is " +y+ " year" +m+ " months " +d+ " days"
    console.log("your age is"+y+"year" +m+ "months" +d+ "days")
}






// console.log("hi")
}