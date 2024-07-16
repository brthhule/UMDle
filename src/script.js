

function Model () {
    const woods = {"name": "Woods", "xCoord": 38.98520825094225, "yCoord": -76.94178927335166};
    const maryMount = {"name": "Mary Mount", "xCoord": 38.9851333833028, "yCoord": -76.94086354821499};
    const dorchester = {"name": "Dorchester", "xCoord": 38.98684874201056, "yCoord": -76.9461386886941};
    const pyonChen = {"name": "Pyon Chen", "xCoord": 38.99217621364386, "yCoord": -76.94490983773476};

    //all building variables defined
    const buildings = [this.woods, this.maryMount, this.dorchester, this.pyonChen];
    //array of all buildings
    let list = [];
    //list for guesses, ordered closest to furthests
    let answer = this.pyonChen;
    let guessed = false;

    function addListItem(text) {
        if (text == answer.name) {
            guessed = true;
            return;
        }
        let inList = false;
        for (let i = 0; i < list.length; i++) {
            if (list[i].name == text) {
                inList = true;
            }
        }
        if (inList == false) {
            for (let i = 0; i < buildings.length; i++) {
                if (text == buildings[i].name) {
                    list.push(buildings[i]);
                }
            }
        }
    }

    function calculateDistance(coord1, coord2) {
        const R = 6371e3; 
        const φ1 = coord1.xCoord * Math.PI/180;
        const φ2 = coord2.xCoord * Math.PI/180;
        const Δφ = (coord2.xCoord - coord1.xCoord) * Math.PI/180;
        const Δλ = (coord2.yCoord - coord1.yCoord) * Math.PI/180;
    
        const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
                    Math.cos(φ1) * Math.cos(φ2) *
                    Math.sin(Δλ/2) * Math.sin(Δλ/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    
        return R * c; 
    }

    function displayOutput() {
        if (guessed == true) {
            console.log("end game");
            document.getElementById('output').textContent = `You Won!`;
        } else {
            document.getElementById('output').textContent = `Closests:`;
            list.sort((a, b) => calculateDistance(a, answer) - calculateDistance(b, answer));
            for (let i = 0; i < list.length; i++) {
                if (i != 0) {
                    document.getElementById('output').textContent += ',';
                }
                document.getElementById('output').textContent += ' ' + list[i].name;
            }
        }  
    }

    function main(input) {
        Model.addListItem(input);
        Model.displayOutput();
    }
}

const model = new Model();

export default model;





