const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What shall I call you?", (name) => {
  rl.question("Whats your star sign?", (astro) => {
    rl.question("Who is your favourite band?", (band) => {
      rl.question("What is your favourite food?", (food) => {
        rl.question(
          "When is the last time you spent time in nature?",
          (nature) => {
            rl.question(
              "What is something about yourself that most people dont know?",
              (secret) => {
                console.log(`Hi! You can call me ${name}! My star sign is ${astro} and I spent some time in nature ${nature}. My favourite band is ${band} and my favourite food is ${food}. Something that I don't often tell people, but that I would like to share with you is ${secret}.`);
                rl.close();
              }
            );
          }
        );
      });
    });
  });
});

/*Hi! You can call me ${name}! My star sign is ${astro} and I spent 
some time in nature ${nature}. My favourite band is ${band} and my favourite 
food is ${food}. Something that I don't often tell people, but that I would 
like to share with you is ${secret}.

/*What's your name? Nicknames are also acceptable :)
What's your astrology sign?
Who is your favourite band?
what is your favourite food?
when is the last time you spent time in nature?
what is something about yourself that most people don't know?*/
