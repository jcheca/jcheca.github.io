angular.module("mets", [])
   .controller("Idioma", function($scope) {

    /* Idioma por defecto: EN */
    if (localStorage.getItem("Idioma") === null){
        localStorage.setItem("Idioma","EN");
        $scope.Idioma = "EN";
    } else {
        $scope.Idioma = localStorage.getItem("Idioma");
    }

    /* Switch Idioma */
    $scope.cambiame = function()  {
        if (localStorage.getItem("Idioma") == "EN"){
            localStorage.setItem("Idioma","ES");
            $scope.Idioma = "ES";
        } else {
            localStorage.setItem("Idioma","EN");
            $scope.Idioma = "EN";
        }
    }    


});