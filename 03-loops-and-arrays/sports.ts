let sportsOne: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];

for (let i=0; i<sportsOne.length; i++){
    console.log(sportsOne[i]);
}

console.log(" ");

for (let tempSport of sportsOne){
    console.log(tempSport);
}

console.log(" ");

for (let tempSport of sportsOne){
    if (tempSport == "Golf"){
        console.log(tempSport + "<< My Favourites!");
    }
    else {
        console.log(tempSport);
    }
}