<script setup>
import { getBook } from '@/services/BookService'
import { updateBook } from '@/services/BookService'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const book = ref(null)

onMounted(async () => {
  try {
    const response = await getBook(route.params.id)
    book.value = response.data
  } finally {
  }
})
</script>

<template>
  <div class="page book-detail">
    <header class="entete">
      <RouterLink class="logo" :to="{ name: 'home' }">Passion lecture</RouterLink>
      <nav aria-label="Navigation principale">
        <RouterLink :to="{ name: 'home' }">Accueil</RouterLink>
        <RouterLink :to="{ name: 'books' }">Catalogue</RouterLink>
        <RouterLink :to="{ name: 'add-book' }">Ajouter un livre</RouterLink>
      </nav>
    </header>
    <section class="contenu" aria-label="Détail du livre">
      <RouterLink class="lien" :to="{ name: 'books' }">← Retour au catalogue</RouterLink>
      <div class="container formulaire" v-if="book">
        <div class="presentation-livre">
          <div class="couverture grande">{{ book.title }}</div>
          <div class="informations-livre">
            <h1>{{ book.title }}</h1>
            <div>{{ book.numberOfPages }} pages</div>
            <!-- Ne pas inventer les propriétés absentes de db.json. -->
            <p class="texte-manquant">{{ book.authorFirstName }}</p>
            <button class="bouton" type="button">Lire l’extrait PDF</button>
          </div>
        </div>
        <h2 class="sous-titre">Résumé</h2>
        <p class="texte-manquant">{{ book.comments }}</p>
        <!-- Actions visuelles seulement. Les droits et fonctions seront ajoutés plus tard. -->
        <div class="actions">
          <RouterLink :to="{ name: 'edit-book', params: { id: book.id } }">
            <button class="bouton secondaire" type="button">Modifier mon ouvrage</button>
          </RouterLink>

          <RouterLink :to="{ name: 'delete-book', params: { id: book.id } }">
            <button class="bouton secondaire" type="button">Supprimer mon ouvrage</button>
          </RouterLink>
        </div>
        <h2 class="sous-titre">Donner mon avis</h2>
        <div class="actions" aria-label="Note sur cinq">
          <button class="bouton secondaire" type="button">0</button>
          <button class="bouton secondaire" type="button">1</button>
          <button class="bouton secondaire" type="button">2</button>
          <button class="bouton secondaire" type="button">3</button>
          <button class="bouton secondaire" type="button">4</button>
          <button class="bouton secondaire" type="button">5</button>
        </div>
        <div class="champ">
          <label for="commentaire">Mon commentaire</label>
          <textarea
            id="commentaire"
            rows="3"
            placeholder="Écris ce que tu as pensé de ce livre…"
          ></textarea>
        </div>
        <button class="bouton" type="button">Publier mon avis</button>
        <h2 class="sous-titre">Commentaires</h2>
        <p class="texte-manquant">Les commentaires et la moyenne des notes seront affichés ici.</p>
      </div>
    </section>
    <footer>
      <strong>Passion lecture · Projet de classe</strong>
      <p>Créé par : [prénoms du groupe] · Contact : [adresse e-mail du groupe]</p>
    </footer>
  </div>
</template>

<style scoped>
/* 1. Réglages communs à toutes les pages */
* {
  box-sizing: border-box;
}

.page {
  margin: 0;
  color: #25332d;
  background-color: white;
  font-family: Inter, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.45;
}

.page {
  max-width: 1200px;
  margin: 0 auto;
}

h1,
h2,
h3,
p {
  margin: 0;
}

h1 {
  font-size: 32px;
}
h2 {
  font-size: 24px;
}
h3 {
  font-size: 16px;
}

/* Les liens gardent la couleur de leur parent. */
a {
  color: inherit;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
a:focus-visible,
button:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible {
  outline: 3px solid #276447;
  outline-offset: 3px;
}

/* 2. En-tête et pied de page */
.entete {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 32px;
  background-color: #f3f6f3;
}
.logo {
  flex-shrink: 0;
  width: 300px;
  font-size: 24px;
  font-weight: bold;
}
nav {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
}
footer {
  padding: 32px;
  background-color: #eef2ef;
  font-size: 14px;
}
footer p {
  margin-top: 6px;
  color: #5d6861;
  font-size: 13px;
}

/* 3. Contenu et boutons */
.contenu {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  padding: 64px;
}
.titre-accueil {
  font-size: 34px;
}
.introduction {
  font-size: 18px;
}
.sous-titre {
  font-size: 22px;
}
.petit,
.discret {
  font-size: 14px;
}
.discret {
  color: #627269;
}
.lien {
  color: #276447;
}
.bouton {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  padding: 10px 12px;
  border: 1px solid transparent;
  border-radius: 8px;
  background-color: #10b15c;
  color: white;
  font: inherit;
  line-height: 1.2;
  cursor: pointer;
}
.bouton:hover {
  background-color: #0c904b;
  text-decoration: none;
}
.secondaire {
  border-color: #b9c4bd;
  background-color: white;
  color: #25332d;
}
.secondaire:hover {
  background-color: #eef2ef;
}
.danger {
  background-color: #a43832;
}
.danger:hover {
  background-color: #842b27;
}
.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}

