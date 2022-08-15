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
            <img class="logo" src="../../public/assets/logo.png" />
            <ion-card-title class="titulo"> INICIAR SESIÓN </ion-card-title>
          </ion-card-header>
          <div class="div-contenedor">
            <form class="formulario">
              <div class="usuario">
                <label for="usuario">Usuario:</label>
                <input
                  type="text"
                  name="nombre"
                  placeholder="Ingrese su nombre de usuario"
                  required
                />
              </div>
              <br />

              <div class="contra">
                <label for="contra">Contraseña:</label>
                <input
                  type="password"
                  name="pass"
                  placeholder="Ingrese su contraseña"
                  required
                />
              </div>
              <ion-card-content class="botones">
                <ion-button class="limpiar" href="Productos">
                  INICIAR SESIÓN
                </ion-button>
              </ion-card-content>
              <br />
              <label class="extras">Olvidé mi contraseña</label>
              <a href="Registro">
                <label class="extras"
                  >¡No tienes una cuenta? <b> Regístrate aquí</b>
                </label>
              </a>
            </form>
          </div>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonIcon } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    timeout: { type: Number, default: 1000 },
  },
  name: "ListPage",
  components: {
    IonPage,
    IonContent,
    IonIcon,
  },
});
</script>
