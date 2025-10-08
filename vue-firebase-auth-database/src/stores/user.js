import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import { defineStore } from "pinia";
import { auth } from "../fireBaseConfig";
import router from "../router";
import { useDatabaseStore } from "./database";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    userData: null,
    loadingUser: false,
  }),
  actions: {
    async registerUser(email, password) {
      this.loadingUser = true;
      try {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        this.userData = { email: user.email, uid: user.uid };
        router.push({ name: "home" });
      } catch (error) {
        console.log(error);
      } finally {
        this.loadingUser = false;
      }
    },

    async loginUser(email, password) {
      this.loadingUser = true;
      try {
        const { user } = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        this.userData = { email: user.email, uid: user.uid };
        router.push({ name: "home" });
      } catch (error) {
        console.log(error);
      }finally {
        this.loadingUser = false;
      }
    },
    async logoutUser() {
     const databaseStore = useDatabaseStore();
     databaseStore.$reset();
      try {
        await signOut(auth);
        this.userData = null;
        router.push({ name: "login" });
      } catch (error) {
        console.log(error);
      }
    },
    currentUser(){
        return new Promise((resolve, reject) => {
            const unsubscribe = onAuthStateChanged(auth,(user) => {
                if(user){
                    this.userData = { email: user.email, uid: user.uid };
                } else {
                    this.userData = null;
                    const databaseStore = useDatabaseStore();
                    databaseStore.$reset();
                }
                resolve(user);
                unsubscribe();
            });
        })
    }
  },
});
