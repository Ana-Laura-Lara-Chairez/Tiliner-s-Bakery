<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <center>
          <div class="menu">
            <h1>
              <ion-icon src="/assets/svg/menu-outline.svg"></ion-icon>
            </h1>
          </div>
        </center>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="contenedor">
        <ion-card class="contenedor1">
          <ion-card-header>
            <ion-card-title class="titulo"> PRODUCTOS </ion-card-title>
          </ion-card-header>
          <ion-card-content class="descripcion">
            <ion-card v-for="elementos in menu" :key="elementos.id" class="je">
              <img :src="elementos.portada" style="width: 150px;"/>
              <ion-label>
                <ion-card-title
                  style="
                    font-size: 22px;
                    margin-top: 10px;
                    color: rgb(63, 61, 61);
                    background: #ffb2b2;
                    padding: 2px;
                  "
                  >{{ elementos.nombre }}
                </ion-card-title>
                <ion-card-title class="extra"
                  >{{ elementos.descripcion }}
                </ion-card-title>
              </ion-label>
            </ion-card>
          </ion-card-content>
          <ion-card-content class="galeria">
            <ion-button class="galeria2" href="Galeria">
              VER GALERÍA
            </ion-button>
          </ion-card-content>
          <br />
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonContent,
  IonIcon,
  IonCardTitle,
  IonCardContent,
  IonCard,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    timeout: { type: Number, default: 1000 },
  },
  name: "ListPage",
  components: {
    IonPage,
    IonContent,
    IonCard,
    IonIcon,
    IonCardContent,
    IonCardTitle,
  },
  data() {
    return {
      menu: [
        {
          id: "1",
          nombre: "Pastel de chocolate",
          descripcion:
            "Exquisito pastel sabor chocolate, cubierto con el tradicional betún de chocolate, decorado con trozos de nuez.",
          portada: "/assets/pastel1.jpeg",
        },
        {
          id: "2",
          nombre: "Pastel de Fresas con Crema",
          descripcion:
            "Exquisito pastel de vainilla, bañado con fresas, relleno de fresas con crema, cubierto por betún de fresas con crema decorado con una fresa.",
          portada: "/assets/pastel2.png",
        },
        {
          id: "3",
          nombre: "Pastel de Moka",
          descripcion:
            "Sabor chocolate con café, cubierto con betún de crema sabor café con chocolate y decorado con una mezcla de granillo de chocolate oscuro y claro.",
          portada: "/assets/pastel3.jpg",
        },
        {
          id: "4",
          nombre: "Panqué de arándanos",
          descripcion:
            "Delicioso panqué de arándanos con pan de naranja, ideal para tomar con café o leche.",
          portada: "/assets/panque1.jpg",
        },
        {
          id: "5",
          nombre: "Panqué de elote",
          descripcion:
            "Rico y diferente, nuestro panqué de elote te va a encantar y a tu familia le gustara mucho como postre.",
          portada: "/assets/panque2.jpg",
        },
      ],
    };
  },
});
</script>
