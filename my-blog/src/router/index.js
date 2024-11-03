import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '../views/Home-page.vue';
import PostDetail from '../views/PostDetail.vue';
import CreatePost from '../views/CreatePost.vue';
const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/post/:id',
    name: 'PostDetail',
    component: PostDetail
  },
  {
    path: '/create',
    name: 'CreatePost',
    component: CreatePost
  }
  
];

const router=createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;