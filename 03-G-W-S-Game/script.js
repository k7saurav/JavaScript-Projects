alert("Start the game now...");
let user = prompt("Choose among G, W, and S: ");

let cpuNo = Math.floor(Math.random() * 3);
let cpu = ["G", "W", "S"][cpuNo];

const Match = (cpu, user) => {

   if(cpu === "G" && user === "W") {
      return "user";
   }
   else if(cpu === "G" && user === "S") {
      return "cpu";
   }
   else if(cpu === "W" && user === "G") {
      return "cpu";
   }
   else if(cpu === "W" && user === "S") {
      return "user";
   }
   else if(cpu === "S" && user === "G") {
      return "user";
   }
   else if(cpu === "S" && user === "W") {
      return "cpu";
   }
   else {
      return "Nobody";
   }
}

let result = Match(cpu, user);

document.write(`User takes: ${user} <br> CPU takes: ${cpu} <br> The winner is: ${result.toUpperCase()}`);