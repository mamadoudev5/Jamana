/* GARES ROUTIÈRES ET COMPAGNIES DE BUS
   t = gare | compagnie     ok:true = vérifié (indiquez la source dans "src"), ok:false = « À confirmer »
   Champs : adresse (texte libre) est facultatif.
   Modèle : { t:"gare", nom:"Nom de la gare ou de la compagnie", quartier:"Quartier",
              tel:"+223XXXXXXXX", autres:["+223YYYYYYYY"],
              destinations:"Ségou, Mopti, Sikasso…", horaires:"Départs tous les jours à 6h",
              lat:12.6392, lng:-8.0029, ok:false, src:"Source" }
   Ajoutez une ville : { nom:"Ville", lieux:[ ... ] } */
window.TRANSPORT = {
  villes: [
    { nom: "Bamako", lieux: [
      { t:"gare", nom:"Gare routière de Sogoniko", quartier:"Sogoniko (Commune VI)", destinations:"Destinations nationales et régionales (la plus grande gare routière de la capitale)", ok:false, src:"Source indiquée : Guide du Routard" },
      { t:"gare", nom:"Gare routière de Ngolonina", quartier:"Ngolonina", destinations:"Destinations diverses", ok:false },
      { t:"gare", nom:"Gare routière de Faladié", quartier:"Faladié (Commune VI)", ok:false },
      { t:"compagnie", nom:"SONEF Transport", quartier:"Plusieurs points", adresse:"Gare principale derrière les Halles de Bamako, en allant vers Niamakoro ; une gare à Badiala ; une autogare", ok:false },
      { t:"compagnie", nom:"BANI Transports", quartier:"Sogoniko", adresse:"Gare routière de Sogoniko", ok:false },
      { t:"compagnie", nom:"BITTAR Transports", quartier:"Sogoniko", adresse:"Gare routière de Sogoniko", ok:false },
      { t:"compagnie", nom:"BINKE Transport", quartier:"Daoudabougou", ok:false },
      { t:"compagnie", nom:"GANA Transports", quartier:"Médine", adresse:"Nouveau Marché de Médine", ok:false },
      { t:"compagnie", nom:"NOUR", adresse:"Axes principaux, comme l’Avenue de l’OUA, et autour de Sogoniko", ok:false },
      { t:"compagnie", nom:"Diarra Transport", adresse:"Axes principaux, comme l’Avenue de l’OUA, et autour de Sogoniko", ok:false },
      { t:"compagnie", nom:"Africa Tours Trans", adresse:"Axes principaux, comme l’Avenue de l’OUA, et autour de Sogoniko", ok:false }
    ] }
  ]
};
