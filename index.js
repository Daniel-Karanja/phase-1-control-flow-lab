function scuberGreetingForFeet(ride) {
  // Write your code here!
  if (ride <= 400 && ride <= 2000) {
    return "This one is on me!";
  }

  if (ride > 2000 && ride <= 2500) {
    return "I will gladly take your thirty bucks.";
  }

  if (ride > 2500) {
    return "No can do.";
  }
}

function ternaryCheckCity(city) {
  // Write your code here!
  if (city === "NYC") {
    return "Ok, sounds good.";
  }
  return "No go.";
}

function switchOnCharmFromTip(tip) {
  // Write your code here!

  if (tip === "generous") {
    return "Thank you so much.";
  }

  if (tip === "not as generous") {
    return "Thank you.";
  }

  return "Bye.";
}
