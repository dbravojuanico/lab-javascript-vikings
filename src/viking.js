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
        let randomVikingIdex = Math.floor(Math.random()*this.vikingArmy.length)
        let randomViking = this.vikingArmy[randomVikingIdex]

        let randomSaxonIdex = Math.floor(Math.random()*this.saxonArmy.length)
        let randomSaxon = this.saxonArmy[randomSaxonIdex]

        let vikingPower = randomViking.attack()

        let resultOfAttack = randomSaxon.receiveDamage(vikingPower)

        if (randomSaxon.health <= 1){
            this.saxonArmy.splice(randomSaxonIdex, 1);
        }
        return resultOfAttack
    }

    saxonAttack(){ 
        let randomVikingIdex = Math.floor(Math.random()*this.vikingArmy.length)
        let randomViking = this.vikingArmy[randomVikingIdex]

        let randomSaxonIdex = Math.floor(Math.random()*this.saxonArmy.length)
        let randomSaxon = this.saxonArmy[randomSaxonIdex]

        let saxonPower = randomSaxon.attack()

        let resultOfAttack = randomViking.receiveDamage(saxonPower)

        if (randomViking.health <= 1){
            this.vikingArmy.splice(randomVikingIdex, 1);
        }
        return resultOfAttack
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
