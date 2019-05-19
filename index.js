
let katzDeli = []; 

// At the beginning of the day,
//the deli is empty and is represented by an empty array
//<<<<<<<<<--------------- in the instructions <<<<<<

 function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`);
  return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}
function nowServing(array){
    let katzDeliLine = array
if(katzDeliLine.length > 2){
    return "Currently serving " + katzDeliLine[0]+ "."
}
else if (katzDeliLine.length > 0)
       for (let i = 0; i < katzDeliLine.length; i++) {
         katzDeliLine.shift(0);
         return "Currently serving " +katzDeliLine[0]+ "."
       }
               
else {
    return "There is nobody waiting to be served!"
    }
}