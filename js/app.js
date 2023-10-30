if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register('../sw.js')
      .then(function (registration) {
        console.log("Service Worker registrado con éxito:", registration);
      })
      .catch(function (error) {
        console.log("Error al registrar el Service Worker:", error);
      });
    }


const nombrePersonajes = document.getElementById("personajes");
const personaje = document.getElementById("imgPersonaje");
let nombre = document.getElementById("nomb")
let per = document.getElementById("per");

let desc = document.getElementById("descripcion")
const body = document.getElementById("card");
let gojo = document.getElementById("gojo")
// const geto = document.getElementById("geto")
const jjk = document.getElementById("jjk")
let personaje2;
let opcion;
let opcion1;


// personaje.addEventListener("click", ()=>{
  
//   location.href =  "interfaz3.html?personaje="+personaje.src;
//   // location.href = "interfaz3.html?desc="+desc;
//   // & "habilidad="+desc.textContent
// })


personaje.addEventListener("click", ()=>{
  // location.href =  "interfaz3.html?personaje="+personaje.src;
  
  location.href = "interfaz3.html?desc="+desc+"&personaje2="+personaje2+"&nombre="+opcion1;
  
  // & "habilidad="+desc.textContent
  })

  

nombrePersonajes.addEventListener(
  "change",
  function () {

    
    switch (this.value) {
      case "Gojo Satoru":
        opcion = nombrePersonajes.lastChild.parentElement[1].innerHTML;
        nombre.innerText = "Gojo Satoru";
        personaje.src = "assets/img/p1.jpg";
        body.style.background = "url('assets/img/vacio.jpg')"; 
        gojo.removeAttribute("disabled");
        gojo.innerHTML = gojo.innerHTML;
        
        // desc.innerHTML = "";
        // jjk.style.display = "flex";
        // Ocultar las opciones 
        for (let i = 4; i < 23; i++) {
          gojo.options[i].style.display = "none";
      }

      // Mostrar las opciones 
      for (let i = 0; i < 4; i++) {
          gojo.options[i].style.display = "block";
      }
        break;
      case "Geto Suguru":
        opcion = nombrePersonajes.lastChild.parentElement[2].innerHTML;
        nombre.innerText = opcion;
        personaje.src = "assets/img/p2.jpg";
        body.style.background = "url('assets/img/sugu.jpg')";
        gojo.removeAttribute("disabled");
        gojo.innerHTML = gojo.innerHTML;
        
        // desc.innerHTML = "";
        // jjk.style.display = "flex";
        // Ocultar las opciones 1, 2 y 3
        for (let i = 0; i < 4; i++) {
          gojo.options[i].style.display = "none";
      }
        for (let i = 6; i < 23; i++) {
          gojo.options[i].style.display = "none";
      }

      // Mostrar las opciones 4, 5 y 6
      for (let i = 4; i < 6; i++) {
          gojo.options[i].style.display = "block";
      }
        break;
      case "Fushiguro Toji":
        opcion = nombrePersonajes.lastChild.parentElement[3].innerHTML;
        nombre.innerText = opcion;
        personaje.src = "assets/img/p3.jpg";
        body.style.background = "url('assets/img/toji.jpg')";
         gojo.removeAttribute("disabled");
        gojo.innerHTML = gojo.innerHTML;
        // desc.innerHTML = "";
        // jjk.style.display = "flex";
         // Ocultar las opciones 1, 2 y 3
        for (let i = 0; i < 6; i++) {
          gojo.options[i].style.display = "none";
      }
      for (let i = 8; i < 23; i++) {
        gojo.options[i].style.display = "none";
    }

      // Mostrar las opciones 4, 5 y 6
      for (let i = 6; i < 8; i++) {
          gojo.options[i].style.display = "block";
      }
        break;
      case "Itadori Yuji":
        opcion = nombrePersonajes.lastChild.parentElement[4].innerHTML;
        nombre.innerText = opcion;
        personaje.src = "assets/img/p4.jpg";
        body.style.background = "url('assets/img/yuji.jpg')";
         gojo.removeAttribute("disabled");
        gojo.innerHTML = gojo.innerHTML;
        // desc.innerHTML = "";
        // jjk.style.display = "flex";
        // Ocultar las opciones 1, 2 y 3
        for (let i = 0; i < 8; i++) {
          gojo.options[i].style.display = "none";
      }
      for (let i = 10; i < 23; i++) {
        gojo.options[i].style.display = "none";
    }
      // Mostrar las opciones 4, 5 y 6
      for (let i = 8; i < 10; i++) {
          gojo.options[i].style.display = "block";
      } 
        break;
      case "Fushiguro Megumi":
        opcion = nombrePersonajes.lastChild.parentElement[5].innerHTML;
        nombre.innerText = opcion;
        personaje.src = "assets/img/p5.jpg";
        body.style.background = "url('assets/img/megu.jpg')";
         gojo.removeAttribute("disabled");
        gojo.innerHTML = gojo.innerHTML;
        // desc.innerHTML = "";
        // jjk.style.display = "flex";
         // Ocultar las opciones 1, 2 y 3
        for (let i = 0; i < 10; i++) {
          gojo.options[i].style.display = "none";
      }
      for (let i = 12; i < 23; i++) {
        gojo.options[i].style.display = "none";
    }
      // Mostrar las opciones 4, 5 y 6
      for (let i = 10; i < 12; i++) {
          gojo.options[i].style.display = "block";
      }
        break;
      case "Kugisaki Nobara":
        opcion = nombrePersonajes.lastChild.parentElement[6].innerHTML;
        nombre.innerText = opcion;
        personaje.src = "assets/img/p6.jpg";
        body.style.background = "url('assets/img/nobara.jpg')";
         gojo.removeAttribute("disabled");
        gojo.innerHTML = gojo.innerHTML;
        // desc.innerHTML = "";
        // jjk.style.display = "flex";
        // Ocultar las opciones 1, 2 y 3
        for (let i = 0; i < 12; i++) {
          gojo.options[i].style.display = "none";
      }
      for (let i = 14; i < 23; i++) {
        gojo.options[i].style.display = "none";
    }
      // Mostrar las opciones 4, 5 y 6
      for (let i = 12; i < 14; i++) {
          gojo.options[i].style.display = "block";
      } 
        break;
      case "Okkotsu Yuta":
        opcion = nombrePersonajes.lastChild.parentElement[7].innerHTML;
        nombre.innerText = opcion;
        personaje.src = "assets/img/p7.jpg";
        body.style.background = "url('assets/img/yuta.jpg')";
         gojo.removeAttribute("disabled");
        gojo.innerHTML = gojo.innerHTML;
        // desc.innerHTML = "";
        // jjk.style.display = "flex";
         // Ocultar las opciones 1, 2 y 3
        for (let i = 0; i < 14; i++) {
          gojo.options[i].style.display = "none";
      }
      for (let i = 16; i < 23; i++) {
        gojo.options[i].style.display = "none";
    }
      // Mostrar las opciones 4, 5 y 6
      for (let i = 14; i < 16; i++) {
          gojo.options[i].style.display = "block";
      }
        break;
      case "Zen'in Maki":
        opcion = nombrePersonajes.lastChild.parentElement[8].innerHTML;
        nombre.innerText = opcion;
        personaje.src = "assets/img/p8.jpg";
        body.style.background = "url('assets/img/maki.jpg')";
         gojo.removeAttribute("disabled");
        gojo.innerHTML = gojo.innerHTML;
        // desc.innerHTML = "";
        // jjk.style.display = "flex";
        // Ocultar las opciones 1, 2 y 3
        for (let i = 0; i < 16; i++) {
          gojo.options[i].style.display = "none";
      }
      for (let i = 18; i < 23; i++) {
        gojo.options[i].style.display = "none";
    }
      // Mostrar las opciones 4, 5 y 6
      for (let i = 16; i < 18; i++) {
          gojo.options[i].style.display = "block";
      } 
        break;
      case "Nanami Kento":
        opcion = nombrePersonajes.lastChild.parentElement[9].innerHTML;
        nombre.innerText = opcion;
        personaje.src = "assets/img/p9.jpg";
        body.style.background = "url('assets/img/gris.jpg')";
         gojo.removeAttribute("disabled");
        gojo.innerHTML = gojo.innerHTML;
        // desc.innerHTML = "";
        // jjk.style.display = "flex";
        // Ocultar las opciones 1, 2 y 3
        for (let i = 0; i < 18; i++) {
          gojo.options[i].style.display = "none";
      }
      for (let i = 20; i < 23; i++) {
        gojo.options[i].style.display = "none";
    }
      // Mostrar las opciones 4, 5 y 6
      for (let i = 18; i < 20; i++) {
          gojo.options[i].style.display = "block";
      } 
        break;
      case "Mei Mei":
        opcion = nombrePersonajes.lastChild.parentElement[10].innerHTML;
        nombre.innerText = opcion;
        personaje.src = "assets/img/p10.jpg";
        body.style.background = "url('assets/img/mei.jpg')";
         gojo.removeAttribute("disabled");
        gojo.innerHTML = gojo.innerHTML;
        // desc.innerHTML = "";
        // jjk.style.display = "flex";
        // Ocultar las opciones 1, 2 y 3
        for (let i = 0; i < 20; i++) {
          gojo.options[i].style.display = "none";
      }
      for (let i = 22; i < 23; i++) {
        gojo.options[i].style.display = "none";
    }
      // Mostrar las opciones 4, 5 y 6
      for (let i = 20; i < 22; i++) {
          gojo.options[i].style.display = "block";
      } 
        break;
      case "Sukuna":
        opcion = nombrePersonajes.lastChild.parentElement[11].innerHTML;
        nombre.innerText = opcion;
        personaje.src = "assets/img/p11.jpg";
        body.style.background = "url('assets/img/sukuna.jpg')";
         gojo.removeAttribute("disabled");
        gojo.innerHTML = gojo.innerHTML;
        // desc.innerHTML = "";
        // jjk.style.display = "flex";
        // Ocultar las opciones 1, 2 y 3
        for (let i = 0; i < 22; i++) {
          gojo.options[i].style.display = "none";
      }

      // Mostrar las opciones 4, 5 y 6
      for (let i = 22; i < 23; i++) {
          gojo.options[i].style.display = "block";
      } 
        break;
    }

  //   function obtenerInfo(info){
  //     const urlInfo = new URLSearchParams(window.location.search);
  //     return urlInfo.get(info)
  // }
  // const linkPer = obtenerInfo('personaje');
  // const Linkhab = obtenerInfo('habilidad');
  
   gojo.addEventListener("change", function(){
    
    switch (this.value) {
      
      case "azul":
        opcion1 = gojo.lastChild.parentElement[1].innerHTML;
        // console.log(opcion1)
        personaje.src = "assets/img/p1.jpg";
        personaje2 = "assets/img/azul.gif";
        desc = "Esta técnica crea una especie de atracción gravitatoria hacia un punto fijo que puede hacer que los cuerpos atraidos implosionen o acaben completamente destrozados.";
        body.style.background = "url('assets/img/vacio.jpg')";
        body.style.marginTop = "30px";
        // jjk.style.display = "none";
        
        break;
      case "rojo":
        opcion1 = gojo.lastChild.parentElement[2].innerHTML;
        personaje.src = "assets/img/p1.jpg";
        personaje2 = "assets/img/rojo.gif";
        desc = "Esta técnica ejerce, en esencia, el efecto contrario de la versión 'Azul'. De esta forma, se crea un orbe que repele cuerpos y que, en su utilización, es capaz de generar una explosión con una fuerza inmensa.";
        body.style.background = "url('assets/img/vacio.jpg')";
        body.style.marginTop = "30px";
        // jjk.style.display = "none";
        break;
      case "purpura":
        opcion1 = gojo.lastChild.parentElement[3].innerHTML;
        personaje.src = "assets/img/p1.jpg";
        personaje2 = "assets/img/purpura.gif";
        desc = "Púrpura permite que mediante el moldeo de energía maldita combinada con energía positiva se genere un choque entre ambas energía, distorsionando el espacio";
        body.style.background = "url('assets/img/vacio.jpg')";
        body.style.marginTop = "30px";
        // jjk.style.display = "none";
        break;
      case "tornado":
        opcion1 = gojo.lastChild.parentElement[4].innerHTML;
        personaje.src = "assets/img/p2.jpg";
        personaje2 = "assets/img/tornado.gif";
        desc = "es un espíritu maldito de grado desconocido cuya técnica consiste en almacenar y reciclar otras maldiciones.";
        body.style.background = "assets/img/p2.jpg";
        body.style.marginTop = "30px";
        // jjk.style.display = "none";
        break;
      case "dragon":
        opcion1 = gojo.lastChild.parentElement[5].innerHTML;
        personaje.src = "assets/img/p2.jpg";
        personaje2 = "assets/img/dragon.gif";
        desc = "Dragón Arco Iris permite la invocación de un espíritu maldito de grado desconocido. Consiste en un dragón con la capacidad de moverse a un gran nivel de velocidad";
        body.style.background = "assets/img/p2.jpg";
        body.style.marginTop = "30px";
        // jjk.style.display = "none";
        break;
      case "celestial":
        opcion1 = gojo.lastChild.parentElement[6].innerHTML;
        personaje.src = "assets/img/p3.jpg";
        personaje2 = "assets/img/celestial.gif";
        desc = "Debido a que fue sometido a la Maldición Celestial, su cuerpo se volvió incapaz de emitir energía maldita. Un efecto secundario de la falta de energía maldita en el cuerpo de Toji, hizo que sea completamente indetectable para otros chamanes incluso desarrolló una resistencia a las maldiciones y fue capaz de detectarlas con sus cinco sentidos altamente refinados";
        body.style.background = "url('assets/img/toji.jpg')";
        body.style.marginTop = "30px";
        // jjk.style.display = "none";
        break;
      case "almacen":
        opcion1 = gojo.lastChild.parentElement[7].innerHTML;
        personaje.src = "assets/img/p3.jpg";
        personaje2 = "assets/img/almacen.gif";
        desc = "Toji tenía una maldición como mascota, conocida como Maldición Almacenadora de Cosas, en la cual almacenaba todas sus armas y herramientas malditas";
        body.style.background = "url('assets/img/toji.jpg')";
        body.style.marginTop = "30px";
        // jjk.style.display = "none";
        break;
      case "puño":
        opcion1 = gojo.lastChild.parentElement[8].innerHTML;
        personaje.src = "assets/img/p4.jpg";
        personaje2 = "assets/img/puño.gif";
        desc = "después de que Itadori golpea a un objetivo, su energía maldita fluye y realiza un segundo impacto. Esta técnica surge como resultado de que Itadori no fuera capaz de sincronizar su energía con su fuerza física";
        body.style.background = "url('assets/img/yuji.jpg')";
        body.style.marginTop = "30px";
        // jjk.style.display = "none";
        break;
      case "destello":
        opcion1 = gojo.lastChild.parentElement[9].innerHTML;
        personaje.src = "assets/img/p4.jpg";
        personaje2 = "assets/img/destello.gif";
        desc = "una técnica que todo hechicero es capaz de usar, pero hasta ahora, ningún hechicero es capaz de usarlo a voluntad. Cuando un hechicero hace un impacto con poder maldito dentro del lapso de .000001 segundos del golpe físico, el espacio se distorsiona y el poder maldito destella de color negro.";
        body.style.background = "url('assets/img/yuji.jpg')";
        body.style.marginTop = "30px";
        // jjk.style.display = "none";
        break;
      case "sombras":
        opcion1 = gojo.lastChild.parentElement[10].innerHTML;
        personaje.src = "assets/img/p5.jpg";
        personaje2 = "assets/img/sombras.gif";
        desc = "Una técnica heredada entre los miembros del Clan Zenin, en donde se usa las sombras para crear shikigamis avanzados, y también usa la sombra para contener objetos. Posee la gran desventaja de que para hacer uso de una invocación éste debe haber sido exorcizada con anterioridad";
        body.style.background = "url('assets/img/megu.jpg')";
        body.style.marginTop = "30px";
        // jjk.style.display = "none";
        break;
      case "nue":
        opcion1 = gojo.lastChild.parentElement[11].innerHTML;
        personaje.src = "assets/img/p5.jpg";
        personaje2 = "assets/img/nue.gif";
        desc = "un shikigami con forma de búho que puede volar. Sus usos en combate son bastante variados: es lo suficientemente fuerte como para transportar a un humano";
        body.style.background = "url('assets/img/megu.jpg')";
        body.style.marginTop = "30px";
        // jjk.style.display = "none";
        break;
      case "Resonancia":
        opcion1 = gojo.lastChild.parentElement[12].innerHTML;
        personaje.src = "assets/img/p6.jpg";
        personaje2 = "assets/img/resonancia.gif";
        desc = "haciendo uso de un Muñeco Vudú y alguna extremidad de la maldición, Nobara perfora con un clavo con el fin de formar una vinculo entre ambos. ";
        body.style.background = "url('assets/img/nobara.jpg')";
        body.style.marginTop = "30px";
        // jjk.style.display = "none";
        break;
      case "Horquilla":
        opcion1 = gojo.lastChild.parentElement[13].innerHTML;
        personaje.src = "assets/img/p6.jpg";
        personaje2 = "assets/img/horquilla.gif";
        desc = "permite que a través de una orden de Nobara, cualquier clavo que se utilice como proyectil pueda detonarse en una explosión de energía maldita cerca de su objetivo.";
        body.style.background = "url('assets/img/nobara.jpg')";
        body.style.marginTop = "30px";
        // jjk.style.display = "none";
        break;
      case "reina":
        opcion1 = gojo.lastChild.parentElement[14].innerHTML;
        personaje.src = "assets/img/p7.jpg";
        personaje2 = "assets/img/reina.gif";
        desc = "La Reina de las Maldiciones es conocida principalmente por ser una maldición de grado especial muy agresiva, deliberada e impulsiva. Su gran fuerza permite que destruya edificaciones enteras, y a su vez, cuenta con una increíble velocidad que funciona tanto para defender como atacar.";
        body.style.background = "url('assets/img/yuta.jpg')";
        body.style.marginTop = "30px";
        // jjk.style.display = "none";
        break;
      case "discurso":
        opcion1 = gojo.lastChild.parentElement[15].innerHTML;
        personaje.src = "assets/img/p7.jpg";
        personaje2 = "assets/img/discurso.gif";
        desc = "Una técnica maldita heredada entre los miembros del Clan Inumaki, que permite que, al momento que articula algún tipo de palabra, éstas se vean reforzadas por una gran cantidad de energía maldita y como resultado, obliga a cualquiera que lo escuche a actuar o que se actúe sobre la base de esas palabras";
        body.style.background = "url('assets/img/yuta.jpg')";
        body.style.marginTop = "30px";
        // jjk.style.display = "none";
        break;
      case "atadura":
        opcion1 = gojo.lastChild.parentElement[16].innerHTML;
        personaje.src = "assets/img/p8.jpg";
        personaje2 = "assets/img/atadura.gif";
        desc = "Desde su nacimiento se vio sometida a la Maldición Celestial volviéndose incapaz de hacer uso de la energía maldita, sin embargo, obtuvo una fuerza, velocidad y resistencia sobrehumana";
        body.style.background = "url('assets/img/maki.jpg')";
        body.style.marginTop = "30px";
        // jjk.style.display = "none";
        break;
      case "armas":
        opcion1 = gojo.lastChild.parentElement[17].innerHTML;
        personaje.src = "assets/img/p8.jpg";
        personaje2 = "assets/img/armas.gif";
        desc = "Debido a su falta de capacidad para manipular la energía maldita, se especializó en el uso de armas y herramientas malditas. Posee una increíble capacidad en el manejo de las mismas siendo, al menos, la mejor de segundo año en el uso de éstas.";
        body.style.background = "url('assets/img/maki.jpg')";
        body.style.marginTop = "30px";
        // jjk.style.display = "none";
        break;
      case "proporcion":
        opcion1 = gojo.lastChild.parentElement[18].innerHTML;
        personaje.src = "assets/img/p9.jpg";
        personaje2 = "assets/img/proporcion.webp";
        desc = "Una técnica innata que le permite la división de la longitud del oponente en diez líneas y producir forzosamente un punto débil en una proporción de 7:3. Puede elegir libremente qué parte dividir, incluidos la cabeza, torso, brazos o piernas";
        body.style.background = "url('assets/img/gris.jpg')";
        body.style.marginTop = "30px";
        // jjk.style.display = "none";
        break;
      case "derrumbe":
        opcion1 = gojo.lastChild.parentElement[19].innerHTML;
        personaje.src = "assets/img/p9.jpg";
        personaje2 = "assets/img/derrumbe.gif";
        desc = "crea un gran punto débil en el entorno circundante, lo que le permite a Nanami destruir al objetivo de un solo golpe";
        body.style.background = "url('assets/img/gris.jpg')";
        body.style.marginTop = "30px";
        // jjk.style.display = "none";
        break;
      case "cuervos":
        opcion1 = gojo.lastChild.parentElement[20].innerHTML;
        personaje.src = "assets/img/p10.jpg";
        personaje2 = "assets/img/cuervos.gif";
        desc = "Una técnica innata que le permite la manipulación de cuervos o pájaros negros con completa libertad. Es capaz de compartir su visión para ver todo lo que éstos observan";
        body.style.background = "url('assets/img/mei.jpg')";
        body.style.marginTop = "30px";
        // jjk.style.display = "none";
        break;
      case "aviar":
        opcion1 = gojo.lastChild.parentElement[21].innerHTML;
        personaje.src = "assets/img/p10.jpg";
        personaje2 = "assets/img/aviar.gif";
        desc = "ordena a sus cuervos que se suiciden, de este modo elimina el limitador de energía maldita en estos y con la energía maldita elevada se estrellan con el enemigo. A excepción de Gojo, nadie puede esquivar éste ataque";
        body.style.background = "url('assets/img/mei.jpg')";
        body.style.marginTop = "30px";
        // jjk.style.display = "none";
        break;



     case "ryk":
      opcion1 = gojo.lastChild.parentElement[22].innerHTML;
      personaje.src = "assets/img/p11.jpg";
        personaje2 = "assets/img/ryk.gif";
        desc = "una técnica en la que la energía maldita se usa para construir un territorio con una técnica que abarca el área circundante.";
        body.style.background = "url('assets/img/sukuna.jpg')";
        body.style.marginTop = "30px";
        jjk.style.display = "none";
        break;
      default:
        break;
    }

    
   })

   
  
  },false);