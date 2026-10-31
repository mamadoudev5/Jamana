/* CONCOURS ET BOURSES
   Un avis par ligne. Ne publiez que des avis issus de sources officielles.
   Modèle : { titre:"Concours de recrutement …", type:"concours" (ou "bourse"), organisme:"Ministère …",
              limite:"2027-03-31", lien:"https://…", note:"Pièces, niveau…", ok:false }
   limite : date limite AAAA-MM-JJ (l'avis disparaît automatiquement après cette date).
   ok:false affiche « À confirmer » ; passez ok à true une fois l'avis vérifié sur le site officiel. */
window.OPPORTUNITES = [];
