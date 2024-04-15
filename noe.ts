// Interface pour les animaux terrestres
interface AnimalTerrestre {
    nom: string;
    couleur: string;
}

// Interface pour les animaux volants
interface AnimalVolant {
    nom: string;
    voler(): void;
}

// Interface pour les animaux nageurs
interface AnimalNageur {
    nom: string;
    nager(): void;
}

// Classe de base pour les animaux
class Animal {
    constructor(public nom: string) {}
}

// Classe pour les chats
class Chat extends Animal implements AnimalTerrestre {
    constructor(nom: string, public couleur: string) {
        super(nom);
    }
    miauler(): void {
        console.log(`${this.nom} miaule.`);
    }
}

// Classe pour les chiens
class Chien extends Animal implements AnimalTerrestre {
    constructor(nom: string, public couleur: string) {
        super(nom);
    }
    aboyer(): void {
        console.log(`${this.nom} aboie.`);
    }
}

// Classe pour les oiseaux
class Oiseau extends Animal implements AnimalVolant {
    constructor(nom: string) {
        super(nom);
    }
    voler(): void {
        console.log(`${this.nom} vole.`);
    }
}

// Classe pour les poissons
class Poisson extends Animal implements AnimalNageur {
    constructor(nom: string) {
        super(nom);
    }
    nager(): void {
        console.log(`${this.nom} nage.`);
    }
}

// Fonction pour photographier un animal
function photographier(animal: Animal): void {
    console.log(`On prend une photo de ${animal.nom}.`);
}

// Fonction pour miauler un chat
function miauler(chat: Chat): void {
    chat.miauler();
}

// Fonction pour aboyer un chien
function aboyer(chien: Chien): void {
    chien.aboyer();
}

// Fonction pour faire voler un oiseau
function faireVoler(oiseau: AnimalVolant): void {
    oiseau.voler();
}

// Fonction pour faire nager un poisson
function faireNager(poisson: AnimalNageur): void {
    poisson.nager();
}

// Fonction pour caresser un animal terrestre
function caresser(animal: AnimalTerrestre): void {
    console.log(`On caresse ${animal.nom}.`);
}


// Fonction pour nourrir un animal de couleur noire
function nourrirNoir(animal: { nom: string }): void {
    if (animal.nom.indexOf("noir") !== -1) {
        console.log(`On nourrit ${animal.nom}.`);
    } else {
        console.log(`${animal.nom} n'est pas noir, on ne le nourrit pas.`);
    }
}


// Animaux
const chatEuropeenNoir = new Chat("Chat européen", "noir");
const chatChartreux = new Chat("Chat chartreux", "gris");
const chienTerreNeuveNoir = new Chien("Chien Terre-Neuve", "noir");
const chienMoonMoon = new Chien("Chien Moon Moon", "blanc");
const mésange = new Oiseau("Mésange");
const merleNoir = new Oiseau("Merle");
const thon = new Poisson("Thon");
const requin = new Poisson("Requin");
const asticot = new Animal("Asticot");

// Appels des fonctions
photographier(chatEuropeenNoir);
miauler(chatEuropeenNoir);
aboyer(chienTerreNeuveNoir);
faireVoler(mésange);
faireNager(thon);
caresser(chatEuropeenNoir);
nourrirNoir(chatEuropeenNoir);
nourrirNoir(thon);
