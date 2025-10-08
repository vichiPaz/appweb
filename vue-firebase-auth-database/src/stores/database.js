import { auth, db } from "@/fireBaseConfig";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore/lite";
import { defineStore } from "pinia";
import { nanoid } from "nanoid";
import router from "@/router";

export const useDatabaseStore = defineStore("database", {
  state: () => ({
    documents: [],
    loadingDoc: false,
  }),
  actions: {
    async getUrls() {
      if (this.documents.length !== 0) return;
      this.loadingDoc = true;
      try {
        const q = query(
          collection(db, "urls"),
          where("user", "==", auth.currentUser.uid)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          // crear el documento y hacemos push
          this.documents.push({
            id: doc.id,
            // nos traemos las propiedades y los valores
            ...doc.data(),
          });
        });
      } catch (error) {
        console.log(error);
      } finally {
        this.loadingDoc = false;
      }
    },
    async addUrl(name) {
      try {
        // se va agregar a nuestra base de datos
        const objetoDoc = {
          name: name,
          short: nanoid(6),
          user: auth.currentUser.uid,
        };
        //vamos a agregar a la coleccion y lo esperamos
        const docRef = await addDoc(collection(db, "urls"), objetoDoc);
        //console.log("Document ID: ", docRef.id);
        this.documents.push({ ...objetoDoc, id: docRef.id });
      } catch (error) {
        console.log(error);
      }
    },
    async leerUrl(id) {
      try {
        const docRef = doc(db, "urls", id);
        const docSnap = await getDoc(docRef);
        return docSnap.data().name; 
      } catch (error) {
        console.log('leerUrl',error);
      }
    },
    async updateUrl(id, name) {
        try {
            const docRef = doc(db, "urls", id);
            await updateDoc(docRef, { name: name });
            //se necesita actualizar nuestro array document
            this.documents = this.documents.map((item) => item.id === id ? { ...item, name } : item);
            //pasar al home
            router.push({ name: "home" });
        } catch (error) {
            console.log(error);
        }
    },
    async deleteUrl(id) {
      try {
        const docRef = doc(db, "urls", id);
        await deleteDoc(docRef);
        //solucion para que elimine en tiempo real
        this.documents = this.documents.filter((item) => item.id !== id);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
