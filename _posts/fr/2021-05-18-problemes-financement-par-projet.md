---
layout: post
title: "Les problèmes du financement par projet pour les organisations TI"
ref: problems-project-based-funding
lang: fr
author: "Rémy Bernard, en collaboration avec l'équipe de Stratégie TI"
date: "2021-05-18"
last_modified: "2021-05-18"
excerpt_separator: <!--more-->
---
<!-- markdownlint-disable MD033 -->
<!-- the below cSpell statement says to ignore any text between HTML tags. e.g., it will ignore "th rowspan='2'" in this string: <th rowspan='2'> -->
<!-- cSpell:ignoreRegExp /\<[^\>]+\>/ -->
<!-- The img + em {} stylecheet selector is a hack to add caption to an image in markdown without using plugin: https://stackoverflow.com/questions/19331362/using-an-image-caption-in-markdown-jekyll -->

<style>
table, th, td {
  border: 1px solid black;
}

th {
  background-color: #ccccff;
}

img + em { display: inline-block; }
</style>

Dans ce billet, nous soulignons comment l'approche traditionnelle basée sur les projets pour le financement et la gestion des investissements technologiques nuit aux organisations TI et, par conséquent, à la capacité des ministères à [effectuer régulièrement des itérations et des améliorations](https://www.canada.ca/fr/gouvernement/systeme/gouvernement-numerique/normes-numeriques-gouvernement-canada.html).
Il s'agit de la suite d'un [billet précédent](https://sara-sabr.github.io/ITStrategy/2020/10/27/cio-digital-transformation.html) où nous avons suggéré que les directeurs principaux des finances (DPF) sont essentiels pour amener une vision de transformation numérique en une réalité.

<!--more-->

_Note : Ce blogue fera le lien vers des documents internes de EDSC, qui ne sont malheureusement accessibles qu'au sein du réseau de EDSC._

## Quelques données

Dans le [Centre de projet de EDSC](https://gpp-ppm.service.gc.ca/sites/pwa/Projects.aspx), nous constatons que 103 projets axés sur les TI sont en cours[^1], dont 101 nécessitent une présentation au Conseil du Trésor (présentation au CT).
Tous les projets ne sont pas de grande envergure; en fait, 61 % des 101 présentations au CT concernent des projets de moins de 5 millions de dollars, et 29 % des projets de moins de 500 000 dollars.

Faire de petits projets est bon.
Selon les [rapports CHAOS du Standish Group](https://standishgroup.com/sample_research_files/CHAOSReport2015-Final.pdf), les petits projets axés sur les TI ont un taux de résolution beaucoup plus élevé (résolution = dans les délais, dans le budget et avec des résultats satisfaisants).
Mais nous pensons que le poids de notre mécanisme de financement actuel [favorise involontairement les comportements à risque](https://sara-sabr.github.io/ITStrategy/2019/12/20/pourquoi-nous-favorisons-les-risques.html).

Un échantillon de 26 projets axés sur les TI[^2] montre qu'il faut, en moyenne, **1 291 jours pour qu'ils commencent leur phase d'exécution**.
Cela signifie que l'organisation TI, en moyenne, ne commence à développer et à tester la solution informatique qu'après 3,5 ans à compter du lancement du projet.

## Les effets des projets sur l'organisation informatique

Nous comprenons que les présentations au CT sont nécessaires pour obtenir les autorisations de dépenses et un financement supplémentaire[^3].
De plus, le logiciel étant essentiellement un processus de collaboration impliquant de nombreuses équipes[^4], la "projectisation" du travail (les procédures pour la conception d'un projet) est souvent considérée comme nécessaire pour formaliser les engagements entre les différentes équipes informatiques et coordonner ce travail jusqu'à son achèvement.

Les projets sont donc utilisés pour obtenir des fonds.
Fonds utilisés pour les dépenses salariales et non salariales de plusieurs équipes informatiques.
En un sens, les projets sont utilisés pour se disputer la priorité du travail du personnel informatique.
Le problème survient lorsqu'une grande quantité de planification préalable, le regroupement de divers travaux affectant des applications logicielles à grande échelle, et l'inévitable re-priorisation trimestrielle, se heurtent aux équipes informatiques.
Une équipe informatique responsable d'un produit doit constamment réajuster son travail en fonction de l'évolution de la demande, tout en fournissant des estimations de coûts à long terme pour ces projets individuels.
Cette équipe de produit dépensera beaucoup d'énergie à planifier les attentes de travail avec d'autres équipes informatiques homologues[^5] pour être en mesure de respecter les engagements qu'elle a pris envers tous ces projets.

<div style="display: block; width: inherit; text-align: center; line-height: 3;">
    <a href="/ITStrategy/assets/images/image-placeholder.png" style="display: block">
        <img src = "{{ site.baseurl }}/assets/images/project-planning-effect-on-product-teams-fr.png"
        alt = "Cette image présente la silhouette d'un dirigeant en haut à gauche. À droite de la silhouette du dirigeant, huit icônes sont affichées sur une ligne verticale représentant huit projets différents. Trois flèches partent de la ligne verticale des icônes de projet vers le profil latéral d'une tête. Le sommet de la tête est ouvert comme sur une charnière et à droite de la tête se trouvent 4 icônes disposées en ligne verticale représentant une personne portant une lourde boîte. Des cercles de couleur partent de ces icônes et vont jusqu'à l'intérieur de la tête ouverte. Sous la tête ouverte figurent les mots 'Équipe de produit'. Sous les 4 icônes à droite de la tête se trouvent les mots 'Équipes du flux de valeur'."
        style="width: 800px; height: inherit;"
        />
    </a>
</div>
<small>Figure 1. De multiples projets convergent sur une équipe produit, lui demandant de coordonner le travail avec les autres équipes impliquées dans le flux de valeur du produit.</small>

Lorsqu'une re-priorisation au niveau de l'organisation se produit, un changement à grande échelle des demandes se produit.
La capacité interne limitée de l'organisation informatique doit être réajustée pour suivre ce nouvel ensemble de priorités.
Cela entraîne généralement une réaffectation des fonds des services votés pour remplir les engagements pris à l'avance à l'égard des nouveaux projets prioritaires, car l'organisation TI ne peut pas attendre que de nouveaux fonds soient libérés (fonds provenant des programmes qui financent ces projets ou libérés par les présentations au CT).
L'organisation TI doit donc puiser dans les fonds dont elle dispose actuellement, soit dans le financement des programmes existants, soit dans leur [actualisation annuelle](https://www.oag-bvg.gc.ca/internet/Francais/parl_oag_200611_00_f_14968.html#ch0hd3d).
Le budget de base de l'organisation TI, qui finance sa main-d'œuvre salariale destinée à "maintenir les lumières allumées" (opérations de base), est alors fortement impliqué dans la réalisation du travail jusqu'à ce que le financement soit ajusté, que les processus de RH pour l'embauche de nouveaux postes soient terminés et que les processus d'approvisionnement pour l'acquisition de services soient terminés.

<div style="display: block; width: inherit; text-align: center; line-height: 3;">
    <a href="/ITStrategy/assets/images/project-reprioritization-effects-fr.png" style="display: block">
        <img src = "{{ site.baseurl }}/assets/images/project-reprioritization-effects-fr.png"
        alt = "Cette image illustre les effets d'une re-priorisation sur les équipes informatiques. Elle montre une image circulaire semblable à une horloge avec, à chaque intervalle de 7,5 minutes, une image différente. À midi, c'est l'activité de re-priorisation. À 7,5 minutes, une image montre que la planification est refaite, à 15 minutes, une image montre que les fonds sont en transit et ne sont pas encore disponibles, à 22,5 minutes, une image montre 2 personnes transportant de lourdes boîtes, à 30 minutes, une image montre que le processus d'embauche a commencé, à 37,5 minutes, une image montre que les fonds sont arrivés, à 45 minutes, une image montre un groupe de personnes avec la mention 'embauche de personnes spécialisées', et à 52,5 minutes, une image montre une personne avec une série de livres avec la mention 'courbe d'apprentissage'."
        style="width: 800px; height: inherit;"
        />
    </a>
</div>
<small>Figure 2. Une re-priorisation de projets oblige les équipes financées par les service votés à assumer la charge de travail jusqu'à ce que de nouveaux fonds soient disponibles pour augmenter la capacité interne.</small>

De plus, il convient de noter que cet effort de planification préalable est réalisé en utilisant la capacité interne et finit par être partiellement gaspillé[^6].
Réaliser un travail de planification et de conception approfondi qui nous enferme dans un ensemble de fonctionnalités rigidement définies ne tire pas profit du fait que les logiciels peuvent être rapidement et facilement modifiés (s'ils sont [bien architecturés](https://cloud.google.com/architecture/devops/devops-tech-architecture)) pour intégrer de nouvelles fonctionnalités dont nous n'avions même pas connaissance lorsque nous avons réalisé la planification et l'échéancier plusieurs mois auparavant.
En outre, au cours des étapes de collecte des besoins et de planification, les équipes informatiques font de nombreuses hypothèses et estimations, car chaque nouveau projet informatique est unique[^7].
De ce fait, les équipes n'ont qu'une expérience limitée de ce que nous leur demandons de faire et, par conséquent, la mise en œuvre réelle est remplie de nombreuses découvertes et hypothèses faites au départ qui se révèlent ensuite incorrectes lorsque le développement réel commence.

Enfin, c'est lors de la mise en œuvre, en production, que les utilisateurs finaux découvrent, des mois après le début du développement, si nous avons mal compris ce qui était souhaité, si de nouvelles conditions ont rendu une fonctionnalité particulière moins importante que d'autres, ou même si la fonctionnalité n'est plus utile.

En raison de l'habitude de conceptualiser en projet les gros investissements, une planification préalable à long terme est jugée nécessaire pour regrouper les efforts en un ensemble quantifiable pour la prise de décision de la haute direction.
Des décisions qui, pour être prises, s'attendent à ce que les estimations de coût et d'échéancier soient inclus dans ces ensembles.

## Des effets plus importants pour le ministère

La gestion de projet est une méthode d'investissement destinée à être utilisée lorsqu'il y a une grande certitude dans un problème et un grand accord envers une solution[^8].
Mais si nous n'en sommes pas sûrs, comme c'est le cas avec le passage au numérique où la "définition de fini" est prescrite par l'utilisateur final, quel instrument d'investissement pouvons-nous utiliser?

Un effet négatif de s'enfermer dans un délai de livraison trop long est que 50% des fonctionnalités des logiciels ne sont jamais utilisés ou n'atteignent pas leurs objectifs opérationnels[^9]. Même si les améliorations d'affaire devraient d'abord commencer par une recherche sur les utilisateurs, tant qu'une fonctionnalité n'est pas mise entre les mains de l'utilisateur, nous ne pouvons pas être sûrs à 100% de sa valeur.
En fait, une recherche de Microsoft a montré que seulement environ 1/3 des fonctionnalités bien conçues et bien étudiées dans les produits matures apportent une valeur ajoutée aux organisations[^10].

De nombreuses sources soulignent le faible taux de réussite des grands projets axés sur les TI[^11]. Cela est dû au fait que nous avions l'habitude de quantifier le "succès" comme étant le respect des délais, du budget et des exigences. Au cours des dernières années, des progrès considérables ont été réalisés dans la quantification du succès par rapport à "ce que cet investissement signifie pour les Canadiens" (notamment grâce aux [succès de notre réponse à la pandémie](https://nationalpost.com/opinion/john-ivison-amid-staggering-unemployment-rate-public-servants-processing-ei-claims-are-the-unsung-heroes)). Les autorités cherchent à s'assurer qu'un investissement particulier apporte une valeur ajoutée. Alors, comment quantifier cette valeur? Et comment donner confiance à ces autorités?

## Passer à une méthode différente de gestion d'investissements pour logiciels

Puisque nous nous attendons à ce que le passage au numérique signifie que les opérations d'affaires seront effectuées à l'aide de logiciels, il nous justifie de revoir la façon dont nous finançons les investissements en logiciels afin de permettre une rétroaction plus rapide entre les décideurs politiques et les utilisateurs finaux.
Ceci afin de répondre à la [deuxième norme numérique du gouvernement du Canada](https://www.canada.ca/en/government/system/digital-government/government-canada-digital-standards.html): effectuer régulièrement des itérations et des améliorations.

Nous examinons différentes méthodes favorisant la planification autour de feuilles de route de produits, avec un financement stable pour les flux de valeur composés de membres d'équipes multidisciplinaires capables de soutenir les demandes et de prendre des décisions opportunes reflétant les besoins des utilisateurs finaux, et une gouvernance qui mesure les progrès par le biais de logiciels fonctionnels plutôt que de documents de planification.

La gestion de produit accepte finalement que, bien que nous connaissions les objectifs à atteindre, nous ne pouvons pas prédire de manière adéquate les comportements des utilisateurs finaux.
Nous avons besoin d'un large éventail de compétences qui travaillent ensemble pour surveiller et améliorer continuellement le produit au rythme des besoins de l'utilisateur final.
Nous devons utiliser les fonds publics de manière responsable en naviguant dans cette incertitude par le biais de petites étapes itératives, en apportant des corrections de trajectoire à l'aide de preuves empiriques et en fournissant constamment de la valeur jusqu'à ce que l'utilisateur final nous dise que notre objectif est atteint.
Nous cherchons à voir si nous pouvons ajuster la boîte à outils de nos instruments de gestion des investissements, y compris la façon dont nous soumettons les présentations au CT, et libérer une capacité interne TI très nécessaire.

Un billet ultérieur sera publié pour partager nos réflexions sur le sujet de la gestion de produit et la façon dont nous pensons qu'elle pourrait être mise en œuvre dans le gouvernement.

## Notes

[^1]: Par "projet axé sur les TI", on entend un projet comportant une composante technologique. Le nombre 103 provient d'un capture du centre de projet datant du 2021-03-29 et comprend les projets dont le statut est approuvé (commencé ou non commencé) ou en attente.
[^2]: Il y avait 26 projets pour lesquels les données étaient suffisantes pour mesurer le délai moyen de démarrage de l'étape 4.
[^3]: L'approbation des dépenses signifie que le travail proposé (incorporé comme présentation au CT) s'aligne sur les priorités parlementaires et fait partie du mécanisme par lequel le gouvernement montre qu'il est responsable devant un parlement démocratiquement élu. Voir cet [excellent cours en ligne](https://csps-efpc.gc.ca/catalogue/courses-fra.aspx?code=F112) sur le sujet.
[^4]: De multiples ouvrages et recherches sur le sujet viennent appuyer cette affirmation, incluant [Team Topologies](https://teamtopologies.com/), [Project to Product](https://projecttoproduct.org/), [Leading the Transformation – Applying Agile and DevOps at Scale](https://itrevolution.com/about-the-book-leading-the-transformation/), et le [DevOps Research and Assessment (DORA) institute](https://www.devops-research.com/research.html)
[^5]: Alors que de petites applications logicielles peuvent être gérées par une seule équipe, les applications à grande échelle nécessitent une collaboration avec d'autres équipes telles que la sécurité informatique, les professionnels des données, l'assurance qualité, l'équipe de la plateforme, l'ingénierie infonuagique, les administrateurs système, et les architectes.
[^6]: Les auteurs du livre [Leading the Transformation](https://itrevolution.com/about-the-book-leading-the-transformation/) suggèrent que les coûts des logiciels augmentent de 20 à 30 % en raison de cette méthode "waterfall".
[^7]: Le logiciel est un processus créatif où chaque nouveau problème à résoudre est différent des précédents. Un projet logiciel ne peut pas simplement être quantifié en termes de nombre de lignes de code, de nombre de défauts à corriger ou de nombre d'exigences. Si vous êtes un professionnel de l'informatique, vous le savez. Si ce n'est pas le cas, cela est souligné dans les livres et les recherches [Team Topologies](https://teamtopologies.com/), [Project to Product](https://projecttoproduct.org/), [Leading the Transformation – Applying Agile and DevOps at Scale](https://itrevolution.com/about-the-book-leading-the-transformation/), et le [DevOps Research and Assessment (DORA) institute](https://www.devops-research.com/research.html)
[^8]: [What is Product Management in Government?](https://scottcolfer.com/2019/01/02/what-is-product-management.html) par Scott Colfer, chef de produit au gouvernement du Royaume-Uni
[^9]: Ronny Kohavi et al, [Online Experiments at Microsoft](https://ai.stanford.edu/~ronnyk/ExPThinkWeek2009Public.pdf), 2009
[^10]: Ronny Kohavi et al, [Online Experiments at Microsoft](https://ai.stanford.edu/~ronnyk/ExPThinkWeek2009Public.pdf), 2009, section 5.1
[^11]: [L'étude CHAOS du Standish Group](https://standishgroup.com/sample_research_files/CHAOSReport2015-Final.pdf), 5 rapports du Vérificateur Général ([2006 Novembre](https://www.oag-bvg.gc.ca/internet/Francais/parl_oag_200611_03_f_14971.html), [2010 Spring](https://www.oag-bvg.gc.ca/internet/Francais/parl_oag_201004_01_f_33714.html), [2011 June](https://www.oag-bvg.gc.ca/internet/Francais/parl_oag_201106_02_f_35370.html), [2015 Spring](https://www.oag-bvg.gc.ca/internet/Francais/parl_oag_201504_05_f_40351.html), [2018 Spring](https://www.oag-bvg.gc.ca/internet/Francais/parl_oag_201805_01_f_43033.html)), [McKinsey Digital sur la livraison de projets TI d'envergures](https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/delivering-large-scale-it-projects-on-time-on-budget-and-on-value?cid=soc-web), et les questions [de la chambre des communes de juin 2016 et mai 2019](https://large-government-of-canada-it-projects.github.io/) au sujet de projets TI de plus de 1 million de dollars
