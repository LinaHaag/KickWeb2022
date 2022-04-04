gsap.registerPlugin(ScrollTrigger); // Zum s'Plugin vo GSAP lade

var an1_start = "0vh";

gsap.set(".typ6rap", {blur: 0}), // element wod wetsh stahbliible lah (und animatione wod wetsh mache ide chlammere)
gsap.to(".typ6rap", {blur: 5, scrollTrigger: { // nomols element und endstatus vo de animation
      trigger: ".typ6rap", //das element wo d'animation afangt, chash afach nomol da neh
      start: an1_start, // wo im element d'animation sell afange
      end: "+=1000", // wie vill pixel mer scrollt bis es wieder ufhört
      //markers:true, // dev markierige zum abständ alue
      pin:true, //das macht dases stah bliibt
      scrub: true // kp wa da ish, lahs afach mol dinne
}})

gsap.set(".kreisorange", {blur: 0, scale: 1, x: "0vw", y: "0vw"}), // element wod wetsh stahbliible lah (und animatione wod wetsh mache ide chlammere)
gsap.to(".kreisorange", {blur: 10, scale: 3, x: "0vw", y: "0vw", scrollTrigger: { // nomols element und endstatus vo de animation
      trigger: ".typ6rap", //das element wo d'animation afangt, chash afach nomol da neh
      start: an1_start, // wo im element d'animation sell afange
      end: "+=1000", // wie vill pixel mer scrollt bis es wieder ufhört
      //markers:true, // dev markierige zum abständ alue
      //pin:true, //das macht dases stah bliibt
      scrub: true // kp wa da ish, lahs afach mol dinne
}})

gsap.set(".kreisblau", {blur: 0, scale: 1, x: "0vw", y: "0vw"}), // element wod wetsh stahbliible lah (und animatione wod wetsh mache ide chlammere)
gsap.to(".kreisblau", {blur: 10, scale: 3, x: "5vw", y: "5vw", scrollTrigger: { // nomols element und endstatus vo de animation
      trigger: ".typ6rap", //das element wo d'animation afangt, chash afach nomol da neh
      start: an1_start, // wo im element d'animation sell afange
      end: "+=1000", // wie vill pixel mer scrollt bis es wieder ufhört
      //markers:true, // dev markierige zum abständ alue
      //pin:true, //das macht dases stah bliibt
      scrub: true // kp wa da ish, lahs afach mol dinne
}})

gsap.set(".kreisgruen", {blur: 0, scale: 1, x: "0vw", y: "0vw"}), // element wod wetsh stahbliible lah (und animatione wod wetsh mache ide chlammere)
gsap.to(".kreisgruen", {blur: 10, scale: 3, x: "5vw", y: "-5vw", scrollTrigger: { // nomols element und endstatus vo de animation
      trigger: ".typ6rap", //das element wo d'animation afangt, chash afach nomol da neh
      start: an1_start, // wo im element d'animation sell afange
      end: "+=1000", // wie vill pixel mer scrollt bis es wieder ufhört
      //markers:true, // dev markierige zum abständ alue
      //pin:true, //das macht dases stah bliibt
      scrub: true // kp wa da ish, lahs afach mol dinne
}})