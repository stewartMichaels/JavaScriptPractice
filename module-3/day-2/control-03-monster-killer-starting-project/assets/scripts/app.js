const ATTACK_VALUE = 10; //ATTACK_VALUE is in all caps to show that it's a global value that we hardcoded into the game (not a must use)

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlaterHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
    const damage = dealMonsterDamage(ATTACK_VALUE);
    currentMonsterHealth -= damage;
}

attackBtn.addEventListener("click", attackHandler);