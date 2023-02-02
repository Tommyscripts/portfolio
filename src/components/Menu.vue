<template>
  <div>
    <v-sheet
      height="400"
      class="mx-auto my-9 overflow-hidden"
      style="position: relative"
      id="prueba"
    >
      <v-container class="fill-height">
        <v-row align="center" justify="center">
          <v-btn
            class="ma-2 white--text justify-space-around"
            color="light-blue darken-1"
            dark
            @click.stop="drawer = !drawer"
          >
            Menu
          </v-btn>
        </v-row>
      </v-container>

      <v-navigation-drawer v-model="drawer" absolute temporary id="prueba">
        <v-divider></v-divider>
        <v-list dense>
          <v-list>
            <v-btn
              class="ma-2 white--text justify-space-around"
              color="light-blue darken-1"
              :to="{ name: 'Home' }"
            >
              Home
              <v-icon right dark> mdi-home-account </v-icon>
            </v-btn>
          </v-list>
          <v-list>
            <v-btn
              class="ma-2 white--text justify-space-around"
              color="light-blue darken-1"
              :to="{ name: 'Aboutme' }"
            >
              About me
              <v-icon right dark> mdi-account </v-icon>
            </v-btn>
          </v-list>
          <v-list>
            <v-btn
              class="ma-2 white--text justify-space-around"
              color="light-blue darken-1"
              :to="{ name: 'Myprojects' }"
            >
              My projects
              <v-icon right dark> mdi-briefcase-account </v-icon>
            </v-btn>
          </v-list>
          <v-list>
            <v-btn
              class="ma-2 white--text justify-space-around"
              color="light-blue darken-1"
              :to="{ name: 'Contactme' }"
            >
              Contact me
              <v-icon right dark> mdi-email-fast </v-icon>
            </v-btn>
          </v-list>
          <v-list-item> </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-sheet>
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawer: null,
      items: [
        { title: "Home", icon: "mdi-view-dashboard" },
        { title: "About", icon: "mdi-forum" },
      ],
    };
  },
};
</script>
<style>
#ocultar {
  background-color: rgba(255, 255, 255, 0);
  width: auto;
  padding-right: 100rem;
}
#prueba {
  background-color: rgba(126, 183, 239, 0.566);
}
</style>
