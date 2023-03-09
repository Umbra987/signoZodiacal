var mesUser  = document.getElementById("mes");
var dia = document.getElementById("dia");
var enviar = document.getElementById("send");
var cuestionario = document.getElementById("principal");
var signoPage = document.getElementById("signo");
var nameSigno = document.getElementById("nameSigno");
var fechaSigno = document.getElementById("fechaSigno");
var textoSigno = document.getElementById("textoSigno");




infoSignos = [//Arreglo con la informacion de cada signo[nombre,descripcion,fecha] que se va a usar cada vez que un usuario quiera saber su signo zodiacal.
    //Capricornio
    ["Capricornio","Capricornio es un signo cardinal y de tierra, y uno de los signos del zodíaco más constante, sólido y apacible. También se caracteriza por ser prudente y práctico en todos los asuntos que le conciernen. Sus aspectos más negativos tienden hacia el pesimismo, la fijeza y la melancolía.","22/12 - 20/01"],
    //Acuario
    ["Acuario","Acuario es un signo fijo y de aire, y sin duda, es el signo con mayor capacidad para la invención de toda la rueda zodiacal. Simpático, original y brillante, Acuario también es un signo muy humanitario, al mismo tiempo que independiente e intelectual. Sus puntos negativos se encuentran en su inestabilidad e imprecisión y en su tendencia a llevar la contraria casi por sistema.","21/01 - 19/02"],
    //Piscis
    ["Piscis","Piscis es un signo mutable y de agua, también es el último signo del zodiaco, precisamente por eso, es el más rico y complejo de todos. Sensible ante el sufrimiento de los demás, responde con buena voluntad y ganas de ayudar. No le gusta sentirse preso y ni respeta las convenciones, así, por las buenas, aunque tampoco tiende a luchar contra lo establecido, sencillamente, discurre por otro lado.","20/02 - 20/03"],
    //Aries
    ["Aries","Aries forma parte de los signos cardinales y al mismo tiempo es un signo de fuego; también es el primer signo del zodíaco, precisamente por eso, simboliza el inicio, la creación. Se caracteriza por ser una persona rebosante de energía y entusiasmo; avanzada y aventurera, adora la libertad, los retos y las nuevas ideas.","21/03 - 19/04"],
    //Tauro
    ["Tauro","Tauro pertenece a los signos fijos y simultáneamente es un signo de tierra. La proyección del Sol en su nacimiento suele influir para que sean personas firmes, decididas y constantes en varios sentidos. También adoran sentir seguridad, por eso la buscan tanto, es como una necesidad constante en sus vidas.","20/04 - 20/05"],
    //Geminis
    ["Géminis","Géminis es un signo mutable que forma parte del elemento aire; como signo de los gemelos, su carácter es doble y bastante contradictorio por complejo. Por una parte es capaz de adaptarse con facilidad y rapidez a todo, pero por otra puede resultar hipócrita. Su distintivo común es la comunicación y el ingenio.","21/05 - 20/06"],
    //Cancer
    ["Cáncer","Cáncer es un signo cardinal y comprendido dentro de los signos de agua. De los signos zodiacales, su carácter es el menos claro; puede ser desde retraído, insociable y pelma, hasta deslumbrante, atractivo y admirado por los demás. A veces es demasiado soñador, por eso equivoca el mundo real con la utopía que ha construido en su cabeza: el refugio de las fantasías que adora.","21/06 - 22/07"],
    //Leo
    ["Leo","El signo de Leo es fijo y de fuego, también el signo más dominante del zodíaco. Creativo y abierto, tiene ambición, valor, fuerza, autonomía y total seguridad en sí mismo: sabe dónde quiere llegar y nada ni nadie podrá evitarlo. En contrapartida, sus puntos negativos pueden ser tantos como las virtudes que tiene: vanidad, egocentrismo, arrogancia, impostura y un genio de mil demonios, entre otros defectos.","23/07 - 22/08"],
    //Virgo
    ["Virgo","Virgo es un signo mutable y de tierra; representado por una virgen, es un signo caracterizado por su espíritu crítico, precisión, reserva, paciencia y convencionalismo. También es lógico, metódico y aplicado, le gusta aprender y es capaz de analizar las situaciones más complejas con una claridad pasmosa.","23/08 - 22/09"],
    //Libra
    ["Libra","Libra es un signo cardinal y de aire, se encuentra además entre los signos más refinados del zodíaco; tiene elegancia, encanto, diplomacia y buen gusto, ama la belleza, es muy curioso por naturaleza y odia los conflictos. Sus puntos negativos a veces son la frivolidad y un carácter voluble.","23/09 - 22/10"],
    //Escorpio
    ["Escorpio","Escorpio es un signo fijo y de agua; su potencia y energía emocional son únicas en todo el zodíaco. Tiene mucha imaginación e intuición, además de una gran capacidad para el análisis, fuerza de voluntad y firmeza, aunque también es muy sensible y emocional consigo mismo y con el entorno.","23/10 - 21/11"],
    //Sagitario
    ["Sagitario","Sagitario pertenece a los signos mutables y su elemento es el fuego; es uno de los signos más resplandecientes y positivos del zodíaco. También es versátil, adora las aventuras y buscar nuevos horizontes, ya que tiene una mente abierta a nuevas ideas y experiencias y mantiene una actitud decidida ante la adversidad; además, frecuentemente la suerte le acompaña.","22/11 - 21/12"]

]


enviar.addEventListener("click",()=> signoZodiacal());


