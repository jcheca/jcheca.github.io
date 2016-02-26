angular.module("mets", ['tc.chartjs'])
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


    // Chart.js Data Very Low
    $scope.datavlow = [
      {
        value: 0.5,
        color:'#F7464A',
        highlight: '#FF5A5E',
        label: 'Risk/Riesgo'
      },
      {
        value: 99.5, 
        color: '#FDB45C',
        highlight: '#FFC870',
      }
    ];

    // Chart.js Data Very Low
    $scope.datalow = [
      {
        value: 9.5,
        color:'#F7464A',
        highlight: '#FF5A5E',
        label: 'Risk/Riesgo'
      },
      {
        value: 90.5,
        color: '#FDB45C',
        highlight: '#FFC870',
      }
    ];

    // Chart.js Data Very Low
    $scope.datamoderated = [
      {
        value: 16.9,
        color:'#F7464A',
        highlight: '#FF5A5E',
        label: 'Risk/Riesgo'
      },
      {
        value: 83.1,
        color: '#FDB45C',
        highlight: '#FFC870',
      }
    ];


    // Chart.js Data Very Low
    $scope.datahi = [
      {
        value: 61.7,
        color:'#F7464A',
        highlight: '#FF5A5E',
        label: 'Risk/Riesgo'
      },
      {
        value: 38.3,
        color: '#FDB45C',
        highlight: '#FFC870',
      }
    ];




});