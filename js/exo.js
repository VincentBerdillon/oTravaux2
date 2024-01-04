
//* OBJET AVANCÉ

const app = {

    hercule : {
        name : "Hercule",
        job : "Demi-Dieu",
        age : 35,
        departement : 75,
        arm : 60.5,
        inRelationship : true,
    },

    friends : ["Jupiter", "Junon", "Alcmène", "Déjanire"],
    title : document.createElement('h1'),
    titleBanner : document.querySelector("#header-banner"),
    available : document.querySelector("#availability"),
    profilName : document.querySelector("#profil-name"),
    menu : document.querySelector("#menu-toggler"),
    contact : document.querySelector("#contact"),
    percentageHercule : Math.round((base.vote.hercule)/((base.vote.hercule)+(base.vote.cesar))*100),
    percentageCesar : Math.round((base.vote.cesar)/((base.vote.hercule)+(base.vote.cesar))*100),
    trends : document.querySelectorAll(".people__popularity"),
    bar : document.querySelectorAll(".people__bar"),
    activitiesBloc : document.querySelector("#activities"),
    activitiesTasks : document.querySelector(".tasks"),


    init : function(){
        base.fillProfil(app.hercule);
        base.printFriends(app.friends);
        base.setBestFriend(app.friends[0]);
        app.createWorks(base.displayWork);
        app.setDisponibility(app.available);
        app.profilName.textContent = app.pseudo(app.hercule.name, app.hercule.departement);
        app.popularity(app.percentageHercule, app.percentageCesar);
        app.menu.addEventListener('click', app.handleMenu);
        app.contact.addEventListener('submit', app.handleSubmit);
        app.createTitle(app.title, app.titleBanner);
        app.showActivites("Hercule", true);
    },

    
   showActivites : function(perso, statut){
        for (i=0; i<base.activities.length; i++){
            if (base.activities[i].author === perso && base.activities[i].finished === statut){
                const activitiesItem = document.createElement('li');
                activitiesItem.textContent = base.activities[i].title;
                app.activitiesTasks.appendChild(activitiesItem);
                app.activitiesBloc.classList.remove("hidden");
            };
        };
        
    },


    createTitle : function(titleName, titleLoc){
        titleName.classList.add("banner__title");
        titleName.textContent = "Vous consultez le profil de Hercule";
        titleLoc.appendChild(titleName);
    },
  

    pseudo : function(prenom, departement){
        const pseudoHercule = `${prenom} du ${departement}`;
        return pseudoHercule;
    },
    
    createWorks : function(works){
        for (i=0;i<=11;i++){
            works(i);
        };
    },
    
    setDisponibility : function(disponibility){
    if(base.getHour()>=8 && base.getHour()<=20){
        disponibility.textContent = "Disponible";
    } else {
        disponibility.textContent = "Non disponible";
        disponibility.classList.add("off");
    };
    },
    
    handleMenu : function(event){
        const menuToggler = document.querySelector("#header-banner");
        menuToggler.classList.toggle("banner--open");
    },
    
    handleSubmit :function(event){
        event.preventDefault();
        alert("Hercule ne souhaite pas être dérangé");
    },
    
    popularity : function(percent1, percent2){
        app.trends[0].textContent = percent1 + "%";
        app.bar[0].style.width = percent1 +"%";
    
        app.trends[1].textContent = percent2 + "%";
        app.bar[1].style.width = percent2 +"%";
    },
    
}

app.init();



/*
//*CONSTANTES

const hercule = {
    name : "Hercule",
    job : "Demi-Dieu",
    age : 35,
    departement : 75,
    arm : 60.5,
    inRelationship : true,
};

const friends = ["Jupiter", "Junon", "Alcmène", "Déjanire"];

const title = document.createElement('h1');
const titleSpot = document.querySelector("#header-banner");


const available = document.querySelector("#availability");

const profilName = document.querySelector("#profil-name");

const menu = document.querySelector("#menu-toggler");

const contact = document.querySelector("#contact");

const percentageHercule = Math.round((base.vote.hercule)/((base.vote.hercule)+(base.vote.cesar))*100);
const percentageCesar = Math.round((base.vote.cesar)/((base.vote.hercule)+(base.vote.cesar))*100);

const trends = document.querySelectorAll(".people__popularity");
const bar = document.querySelectorAll(".people__bar");

//*PROCESSUS

base.fillProfil(hercule);
base.printFriends(friends);
base.setBestFriend(friends[0]);
createTitle(title, titleSpot);
createWorks(base.displayWork);
setDisponibility(available);

profilName.textContent = pseudo(hercule.name, hercule.departement);

popularity(percentageHercule, percentageCesar);




//*FONCTIONS

function createTitle(titleName, titleLoc){
    titleName.classList.add("banner__title");
    titleName.textContent = "Vous consultez le profil de Hercule";
    titleLoc.appendChild(title);
};

function pseudo (prenom, departement){
    const pseudoHercule = `${prenom} du ${departement}`;
    return pseudoHercule;
}

function createWorks (works){
    for (i=0;i<=11;i++){
        works(i);
    };
};

function setDisponibility (disponibility){
if(base.getHour()>=8 && base.getHour()<=20){
    disponibility.textContent = "Disponible";
} else {
    disponibility.textContent = "Non disponible";
    disponibility.classList.add("off");
};
};

function handleMenu (event){
    const menuToggler = document.querySelector("#header-banner");
    menuToggler.classList.toggle("banner--open");
}

function handleSubmit(event){
    event.preventDefault();
    alert("Hercule ne souhaite pas être dérangé");
}

function popularity (percent1, percent2){
    trends[0].textContent = percent1 + "%";
    bar[0].style.width = percent1 +"%";

    trends[1].textContent = percent2 + "%";
    bar[1].style.width = percent2 +"%";
}

//*ECOUTEURS

menu.addEventListener('click', handleMenu);

contact.addEventListener('submit', handleSubmit);
*/