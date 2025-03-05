// Ich brauche:
// - alle Kursnamen
// - Anfang: 2 zufällige Kurs
// - worauf wird geklickt -> click event
// - welcher Kurs ist das? -> id target
// - den anderen Kurs austauschen (zufällig)

const allCourses = [
     "AWS Cloud Engineer",
     "Digital Sales Manager",
     "Digital HR – People Management",
     "Java Backend Programming",
     "System Administrator",
     "Online Marketing",
     "Python Backend Programming",
     "Salesforce Consultant",
     "Web Development",
     "Digital Accounting",
    ]

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      }

      const startLinksIndex = getRndInteger(0,9);
      const startLinks = allCourses[startLinksIndex];
    //   console.log(startLinksIndex, startLinks);

      let coursesLeft = allCourses.filter((course,i)=>i !== startLinksIndex );
    //   console.log(coursesLeft)

      const startRechtsIndex = getRndInteger(0,8);
      const startRechts = coursesLeft[startRechtsIndex];
    //   console.log(startLinksIndex, startRechts);


      const buttonLinks = document.querySelector("#links");
      const buttonRechts = document.querySelector("#rechts");

      buttonLinks.innerText = startLinks;
      buttonRechts.innerText = startRechts;

      buttonLinks.addEventListener("click",buttonClicked);
      buttonRechts.addEventListener("click",buttonClicked);

      function buttonClicked(event) {
        // wenn nichts mehr zur auswahl steht, dann Meldung!
        if (coursesLeft.length == 0) {
            buttonLinks.removeEventListener("click",buttonClicked);
            buttonRechts.removeEventListener("click",buttonClicked);
      
            // console.log("ENDE!")
            if (event.target.id == "links") {
                buttonRechts.innerText = "← Gewinner";
                buttonLinks.style.backgroundColor = "#AED581";
                return;
            }
            else {
                buttonLinks.innerText = "Gewinner →";
                buttonRechts.style.backgroundColor = "#AED581";
                return;

            }
        }

        // zufallszahl erzeugen
          const newRndIndex = getRndInteger(0,coursesLeft.length - 1);
          const newRndCourse = coursesLeft[newRndIndex];
        coursesLeft = coursesLeft.filter((course,i)=>i !== newRndIndex );
        console.log(coursesLeft);

        // neuen kurs auswählen
        // aus "übrig" löschen

        if (event.target.id == "links") {
            buttonRechts.innerText = newRndCourse;
            console.log("Rechts ersetzen!")
        }
        else {
            console.log("Links ersetzen!")
            buttonLinks.innerText = newRndCourse;
        }
      }