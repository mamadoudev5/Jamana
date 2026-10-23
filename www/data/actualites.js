/* SOURCES D'ACTUALITÉS (flux RSS)
   Une source = un journal. Pour tester une adresse : ouvrez-la dans Chrome ; si une page de texte
   XML avec des articles s'affiche, elle fonctionne. Utilisez toujours https://.
   ATTENTION : ces adresses n'ont pas encore été vérifiées. Si une source ne marche pas,
   l'appli l'indique sans planter : corrigez ou supprimez la ligne. */
window.SOURCES = [
  { id: "maliactu",      nom: "MaliActu",        url: "https://maliactu.net/feed/" },
  { id: "journaldumali", nom: "Journal du Mali", url: "https://www.journaldumali.com/feed/" }
];