/* 4. Accueil : les cinq cartes */
.grille-livres {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 16px;
  width: 100%;
}
.carte-livre {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 12px;
  border: 1px solid #d8dfd9;
}
.carte-livre p {
  font-size: 13px;
}
.categorie {
  color: #627269;
}
/* Ces blocs remplacent les couvertures, comme dans la maquette. */
.couverture {
  display: flex;
  align-items: center;
  height: 155px;
  padding: 18px;
  background-color: #e7ede8;
  font-size: 18px;
  font-weight: bold;
}

/* 5. Listes du catalogue, du profil et de l'administration */
.liste-livres {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
}
.ligne-livre,
.ligne-admin,
.ligne-profil {
  display: grid;
  align-items: start;
  gap: 20px;
  padding: 18px;
  background-color: #f7f9f7;
}
.ligne-livre {
  grid-template-columns: 330fr 260fr 170fr 130fr;
}
.ligne-admin {
  grid-template-columns: 300fr 220fr 432fr;
}
.ligne-profil {
  width: 100%;
  grid-template-columns: 300fr 360fr 300fr;
  gap: 24px;
  padding: 20px;
  background-color: #f3f6f3;
}
.ligne-profil .bouton {
  justify-self: start;
}
.titre-livre {
  font-size: 18px;
  font-weight: bold;
}
.statistiques {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  font-size: 20px;
}

/* 6. Fiche d'un livre */
.presentation-livre {
  display: flex;
  gap: 32px;
  width: 100%;
}
.grande {
  flex: 0 0 210px;
  height: 270px;
}
.informations-livre {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  min-width: 0;
}
.auteur {
  font-size: 20px;
}

/* 7. Formulaires : un label est associé à chaque champ */
.formulaire {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  width: 100%;
}
.connexion {
  max-width: 600px;
}
.grille-formulaire {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  width: 100%;
}
.champ {
  display: flex;
  flex-direction: column;
  gap: 7px;
  width: 100%;
}
.champ label {
  font-size: 15px;
  font-weight: bold;
}
input,
select,
textarea {
  width: 100%;
  min-width: 0;
  height: 46px;
  padding: 12px;
  border: 1px solid #bcc6bf;
  border-radius: 4px;
  background-color: white;
  color: #25332d;
  font: inherit;
  font-size: 15px;
}
input::placeholder,
textarea::placeholder {
  color: #6b756f;
  opacity: 1;
}
textarea {
  min-height: 88px;
  resize: vertical;
}
.notation {
  padding: 0;
  border: 0;
  margin: 0;
}
.notation legend {
  margin-bottom: 24px;
  padding: 0;
  font-size: 22px;
  font-weight: bold;
}
/* Les boutons radio permettent de sélectionner une note sans JavaScript. */
.choix-note {
  position: relative;
  cursor: pointer;
}
.choix-note input {
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
  padding: 0;
}
.choix-note span {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 34px;
  min-height: 40px;
  border: 1px solid #b9c4bd;
  border-radius: 8px;
}
.choix-note input:checked + span {
  background-color: #276447;
  color: white;
}
.choix-note input:focus-visible + span {
  outline: 3px solid #276447;
  outline-offset: 3px;
}
.confirmation {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 800px;
  padding: 32px;
  background-color: #f7f9f7;
}

/* 8. Adaptation aux tablettes et téléphones */
@media (max-width: 1000px) {
  .entete {
    flex-wrap: wrap;
  }
  .contenu {
    padding: 40px;
  }
  .grille-livres {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
@media (max-width: 600px) {
  .entete,
  footer {
    padding: 24px;
  }
  .contenu {
    padding: 32px 24px;
  }
  .logo {
    width: auto;
  }
  nav {
    gap: 16px;
  }
  h1,
  .titre-accueil {
    font-size: 28px;
  }
  .grille-livres,
  .grille-formulaire {
    grid-template-columns: 1fr;
  }
  .ligne-livre,
  .ligne-admin,
  .ligne-profil {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  .presentation-livre {
    flex-direction: column;
  }
  .grande {
    flex: auto;
    width: 210px;
  }
  .confirmation {
    padding: 24px;
  }
  .statistiques {
    flex-direction: column;
    gap: 16px;
  }
}

/* Liens visuels sans navigation : aucune autre page n’est nécessaire. */
.lien-visuel {
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
}
.lien-visuel:hover {
  text-decoration: underline;
}
.lien-visuel.logo {
  font-size: 24px;
  font-weight: bold;
}
.lien-visuel.titre-livre {
  font-size: 18px;
  font-weight: bold;
}
.lien-visuel.lien {
  color: #276447;
}
.lien-visuel.petit {
  font-size: 14px;
}

.page {
  min-height: 100vh;
}
.texte-manquant {
  color: #627269;
  font-size: 14px;
}
.ligne-api {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  padding: 18px;
  background: #f7f9f7;
}
</style>
