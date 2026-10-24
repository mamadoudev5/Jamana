/* GARES ROUTIÈRES ET COMPAGNIES DE BUS
   t = gare | compagnie     ok:true = vérifié (indiquez la source dans "src"), ok:false = « À confirmer »
   Modèle : { t:"gare", nom:"Nom de la gare ou de la compagnie", quartier:"Quartier",
              tel:"+223XXXXXXXX", autres:["+223YYYYYYYY"],
              destinations:"Ségou, Mopti, Sikasso…", horaires:"Départs tous les jours à 6h",
              lat:12.6392, lng:-8.0029, ok:false, src:"Source" }
   Ajoutez une ville : { nom:"Ville", lieux:[ ... ] } */
window.TRANSPORT = {
  villes: [
    { nom: "Bamako", lieux: [] }
  ]
};
