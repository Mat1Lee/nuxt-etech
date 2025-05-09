export default defineNuxtRouteMiddleware((to) => {
  if (!to.matched.length) {
    return '/404/'; 
  }
});
