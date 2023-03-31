// Soldier
class Soldier {
    constructor (health, strength) {
    this.health = health;
    this.strength = strength;
    }
    attack(){
        return this.strength
    }
    receiveDamage(the_damage){
        this.health = this.health - the_damage
    }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength){
        super (health, strength)
        this.name = name
    }
    battleCry(){
        return "Odin Owns You All!"
    }
    receiveDamage(the_damage){
        this.health = this.health - the_damage
        if(this.health > 0){
            return `${this.name} has received ${the_damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
} 

// Saxon
class Saxon extends Soldier {
    receiveDamage(the_damage){
        this.health = this.health - the_damage
        if (this.health > 0) {
            return `A Saxon has received ${the_damage} points of damage`
        } else {
            return "A Saxon has died in combat"
        }
    }
}

// War
class War {
    addViking(){}
    addSaxon(){}
    vikingAttack(){}
    saxonAttack(){}
    showStatus(){}
}
