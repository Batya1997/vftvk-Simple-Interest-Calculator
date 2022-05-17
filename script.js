

function compute()
{
principal = document.getElementById("principal").value;
rate = document.getElementById("rate").value;
years = document.getElementById("years").value;
interest = principal * years * rate /100;
year = new Date().getFullYear()+parseInt(years);

if(principal == undefined || principal <= 0){
    alert("Enter a Positive Number");
    document.getElementById("principal").focus();
    
    return
}else{
    // Display the text with the calculated values
    var inr = "If you deposit <mark>" + principal +",</mark><br>";
    var ra = "at an interest rate of <mark>"+ rate +" %,</mark><br>";
    var am="You will receive an amount of <mark>" +interest + ",</mark><br>"
    var ye ="in the year <mark>"+year +"</mark>";

    document.getElementById("result").innerHTML=inr+ra+am+ye;

}

}
//To update the Rate Value
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
rate.onchange = function()

{  rate_val.innerHTML = this.value;     }


