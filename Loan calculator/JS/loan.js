function calculate()
{
const amount =  document.querySelector("#amount").value;
const interest =  document.querySelector("#interest").value;
const duration =  document.querySelector("#month").value;

const output =( amount * (interest/100) )* duration;
document.querySelector("#result").innerHTML = output;
}