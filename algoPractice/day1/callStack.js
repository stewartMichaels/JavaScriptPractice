function takeShower() {
    return "Showering";
}

function eatBreakfast() {
    let meal = cookFood();
    return (`Having ${meal}`);
}

function cookFood() {
    let items = ["Oatmeal", "Eggs", "Protein Shake"];
    return items[Math.floor(Math.random()*items.length)];
}

function wakeUP() {
    takeShower();
    eatBreakfast();
    console.log("Ok ready to go to work!");
}