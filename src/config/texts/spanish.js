const spanishTexts = [
  [ // Difficulty 1
    "El sol sale por el este.",
    "Me gusta leer libros.",
    "Ella es mi mejor amiga.",
    "Jugamos al fútbol todos los días.",
    "El gato duerme en la cama.",
    "A él le encanta escuchar música.",
    "¿Puedes ayudarme con esto?",
    "Las flores florecen en primavera.",
    "Desayuné pan tostado hoy.",
    "Esto es una frase simple."
  ],
  [ // Difficulty 2
    "La lluvia cesó justo antes de que saliéramos de casa.",
    "Ella compró un vestido nuevo para la fiesta de esta noche.",
    "Un rápido zorro marrón salta sobre el perro perezoso.",
    "Me encanta caminar por las montañas durante el verano.",
    "Aprender nuevas habilidades puede ser divertido y gratificante.",
    "El niño perdió su globo rojo en el parque.",
    "Están planeando un viaje a París el próximo mes.",
    "El pastel huele delicioso mientras se hornea en el horno.",
    "Mi hermana adoptó un pequeño gatito blanco y esponjoso.",
    "Pasó la tarde arreglando su vieja bicicleta."
  ],
  [ // Difficulty 3
    "La mariposa de colores revoloteó grácilmente entre las flores en flor.",
    "Después de un día largo, ella se relajó en el sofá con una taza de té caliente.",
    "Su dedicación a practicar piano todos los días es notable.",
    "Las ruinas antiguas revelaron secretos de una civilización olvidada.",
    "Ella pintó cuidadosamente el paisaje, capturando cada pequeño detalle.",
    "El libro era tan emocionante que no pudo dejarlo hasta que lo terminó.",
    "Las luces de la ciudad brillaban como estrellas sobre el agua tranquila.",
    "Su colección de sellos de todo el mundo es bastante impresionante.",
    "A pesar del clima frío, los corredores de la maratón perseveraron.",
    "La carta misteriosa llegó sin nombre ni dirección del remitente."
  ],
  [ // Difficulty 4
    "En el corazón de la bulliciosa ciudad, un café tranquilo ofrecía un refugio pacífico.",
    "El ingeniero trabajó incansablemente para diseñar un puente que pudiera resistir terremotos.",
    "Al ponerse el sol sobre el horizonte, el cielo se tornó en brillantes tonos de naranja y rosa.",
    "Ella organizó meticulosamente sus notas antes de la gran presentación de mañana.",
    "El detective reunió las pistas, desentrañando poco a poco la verdad detrás del caso.",
    "A pesar de las dificultades, el pequeño equipo logró su ambicioso objetivo antes de lo previsto.",
    "El bosque estaba lleno del sonido de pájaros cantando y hojas susurrando.",
    "Su enfoque innovador para resolver el problema le valió un amplio reconocimiento.",
    "Después de años de trabajo duro, finalmente abrió su propia panadería en el vecindario.",
    "El público quedó cautivado por las palabras elocuentes e inspiradoras del orador."
  ],
  [ // Difficulty 5
    "El viaje del protagonista por la naturaleza inexplorada estuvo lleno de peligro y descubrimiento.",
    "En el tranquilo pueblo de Elmwood, extraños sucesos empezaron a inquietar a los residentes.",
    "La última exposición del museo de arte mostraba obras maestras del Renacimiento.",
    "Su bordado intrincado presentaba un jardín vibrante lleno de flores y mariposas.",
    "El científico realizó numerosos experimentos para verificar la precisión de su teoría innovadora.",
    "Los personajes complejos y las tramas entrelazadas de la novela mantuvieron a los lectores cautivados hasta la última página.",
    "Durante la tormenta, la tripulación del barco demostró una habilidad y trabajo en equipo excepcionales.",
    "El plato distintivo del chef combinaba sabores inesperados para crear una obra maestra culinaria.",
    "Bajo el cielo estrellado, los campistas compartieron historias y risas alrededor del fuego crepitante.",
    "Su incansable búsqueda de la justicia le ganó tanto admiración como adversarios."
  ],
  [ // Difficulty 6
    "Los hallazgos del investigador arrojaron nueva luz sobre el complejo funcionamiento del cerebro humano.",
    "Entre los rascacielos, un jardín oculto proporcionaba un escape sereno para los habitantes de la ciudad.",
    "El antiguo manuscrito, escrito en una lengua olvidada, contenía la clave de un tesoro perdido.",
    "Su emotiva carta transmitía sentimientos que las palabras apenas podían expresar.",
    "La interpretación de la sinfonía por la orquesta fue recibida con aplausos atronadores y una ovación de pie.",
    "Superando desafíos aparentemente insuperables, los montañistas alcanzaron la cumbre contra todo pronóstico.",
    "La impresionante cinematografía de la película transportó a los espectadores a un mundo completamente diferente.",
    "A través de una planificación meticulosa y determinación inquebrantable, el emprendedor lanzó una startup exitosa.",
    "Mientras la nave espacial atravesaba el vacío, los astronautas se preparaban para su audaz misión.",
    "Los versos evocadores del joven poeta capturaron la esencia cruda de la experiencia humana."
  ],
  [ // Difficulty 7
    "En un pintoresco pueblo costero, las leyendas de un fantasmal farero se transmitían de generación en generación.",
    "La conferencia del profesor sobre mecánica cuántica fue tanto esclarecedora como desafiante para sus estudiantes.",
    "Bajo la superficie del océano, vibrantes arrecifes de coral rebosaban de una asombrosa diversidad de vida marina.",
    "El diseño del arquitecto fusionaba perfectamente la estética moderna con elementos tradicionales.",
    "Con gracia y precisión, la bailarina ejecutó una rutina que dejó a la audiencia maravillada.",
    "Las memorias detallaban las experiencias desgarradoras del autor y su última victoria sobre la adversidad.",
    "La biblioteca amplia albergaba una impresionante colección de libros raros y manuscritos.",
    "Un giro repentino en la historia reveló una conexión oculta entre los dos protagonistas.",
    "La iniciativa ecológica buscaba reducir los desechos y promover prácticas de vida sostenible.",
    "El diario del aventurero relataba sus encuentros con culturas diversas y paisajes impresionantes."
  ],
  [ // Difficulty 8
    "El descubrimiento innovador, aclamado como un logro monumental en el campo de la medicina, abrió nuevas vías para el tratamiento.",
    "Mientras el incendio forestal se propagaba rápidamente, los bomberos trabajaban incansablemente para proteger hogares y evacuar a los residentes a un lugar seguro.",
    "La prosa del novelista, rica en imágenes vívidas y temas matizados, cautivó a lectores en todo el mundo.",
    "Una intrincada red de túneles subterráneos conectaba los lugares históricos de la ciudad.",
    "Las negociaciones hábiles del diplomático evitaron un conflicto potencial, fomentando una nueva era de cooperación.",
    "Con una determinación inquebrantable, la científica persiguió su hipótesis a pesar de los reveses y el escepticismo.",
    "El elaborado baile de máscaras, celebrado en una gran mansión, fue el tema de conversación en la ciudad durante semanas.",
    "Su enfoque innovador hacia las soluciones de energía renovable le valió prestigiosos reconocimientos.",
    "El relato del explorador sobre su viaje por territorios inexplorados inspiró a generaciones futuras.",
    "Un equilibrio delicado de sabores y texturas definió la cocina galardonada del chef."
  ],
  [ // Difficulty 9
    "En medio del bullicioso mercado, un artesano demostraba técnicas tradicionales para crear cerámica intrincada.",
    "La obra del dramaturgo entrelazaba magistralmente eventos históricos con narrativas personales conmovedoras.",
    "El ambicioso proyecto de renovación urbana buscaba revitalizar vecindarios descuidados mientras preservaba su patrimonio cultural.",
    "Un equipo de investigadores se embarcó en una expedición ambiciosa para estudiar los efectos del cambio climático en regiones polares remotas.",
    "El apasionante drama judicial exploraba temas de justicia, moralidad y la falibilidad del juicio humano.",
    "Las complejidades del oficio de relojero eran evidentes en cada detalle de sus exquisitas creaciones.",
    "Su discurso elocuente, pronunciado con convicción y aplomo, incitó a la audiencia a la acción.",
    "La tecnología innovadora prometía revolucionar industrias y redefinir posibilidades.",
    "Mientras la orquesta alcanzaba el clímax, la sala resonaba con una energía casi palpable.",
    "La antología presentaba una diversa gama de voces, cada una ofreciendo una perspectiva única sobre la condición humana."
  ],
  [ // Difficulty 10
    "El tratado del filósofo desafió el pensamiento convencional, presentando una reimaginación radical de estructuras sociales y ética.",
    "Un intrincado mosaico de influencias culturales dio forma a las tradiciones, arquitectura y gastronomía únicas de la región.",
    "La iniciativa de exploración espacial apuntaba a establecer una presencia humana permanente en Marte dentro de la próxima década.",
    "Con una mezcla magistral de sátira y simbolismo, la novela criticó las complejidades de la vida moderna.",
    "La majestuosa catedral, con sus arcos elevados y frescos detallados, se erigió como testimonio de siglos de devoción artística.",
    "En un experimento innovador, los científicos lograron simular las condiciones de la formación planetaria temprana.",
    "El poema épico tejía un tapiz de heroísmo, tragedia y redención a lo largo de sus meticulosamente elaborados versos.",
    "El tratado económico analizó las dinámicas del comercio global, ofreciendo ideas sobre tendencias y desafíos en mercados emergentes.",
    "El movimiento final de la sinfonía, un despliegue de brillantez emocional y técnica, dejó al público sin aliento.",
    "Las memorias, una exploración profundamente introspectiva de la identidad y la resiliencia, resonaron con lectores de todos los ámbitos de la vida."
  ]
];

export default spanishTexts; 