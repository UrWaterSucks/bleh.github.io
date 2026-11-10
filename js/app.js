const insert = document.getElementById("insert");
const attackingType = document.getElementById("attack").value;
const defendingType = document.getElementById("defend").value;

const typeChart = {
  fire: { strongAgainst: ["grass"], weakAgainst: ["water"] },
  water: { strongAgainst: ["fire"], weakAgainst: ["electric"] },
  electric: { strongAgainst: ["water"], weakAgainst: ["grass"] },
  grass: { strongAgainst: ["electric"], weakAgainst: ["fire"] }
};

document.getElementById("fight").addEventListener("click", function(type){
    // console.log(document.getElementById("attack").value);
    // console.log(document.getElementById("defend").value);
        insert.innerHTML = "";
        if (){
            insert.innerHTML = "2x - It's Super Effective!";
        } else if (){
            insert.innerHTML = ".5x - It wasn't very effective...";
        } else {
            insert.innerHTML = "1x - Effective";
        }   
})