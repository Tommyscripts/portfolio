<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer absolute dark  width="100%" permanent>
        <v-list >
          <v-list-item-icon >
            <v-btn class="ma-2 white--text" color="black" :to="{ name: 'Home' }">
              Home
            <v-icon right dark> mdi-home-account </v-icon>
          </v-btn>
          </v-list-item-icon>
        </v-list>
        <v-list>
          <v-list-item-icon>
            <v-btn class="ma-2 white--text" color="black" :to="{ name: 'Aboutme' }">
              About me
            <v-icon right dark> mdi-account </v-icon>
            </v-btn>
          </v-list-item-icon>
        </v-list>
        <v-list>
          <v-list-item-icon>
            <v-btn  class="ma-2 white--text" color="black" :to="{ name: 'Myprojects' }">
              My projects
            <v-icon right dark> mdi-briefcase-account </v-icon>
            </v-btn>
          </v-list-item-icon>
        </v-list>
        <v-list>
          <v-list-item-icon>
            <v-btn class="ma-2 white--text" color="black" :to="{ name: 'Contactme' }">
              Contact me
            <v-icon right dark> mdi-email-fast </v-icon>
            </v-btn>
          </v-list-item-icon>
        </v-list>
      </v-navigation-drawer>
    </v-app>
  </div>
</template>
<script>
</script>
