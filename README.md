## Concept

Ghost Recruter est un projet personnel de la Wild Code School avec une contrainte de temps(2 jours).
Je me suis mis dans le contexte de l’examen, c'est-à-dire  improviser le jour même pour trouver un sujet d’application Web et Mobile et réunir toutes les compétences d’activités type : développer un front-end et un back-end et faire le lien entre eux.
Ghost Recruter est une application communautaire qui permet de s’inscrire sur une liste de volontaires, et d'être affecté à des tâches de groupe(4 à 5 personnes avec des compétences différentes) choisies par le propriétaire de l’application.
## Fonctionnalités

-Public:
Pour s’inscrire sur la liste des volontaires, il suffit simplement de cliquer sur rejoindre sur la page d'accueil et rentrer ses coordonnées et la compétence sélectionnée.

-Administrateur:
Il y a ensuite une gestion des volontaires, l’ajout et la suppression des compétences en fonction de la conjecture actuelle des besoins.

Par la suite, je souhaite améliorer mon concept de base, et ainsi rajouter “la ville” aux coordonnées demandées lors de l’inscription sur la liste de volontaires pour créer des liens entre ceux qui sont dans la même zone géographique; et bien sûr la fonction de créer des groupes (j’avais déjà prévu une table dans ce but dans la base de données) et de les afficher sur la page d’accueil.


## Setup & Use
-Public:
il faut cliquez sur "Rejoindre" sur la page d'acceuil et remplir le formulaire et la choisir la compentence, on apparait ainsi sur la liste des volontaires.
Il faut attendre qu'une mission soit affecté par l'administrateur.

-Administrateur:
il faut se connecter en tant qu'admin et ainsi on peut gerer la liste de volontaires sur une page specifique ainsi qu'ajout et suppression des competences recherchées.

## Endpoints API :
Utilisateur:

    POST /api/users : Sert à la création d'un compte
    POST /api/login : Sert à l'authentification et à l'envoie d'un token avec les infos de l'utilisateurs dans un cookie
    GET /api/volunteers : Renvoie la liste des volontaires.
    GET /api/practices : Renvoie la liste des competences.


### Tools

- _Concurrently_ : Allows for several commands to run concurrently in the same CLI
- _Husky_ : Allows to execute specific commands that trigger on _git_ events
- _Vite_ : Alternative to _Create-React-App_, packaging less tools for a more fluid experience
- _ESLint_ : "Quality of code" tool, ensures chosen rules will be enforced
- _Prettier_ : "Quality of code" tool as well, focuses on the styleguide
- _ Airbnb Standard_ : One of the most known "standards", even though it's not officially linked to ES/JS

