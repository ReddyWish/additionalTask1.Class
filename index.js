const attacker = {
    archer: 30,
    footSoldier: 55,
    cavalry: 10,
    artillery: 3,

    checkChancesToWin(defenderObject) {
        let attackerItemsForAttack = Object.values(attacker)
        let defenderItemsForAttack = Object.values(defender)
        let arrChances = attackerItemsForAttack.reduce((acc, item, index) => {
            if (item > defenderItemsForAttack[index]) {
                acc[0]++
            }
            return acc
        }, [0, 4])
        return arrChances
    },

    improveArmy() {
        this.archer += 5;
        this.footSoldier += 5;
        this.cavalry += 5;
        this.artillery += 5
    },

    attack(defender) {
       let preparationForAttack = this.checkChancesToWin(defender)
       if (preparationForAttack[0] < 3) {
           alert(`Наши шансы равны ${preparationForAttack[0]} из ${preparationForAttack[1]}, необходимо укрепление!`);
        this.improveArmy()
       } else {
           alert(`Мы усилились! Мы несомненно победим!Наши шансы высоки`)
       }
    }
 }

const defender = {
    archer: 33,
    footSoldier: 50,
    cavalry: 40,
    artillery: 10,
}

attacker.attack(defender)
attacker.attack(defender)
attacker.attack(defender)













