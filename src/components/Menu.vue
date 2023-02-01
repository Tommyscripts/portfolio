<template>
  <div>
    <v-app class="mx-auto my-12" id="ocultar">
      <v-navigation-drawer width="auto" id="prueba">
        <v-list>
          <v-btn
            class="ma-2 white--text justify-space-around"
            color="black"
            :to="{ name: 'Home' }"
          >
            Home
            <v-icon right dark> mdi-home-account </v-icon>
          </v-btn>
        </v-list>
        <v-list>
          <v-btn
            class="ma-2 white--text justify-space-around"
            color="black"
            :to="{ name: 'Aboutme' }"
          >
            About me
            <v-icon right dark> mdi-account </v-icon>
          </v-btn>
        </v-list>
        <v-list>
          <v-btn
            class="ma-2 white--text justify-space-around"
            color="black"
            :to="{ name: 'Myprojects' }"
          >
            My projects
            <v-icon right dark> mdi-briefcase-account </v-icon>
          </v-btn>
        </v-list>
        <v-list>
          <v-btn
            class="ma-2 white--text justify-space-around"
            color="black"
            :to="{ name: 'Contactme' }"
          >
            Contact me
            <v-icon right dark> mdi-email-fast </v-icon>
          </v-btn>
        </v-list>
      </v-navigation-drawer>
    </v-app>
  </div>
</template>
<script></script>
<style>
#ocultar {
  background-color: rgba(255, 255, 255, 0);
  width: auto;
  height: 17em;
}
#prueba {
  background-color: rgba(126, 183, 239, 0.566);
}
</style>
