/* OUTILS : conseils de santé, prévention des arnaques, calendrier, villes pour la météo.
   Conseils de santé : informations générales, À FAIRE RELIRE par un professionnel de santé avant diffusion large.
   Calendrier : jours fériés à date fixe (sources : listes publiques) ; dates religieuses = dates indicatives selon la lune,
   confirmées officiellement par le gouvernement (approx:true). Ajoutez examens, rentrée, etc. dans "evenements" :
   { date:"2027-06-10", titre:"Examen du DEF", note:"à confirmer" }  (ou via maj.json, clé "calendrier"). */
window.CONSEILS = {
 sante: [
 {
  "id": "brulure",
  "t": {
   "fr": "Brûlure",
   "en": "Burn"
  },
  "l": {
   "fr": [
    "Refroidissez la brûlure sous l’eau courante fraîche (pas glacée) pendant 10 à 20 minutes.",
    "Retirez bagues, bracelets et vêtements qui ne collent pas à la peau, avant que ça gonfle.",
    "Ne percez pas les cloques. Ne mettez ni beurre, ni dentifrice, ni huile, ni terre.",
    "Couvrez avec un linge propre et sec, sans serrer.",
    "Allez à l’hôpital si la brûlure est grande, profonde, au visage, aux mains ou aux parties intimes, ou si la victime est un enfant ou un bébé."
   ],
   "en": [
    "Cool the burn under cool running water (not ice-cold) for 10 to 20 minutes.",
    "Remove rings, bracelets and clothes that are not stuck to the skin, before it swells.",
    "Do not burst blisters. Do not apply butter, toothpaste, oil or soil.",
    "Cover with a clean, dry cloth, without pressing.",
    "Go to hospital if the burn is large, deep, on the face, hands or genitals, or if the victim is a child or baby."
   ]
  }
 },
 {
  "id": "saignement",
  "t": {
   "fr": "Saignement important",
   "en": "Heavy bleeding"
  },
  "l": {
   "fr": [
    "Allongez la personne et appuyez fort, avec un linge propre, directement sur la plaie. Gardez la pression.",
    "Si le linge se remplit de sang, ne le retirez pas : ajoutez-en un autre par-dessus.",
    "Si possible, surélevez le membre blessé.",
    "Appelez les secours si le sang ne s’arrête pas après quelques minutes, ou si la personne devient pâle, faible ou confuse."
   ],
   "en": [
    "Lay the person down and press firmly, with a clean cloth, directly on the wound. Keep pressing.",
    "If the cloth soaks through, do not remove it: add another on top.",
    "If possible, raise the injured limb.",
    "Call for help if the bleeding does not stop after a few minutes, or if the person becomes pale, weak or confused."
   ]
  }
 },
 {
  "id": "fievre",
  "t": {
   "fr": "Fièvre",
   "en": "Fever"
  },
  "l": {
   "fr": [
    "Faites boire souvent, habillez légèrement et restez dans un endroit frais.",
    "Chez un bébé de moins de 3 mois, un enfant, une femme enceinte ou une personne fragile, consultez rapidement.",
    "En zone de paludisme, la fièvre peut être un paludisme : faites un test de dépistage rapide dès que possible.",
    "Allez d’urgence à l’hôpital en cas de convulsions, nuque raide, grande somnolence, difficulté à respirer, taches sur la peau, ou fièvre de plus de 2 jours.",
    "Ne donnez un médicament qu’avec l’avis d’un pharmacien ou d’un médecin, surtout pour un enfant."
   ],
   "en": [
    "Give plenty of fluids, dress lightly and stay somewhere cool.",
    "For a baby under 3 months, a child, a pregnant woman or a frail person, get medical advice quickly.",
    "In malaria areas, a fever can be malaria: get a rapid test as soon as possible.",
    "Go to hospital urgently if there are convulsions, a stiff neck, great drowsiness, difficulty breathing, skin spots, or a fever lasting more than 2 days.",
    "Give medicine only on the advice of a pharmacist or doctor, especially for a child."
   ]
  }
 },
 {
  "id": "paludisme",
  "t": {
   "fr": "Paludisme (malaria)",
   "en": "Malaria"
  },
  "l": {
   "fr": [
    "Signes : fièvre, frissons, maux de tête, courbatures, vomissements, grande fatigue.",
    "Faites un test de dépistage rapide et consultez vite : le paludisme peut devenir grave en quelques jours, surtout chez l’enfant et la femme enceinte.",
    "Prévention : dormez sous une moustiquaire, videz les eaux stagnantes autour de la maison, protégez-vous des piqûres le soir.",
    "Prenez le traitement complet prescrit, même si vous allez mieux."
   ],
   "en": [
    "Signs: fever, chills, headache, body aches, vomiting, great tiredness.",
    "Get a rapid test and see a health worker quickly: malaria can become serious within days, especially in children and pregnant women.",
    "Prevention: sleep under a mosquito net, empty standing water around the house, protect yourself from bites in the evening.",
    "Take the full treatment you are prescribed, even if you feel better."
   ]
  }
 },
 {
  "id": "deshydratation",
  "t": {
   "fr": "Diarrhée et déshydratation",
   "en": "Diarrhoea and dehydration"
  },
  "l": {
   "fr": [
    "Buvez souvent, en petites quantités. Utilisez de préférence des sachets de sels de réhydratation orale (SRO) de la pharmacie ou du centre de santé.",
    "À défaut, mélangez dans 1 litre d’eau propre : 6 petites cuillères rases de sucre et une demi petite cuillère rase de sel.",
    "Continuez à nourrir l’enfant, et à allaiter le bébé.",
    "Consultez vite en cas de bébé ou jeune enfant, vomissements qui empêchent de boire, sang dans les selles, bouche très sèche, yeux creux, ou peu ou pas d’urine."
   ],
   "en": [
    "Drink often, in small amounts. Preferably use oral rehydration salts (ORS) sachets from the pharmacy or health centre.",
    "If you have none, mix in 1 litre of clean water: 6 level teaspoons of sugar and half a level teaspoon of salt.",
    "Keep feeding the child, and keep breastfeeding a baby.",
    "Get help quickly for a baby or young child, vomiting that stops drinking, blood in the stool, a very dry mouth, sunken eyes, or little or no urine."
   ]
  }
 },
 {
  "id": "chaleur",
  "t": {
   "fr": "Coup de chaleur",
   "en": "Heatstroke"
  },
  "l": {
   "fr": [
    "Mettez la personne à l’ombre, dans un endroit frais, et retirez les vêtements en trop.",
    "Rafraîchissez-la avec de l’eau fraîche et de l’air (éventail). Si elle est consciente, faites-la boire doucement.",
    "Appelez les secours si elle est confuse, très chaude, vomit ou perd connaissance.",
    "Prévention : buvez régulièrement, évitez l’effort aux heures les plus chaudes, couvrez la tête."
   ],
   "en": [
    "Move the person into the shade or somewhere cool and remove extra clothing.",
    "Cool them with cool water and air (fanning). If conscious, give small sips of water.",
    "Call for help if they are confused, very hot, vomiting or lose consciousness.",
    "Prevention: drink regularly, avoid effort in the hottest hours, cover the head."
   ]
  }
 },
 {
  "id": "serpent",
  "t": {
   "fr": "Morsure de serpent",
   "en": "Snake bite"
  },
  "l": {
   "fr": [
    "Restez calme, éloignez-vous du serpent et gardez la personne au repos.",
    "Immobilisez le membre mordu, à hauteur du cœur ou plus bas. Retirez bagues et bracelets.",
    "Allez à l’hôpital le plus vite possible, si possible en transportant la personne allongée.",
    "Ne coupez pas la plaie, ne sucez pas, ne posez pas de garrot serré, ne donnez pas d’alcool et ne perdez pas de temps avec des remèdes traditionnels.",
    "Si vous pouvez le faire sans danger, retenez la couleur et la forme du serpent."
   ],
   "en": [
    "Stay calm, move away from the snake and keep the person at rest.",
    "Keep the bitten limb still, at heart level or lower. Remove rings and bracelets.",
    "Get to hospital as fast as possible, carrying the person lying down if you can.",
    "Do not cut the wound, do not suck it, do not apply a tight tourniquet, do not give alcohol and do not lose time with traditional remedies.",
    "If you can do so safely, remember the snake’s colour and shape."
   ]
  }
 },
 {
  "id": "morsure",
  "t": {
   "fr": "Morsure de chien ou d’animal",
   "en": "Dog or animal bite"
  },
  "l": {
   "fr": [
    "Lavez longuement la plaie à l’eau et au savon, pendant au moins 15 minutes.",
    "Couvrez avec un pansement propre.",
    "Allez le jour même à l’hôpital ou au centre de santé : il faut évaluer le risque de rage et de tétanos, et le traitement doit être donné vite.",
    "Notez où se trouve l’animal, sans prendre de risque."
   ],
   "en": [
    "Wash the wound for a long time with soap and water, for at least 15 minutes.",
    "Cover with a clean dressing.",
    "Go to hospital or a health centre the same day: the risk of rabies and tetanus must be assessed, and treatment must be given quickly.",
    "Note where the animal is, without taking any risk."
   ]
  }
 },
 {
  "id": "etouffement",
  "t": {
   "fr": "Étouffement",
   "en": "Choking"
  },
  "l": {
   "fr": [
    "Si la personne tousse fort, encouragez-la à tousser.",
    "Si elle ne peut plus parler, tousser ni respirer : penchez-la en avant et donnez 5 tapes fortes dans le dos, entre les omoplates.",
    "Si ça ne marche pas : 5 compressions au-dessus du nombril, poing fermé, en tirant vers vous et vers le haut (méthode de Heimlich).",
    "Alternez 5 tapes et 5 compressions et appelez les secours.",
    "Bébé de moins d’un an : 5 tapes dans le dos, puis 5 pressions au milieu de la poitrine, bébé sur l’avant-bras, tête vers le bas."
   ],
   "en": [
    "If the person is coughing strongly, encourage them to keep coughing.",
    "If they cannot speak, cough or breathe: lean them forward and give 5 firm blows on the back, between the shoulder blades.",
    "If that does not work: 5 abdominal thrusts above the navel, with a closed fist, pulling inward and upward (Heimlich manoeuvre).",
    "Alternate 5 blows and 5 thrusts and call for help.",
    "Baby under one year: 5 back blows, then 5 chest pushes in the middle of the chest, baby along your forearm, head down."
   ]
  }
 },
 {
  "id": "fracture",
  "t": {
   "fr": "Entorse ou fracture",
   "en": "Sprain or fracture"
  },
  "l": {
   "fr": [
    "Ne bougez pas la zone blessée. Immobilisez-la dans la position où elle se trouve, avec une écharpe, un tissu ou une attelle de fortune.",
    "Mettez du froid (linge mouillé ou glace enveloppée) pour calmer la douleur.",
    "N’essayez pas de remettre l’os en place.",
    "Allez à l’hôpital. Appelez les secours si la blessure est à la tête, au dos ou au cou, ou si un os est visible."
   ],
   "en": [
    "Do not move the injured area. Keep it still in the position you find it, using a sling, cloth or makeshift splint.",
    "Apply something cold (wet cloth or wrapped ice) to ease the pain.",
    "Do not try to put the bone back in place.",
    "Go to hospital. Call for help if the injury is to the head, back or neck, or if a bone is visible."
   ]
  }
 },
 {
  "id": "intoxication",
  "t": {
   "fr": "Produit dangereux avalé",
   "en": "Swallowed harmful product"
  },
  "l": {
   "fr": [
    "Ne faites pas vomir la personne et ne lui donnez rien à boire, sauf avis d’un soignant.",
    "Gardez l’emballage ou le produit pour le montrer aux soignants.",
    "Appelez les secours ou allez immédiatement à l’hôpital."
   ],
   "en": [
    "Do not make the person vomit and do not give anything to drink, unless a health worker advises it.",
    "Keep the packaging or the product to show the health workers.",
    "Call for help or go to hospital immediately."
   ]
  }
 },
 {
  "id": "quand",
  "t": {
   "fr": "Quand appeler les urgences",
   "en": "When to call emergency services"
  },
  "l": {
   "fr": [
    "La personne ne répond plus ou perd connaissance.",
    "Difficulté à respirer, douleur forte dans la poitrine.",
    "Saignement qui ne s’arrête pas.",
    "Convulsions, ou visage qui tombe, bras qui devient faible, parole difficile.",
    "Femme enceinte avec saignement, forte douleur ou perte des eaux ; enfant très faible ou qui ne boit plus.",
    "Dans le doute, appelez : mieux vaut un appel de trop qu’un retard."
   ],
   "en": [
    "The person no longer responds or loses consciousness.",
    "Difficulty breathing, severe chest pain.",
    "Bleeding that does not stop.",
    "Convulsions, or a drooping face, a weak arm, difficulty speaking.",
    "A pregnant woman with bleeding, severe pain or waters breaking; a very weak child or one who will not drink.",
    "If in doubt, call: better one call too many than a delay."
   ]
  }
 }
],
 arnaques: [
 {
  "id": "gains",
  "t": {
   "fr": "Faux gains et faux cadeaux",
   "en": "Fake prizes and gifts"
  },
  "l": {
   "fr": [
    "On vous annonce que vous avez gagné de l’argent, un voyage ou un téléphone : c’est une arnaque. Un vrai gain ne demande jamais de payer des « frais » avant.",
    "N’envoyez jamais d’argent pour recevoir un gain.",
    "Ne cliquez pas sur les liens reçus par SMS ou WhatsApp de la part d’inconnus."
   ],
   "en": [
    "You are told you have won money, a trip or a phone: it is a scam. A real prize never asks you to pay “fees” first.",
    "Never send money to receive a prize.",
    "Do not click links sent by SMS or WhatsApp by strangers."
   ]
  }
 },
 {
  "id": "erreur",
  "t": {
   "fr": "Faux transfert « par erreur »",
   "en": "Fake “sent by mistake” transfer"
  },
  "l": {
   "fr": [
    "Quelqu’un dit s’être trompé de numéro et vous demande de lui renvoyer l’argent. Vérifiez votre solde réel avec le menu officiel de votre opérateur : de faux SMS de confirmation existent.",
    "Ne renvoyez rien avant d’avoir vérifié votre solde vous-même.",
    "En cas de doute, appelez le service client de votre opérateur."
   ],
   "en": [
    "Someone says they sent money to the wrong number and asks you to send it back. Check your real balance using your operator’s official menu: fake confirmation SMS exist.",
    "Do not send anything back before you have checked your balance yourself.",
    "If in doubt, call your operator’s customer service."
   ]
  }
 },
 {
  "id": "code",
  "t": {
   "fr": "Code secret et codes reçus par SMS",
   "en": "PIN and codes received by SMS"
  },
  "l": {
   "fr": [
    "Ne donnez jamais votre code secret (PIN) ni les codes reçus par SMS : ni à un agent, ni à un faux « employé de l’opérateur », ni à un proche qui vous le demande par message.",
    "Un vrai agent ne demande jamais votre code secret.",
    "Changez votre code si vous pensez que quelqu’un le connaît."
   ],
   "en": [
    "Never give your PIN or the codes you receive by SMS: not to an agent, not to a fake “operator employee”, not to a relative who asks for it by message.",
    "A genuine agent never asks for your PIN.",
    "Change your PIN if you think someone knows it."
   ]
  }
 },
 {
  "id": "appels",
  "t": {
   "fr": "Faux appels de l’opérateur ou de la banque",
   "en": "Fake calls from your operator or bank"
  },
  "l": {
   "fr": [
    "Méfiez-vous des appels ou messages qui vous pressent : « votre compte va être bloqué », « confirmez votre code ».",
    "Raccrochez et rappelez vous-même le service client, avec le numéro officiel de l’opérateur.",
    "Ne suivez jamais les instructions d’un inconnu pour « débloquer » votre compte."
   ],
   "en": [
    "Be wary of calls or messages that rush you: “your account will be blocked”, “confirm your code”.",
    "Hang up and call customer service yourself, using the operator’s official number.",
    "Never follow a stranger’s instructions to “unblock” your account."
   ]
  }
 },
 {
  "id": "whatsapp",
  "t": {
   "fr": "Compte WhatsApp piraté",
   "en": "Hacked WhatsApp account"
  },
  "l": {
   "fr": [
    "Ne donnez jamais à personne le code à 6 chiffres reçu par WhatsApp.",
    "Activez la vérification en deux étapes dans les paramètres de WhatsApp.",
    "Si un proche vous demande de l’argent par message, appelez-le pour vérifier avant d’envoyer quoi que ce soit."
   ],
   "en": [
    "Never give anyone the 6-digit code you receive from WhatsApp.",
    "Turn on two-step verification in WhatsApp settings.",
    "If a relative asks you for money by message, call them to check before sending anything."
   ]
  }
 },
 {
  "id": "vente",
  "t": {
   "fr": "Faux vendeurs et fausses annonces",
   "en": "Fake sellers and fake adverts"
  },
  "l": {
   "fr": [
    "Ne payez jamais d’avance un article que vous n’avez pas vu, surtout si le prix est très bas.",
    "Préférez une remise en main propre dans un lieu public, et vérifiez l’article avant de payer.",
    "Méfiez-vous des vendeurs qui refusent de se montrer, d’appeler ou de se rencontrer."
   ],
   "en": [
    "Never pay in advance for an item you have not seen, especially if the price is very low.",
    "Prefer handing over in person in a public place, and check the item before paying.",
    "Be wary of sellers who refuse to show themselves, to call or to meet."
   ]
  }
 },
 {
  "id": "promesses",
  "t": {
   "fr": "Fausses offres d’emploi, bourses et visas",
   "en": "Fake job, scholarship and visa offers"
  },
  "l": {
   "fr": [
    "On ne paie pas pour obtenir un emploi, une bourse ou un visa « garanti » par un intermédiaire inconnu.",
    "Vérifiez toujours l’offre sur le site officiel de l’organisme ou de l’ambassade.",
    "Ne donnez pas vos documents d’identité à quelqu’un que vous ne connaissez pas."
   ],
   "en": [
    "You do not pay to get a job, a scholarship or a “guaranteed” visa from an unknown intermediary.",
    "Always check the offer on the official website of the organisation or embassy.",
    "Do not give your ID documents to someone you do not know."
   ]
  }
 },
 {
  "id": "agent",
  "t": {
   "fr": "Bonnes habitudes avec Mobile Money",
   "en": "Good Mobile Money habits"
  },
  "l": {
   "fr": [
    "Faites vos opérations dans un point agréé ou depuis votre propre téléphone.",
    "Vérifiez le nom et le numéro du destinataire avant de valider.",
    "Gardez les messages et reçus de vos opérations, surtout pour les montants importants.",
    "Ne prêtez pas votre téléphone et ne notez pas votre code secret dessus."
   ],
   "en": [
    "Make your transactions at an authorised point or from your own phone.",
    "Check the recipient’s name and number before confirming.",
    "Keep the messages and receipts of your transactions, especially for large amounts.",
    "Do not lend your phone and do not write your PIN on it."
   ]
  }
 },
 {
  "id": "victime",
  "t": {
   "fr": "Si vous êtes victime",
   "en": "If you are a victim"
  },
  "l": {
   "fr": [
    "Contactez tout de suite le service client de votre opérateur (Orange Money, Moov, Wave…) pour signaler la fraude et demander de bloquer l’opération ou le compte.",
    "Notez l’heure, le numéro, le montant, et gardez les captures d’écran et les messages.",
    "Déposez plainte au commissariat ou à la gendarmerie avec ces preuves.",
    "Si votre compte WhatsApp est piraté, prévenez vos proches pour qu’ils ne répondent pas aux demandes d’argent."
   ],
   "en": [
    "Contact your operator’s customer service straight away (Orange Money, Moov, Wave…) to report the fraud and ask for the transaction or account to be blocked.",
    "Note the time, the number and the amount, and keep screenshots and messages.",
    "File a complaint at the police station or gendarmerie with this evidence.",
    "If your WhatsApp account is hacked, warn your contacts so they do not answer requests for money."
   ]
  }
 }
]
};
window.CALENDRIER = {
 "fetes": [
  {
   "m": 1,
   "j": 1,
   "titre": {
    "fr": "Jour de l’An",
    "en": "New Year’s Day"
   }
  },
  {
   "m": 1,
   "j": 14,
   "titre": {
    "fr": "Journée de la Souveraineté retrouvée",
    "en": "Day of Regained Sovereignty"
   },
   "ok": false
  },
  {
   "m": 1,
   "j": 20,
   "titre": {
    "fr": "Fête de l’Armée",
    "en": "Armed Forces Day"
   }
  },
  {
   "m": 3,
   "j": 26,
   "titre": {
    "fr": "Journée des Martyrs",
    "en": "Martyrs’ Day"
   }
  },
  {
   "m": 5,
   "j": 1,
   "titre": {
    "fr": "Fête du Travail",
    "en": "Labour Day"
   }
  },
  {
   "m": 5,
   "j": 25,
   "titre": {
    "fr": "Journée de l’Afrique",
    "en": "Africa Day"
   }
  },
  {
   "m": 9,
   "j": 22,
   "titre": {
    "fr": "Fête de l’Indépendance",
    "en": "Independence Day"
   }
  },
  {
   "m": 12,
   "j": 25,
   "titre": {
    "fr": "Noël",
    "en": "Christmas Day"
   }
  }
 ],
 "mobiles": [
  {
   "date": "2027-03-10",
   "titre": {
    "fr": "Korité (fin du Ramadan)",
    "en": "Korité (end of Ramadan)"
   },
   "approx": true
  },
  {
   "date": "2027-03-29",
   "titre": {
    "fr": "Lundi de Pâques",
    "en": "Easter Monday"
   },
   "approx": false
  },
  {
   "date": "2027-05-17",
   "titre": {
    "fr": "Tabaski (fête du Sacrifice)",
    "en": "Tabaski (Feast of Sacrifice)"
   },
   "approx": true
  },
  {
   "date": "2027-08-15",
   "titre": {
    "fr": "Maouloud (naissance du Prophète)",
    "en": "Maouloud (Prophet’s birthday)"
   },
   "approx": true
  }
 ],
 "evenements": []
};
/* Coordonnées approximatives des villes (suffisant pour la météo). */
window.METEO = [
 {
  "id": "bamako",
  "nom": "Bamako",
  "lat": 12.64,
  "lng": -8.0
 },
 {
  "id": "kayes",
  "nom": "Kayes",
  "lat": 14.45,
  "lng": -11.44
 },
 {
  "id": "koulikoro",
  "nom": "Koulikoro",
  "lat": 12.86,
  "lng": -7.56
 },
 {
  "id": "sikasso",
  "nom": "Sikasso",
  "lat": 11.32,
  "lng": -5.67
 },
 {
  "id": "segou",
  "nom": "Ségou",
  "lat": 13.43,
  "lng": -6.26
 },
 {
  "id": "mopti",
  "nom": "Mopti",
  "lat": 14.49,
  "lng": -4.2
 },
 {
  "id": "tombouctou",
  "nom": "Tombouctou",
  "lat": 16.77,
  "lng": -3.01
 },
 {
  "id": "gao",
  "nom": "Gao",
  "lat": 16.27,
  "lng": -0.04
 },
 {
  "id": "kidal",
  "nom": "Kidal",
  "lat": 18.44,
  "lng": 1.41
 }
];
