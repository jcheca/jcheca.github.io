(function(){

   var app = angular.module('jia2015',[]);

   var trabajos = [

      {
        nombre: "Hydraulic engineering and roman aqueducts: modern perspectives",
        autor: "Prof. Dr. Hubert Chanson.",
        categoria: "Conferencia Inaugural",
        origen: "The University of Queensland, Brisbane, Australia",
        url: "http://www.uco.es/jia2015/images/temas/docs_info/prg_091015.pdf"
      },
      {
        nombre: "Abriendo surcos al agua",
        autor: "Prof. Dr. Alberto Losada Villasante",
        categoria: "",
        origen: "Universidad Politécnica de Madrid",
        url: ""
      },
      {
        nombre: "La precipitación y los procesos erosivos",
        autor: "Fátima",
        categoria: "Presentación de las Jornaadas",
        origen: "",
        url: "b/instr_ponentes.pdf"
      },
      {
        nombre: "Predicción estacional del caudal de los riós ibéricos a partir de índices climáticos",
        autor: "Profa. Dra. María Jesús Esteban Parra",
        categoria: "",
        origen: "Universidad de Granada",
        url: ""
      },
      {
        nombre: "Procesos erosivos en olivar en Andalucía a diferentes escalas: entendimiento, magnitud, implicaciones e intentos de control",
        autor: "Dr. José Alfonso Gómez Calero",
        categoria: "",
        origen: "Instituto de Agricultura Sostenible - CSIC",
        url: ""
      }

   ];

   app.controller('AlmacenJia2015', function(){
   		this.indice = trabajos;
   });


})();
