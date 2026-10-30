import { createRouter, createWebHistory } from 'vue-router'
import BooksView from '@/views/BooksView.vue'
import HomeView from '@/views/HomeView.vue'
import EditBookView from '@/views/EditBookView.vue'
import AddBookView from '@/views/AddBookView.vue'
import DeleteBookView from '@/views/DeleteBookView.vue'
import LoginView from '@/views/LoginView.vue'
import MyBooksView from '@/services/MyBooksView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/books',
      name: 'books',
      component: BooksView,
    },
    {
      path: '/books/:id',
      name: 'book-detail',
      component: () => import('../views/BookDetailView.vue'),
      // props: true, // Permet de recevoir l'id directement comme une prop
    },
    {
      path: '/books/:id/edit',
      name: 'edit-book',
      component: EditBookView,
    },
    {
      path: '/book/add',
      name: 'add-book',
      component: AddBookView,
    },
    {
      path: '/book/:id/delete',
      name: 'delete-book',
      component: DeleteBookView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/my-books',
      name: 'my-books',
      component: MyBooksView,
    },
  ],
})

export default router
