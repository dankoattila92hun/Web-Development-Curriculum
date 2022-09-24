let input = prompt("What would you like to do?");
const t = [];

while (input !== "quit" && input !== "q") {
    if (input === "list") {
        for (let i = 0; i < t.length; i++) {
            console.log(`${i}: ${t[i]}`);
        }
    } else if (input === "new") {
        const Newt = prompt("What is the new to do?");
        t.push(Newt);
        console.log(`${Newt} added to to do list`);
    } else if (input === "delete") {
        const index = parseInt(prompt("Enter index to delete!"));
        if (!Number.isNaN(index)) {
            const deleted = t.splice(index, 1);
            console.log(`${deleted[0]} is deleted!`);
        } else {
            console.log("Unknown index");
        }
    }
    input = prompt("What would you like to do?");
}
console.log("Quit the app!");