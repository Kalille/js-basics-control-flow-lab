function scuberGreetingForFeet(depth){
  // Write your code here!
  if (depth <= 400)
  {return "This one is on me!"}
  else if (depth <= 2499)
  {return "I will gladly take your thirty bucks."}
  else (depth >= 2500)
  {return ("No can do.")}
}

function ternaryCheckCity(place){
  // Write your code here!
 return ternaryCheckCity = place === "NYC" ? "Ok, sounds good." : "No go.";

}

function switchOnCharmFromTip(amount){
  // Write your code here!
  switch (amount){
    case "generous":
      return "Thank you so much.";
      break;
      case "not as generous":
        return "Thank you.";
        break;
        default:
          return "Bye.";
          break;
  }

}