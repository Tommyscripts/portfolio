<template >
  <div class="text-center" >
    <v-btn color="#009688"  class="ma-2 white--text" :to="{ name: 'Home' }" >
      Home
      <v-icon   right dark>
        mdi-home-account
      </v-icon>
    </v-btn>
    <v-btn color="#009688" class="ma-2 white--text" :to="{ name: 'Aboutme' }">
      About me
      <v-icon right dark>
        mdi-account
      </v-icon>
    </v-btn>
    <v-btn color="#009688" class="ma-2 white--text" :to="{ name: 'Myprojects' }">
      My projects
      <v-icon right dark>
        mdi-briefcase-account
      </v-icon>
    </v-btn>
    <v-btn color="#009688" class="ma-2 white--text" :to="{ name: 'Contactme' }">
      Contact me
      <v-icon right dark>
        mdi-email-fast
      </v-icon>
    </v-btn>
  </div>
</template>
<script>

</script>
