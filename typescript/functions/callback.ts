//typescript/functions/callback.ts
function greet(name: string, actionAfterGreeting: () => void) {
  console.log(`Hello ${name}!`);
  actionAfterGreeting();
}

greet("Anna", () => {
  console.log("Nice to meet you");
  console.log("How are you?");
});
