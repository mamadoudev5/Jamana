/* NUMÉROS D'URGENCE
   ok:true  = confirmé par une source officielle (indiquée dans "src")
   ok:false = fourni mais pas encore confirmé : l'appli affiche « À confirmer »
   Passez ok à true (et ajoutez la source) dès qu'un numéro est vérifié. */
window.URGENCES = [
  { titre: "Numéros courants",
    items: [
      { nom: "Police", tel: "17", ok: true, src: "Plan national de numérotage du Mali (CRT, 2005)" },
      { nom: "Pompiers / Protection civile", tel: "18", ok: true, src: "Plan national de numérotage du Mali (CRT, 2005)" },
      { nom: "Santé (secours médicaux)", tel: "15", ok: true, src: "Plan national de numérotage du Mali (CRT, 2005)" }
    ] },
  { titre: "Numéros d’urgence nationaux (gratuits, 24h/24)",
    note: "Liste fournie, pas encore confirmée par une source officielle.",
    items: [
      { nom: "Police nationale", tel: "101", ok: false },
      { nom: "Gendarmerie nationale", tel: "111", ok: false },
      { nom: "Protection civile (pompiers / secours)", tel: "122", ok: false },
      { nom: "Garde nationale", tel: "145", ok: false },
      { nom: "Centre de coordination et de gestion des crises", tel: "144", ok: false },
      { nom: "Lutte contre la prolifération des armes légères", tel: "133", ok: false },
      { nom: "Office central des stupéfiants", tel: "135", ok: false }
    ] }
];
