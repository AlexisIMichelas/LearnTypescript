var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Classe de base pour les animaux
var Animal = /** @class */ (function () {
    function Animal(nom) {
        this.nom = nom;
    }
    return Animal;
}());
// Classe pour les chats
var Chat = /** @class */ (function (_super) {
    __extends(Chat, _super);
    function Chat(nom, couleur) {
        var _this = _super.call(this, nom) || this;
        _this.couleur = couleur;
        return _this;
    }
    Chat.prototype.miauler = function () {
        console.log("".concat(this.nom, " miaule."));
    };
    return Chat;
}(Animal));
// Classe pour les chiens
var Chien = /** @class */ (function (_super) {
    __extends(Chien, _super);
    function Chien(nom, couleur) {
        var _this = _super.call(this, nom) || this;
        _this.couleur = couleur;
        return _this;
    }
    Chien.prototype.aboyer = function () {
        console.log("".concat(this.nom, " aboie."));
    };
    return Chien;
}(Animal));
// Classe pour les oiseaux
var Oiseau = /** @class */ (function (_super) {
    __extends(Oiseau, _super);
    function Oiseau(nom) {
        return _super.call(this, nom) || this;
    }
    Oiseau.prototype.voler = function () {
        console.log("".concat(this.nom, " vole."));
    };
    return Oiseau;
}(Animal));
// Classe pour les poissons
var Poisson = /** @class */ (function (_super) {
    __extends(Poisson, _super);
    function Poisson(nom) {
        return _super.call(this, nom) || this;
    }
    Poisson.prototype.nager = function () {
        console.log("".concat(this.nom, " nage."));
    };
    return Poisson;
}(Animal));
// Fonction pour photographier un animal
function photographier(animal) {
    console.log("On prend une photo de ".concat(animal.nom, "."));
}
// Fonction pour miauler un chat
function miauler(chat) {
    chat.miauler();
}
// Fonction pour aboyer un chien
function aboyer(chien) {
    chien.aboyer();
}
// Fonction pour faire voler un oiseau
function faireVoler(oiseau) {
    oiseau.voler();
}
// Fonction pour faire nager un poisson
function faireNager(poisson) {
    poisson.nager();
}
// Fonction pour caresser un animal terrestre
function caresser(animal) {
    console.log("On caresse ".concat(animal.nom, "."));
}
// Fonction pour nourrir un animal de couleur noire
// Fonction pour nourrir un animal de couleur noire
function nourrirNoir(animal) {
    if (animal.nom.indexOf("noir") !== -1) {
        console.log("On nourrit ".concat(animal.nom, "."));
    }
    else {
        console.log("".concat(animal.nom, " n'est pas noir, on ne le nourrit pas."));
    }
}
// Animaux
var chatEuropeenNoir = new Chat("Chat européen", "noir");
var chatChartreux = new Chat("Chat chartreux", "gris");
var chienTerreNeuveNoir = new Chien("Chien Terre-Neuve", "noir");
var chienMoonMoon = new Chien("Chien Moon Moon", "blanc");
var mésange = new Oiseau("Mésange");
var merleNoir = new Oiseau("Merle");
var thon = new Poisson("Thon");
var requin = new Poisson("Requin");
var asticot = new Animal("Asticot");
// Appels des fonctions
photographier(chatEuropeenNoir);
miauler(chatEuropeenNoir);
aboyer(chienTerreNeuveNoir);
faireVoler(mésange);
faireNager(thon);
caresser(chatEuropeenNoir);
nourrirNoir(chatEuropeenNoir);
nourrirNoir(thon);
