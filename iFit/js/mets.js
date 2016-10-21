angular.module("mets", ['tc.chartjs','switcher'])
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
        label: 'Risk/Riesgo 0.5%'
      },
      {
        value: 99.5, 
        color: '#FDB45C',
        highlight: '#FFC870',
        label: 'NO Risk/Riesgo 99.5%'
      }
    ];

    // Chart.js Data Very Low
    $scope.datalow = [
      {
        value: 9.5,
        color:'#F7464A',
        highlight: '#FF5A5E',
        label: 'Risk/Riesgo 9.5%' 
      },
      {
        value: 90.5,
        color: '#FDB45C',
        highlight: '#FFC870',
        label: 'NO Risk/Riesgo 90.5%'

      }
    ];

    // Chart.js Data Very Low
    $scope.datamoderated = [
      {
        value: 16.9,
        color:'#F7464A',
        highlight: '#FF5A5E',
        label: 'Risk/Riesgo 16.9%'
      },
      {
        value: 83.1,
        color: '#FDB45C',
        highlight: '#FFC870',
        label: 'NO Risk/Riesgo 83.1%'

      }
    ];


    // Chart.js Data Very Low
    $scope.datahi = [
      {
        value: 61.7,
        color:'#F7464A',
        highlight: '#FF5A5E',
        label: 'Risk/Riesgo 61.7%'
      },
      {
        value: 38.3,
        color: '#FDB45C',
        highlight: '#FFC870',
        label: 'NO Risk/Riesgo 38.3%'

      }
    ];

    $scope.options = {
        responsive: true,
        legendTemplate : '<ul class="tc-chart-js-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'

    }



});