<template>
  <ion-page>
    <ion-content>
      <div class="background-container">
        <ion-card class="card1">
        <div class="div">
        <ion-card-header>
            <img class="img1" src="../../public/assets/logo.png" />
            <ion-card-title class="cardtitle">
              TILINER'S BAKERY
            </ion-card-title>
          </ion-card-header>
          <ion-card-content class="content">
            <ion-button class="botoninicio" href="Login"> INICIAR SESIÓN </ion-button>
          </ion-card-content>
        </div>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
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
    IonCardHeader,
    IonCardTitle,
  },
});
</script>
