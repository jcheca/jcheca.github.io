(function(){

   var app = angular.module('jia2015',[]);

   var trabajos = [

        {
        nombre: "Hydraulic engineering and roman aqueducts: modern perspectives",
        autor: "Prof. Dr. Hubert Chanson.",
        categoria: "Conferencia Inaugural",
        origen: "The University of Queensland, Brisbane, Australia",
        url: "a/prg_131015.pdf"
        /* url: "invitada/p001.pdf" */
      },
      {
        nombre: "Abriendo surcos al agua",
        autor: "Prof. Dr. Alberto Losada Villasante",
        categoria: "Conferencia temática",
        origen: "Universidad Politécnica de Madrid",
        url: "invitada/p002.pdf"
      },

      {
        nombre: "Predicción estacional del caudal de los riós ibéricos a partir de índices climáticos",
        autor: "Profa. Dra. María Jesús Esteban Parra",
        categoria: "Conferencia monográfica",
        origen: "Universidad de Granada",
        url: "invitada/p004.pdf"
      },
      {
        nombre: "Procesos erosivos en olivar en Andalucía a diferentes escalas: entendimiento, magnitud, implicaciones e intentos de control",
        autor: "Dr. José Alfonso Gómez Calero",
        categoria: "Conferencia monográfica",
        origen: "Instituto de Agricultura Sostenible - CSIC",
        url: "invitada/p005.pdf"
      },
      {
        nombre: "Experiencias y mejoras en el tratamiento de incertidumbres hidrológicas para la gestión de embalses en avenidas",
        autor: "I. Villanueva, D. Ocio, J. Salazar, N. Pérez, Ch. Stocker, A. Eraso",
        categoria: "Tema A",
        origen: "",
        url: "a/a001.pdf"
      },
      {
        nombre: "Estructuras de protección frente a la erosión en las márgenes del río Guadalquivir",
        autor: "J.M. González, D. Otero, A. Pulido",
        categoria: "Tema A",
        origen: "",
        url: "a/a002.pdf"
      },
      {
        nombre: "Simulación numérica de la dinámica fluvial del río Guadalquivir y de su interacción con presas: efecto sobre la colmatación de embalses y agradación del cauce",
        autor: "P. Bohórquez, J. Castillo, J. Calero, F. García-García, F.J. Moreno, J. Tovar",
        categoria: "Tema A",
        origen: "",
        url: "a/a003.pdf"
      },
      {
        nombre: "Balances de agua y calor en la marisma de Doñana",
        autor: "A. Ramos, J. Prats, J. Dolz",
        categoria: "Tema A",
        origen: "",
        url: "a/a004.pdf"
      },
      {
        nombre: "Modelación numérica (2D y 3D) de la hidrodinámica en el entorno de la confluencia Ebro-Segre",
        autor: "M. Arbat-Bofill, J. Prats, B. Martí-Cardona, L. Cea, E. Bladé, M. Sánchez-Juny, D. Niñerola, J. Dolz",
        categoria: "Tema A",
        origen: "",
        url: "a/a005.pdf"
      },
      {
        nombre: "Modelo numérico acoplado de simulación de calidad de agua como herramienta de control de la contaminación del lago Amatitlán y el río Villalobos (Guatemala)",
        autor: "M. Rodríguez, P.P. Loné, M.A. Arrabal, C. Luengo",
        categoria: "Tema A",
        origen: "",
        url: "a/a006.pdf"
      },
      {
        nombre: "AEfecto de diferentes formulaciones de carga de fondo en flujos transitorios con lecho móvil",
        autor: "F.N. Cantero, O. Castro, J.L. Ayuso",
        categoria: "Tema A",
        origen: "",
        url: "a/a007.pdf"
      },
      {
        nombre: "Evolución morfosedimentaria de la transformación de un embalse en un humedal (Embalse de Doña Aldonza, Alto Guadalquivir) - Estimación de la degradación específica de la cuenca",
        autor: "J. Calero, J.D. del Moral, P. Bohórquez, F. García-García ",
        categoria: "Tema A",
        origen: "",
        url: "a/a008.pdf"
      },

      {
        nombre: "Aplicación de la nueva herramienta HEC-RAS 5.0 para cálculos bidimensionales del Flujo de Agua en Ríos",
        autor: "W.E. Lluén, E. Bladé",
        categoria: "Tema A",
        origen: "",
        url: "a/a009.pdf"
      },
      {
        nombre: "Aplicación del modelo hidrodinámico EOLE al embalse de Bimont (Francia)",
        autor: "J. Prats, M. Gant, M.J. Salençon, P.A. Danis",
        categoria: "Tema A",
        origen: "",
        url: "a/a010.pdf"
      },
      {
        nombre: "Comportamiento térmico del río Ebro en el entorno del embalse del Ebro",
        autor: "A. Ramos, J. Prats, J. Dolz",
        categoria: "Tema A",
        origen: "",
        url: "a/a011.pdf"
      },
      {
        nombre: "Modelación numérica 3D de la evolución de la temperatura en un tramo de río vinculado a la refrigeración de una central térmica",
        autor: "M. Arbat-Bofill, E. Bladé, M. Sánchez-Juny, L. Cea, D. Niñerola, J. Dolz",
        categoria: "Tema A",
        origen: "",
        url: "a/a012.pdf"
      },
      {
        nombre: "Determinación del ratio agua verde/agua azul en una cuenca semiárida con el uso de un modelo parsimonioso calibrado con información de satélite",
        autor: "G. Ruiz-Pérez, M. González-Sanchís, A.D. del Campo, F. Francés",
        categoria: "Tema B",
        origen: "",
        url: "b/b001.pdf"
      },
      {
        nombre: "Análisis de las proyecciones de disponibilidad y necesidad de agua en Europa bajo escenarios de cambio climático",
        autor: "A. Granados, A. Iglesias, L. Garrote",
        categoria: "Tema B",
        origen: "",
        url: "b/b002.pdf"
      },
      {
        nombre: "Uso de las predicciones climáticas estacionales en el sector del agua",
        autor: "L. Pouget, M. Gómez, A. Cabello, E. Rodríguez, B. Navascués, J. Voces",
        categoria: "Tema B",
        origen: "",
        url: "b/b003.pdf"
      },
      {
        nombre: "Análisis de impactos del cambio climático en las sequías meteorológicas, edáficas e hidrológicas en el sistema de explotación del río Júcar",
        autor: "P. Marcos, F. Vargas, A. López, A. García, M. Pulido",
        categoria: "Tema B",
        origen: "",
        url: "b/b004.pdf"
      },
      {
        nombre: "Análisis económico del impacto del cambio climático en una cuenca. Caso de estudio: Sistema de explotación Júcar",
        autor: "A. López, F. Vargas, M. Pulido",
        categoria: "Tema B",
        origen: "",
        url: "b/b005.pdf"
      },
      {
        nombre: "Determinación de los tiempos en el Hidrograma Unitario Geomorfológico de Depósitos y Canal",
        autor: "M. Goñi, F.N. Gimena, J.J. López",
        categoria: "Tema B",
        origen: "",
        url: "b/b006.pdf"
      },
      {
        nombre: "Análisis del aumento de la capacidad de regulación y mejora de la garantía en la Cuenca del Guadalquivir",
        autor: "E. Martínez, A. Pastor, M. Rodríguez, F. Casas",
        categoria: "Tema B",
        origen: "",
        url: "b/b007.pdf"
      },
      {
        nombre: "Aplicación de un modelo logístico triparamétrico a la estimación de caudales diarios en la cuenca del río Nam Ngum (Laos)",
        autor: "C. Álvarez, E. García-Alonso, C. Prieto, J. Rojo, B. Tejerina",
        categoria: "Tema B",
        origen: "",
        url: "b/b008.pdf"
      },
      {
        nombre: "Identificación de períodos ricos y pobres en avenidas en series largas observadas en España",
        autor: "L. Mediero, D. Santillán, L. Garrote",
        categoria: "Tema B",
        origen: "",
        url: "b/b009.pdf"
      },

      
      {
        nombre: "Herramientas de caracterización de ARPSIs y análisis multicriterio para la selección de medidas en los PGRI",
        autor: "R. Poyato, F.J. Sánchez, M. Velasco, R. Bella, A. Cabello",
        categoria: "Tema B",
        origen: "",
        url: "b/b010.pdf"
      },
      {
        nombre: "Catorce años de simulación en continuo de caudales horarios en las cuencas navarras de los ríos Cidacos y Arga. Estudio comparativo de dos modelos hidrológicos",
        autor: "J. Loizu, L. Brocca, J. Alvarez-Mozos, J. Casalí, Y. Chahor",
        categoria: "Tema B",
        origen: "",
        url: "b/b011.pdf"
      },
      {
        nombre: "Variabilidad de los grupos hidrológicos del método del número de curva del NRCS (NRCS-CN)",
        autor: "P. Durán, J. González",
        categoria: "Tema B",
        origen: "",
        url: "b/b012.pdf"
      },
      {
        nombre: "Propuesta metodológica para optimización de la gestión del caudal ecológico en diversas minicentrales hidroeléctricas a pie de azud en la Demarcación Hidrográfica del Duero",
        autor: "F.J. Caballero, J. Guerrero, S. González, J. Gallardo",
        categoria: "Tema B",
        origen: "",
        url: "b/b013.pdf"
      },
      {
        nombre: "Comparación de modelos de interceptación de agua de lluvia en individuos aislados de Pinus pinea y Cistus ladanifer",
        autor: "R. Pérez, M.F. Moreno-Pérez, J. Roldán",
        categoria: "Tema B",
        origen: "",
        url: "b/b014.pdf"
      },
      {
        nombre: "Programación del riego deficitario controlado en aceituna de mesa empleando la dendrometría",
        autor: "F. Moreno, I.F. Girón, M. Corell, M.J. Martín-Palomo, A. Galindo, A. Torrecillas, A. Moriana",
        categoria: "Tema B",
        origen: "",
        url: "b/b015.pdf"
      },
      {
        nombre: "Sistema de ayuda a la decisión para la programación del riego basado en aspectos agronómicos",
        autor: "M. Cea, S. Alonso ",
        categoria: "Tema B",
        origen: "",
        url: "b/b016.pdf"
      },
      {
        nombre: "Desempeño de los sistemas de riego prehispánicos en la reducción de la escorrentía superficial del agua de riego y de la precipitación en la zona andina de Bolivia",
        autor: "R. Chipana, R. Choque, M.F. Moreno-Pérez, R. Céspedes, J. Roldán",
        categoria: "Tema B",
        origen: "",
        url: "b/b017.pdf"
      },
      {
        nombre: "Regar mejor: mejora de la eficiencia y ahorro de agua sin comprometer la producción en fresa",
        autor: "P.D. Gavilán, N. Ruiz, J.M. Bohórquez ",
        categoria: "Tema B",
        origen: "",
        url: "b/b018.pdf"
      },
      {
        nombre: "Modelos de gestión del riego con energía solar de cultivos de invernadero en zonas semiáridas",
        autor: "J. Reca, J. Martínez, R. Ruiz, R. López",
        categoria: "Tema B",
        origen: "",
        url: "b/b019.pdf"
      },
      {
        nombre: "Extracción de agua subterránea con el mínimo coste. Aplicación a sistemas de riego por aspersión para maíz en España",
        autor: "F. Carrión, J. Sánchez, J.I. Córcoles, J.M. Tarjuelo, M.A. Moreno",
        categoria: "Tema B",
        origen: "",
        url: "b/b020.pdf"
      },
      {
        nombre: "Un paso más en la auditoría energética de comunidades de regantes, evaluación hidráulica",
        autor: "” M. Martínez, I. Ederra, A. Alfaro, M.A. Campo-Bescós",
        categoria: "Tema B",
        origen: "",
        url: "b/b021.pdf"
      },
      {
        nombre: "Algoritmos y herramientas para la aplicación de estrategias de reducción de costes energéticos en sistemas de riego a presión",
        autor: "S. García, E. Faci, R. Aliod, J. Paño, P. Seral",
        categoria: "Tema B",
        origen: "",
        url: "b/b022.pdf"
      },
      {
        nombre: "Caracterización de regímenes extremos multivariados de inundación considerando la variabilidad natural de las dinámicas inductoras",
        autor: "M. del Jesús, P. Camus, F. Méndez, I.J. Losada, J.D. Fernández Bethencourt, P. Delgado Melián",
        categoria: "Tema B",
        origen: "",
        url: "b/b023.pdf"
      },
      {
        nombre: "Caracterización de las pérdidas por infiltración con análisis estadístico de precipitación y escurrimiento",
        autor: "R. Domínguez, M.L. Arganis, E. Carrizosa, G. Esquivel",
        categoria: "Tema B",
        origen: "",
        url: "b/b024.pdf"
      },
      {
        nombre: "Programación genética para la expresión que permite estimar los gastos de transferencia entre dos embalses con resultados de un modelo matemático bidimensional",
        autor: "M.L. Arganis, F. De Luna",
        categoria: "Tema B",
        origen: "",
        url: "b/b025.pdf"
      },
      {
        nombre: "Estimación de gastos de diseño con análisis de la función de distribución de las lecturas de escala",
        autor: "M.L. Arganis, R. Domínguez, J.L. Herrera",
        categoria: "Tema B",
        origen: "",
        url: "b/b026.pdf"
      },
      {
        nombre: "Correlaciones entre datos de precipitación mensual e índices de calidad del aire en el Valle de México",
        autor: "P. Reyes, M.L. Arganis, M. Preciado",
        categoria: "Tema B",
        origen: "",
        url: "b/b027.pdf"
      },
      {
        nombre: "Modelos hidráulicos bidimensionales de lluvia directa aplicados al cálculo de eventos hidrológicos",
        autor: "P. Batanero, I. Martínez, E. Martínez",
        categoria: "Tema B",
        origen: "",
        url: "b/b028.pdf"
      },


      {
        nombre: "Análisis de medidas para la mejora de la calidad del agua en el tramo bajo del río Lurín (Perú)",
        autor: "A. Momblanch, J. Paredes-Arquiola, J. Andreu, L. Ramos, W. Baldeón, J. García ",
        categoria: "Tema B",
        origen: "",
        url: "b/b029.pdf"
      },
      {
        nombre: "Estudio de compatibilidad hidrodinámica e hidroquímica del uso del Lago Minero de Meirama como embalse auxiliar en la cuenca del río Mero (La Coruña)",
        autor: "R. Juncosa, J. Delgado, F. Padilla, P. Rodríguez-Vellando, H. Hernández, A. Ruiz",
        categoria: "Tema B",
        origen: "",
        url: "b/b030.pdf"
      },
      {
        nombre: "El papel de la cobertura vegetal en la generación de sedimentos y calidad de agua de los Andes Ecuatorianos",
        autor: "P. Ochoa, C. Iñiguez, A. Cerdá, J.D. Ruiz",
        categoria: "Tema B",
        origen: "",
        url: "b/b031.pdf"
      },
      {
        nombre: "Interceptación de la lluvia en individuos aislados de Pinus pinea y Cistus ladanifer: efecto de diferentes parámetros climáticos",
        autor: "R. Pérez, M.F. Moreno-Perez, J. Roldán",
        categoria: "Tema B",
        origen: "",
        url: "b/b032.pdf"
      },
      {
        nombre: "Análisis de la dinámica de la humedad del suelo en una cuenca agraria",
        autor: "A.J. Espejo, J.V. Giráldez, A. Pedrera-Parrilla, E.V. Taguas, S. Martos, K. Vanderlinden",
        categoria: "Tema B",
        origen: "",
        url: "b/b033.pdf"
      },
      {
        nombre: "Sistema de ayuda a la decisión para centrales hidroeléctricas",
        autor: "M. Cea, S. Alonso",
        categoria: "Tema B",
        origen: "",
        url: "b/b034.pdf"
      },



      {
        nombre: "Software de alerta hidrológica del Parque Fluvial Padre Renato Poblete, Comuna de Quinta Normal, Región Metropolitana (Santiago de Chile)",
        autor: "R. Bella, J.M. Pérez-Quintanilla, X. Llort, A. Rodríguez",
        categoria: "Tema B",
        origen: "",
        url: "b/b035.pdf"
      },
      {
        nombre: "Efecto de la uniformidad de aplicación del agua de los sistemas de riego en la producción de los cultivos de la Comunidad de Regantes 'Río Adaja'",
        autor: "L. Rodríguez, I. Naroua, R. Sánchez",
        categoria: "Tema B",
        origen: "",
        url: "b/b036.pdf"
      },
      {
        nombre: "Medidas antiguas de agua: La paja de agua cordobesa",
        autor: "J. Roldán, G. Pizarro, D. Vaquerizo",
        categoria: "Tema B",
        origen: "",
        url: "b/b037.pdf"
      },      


      {
        nombre: "Efectos de la variabilidad temporal de la precipitación en las aportaciones de una cuenca, a partir de cambios en el escalado estadístico del modelo climatológico ECHAM5",
        autor: "G. Olivares, K. Tamoh, M. Gómez, L. Candela",
        categoria: "Tema B",
        origen: "",
        url: "b/b038.pdf"
      },
      {
        nombre: "Mantenimiento de sondeos y pozos de captación de agua subterránea",
        autor: "E. Lupiani, P. Comas, B. Sánchez",
        categoria: "Tema B",
        origen: "",
        url: "b/b039.pdf"
      },
      {
        nombre: "Análisis de observabilidad en redes de distribución de agua: método algebraico",
        autor: "S. Díaz, J. González, R. Mínguez",
        categoria: "Tema C",
        origen: "",
        url: "c/c001.pdf"
      },
      {
        nombre: "Modelación y caracterización de estaciones de regulación de presión en redes de distribución de agua urbana",
        autor: "R. Sánchez, D.J. Vicente, L. Rodríguez",
        categoria: "Tema C",
        origen: "",
        url: "c/c002.pdf"
      },
      {
        nombre: "Sistemas de rehabilitación de tubería sin zanja. La experiencia de EMACSA en su utilización",
        autor: "J. Moral, J.A. Durán",
        categoria: "Tema C",
        origen: "",
        url: "c/c003.pdf"
      },
      {
        nombre: "Metodología para la renovación eficiente de redes basada en riesgo de discontinuidad del servicio",
        autor: "E.H. Sánchez, A. Casquero",
        categoria: "Tema C",
        origen: "",
        url: "c/c004.pdf"
      },


      {
        nombre: "Auditoría energética de estaciones de bombeo. Caso de estudio",
        autor: "C. Giner, P. Gómez, F. Sanz, J. García-Serra, J. Soriano",
        categoria: "Tema C",
        origen: "",
        url: "c/c005.pdf"
      },
      {
        nombre: "La gestión del agua en la ciudad de Córdoba (siglos XIII-XV)",
        autor: "J.L. del Pino",
        categoria: "Tema C",
        origen: "",
        url: "c/c006.pdf"
      },
      {
        nombre: "Tratamiento de las riberas del Río Pisuerga en Valladolid. Fase 4: Margen izquierda entre Puente de Arturo Eyries y La Flecha",
        autor: "R. López-Argüeso",
        categoria: "Tema C",
        origen: "",
        url: "c/c007.pdf"
      },
      {
        nombre: "El ciclo integral del agua en Córdoba. Flujos de materia implicados y huella de carbono asociada",
        autor: "R. Marín",
        categoria: "Tema C",
        origen: "",
        url: "c/c008.pdf"
      },
      {
        nombre: "Metodología de priorización de actuaciones estructurales dentro de las áreas de riesgo potencial significativo de inundación en la comunidad autónoma del País Vasco",
        autor: "E. Agüero, A. Eraso, C. Stocker, J.M. Sanz de Galdeano, D. Ocio, M.L. Benito",
        categoria: "Tema C",
        origen: "",
        url: "c/c009.pdf"
      },
      {
        nombre: "Análisis coste beneficio de medidas de adaptación para reducir los impactos del cambio global en inundaciones urbanas: aplicación en el caso de estudio de Barcelona",
        autor: "M. Velasco, B. Russo, A. Cabello",
        categoria: "Tema C",
        origen: "",
        url: "c/c010.pdf"
      },
      {
        nombre: "¿Cuánto volumen de agua no son capaces de registrar los contadores de agua nuevos utilizados comúnmente en los hogares españoles?",
        autor: "F.J. Arregui, M. Balaguer, E. Gómez, J. Soriano",
        categoria: "Tema C",
        origen: "",
        url: "c/c011.pdf"
      },
      {
        nombre: "ASR en Barcelona: Nuevo régimen de operación para hacer frente a nuevos escenarios",
        autor: "M. Hernández, P. Camprovín, X. Bernat, J. Castelló",
        categoria: "Tema C",
        origen: "",
        url: "c/c012.pdf"
      },
      {
        nombre: "Modelización hidráulica del Passeig de Gràcia mediante InfoWoks ICM para la optimización de la disposición de imbornales",
        autor: "P. Batanero, E. Martínez",
        categoria: "Tema C",
        origen: "",
        url: "c/c013.pdf"
      },
      {
        nombre: "Estabilidad de personas en flujos de agua",
        autor: "E. Martínez-Gomariz, M. Gómez, B. Russo",
        categoria: "Tema C",
        origen: "",
        url: "c/c014.pdf"
      },
      {
        nombre: "Las nuevas exigencias sobre las explotaciones de saneamiento derivadas de la aplicación del Real Decreto 1290/2012",
        autor: "P. Malgrat, D. Sunyer, B. Russo",
        categoria: "Tema C",
        origen: "",
        url: "c/c015.pdf"
      },
      {
        nombre: "Monitorización inteligente de las descargas de sistemas unitarios (DSU) en un caso piloto de la ciudad de Zaragoza",
        autor: "B. Russo, Ll. Ballester, J.I. Castrillo, J.D. Jaría, N. Olona, J.C. Sánchez",
        categoria: "Tema C",
        origen: "",
        url: "c/c016.pdf"
      },
      {
        nombre: "Estudio de la erosión de un sedimento orgánico con componente cohesiva procedente de la red de alcantarillado",
        autor: "I. Seco, M. Gómez, A. Schellart, S. Tait",
        categoria: "Tema C",
        origen: "",
        url: "c/c017.pdf"
      },
      {
        nombre: "Acondicionamiento de la margen izquierda del río Adaja en Avila. Fase I",
        autor: "R. López-Argüeso",
        categoria: "Tema C",
        origen: "",
        url: "c/c018.pdf"
      },

      {
        nombre: "Actuaciones en el Arroyo del Valle y Canal del Carbosillo en San Andrés del Rabanedo (León)",
        autor: "R. López-Argüeso",
        categoria: "Tema C",
        origen: "",
        url: "c/c019.pdf"
      },
      {
        nombre: "Recuperación medioambiental de la margen izquierda del Duero a su paso por Zamora capital",
        autor: "R. López-Argüeso",
        categoria: "Tema C",
        origen: "",
        url: "c/c020.pdf"
      },
      {
        nombre: "Gestión de aguas superficiales urbanas mediante drenaje sostenible",
        autor: "J. García, S. López, J.I. Alfonso, J. Oreja, J.J. López",
        categoria: "Tema C",
        origen: "",
        url: "c/c021.pdf"
      },
      {
        nombre: "Definición de actuaciones estructurales preventivas en base a un estudio hidráulico del río Ara en Pamplona",
        autor: "R. Gastesi, J.I. Alfonso, R. Pérez, I. Iribarren, J.J. López, C. Pérez",
        categoria: "Tema C",
        origen: "",
        url: "c/c022.pdf"
      },
      {
        nombre: "Ajuste simultáneo de la distribución temporal de caudales demandados y pérdidas de agua a partir de mediciones. Aplicación a la red de Guayaquil (Ecuador)",
        autor: "F.J. Martínez-Solano, P.L. Iglesias-Rey, S.X. Molina",
        categoria: "Tema C",
        origen: "",
        url: "c/c023.pdf"
      },
      {
        nombre: "Plataforma de ensayos para conducciones con agua residual urbana en la EDAR de A Coruña",
        autor: "J. Suárez, J. Anta, J. Puertas, J. Naves, M.A. Regueiro-Picallo",
        categoria: "Tema C",
        origen: "",
        url: "c/c024.pdf"
      },
      {
        nombre: "Gestión sostenible del agua y uso de aljibes domésticos, un binomio incompatible",
        autor: "E. Gómez, E. Cabrera, J. Soriano, M. Balaguer",
        categoria: "Tema C",
        origen: "",
        url: "c/c025.pdf"
      },
      {
        nombre: "Gestión de las redes de abastecimiento. Control del Agua No Registrada (ANR)",
        autor: "J.A. Durán, J. Moral",
        categoria: "Tema C",
        origen: "",
        url: "c/c026.pdf"
      },
      {
        nombre: "Análisis conjunto de riesgos hidrológicos y desarrollo urbano en la ciudad de Tegucigalpa (Honduras)",
        autor: "J. Rojo, E. García-Alonso, D. Rubio, M. Alvarez, C. Alvarez, B. Tejerina, F. González",
        categoria: "Tema C",
        origen: "",
        url: "c/c027.pdf"
      },
      {
        nombre: "Avances en la medición del consumo de agua para la identificación de usos finales",
        autor: "F. Arregui, J. Soriano, R. Cobacho, M. Balaguer",
        categoria: "Tema C",
        origen: "",
        url: "c/c028.pdf"
      },
      {
        nombre: "Técnica para la obtención del campo de velocidad del flujo superficial en proximidad de rejas de alcantarillado",
        autor: "J. Tellez, M. Gómez, B. Russo",
        categoria: "Tema C",
        origen: "",
        url: "c/c029.pdf"
      },
      {
        nombre: "Estudio de la erosión de un sedimento orgánico en la red de alcantarillado",
        autor: "M. Gómez, L. Pouget, A. Cabello, D. Sunyer, B. Russo",
        categoria: "Tema C",
        origen: "",
        url: "c/c030.pdf"
      },
      {
        nombre: "Tecnologías de Biosensores en la medida de la calidad de agua",
        autor: "A. Ortega, A. Acero, J. Lorén, O. Ruiz, B. Russo",
        categoria: "Tema C",
        origen: "",
        url: "c/c031.pdf"
      },
      {
        nombre: "Aplicación web para la evaluación de diseños de escalas de peces de hendidura vertical",
        autor: "M. Bermúdez, A. Rico, A. Rodríguez, L. Pena, J.R. Rabuñal, J. Puertas, L. Balairón, A. Lara, E. Aramburu, F. Morcillo, M. Castillo",
        categoria: "Tema D",
        origen: "",
        url: "d/d001.pdf"
      },
      {
        nombre: "Influencia de la aireación del flujo en rápidas y en el rendimiento de amortiguación de energía en cuencos de resalto",
        autor: "D. López, R. Díaz, J.J. Rebollo",
        categoria: "Tema D",
        origen: "",
        url: "d/d002.pdf"
      },
      {
        nombre: "Optimización del reparto de caudales de suministro en redes de distribución de agua con múltiples sistemas de bombeo",
        autor: "C.F. León, P.L. Iglesias-Rey, F.J. Martínez-Solano",
        categoria: "Tema D",
        origen: "",
        url: "d/d003.pdf"
      },
      {
        nombre: "Sistema de regulación de compuertas para balsas de acuicultura semi-intensiva basado en LabVIEW",
        autor: "M. Márquez, I. Pulido, J.C. Gutiérrez, I. de la Rosa",
        categoria: "Tema D",
        origen: "",
        url: "d/d004.pdf"
      },
      {
        nombre: "Un modelo de almenara con multicompuertas para la regulación de canales de regadío",
        autor: "J. Soler, M. Gómez, E. Bautista",
        categoria: "Tema D",
        origen: "",
        url: "d/d005.pdf"
      },
      {
        nombre: "Estimación del riesgo ante la rotura de un depósito de agua en entorno urbano",
        autor: "A. Lastra, L. Garrote",
        categoria: "Tema D",
        origen: "",
        url: "d/d006.pdf"
      },
      {
        nombre: "Sea Water Intake Pumping Station II at Sohar Industrial Port Area. Estudio del comportamiento hidráulico mediante modelo físico a escala reducida",
        autor: "J.J. Rebollo, L. Balairón, V. Elviro, L. Turrero",
        categoria: "Tema D",
        origen: "",
        url: "d/d007.pdf"
      },
      {
        nombre: "Medición experimental de flujos con agua clara y gravas sobre sistemas de captación de fondo. Determinación del índice de huecos efectivo y de la longitud de reja requerida",
        autor: "L.G. Castillo, J.T. García, J.M. Carrillo",
        categoria: "Tema D",
        origen: "",
        url: "d/d008.pdf"
      },
      {
        nombre: "9. Sustitución de bombeos aspirando de depósitos de rotura de carga por bombeos con aspiración directa de red. El caso de la estación de bombeo de Absudia-Cabanes (Jávea)",
        autor: "V.B. Espert, J.Ll. Henarejos, E. Cabrera, P. Ladrón de Guevara ",
        categoria: "Tema D",
        origen: "",
        url: "d/d009.pdf"
      },
      {
        nombre: "Redacción de los proyectos de implantación de los planes de emergencia en las presas y embalses de titularidad estatal en la cuenca del Guadalquivir",
        autor: "A. Pastor, J. del Campo, R. Bella, J.M. Pérez Quintanilla",
        categoria: "Tema D",
        origen: "",
        url: "d/d010.pdf"
      },
      {
        nombre: "Análisis experimental de tuberías ovoides para la mejora de la eficiencia de las redes de alcantarillado",
        autor: "J. Naves, M.A. Regueiro-Picallo, J. Anta, J. Puertas, J. Suárez",
        categoria: "Tema D",
        origen: "",
        url: "d/d011.pdf"
      },
      {
        nombre: "GoRoSoBo: Un algoritmo predictivo de control para canales de riego en tiempo real",
        autor: "E. Bonet, M. Gómez, J. Soler",
        categoria: "Tema D",
        origen: "",
        url: "d/d012.pdf"
      },
      {
        nombre: "Generación de resaltos hidráulicos de alto número de Froude a partir de regímenes rápidos emulsionados. Una investigación experimental",
        autor: "F.J. Vallés, B. Nácher, A. Bayón, P.A. López, J:B. Marco",
        categoria: "Tema D",
        origen: "",
        url: "d/d013.pdf"
      },
      {
        nombre: "Modelado matemático de flujo no aireado en aliviaderos escalonados mediante OpenFOAM",
        autor: "A. Bayón, J. Matos, P.A. López",
        categoria: "Tema D",
        origen: "",
        url: "d/d014.pdf"
      },
      {
        nombre: "Modelación física y numérica de aliviaderos en laberinto con fondo poliédrico",
        autor: "J. San Mauro, F. Salazar, R. Rossi, E. Oñate, M.A. Toledo, F.J. Caballero, C. Ponce, T. Ramos, C. Granell, L. Ruano",
        categoria: "Tema D",
        origen: "",
        url: "d/d015.pdf"
      },
      {
        nombre: "Instalación de sistema de detección de fugas en el recrecimiento de Yesa mediante sensores distribuidos en fibra óptica",
        autor: "O. Muñoz, R. Gómez, B. Russo, J.C. Sánchez",
        categoria: "Tema D",
        origen: "",
        url: "d/d016.pdf"
      },
      {
        nombre: "Nuevas técnicas para el análisis de datos de auscultación de presas y la definición de indicadores cuantitativos de su comportamiento",
        autor: "F. Salazar, E. Oñate, L. Morera, R. Morán, M.A. Toledo",
        categoria: "Tema D",
        origen: "",
        url: "d/d017.pdf"
      },
      {
        nombre: "Método para la corrección termodinámica de la difusión numérica del método W-SPH",
        autor: "D. López, V. Cuéllar, R. Díaz",
        categoria: "Tema D",
        origen: "",
        url: "d/d018.pdf"
      },
      {
        nombre: "Sea Water Intake Pumping Station II at Sohar Industrial Port Area. El modelo CFD como fase previa al modelo físico a escala",
        autor: "M. Alcaraz, L. Angulo, M. Quiñonez",
        categoria: "Tema D",
        origen: "",
        url: "d/d019.pdf"
      },
      {
        nombre: "Validación numérica con modelo CFD de conducciones con sección circular y ovoide",
        autor: "M.A. Regueiro-Picallo, J. Naves, J. Puertas, J. Suarez, J. Anta",
        categoria: "Tema D",
        origen: "",
        url: "d/d020.pdf"
      },
      {
        nombre: "Diseño de un sistema automático de petición de turnos de riego en una red de tuberías a presión",
        autor: "E.A. Luquin, M.A. Campo-Bescós, C. Robles",
        categoria: "Tema D",
        origen: "",
        url: "d/d021.pdf"
      },
      {
        nombre: "Análisis experimental y numérico del oleaje producido por la inestabilidad de laderas de embalses",
        autor: "R.M. Alves, R. Morán y M.A. Toledo, J. Irazábal, F. Salazar, A. Larese",
        categoria: "Tema D",
        origen: "",
        url: "d/d022.pdf"
      },
      {
        nombre: "Comprobación de la seguridad hidrológica de aliviaderos mediante un análisis multivariado con la técnica de las cópulas",
        autor: "L. Mediero, A.I. Requena, L. Garrote",
        categoria: "Tema D",
        origen: "",
        url: "d/d023.pdf"
      },
      {
        nombre: "Estudios de rotura de presas y balsas. El avance en las herramientas y técnicas disponibles para la modelación de propagación de las avenidas y la asignatura pendiente de la rotura del dique",
        autor: "F.J. Caballero, R. Monteiro, R. Morán, M.A. Toledo, J. Guerrero",
        categoria: "Tema D",
        origen: "",
        url: "d/d024.pdf"
      },
      {
        nombre: "Efectos hidráulicos inducidos por la colocación de una compuerta inflable sobre un aliviadero de presa: modelación física y numérica",
        autor: "S. Díaz, J. González",
        categoria: "Tema D",
        origen: "",
        url: "d/d025.pdf"
      },
      {
        nombre: "Cálculo bidimensional de un deflector de arrastre de fondo para la presa de Manduriacu, Ecuador",
        autor: "V.H. Jácome, L. Cabrera, E. Páez, M. Liédana, M. Rodríguez",
        categoria: "Tema D",
        origen: "",
        url: "d/d026.pdf"
      },
      {
        nombre: "Influencia del número de tormentas consideradas por año para la generación de la ley de frecuencia de caudales",
        autor: "A. Sordo-Ward, P. Bianucci, L. Garrote",
        categoria: "Tema D",
        origen: "",
        url: "d/d027.pdf"
      },
      {
        nombre: "Distribución de velocidades en cuencos de disipación de energía de aliviaderos de vertido libre",
        autor: "L.G. Castillo, J.M. Carrillo",
        categoria: "Tema D",
        origen: "",
        url: "d/d028.pdf"
      },
      {
        nombre: "Procedimiento para la selección de la estrategia de regulación más adecuada en estaciones de bombeo",
        autor: "P. Gómez, J. García-Serra, J. Soriano, C. Giner ",
        categoria: "Tema D",
        origen: "",
        url: "d/d029.pdf"
      },
      {
        nombre: "Análisis interno de los chaparrones máximos en la ciudad de Valencia a partir de series de alta resolución temporal",
        autor: "M. Rico, R. García-Bartual, I. Andrés",
        categoria: "Tema M",
        origen: "",
        url: "m/m001.pdf"
      },
      {
        nombre: "Efecto estacional y espacial del índice NAO sobre un modelo estocástico de precipitación diaria en el Valle del Guadalquivir",
        autor: "M.F. Moreno, J. Roldán, D.A. Woolhiser",
        categoria: "Tema M",
        origen: "",
        url: "m/m002.pdf"
      },
      {
        nombre: "Simulación hidrológica utilizando precipitación asociada a eventos de tipo ciclónico: Caso de estudio cuenca del río La Silla",
        autor: "V.H. Guerra, A.L. Ferriño, R.A. Cavazos",
        categoria: "Tema M",
        origen: "",
        url: "m/m003.pdf"
      },
      {
        nombre: "Influencia de la densidad espacial de estaciones pluviométricas y de la disponibilidad de datos radar en los hidrogramas de tormenta calculados con un modelo         hidrológico distribuido: Aplicación a una cuenca de 24 Km² en el Noroeste de España",
        autor: "L. Cea, I. Fraga, J. Puertas, M. Álvarez, M. Bermúdez, S. Coquerez, S. Salsón y A. Petazzi",
        categoria: "Tema M",
        origen: "",
        url: "m/m004.pdf"
      },
      {
        nombre: "La riada de Valencia de 1957: reconstrucción hidrológica y sedimentológica y análisis comparativo con la situación actual",
        autor: "C. Puertes, F. Francés",
        categoria: "Tema M",
        origen: "",
        url: "m/m005.pdf"
      },
      {
        nombre: "Análisis comparativo de curvas Intensidad-Duración-Frecuencia para intervalos de corta duración en la cuenca del Río Segura",
        autor: "J. Pérez, J. Senent, J. Moreno",
        categoria: "Tema M",
        origen: "",
        url: "m/m006.pdf"
      },
      {
        nombre: "Aplicación de un modelo matemático lluvia-escurrimiento a un evento de precipitaciones extraordinarias en la zona urbana de la ciudad de Veracruz, México",
        autor: "F. de Luna, I.L.A. Rosales",
        categoria: "Tema M",
        origen: "",
        url: "m/m007.pdf"
      },
      {
        nombre: "Análisis de la variabilidad en la estimación del umbral de escorrentía en función de las distintas fuentes de información disponibles",
        autor: "L. Fragoso, E. Quirós, P. Durán",
        categoria: "Tema M",
        origen: "",
        url: "m/m008.pdf"
      },
      {
        nombre: "Evaluación del modelo hidrológico AnnAGNPS en una cuenca agrícola de Navarra",
        autor: "R. Gastesi, J.J. López, J. Casalí",
        categoria: "Tema M",
        origen: "",
        url: "m/m009.pdf"
      },
      {
        nombre: "Proyecto de estabilización de la ladera situada sobre el río Carrión a su paso por Carrión de los Condes (Palencia)",
        autor: "R. López-Argüeso",
        categoria: "Tema M",
        origen: "",
        url: "m/m010.pdf"
      },
      {
        nombre: "Análisis comparativo de la evaluación de la erosividad de la lluvia en la cuenca del Guadalentín",
        autor: "J. Pérez, J. Senent",
        categoria: "Tema M",
        origen: "",
        url: "m/m011.pdf"
      },
      {
        nombre: "Influencia del suelo en la estabilización artificial de taludes en infraestructuras viarias. Resultados de unos ensayos recientes",
        autor: "J.V. Giráldez, A. Rodríguez, A. Viedma, V. Contreras, E.V. Taguas, T. Vanwalleghem, L. Ramajo, R. Madrid, J.A. Gómez",
        origen: "",
        url: "m/m012.pdf"
      },
      {
        nombre: "Modelo de base física para determinar zonas de producción y sedimentación en cuencas urbanas de cabecera",
        autor: "J. Zambrano, M. Gómez",
        categoria: "Tema M",
        origen: "",
        url: "m/m013.pdf"
      },
      {
        nombre: "Análisis de la dinámica de la erosión en cárcavas mediante fotointerpretación y modelos hidrológicos",
        autor: "A. Hayas, T. Vanwalleghem, J.V. Giráldez, A. Laguna, G. Guzmán, A. Peña",
        categoria: "Tema M",
        origen: "",
        url: "m/m014.pdf"
      },
      {
        nombre: "Uso de trazadores magnéticos para caracterizar la erosión del suelo",
        autor: "G. Guzmán, A. Laguna, J.V. Giráldez, S. Strohmeier, J.A. Gómez",
        categoria: "Tema M",
        origen: "",
        url: "m/m015.pdf"
      },
      {
        nombre: "Evolución del paisaje mediante modelo de formación de suelo aplicado a áreas mediterráneas",
        autor: "A. Román, J.V. Giráldez, T. Vanwalleghem",
        categoria: "Tema M",
        origen: "",
        url: "m/m016.pdf"
      },
      {
        nombre: "Estimación de la concentración de sedimentos en suspensión a través de medidas de turbidez del agua para diferentes cuencas agrarias de Navarra",
        autor: "C. Madrona, M.A. Campo-Bescós, R. Giménez",
        categoria: "Tema M",
        origen: "",
        url: "m/m017.pdf"
      },
      {
        nombre: "Influencia en la deposición atmosférica de fósforo y nitrógeno en el sur de la Península Ibérica",
        autor: "R. Morales, C. Pérez",
        categoria: "Tema M",
        origen: "",
        url: "m/m018.pdf"
      },
      {
        nombre: "Análisis de la escorrentía, la percolación y la evaporación en techos verdes usando áridos reciclados como sustrato",
        autor: "T. Vanwalleghem, A. Hayas, A. Peña, D. Jiménez-Quiñones, D. Sánchez, J.V. Giráldez",
        categoria: "Tema M",
        origen: "",
        url: "m/m019.pdf"
      },

    

   ];

   app.controller('AlmacenJia2015', function(){
   		this.indice = trabajos;
   });


})();
