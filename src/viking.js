// Soldier
class Soldier {
    constructor (health, strength) {
    this.health = health;
    this.strength = strength;
    }
    attack(){
        return Soldier.strength
    }
    receiveDamage(the_damage){
        return Soldier.health - 
    }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength){
        super (health, strength)
        this.name = name
    }
}

// Saxon
class Saxon extends Soldier {}

// War
class War {
    addViking(){}
    addSaxon(){}
    vikingAttack(){}
    saxonAttack(){}
    showStatus(){}
}
