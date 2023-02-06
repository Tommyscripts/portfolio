<template>
  <v-container class="fill-height my-7" fluid style="min-height: 434px" id="caja">
    <v-row>
      <v-col cols="6">
        <div>
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              class="mx-auto"
              color="grey-lighten-4"
              max-width="600"
              v-bind="props"
            >
              <v-img
                src="https://picsum.photos/350/165?random"
                height="125"
                cover
                class="bg-grey-lighten-2"
              >
                <v-expand-transition>
                  <div
                    v-if="isHovering"
                    class="d-flex transition-fast-in-fast-out bg-orange-darken-2 v-card--reveal"
                    style="height: 100%"
                  >
                    Arrow hero fue mi primer proyecto del bootcamp, hecho con
                    codigo vainilla, html,css,y js.
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-title class="text-h6"> Arrow hero </v-card-title>
            </v-card>
          </v-hover>
        </div>
      </v-col>
      <v-col cols="6">
        <div>
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              class="mx-auto"
              color="grey-lighten-4"
              max-width="600"
              v-bind="props"
            >
              <v-img
                src="https://picsum.photos/350/165?random"
                height="125"
                cover
                class="bg-grey-lighten-2"
              >
                <v-expand-transition>
                  <div
                    v-if="isHovering"
                    class="d-flex transition-fast-in-fast-out bg-orange-darken-2 v-card--reveal"
                    style="height: 100%"
                  >
                    Hotelerio fue nuestro segundo proyecto, consta de un
                    backend, hecho con nodejs, y un frontend, hecho con vue2. El
                    proyecto se dividion en dos partes, la parte 1 creando el
                    backend, y la parte 2 para el frontend.
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-title class="text-h6"> Hotelerio </v-card-title>
            </v-card>
          </v-hover>
        </div>
      </v-col>

      <v-col cols="6">
        <div>
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              class="mx-auto"
              color="grey-lighten-4"
              max-width="600"
              v-bind="props"
            >
              <v-img
                src="https://picsum.photos/350/165?random"
                height="125"
                cover
                class="bg-grey-lighten-2"
              >
                <v-expand-transition>
                  <div
                    v-if="isHovering"
                    class="d-flex transition-fast-in-fast-out bg-orange-darken-2 v-card--reveal"
                    style="height: 100%"
                  >
                    Este fue nuestro ultimo proyecto, durante 3 semanas, 1 semana para figma,
                    primera parte del proyecto la dedicamos al backend y la segunda parte, para el frontend,
                    el cual creamos con vue2.
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-title class="text-h6"> BurguerQueen </v-card-title>
            </v-card>
          </v-hover>
        </div>
      </v-col>

      <v-col cols="6">
        <div>
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              class="mx-auto"
              color="grey-lighten-4"
              max-width="600"
              v-bind="props"
            >
          <v-img
            src="https://picsum.photos/350/165?random"
            height="125"
            cover
            class="bg-grey-lighten-2"
          >
          <v-expand-transition>
                  <div
                    v-if="isHovering"
                    class="d-flex transition-fast-in-fast-out bg-orange-darken-2 v-card--reveal"
                    style="height: 100%"
                  >
                   Esta aplicación nacio de una idea que tuve para el último proyecto del bootcamp, pero debido al poco tiempo
                   que se nos daba para la realización de este, no era viable. Trata de una lista de productos que tenemos en casa,
                   una vez los consumismos, los añadimos a una lista, "lista de la compra" de esta manera al realizar nuestras compras,
                   podemos ahorrar no comprando productos de mas.
                  </div>
                </v-expand-transition>
        </v-img>
          <v-card-title class="text-h6"> My home economy </v-card-title>
        </v-card>
      </v-hover>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script></script>
<style>
#caja {
  background-color: rgba(126, 183, 239, 0.566);
}
.v-card--reveal {
  font-size: 1em;
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
}
</style>
