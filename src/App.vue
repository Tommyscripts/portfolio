<template >
  <v-app >
    <v-main>
      <v-row>
        <v-col cols="12">
          <Menu />
        </v-col>
      </v-row>
      <v-row><v-col cols="12">
        <RouterView />
      </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <Footer />
        </v-col>
      </v-row>
    </v-main>
</v-app>
</template>

<script setup>
  import { RouterLink, RouterView } from "vue-router";
  import Menu from '@/components/Menu.vue'
  import Footer from '@/components/footer.vue'
  
</script>
<script>
export default {
  name: "App",
  components: {
    Menu,
    Footer,
  },
};
</script>