function plant(seed, water, fert, temp) {
    let myplant = [];
    for (let g = 0; g < water; g += 1) {
        for (let w = 0; w < water; w += 1) {
            myplant.push('-');
        }

        for (let f = 0; f < fert; f += 1) {
            myplant.push(seed);
        }
    }

    if (temp >= 20 && temp <= 30) {
        return myplant.join('');
    } else {
        let deadPlant = myplant.filter(tail => tail==='-');
        deadPlant.push(seed);
        return deadPlant.join('');
    }
}

function createPlant () {
    const plantPlace = document.getElementById('myplant');

    let seedValue = document.getElementById('seed').value;
    let waterValue = document.getElementById('water').value;
    let fertValue = document.getElementById('fert').value;
    let tempValue = document.getElementById('temp').value;

    const loadPlant = plant(seedValue, waterValue, fertValue, tempValue);

    plantPlace.innerHTML = loadPlant;

    if (tempValue < 20 || tempValue > 30) {
        document.getElementById('popDead').style.display = "flex";
    }
}

function gotIt () {
    document.getElementById('popDead').style.display = "none";
}