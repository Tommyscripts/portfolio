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
              href="https://tommyscripts.github.io/ArrowHero/"
              target="_blank"
            >
              <v-img
                src="@/img/arrowhero.jpg"
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
                src="@/img/hotelerio.jpg"
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
              href="https://burgerqueens.netlify.app/"
              target="_blank"
            >
              <v-img
                src="@/img/burguerqueen.jpg"
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
                    Burguer Queen es una app, donde podras ver las 
                    hamburguesas canarias, y ademas votar por tu favorita.
                    Al visitar la p??gina el backend tarda un poco en "despertar".
                    
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
                   En proceso.
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
  font-size: 0.8em;
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
}
</style>
