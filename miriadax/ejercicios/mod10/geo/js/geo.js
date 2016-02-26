  $(function(){

    //
    // Definición de variables 
    //
    localStorage.rastro = (localStorage.rastro || "");
    var map, lat, lng, i;  migas = new Array(); 


    // Eventos controlados por PC o por Dispositivos Táctiles.
    $('#limpiar').on('tap', limpiar);      
    $('#limpiar').on('click', limpiar);

    //
    // Limpiar ruta
    // 
    function limpiar(){localStorage.rastro="";};

    //
    // Determina si existe ruta previa
    //
    if (localStorage.rastro.length != 0) { registra();} else {geolocalizar();};


    //
    // Función Registrar Ruta Anterior
    //
    function registra(){

       migas = JSON.parse(localStorage.rastro);

       lat = migas[0][0];
       lng = migas[0][1];

       map = new GMaps({ el: '#map', lat: lat, lng: lng, click: enlazarMarcador, tap: enlazarMarcador });
       map.addMarker({lat: migas[0][0], lng: migas[0][1]});

       for (var i = 1; i < migas.length; i++) {
          map.drawRoute({
          origin: [migas[i-1][0], migas[i-1][1]],
          destination: [migas[i][0], migas[i][1]],
          travelMode: 'driving',
          strokeColor: '#ff0000',
          strokeOpacity: 0.6,
          strokeWeight: 5
        });

       map.addMarker({lat: migas[i][0], lng: migas[i][1]});
       lat = migas[i][0];
       lng = migas[i][1]; 
        
      };

    };

    //
    // Dibuja la ruta entre dos puntos.
    //
    function enlazarMarcador(e){
      map.drawRoute({
        origin: [lat, lng],
        destination: [e.latLng.lat(), e.latLng.lng()],
        travelMode: 'driving',
        strokeColor: '#000000',
        strokeOpacity: 0.6,
        strokeWeight: 5
      });

      lat = e.latLng.lat();
      lng = e.latLng.lng();

      migas.push([lat, lng]); localStorage.rastro = JSON.stringify(migas); 
      map.addMarker({ lat:lat, lng:lng });

    };

    
    //
    // Geolocaliza BASE
    //
    function geolocalizar(){
      GMaps.geolocate({

        success: function(postion){
          lat = postion.coords.latitude;
          lng = postion.coords.longitude;
          map = new GMaps({ el: '#map', lat: lat, lng: lng, click: enlazarMarcador, tap: enlazarMarcador });
          migas.push([lat, lng]); localStorage.rastro = JSON.stringify(migas);
          map.addMarker({lat: lat, lng: lng});          
        },
        error: function(error) {alert('Error: '+error.message);},
        not_supported: function(){alert('No soporta geolocalizacion.');},

      });

    };   
  
  });
