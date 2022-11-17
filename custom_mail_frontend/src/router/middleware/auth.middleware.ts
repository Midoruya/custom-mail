import { useUserStore } from 'stores/user.store';

export function hasAlreadyAuth(to: any, from: any, next: any) {
  const userStore = useUserStore();
  if (userStore.isAuth) next();
  else next('/auth/');
}

export function isAuth(to: any, from: any, next: any) {
  const userStore = useUserStore();
  if (userStore.isAuth) next('/');
  else next();
}
