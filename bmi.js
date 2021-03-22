function cal()
{
    var h=document.getElementById('h').value
    var w=document.getElementById('w').value

var bmi=(w/(h*h))

document.getElementById("bmi").value=bmi;


if(bmi<18.5)
{
    alert("BMI	Weight Status ---Underweight");
}
else if(bmi>=18.5 && bmi<=24.9)
{
    alert("BMI	Weight Status ---Normal");
}
else if(bmi>=25 && bmi<=29.9)
{alert("BMI	Weight Status --- Overweight");

}
else{
    alert("BMI	Weight Status ---Obese");
}
	

}
function refresh()
{
    document.getElementById("bmi").value="";
    document.getElementById('h').value=""
    document.getElementById('w').value=""
}