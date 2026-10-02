# Adaptation visuelle

Les fichiers existants sont tous conservés. Seuls le template et le CSS des trois
vues HomeView, BooksView et BookDetailView ont été adaptés.
Le contenu de leurs blocs script est conservé à l’identique.
App.vue, main.js, le routeur, BookService.js, db.json, package.json,
le verrou des dépendances et les configurations n’ont pas été modifiés.
Chaque vue contient son propre CSS scoped, sans feuille de style partagée.

## Affichage actuel

Les routes existantes restent /, /booksFrontend et /books/:id.
La liste et le détail affichent les données réelles de booksBackend.
La base fournie contient uniquement id, title et numberOfPages.
L’accueil garde un script vide : les cinq cartes sont des emplacements visuels.
Les champs absents de la base ne sont pas simulés par de fausses données.

## Six vues statiques ajoutées

LoginView, ProfileView, AddBookView, EditBookView, DeleteBookView et AdminView.
Elles ne sont pas encore reliées au routeur pour conserver ta configuration.
Leurs textes sont des exemples de maquette ; leurs boutons sont statiques.

## Ce qui reste à développer

Authentification et droits ; cinq derniers ouvrages ; filtres par catégorie ;
informations complètes des livres et profils ; PDF et couvertures ;
ajout, modification, suppression ; notes, moyenne et commentaires.
Aucune de ces fonctions n’a été ajoutée par cette adaptation HTML/CSS.

## Lancement du projet existant

Installer les dépendances avec npm install, puis lancer npm run dev.
Dans un second terminal : npx json-server --watch db.json --port 3000.
Conserver les exigences Node indiquées dans package.json.
