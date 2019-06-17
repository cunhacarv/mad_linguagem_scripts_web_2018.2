var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var hero = /** @class */ (function () {
    function hero() {
    }
    ;
    hero.prototype.getCodenome = function () {
        return this.codenome;
    };
    hero.prototype.setCodenome = function (codenome) {
        this.codenome = codenome;
    };
    hero.prototype.getIdsecreta = function () {
        return this.idsecreta;
    };
    hero.prototype.setIdsecreta = function (idsecreta) {
        this.idsecreta = idsecreta;
    };
    return hero;
}());
//subclass - classe especialista
var Batman = /** @class */ (function (_super) {
    __extends(Batman, _super);
    function Batman() {
        return _super.call(this) || this;
    }
    Batman.prototype.getArquival = function () {
        return "Coringa";
    };
    Batman.prototype.getPericia = function () {
        return "A(s) pericia(s) do\n        " + this.getCodenome() + " \u00E9(s\u00E3o): " + this.pericia;
    };
    return Batman;
}(hero));
var homemMorcego = new hero();
homemMorcego.setCodenome('Batman');
homemMorcego.setIdsecreta('Bruce Wayme');
console.log("o nome dp heroi \u00E9: " + homemMorcego.getCodenome() + " e sua identidade secreta \u00E9 " + homemMorcego.getIdsecreta());
