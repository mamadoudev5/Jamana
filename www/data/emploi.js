/* EMPLOI ET STAGES
   stages : offres de stage, bourses, formations. Ne mettez que des informations vérifiées.
   Modèle : { titre:"Nom du stage ou de la formation", organisme:"Organisme", conditions:"Pour qui, niveau, pièces",
              limite:"Date limite", contact:"Téléphone ou e-mail", lien:"https://...", ok:false }
   sources : flux RSS d'offres d'emploi (une ligne par site, https:// obligatoire).
             Testez l'adresse dans Chrome : une page XML avec des offres doit s'afficher.
             Tant que la liste est vide, la rubrique « Offres d'emploi » n'apparaît pas.
             Modèle : { id:"monsite", nom:"Nom du site", url:"https://exemple.ml/feed/" } */
window.EMPLOI = {
  stages: [],
  sources: []
};
