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
            <ion-card-title class="titulo"> GALERIA </ion-card-title>
          </ion-card-header>
          <ion-card-content class="descripciongaleria">
            <ion-slides>
              <ion-slide>
                <ion-card class="galeriaimg">
                  <img src="assets/galeria1.jpg" />
                </ion-card>
              </ion-slide>

              <ion-slide>
                <ion-card class="galeriaimg">
                  <img src="assets/galeria2.jpg" />
                </ion-card>
              </ion-slide>

              <ion-slide>
                <ion-card class="galeriaimg">
                  <img src="assets/galeria3.jpg" />
                </ion-card>
              </ion-slide>

              <ion-slide>
                <ion-card class="galeriaimg">
                  <img src="assets/galeria4.jpeg" />
                </ion-card>
              </ion-slide>

              <ion-slide>
                <ion-card class="galeriaimg">
                  <img src="assets/galeria5.jpg" />
                </ion-card>
              </ion-slide>

            </ion-slides>
            Desliza para ver más...
          </ion-card-content>
          <br />
          <ion-card-content class="galeria">
            <ion-button class="galeria2" href="Productos">
              IR A PRODUCTOS
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
  IonSlide,
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
    IonSlide,
  },
  data() {
    return {
      menu: [
        {
          id: "1",
          nombre: "Pastel de chocolate",
          descripcion:
            "Exquisito pastel sabor chocolate, cubierto con el tradicional betún de chocolate, decorado con trozos de nuez.",
          portada: "/assets/pasteles.png",
        },
        {
          id: "2",
          nombre: "Pastel de Fresas con Crema",
          descripcion:
            "Exquisito pastel de vainilla, bañado con fresas, relleno de fresas con crema, cubierto por betún de fresas con crema decorado con una fresa.",
          portada: "/assets/cupcakes.png",
        },
        {
          id: "3",
          nombre: "Pastel de Moka",
          descripcion:
            "Sabor chocolate con café, cubierto con betún de crema sabor café con chocolate y decorado con una mezcla de granillo de chocolate oscuro y claro.",
          portada: "/assets/galletas.png",
        },
        {
          id: "4",
          nombre: "Panqué de arándanos",
          descripcion:
            "Delicioso panqué de arándanos con pan de naranja, ideal para tomar con café o leche.",
          portada: "/assets/galletas.png",
        },
        {
          id: "5",
          nombre: "Panqué de elote",
          descripcion:
            "Rico y diferente, nuestro panqué de elote te va a encantar y a tu familia le gustara mucho como postre.",
          portada: "/assets/galletas.png",
        },
      ],
    };
  },
});
</script>
