/* ANNUAIRE DES SERVICES
   t = mairie | etatcivil | commissariat | hopital | pharmacie | utilites
   ok:true = confirmé par une source officielle ; ok:false = « À confirmer » affiché dans l'appli.
   Modèle : { t:"mairie", nom:"Nom du service", quartier:"Quartier", adresse:"Adresse", tel:"+223XXXXXXXX",
              autres:["+223YYYYYYYY"], horaires:"Lun–Ven 8h–16h", lat:12.6392, lng:-8.0029,
              ok:false, src:"Source" }
   lat / lng facultatifs (sinon Google Maps cherche le nom du service). */
window.ANNUAIRE = {
  villes: [
    { nom: "Bamako", services: [
      { t:"mairie", nom:"Mairie centrale du District de Bamako", quartier:"Commune III", adresse:"Centre-Commercial, Place de la Liberté", tel:"+22320222946", autres:["+22320225540"], ok:false },
      { t:"mairie", nom:"Mairie de la Commune I", quartier:"Korofina Nord", adresse:"Korofina Nord, Bamako", tel:"+22320249065", ok:false },
      { t:"mairie", nom:"Mairie de la Commune II", quartier:"Missira", adresse:"Missira, Bamako", tel:"+22320216666", ok:false },
      { t:"mairie", nom:"Mairie de la Commune III", quartier:"Ouolofobougou", adresse:"Ouolofobougou, Bamako", tel:"+22320226276", ok:false },
      { t:"mairie", nom:"Mairie de la Commune IV", quartier:"Hamdallaye ACI 2000", adresse:"Hamdallaye ACI 2000, Bamako", tel:"+22320296484", ok:false },
      { t:"mairie", nom:"Mairie de la Commune V", quartier:"Bamako-Coura", adresse:"Bamako-Coura, Bamako", tel:"+22320282096", ok:false },
      { t:"mairie", nom:"Mairie de la Commune VI", quartier:"Sogoniko", adresse:"Sogoniko, Bamako", tel:"+22320203877", autres:["+22376328614"], ok:false },
      { t:"hopital", nom:"Hôpital du Point G", tel:"+22320225002", ok:false },
      { t:"hopital", nom:"Hôpital Gabriel Touré", tel:"+22320222712", ok:false },
      { t:"hopital", nom:"Clinique Pasteur", tel:"+22320291010", autres:["+22320291438","+22374914372"], ok:true, src:"Numéros +223 20 29 10 10 et 20 29 14 38 : Ambassade de France au Mali (2026). Le 74 91 43 72 est à confirmer." },
      { t:"hopital", nom:"Ambulance Ordre de Malte", tel:"+22376291470", ok:false },
      { t:"hopital", nom:"Centre médico-social de Bamako", tel:"+22320225072", ok:false },
      { t:"commissariat", nom:"Commissariat du 1er arrondissement", tel:"+22320225137", ok:false },
      { t:"commissariat", nom:"Commissariat du 2e arrondissement", tel:"+22320223429", ok:false },
      { t:"commissariat", nom:"Commissariat du 3e arrondissement", tel:"+22320212361", ok:false },
      { t:"commissariat", nom:"Commissariat du 4e arrondissement", tel:"+22320224247", ok:false },
      { t:"commissariat", nom:"Commissariat du 5e arrondissement", tel:"+22320294043", ok:false },
      { t:"commissariat", nom:"Commissariat du 6e arrondissement", tel:"+22320246688", ok:false },
      { t:"utilites", nom:"EDM-SA (Énergie du Mali – électricité)", tel:"+22320233768", ok:false },
      { t:"utilites", nom:"SOMAGEP-SA (eau)", tel:"+22320224030", ok:false }
    ] }
  ]
};
