class Animal {
    constructor(name, mainColor, sound) {
        this.name = name;
        this.mainColor = mainColor;
        this.sound = sound;
    }

    scream(intensity) {
        console.log(`${this.sound} ${'!'.repeat(intensity)}`);
    }
};

class BemTevi extends Animal {
    constructor(name, mainColor, sound, speedOfFlight) {
        super(name, mainColor, sound);
        this.speedOfFlight = speedOfFlight;
    }
};

const marcio = new BemTevi('Marcio', 'blue', 'Bem te vi', '100Km/h');
marcio.scream(10);