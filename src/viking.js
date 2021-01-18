// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health = this.health - damage
        this.damage = this.damage - damage

   }
} 


// Viking
//class Viking {
//    constructor (name, health, strength) {
//        super (health, strength)
//        this.name = name
//        this.health = health
//        this.strength = strength;
//    }

//}

// Saxon
class Saxon {}

// War
class War {}
