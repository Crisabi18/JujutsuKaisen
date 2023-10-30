self.addEventListener("install", (event) => {
    // event.waitUntil(
    //   caches.open(CACHE_NAME).then((cache) => {
    //     return cache.addAll([
    //       "/",
    //       "index.html",
    //       "js/app.js",
    //       "js/bootstrap.min.js",
    //       "js/sweetalert2.all.min.js",
    //       "css/style.css",
    //       "css/bootstrap.min.css",
    //     ]);
    //   })
    // );
  // const recursos = caches.open("CacheRecursos").then(cache=>{
  //   cache.add("/"),
  //   cache.add("index.html"),
  //   cache.add("interfaz2.html"),
  //   cache.add("js/app.js"),
  //   cache.add("js/bootstrap.min.js"),
  //   cache.add("js/sweetalert2.all.min.js"),
  //   cache.add("css/style.css"),
  //   cache.add("css/bootstrap.min.css"),
  //   cache.add("manifest.json")
  // })
  
    // event.waitUntil(
    //   caches.open(CACHE_NAME2).then((cache) => {
    //     return cache.addAll([
    //       "assets/img/fondo.jpg",
    //       "assets/img/fondo-fondo.jpg",
    //       "assets/img/card.jpg",
    //       "assets/img/P1.jpg",
    //       "assets/img/P2.jpg",
    //       "assets/img/P3.jpg",
    //       "assets/img/P4.jpg",
    //       "assets/img/P5.jpg",
    //     ]);
    //   })
    // );
    const images = caches.open("Boveda1").then(cache=>{
      cache.add("/"),
      cache.add("index.html"),
      cache.add("interfaz2.html"),
      cache.add("interfaz3.html"),
      cache.add("js/pouch/pouchdb-nightly.js"),
      cache.add("js/pouch/pouch.js"),
      cache.add("js/pouch/app.js"),
      cache.add("js/pouch/base.js"),
      cache.add("js/app.js"),
      cache.add("js/bootstrap.min.js"),
      cache.add("js/sweetalert2.all.min.js"),
      cache.add("css/style.css"),
      cache.add("css/bootstrap.min.css"),
      cache.add("manifest.json"),
      cache.add("assets/img/fondo.jpg"),
      cache.add("assets/img/gris.jpg"),
      cache.add("assets/img/Jujutsu-Kaisen.jpg"),
      cache.add("assets/img/maki.jpg"),
      cache.add("assets/img/megu.jpg"),
      cache.add("assets/img/mei.jpg"),
      cache.add("assets/img/nanami.jpg"),
      cache.add("assets/img/nobara.jpg"),
      cache.add("assets/img/p1.jpg"),
      cache.add("assets/img/p2.jpg"),
      cache.add("assets/img/p3.jpg"),
      cache.add("assets/img/p4.jpg"),
      cache.add("assets/img/p5.jpg"),
      cache.add("assets/img/p6.jpg"),
      cache.add("assets/img/p7.jpg"),
      cache.add("assets/img/p8.jpg"),
      cache.add("assets/img/p9.jpg"),
      cache.add("assets/img/p10.jpg"),
      cache.add("assets/img/p11.jpg"),
      cache.add("assets/img/sugu.jpg"),
      cache.add("assets/img/sukuna.jpg"),
      cache.add("assets/img/toji.jpg"),
      cache.add("assets/img/vacio.jpg"),
      cache.add("assets/img/yuji.jpg"),
      cache.add("assets/img/yuta.jpg"),
      cache.add("assets/img/azul.gif"),
      cache.add("assets/img/rojo.gif"),
      cache.add("assets/img/purpura.gif"),
      cache.add("assets/img/tornado.gif"),
      cache.add("assets/img/dragon.gif"),
      cache.add("assets/img/celestial.gif"),
      cache.add("assets/img/almacen.gif"),
      cache.add("assets/img/puño.gif"),
      cache.add("assets/img/destello.gif"),
      cache.add("assets/img/sombras.gif"),
      cache.add("assets/img/nue.gif"),
      cache.add("assets/img/resonancia.gif"),
      cache.add("assets/img/horquilla.gif"),
      cache.add("assets/img/reina.gif"),
      cache.add("assets/img/discurso.gif"),
      cache.add("assets/img/atadura.gif"),
      cache.add("assets/img/armas.gif"),
      cache.add("assets/img/proporcion.webp"),
      cache.add("assets/img/derrumbe.gif"),
      cache.add("assets/img/cuervos.gif"),
      cache.add("assets/img/aviar.gif"),
      cache.add("assets/img/ryk.gif"),
      cache.add("assets/icons/64x64.png"),
      cache.add("assets/icons/128x128.png"),
      cache.add("assets/icons/256x256.png")
      
    
    })
    event.waitUntil(images);
  });
  
  // self.addEventListener("fetch", (event) => {
  //   event.respondWith(
  //     caches.match(event.request).then((response) => {
  //       if (response) {
  //         return response;
  //       }
  
  //       return fetch(event.request).then((newResponse) => {
  //         if (newResponse) {
  //           const responseClone = newResponse.clone();
  
  //           caches.open(CACHE_NAME).then((cache) => {
  //             cache.put(event.request, responseClone);
  //           });
  
  //           return newResponse;
  //         }
  //       });
  //     })
  //   );
  // });
  
  self.addEventListener('fetch',event =>{
      // event.respondWith(caches.match(event.request));
  
      // // estrategia numero 2: Acceso en cache con respaldo en internet y
      // //recuperacion de recursos en cache
      // const respuesta = caches.match(event.request).then(res=>{
      //     if (res) return res;
      //     console.log('no existe el recurso en cache ->', event.request.url);
  
      //     return fetch(event.request).then (newResp=>{
      //         //si no existe el archivo, vamos a internet hay 
      //         //que almacenar los recursos borrados de nuevo en el cache
      //         caches.open("CacheImages").then(cache=>{
      //             cache.put(event.request,newResp)
  
      //         });
      //         return newResp.clone();
      //     });
      // });
      // event.respondWith(respuesta);
  
      //estrategia 3 first network then cache
      const respuesta = fetch(event.request).then (newResp=>{
        //si no existe el archivo, vamos a internet hay 
        //que almacenar los recursos borrados de nuevo en el cache
        caches.open('Boveda1').then(cache=>{
            cache.put(event.request,newResp);
  
        });
    
    
            return newResp.clone();
        }).catch(err=>{
            return caches.match(event.request);
        })
    
    event.respondWith(respuesta);
  });