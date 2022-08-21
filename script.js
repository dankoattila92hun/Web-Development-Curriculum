console.log("Hello!");

let random = Math.random();
if (random < 0.5) {
    console.log(random);
    console.log("Your number is less than 0.5")
}
if (random >= 0.5) {
    console.log(random);
    console.log("Your number is greater or equal than 0.5")
}

const dayOfWeek = "Monday";
if (dayOfWeek === "Monday") {
    console.log("I hate Monday")
} else if (dayOfWeek === "Saturday") {
    console.log("I love Saturday")
} else if (dayOfWeek === "Friday") {
    console.log("I love Friday")
}

const age = 5;

if (age <= 5) {
    console.log("You are baby, you get it for free")
} else if (age <= 10) {
    console.log("You are a child, you pay 10 HUF")
} else if (age <= 65) {
    console.log("You are an adult, you pay 20 HUF")
} 
else {
    console.log("You are a senior, you pay 10 HUF")
}
    