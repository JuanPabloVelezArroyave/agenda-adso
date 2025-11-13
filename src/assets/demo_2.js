const aprendiz = {
nombre: "Carolina",
ficha: 3223876,
saludar: function() {
console.log(`Hola, soy ${this.nombre}`);
},
mostrarInfo: function() {
console.log(`Ficha: ${this.ficha}`);
}
};

aprendiz.saludar(); // Hola, soy Carolina
aprendiz.mostrarInfo(); // Ficha: 3223876