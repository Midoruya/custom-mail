import { defineStore } from 'pinia';
import backend from 'src/backend';

export const useUserStore = defineStore({
  id: 'userStore',
  state: () => ({
    email: '',
    token: '',
  }),
  getters: {
    isAuth: ({ email, token }: { email: string; token: string }) =>
      email !== '' && token !== '',
  },
  actions: {
    login(email: string, password: string): void {
      backend.auth
        .login(email, password)
        .then((response) => {
          this.email = response.mail;
          this.token = response.token;
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    },
    register(email: string, password: string): void {
      backend.auth
        .register(email, password)
        .then((response) => {
          this.email = response.mail;
          this.token = response.token;
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    },
  },
});