function signoZodiacal(){
    mesUser = mes.value.toLowerCase();
    diaUser = parseInt(dia.value);


    if (((mesUser == "diciembre") && (diaUser >= 22 && diaUser <= 31)) || ((mesUser == "enero") && (diaUser >= 1 && diaUser <= 19))){

        nameSigno.innerHTML = infoSignos[0][0];
        textoSigno.innerHTML = infoSignos[0][1];
        fechaSigno.innerHTML = ("Fecha: " + infoSignos[0][2]);
        cuestionario.classList.add("none");
        signoPage.classList.remove("none");
    }

    else if (((mesUser == "enero") && (diaUser >= 20 && diaUser <= 31)) || ((mesUser == "febrero") && (diaUser >= 1 && diaUser <= 18))){

        nameSigno.innerHTML = infoSignos[1][0];
        textoSigno.innerHTML = infoSignos[1][1];
        fechaSigno.innerHTML = ("Fecha: " + infoSignos[1][2]);
        cuestionario.classList.add("none");
        signoPage.classList.remove("none");
    
        }
    else if (((mesUser == "febrero") && (diaUser >= 19 && diaUser <= 28)) || ((mesUser == "marzo") && (diaUser >= 1 && diaUser <= 20))){

        nameSigno.innerHTML = infoSignos[2][0];
        textoSigno.innerHTML = infoSignos[2][1];
        fechaSigno.innerHTML = ("Fecha: " + infoSignos[2][2]);
        cuestionario.classList.add("none");
        signoPage.classList.remove("none");
    }
    else if (((mesUser == "marzo") && (diaUser >= 21 && diaUser <= 31)) || ((mesUser == "abril") && (diaUser >= 1 && diaUser <= 19))){

        nameSigno.innerHTML = infoSignos[3][0];
        textoSigno.innerHTML = infoSignos[3][1];
        fechaSigno.innerHTML = ("Fecha: " + infoSignos[3][2]);
        cuestionario.classList.add("none");
        signoPage.classList.remove("none");
    }
    else if (((mesUser == "abril") && (diaUser >= 20 && diaUser <= 30)) || ((mesUser == "mayo") && (diaUser >= 1 && diaUser <= 20))){

        nameSigno.innerHTML = infoSignos[4][0];
        textoSigno.innerHTML = infoSignos[4][1];
        fechaSigno.innerHTML = ("Fecha: " + infoSignos[4][2]);
        cuestionario.classList.add("none");
        signoPage.classList.remove("none");
    }
    else if (((mesUser == "mayo") && (diaUser >= 21 && diaUser <= 31)) || ((mesUser == "junio") && (diaUser >= 1 && diaUser <= 20))){

        nameSigno.innerHTML = infoSignos[5][0];
        textoSigno.innerHTML = infoSignos[5][1];
        fechaSigno.innerHTML = ("Fecha: " + infoSignos[5][2]);
        cuestionario.classList.add("none");
        signoPage.classList.remove("none");
    }
    else if (((mesUser == "junio") && (diaUser >= 21 && diaUser <= 30)) || ((mesUser == "julio") && (diaUser >= 1 && diaUser <= 22))){

        nameSigno.innerHTML = infoSignos[6][0];
        textoSigno.innerHTML = infoSignos[6][1];
        fechaSigno.innerHTML = ("Fecha: " + infoSignos[6][2]);
        cuestionario.classList.add("none");
        signoPage.classList.remove("none");
    }
    else if (((mesUser == "julio") && (diaUser >= 23 && diaUser <= 31)) || ((mesUser == "agosto") && (diaUser >= 1 && diaUser <= 22))){

        nameSigno.innerHTML = infoSignos[7][0];
        textoSigno.innerHTML = infoSignos[7][1];
        fechaSigno.innerHTML = ("Fecha: " + infoSignos[7][2]);
        cuestionario.classList.add("none");
        signoPage.classList.remove("none");
    }   
    else if (((mesUser == "agosto") && (diaUser >= 23 && diaUser <= 31)) || ((mesUser == "septiembre") && (diaUser >= 1 && diaUser <= 22))){

        nameSigno.innerHTML = infoSignos[8][0];
        textoSigno.innerHTML = infoSignos[8][1];
        fechaSigno.innerHTML = ("Fecha: " + infoSignos[8][2]);
        cuestionario.classList.add("none");
        signoPage.classList.remove("none");
    }
    else if (((mesUser == "septiembre") && (diaUser >= 23 && diaUser <= 30)) || ((mesUser == "octubre") && (diaUser >= 1 && diaUser <= 22))){

        nameSigno.innerHTML = infoSignos[9][0];
        textoSigno.innerHTML = infoSignos[9][1];
        fechaSigno.innerHTML = ("Fecha: " + infoSignos[9][2]);
        cuestionario.classList.add("none");
        signoPage.classList.remove("none");
    }
    else if (((mesUser == "octubre") && (diaUser >= 23 && diaUser <= 31)) || ((mesUser == "noviembre") && (diaUser >= 1 && diaUser <= 21))){

        nameSigno.innerHTML = infoSignos[10][0];
        textoSigno.innerHTML = infoSignos[10][1];
        fechaSigno.innerHTML = ("Fecha: " + infoSignos[10][2]);
        cuestionario.classList.add("none");
        signoPage.classList.remove("none");
    }
    else if (((mesUser == "noviembre") && (diaUser >= 22 && diaUser <= 30)) || ((mesUser == "diciembre") && (diaUser >= 1 && diaUser <= 21))){

        nameSigno.innerHTML = infoSignos[11][0];
        textoSigno.innerHTML = infoSignos[11][1];
        fechaSigno.innerHTML = ("Fecha: " + infoSignos[11][2]);
        cuestionario.classList.add("none");
        signoPage.classList.remove("none");
    }
    else{
        alert("La fecha ingresa es incorrecta.")
    }
    }