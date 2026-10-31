/* EXAMENS (DEF, BAC, BT…)
   dates : prochaine session. Ajoutez UNIQUEMENT des dates annoncées officiellement.
           Modèle : { nom:"BAC", debut:"2027-06-22", fin:"2027-06-25", resultats:"2027-07-20", note:"" }
           (dates au format AAAA-MM-JJ ; "resultats" facultatif)
   passes : rappel des sessions précédentes (indicatif).
   liens  : sites OFFICIELS pour consulter les résultats. Ne mettez un lien que s'il est confirmé (https:// obligatoire).
           Modèle : { nom:"Résultats du CNECE", url:"https://..." }
   Tant que "liens" est vide, l'appli indique que le lien officiel sera ajouté dès confirmation. */
window.EXAMENS = {
  dates: [],
  passes: [
    { annee: 2025,
      items: [
        { nom: "DEF", epreuves: "2 au 4 juin 2025",   resultats: "17 juillet 2025" },
        { nom: "BAC", epreuves: "23 au 26 juin 2025", resultats: "25 juillet 2025" }
      ],
      src: "D’après la presse malienne (session 2025). À titre indicatif." }
  ],
  liens: []
};
