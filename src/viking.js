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
    constructor (){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(a_Viking_object){
        this.vikingArmy.push(a_Viking_object)
    }
    addSaxon(a_Saxon_object){
        this.saxonArmy.push(a_Saxon_object)
    }
    vikingAttack(){
        this.saxonArmy[0].health -= this.vikingArmy[0].strength
        if (this.saxonArmy[0].health < 1){
            this.saxonArmy.shift()
        }
        return 'A Saxon has died in combat'
    }

    saxonAttack(){
        
        for (let x=0; x < this.vikingArmy.length; x++){
            this.vikingArmy[x].health -= this.saxonArmy[0].strength
            if (this.vikingArmy[x].health < 1){
                this.vikingArmy.shift()
            }
        }
        
        `${vikingArmy[0].name} has received ${saxonArmy[0].strength} points of damage`
    }

    showStatus(){
        if (this.saxonArmy.length < 1) {
            return "Vikings have won the war of the century!"
        }
        if (this.vikingArmy.length < 1){
            return 'Saxons have fought for their lives and survived another day...'
        } 
        if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0){
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
