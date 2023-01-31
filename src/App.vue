<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row no-gutters>
          <v-col order="last">
            <v-img cover height="250" src="../img/me.jpg"></v-img>
          </v-col>
          <v-col>
            <v-row
              ><v-col cols="12">
                <RouterView />
              </v-col>
            </v-row>
          </v-col>
          <v-col order="first">
            <Menu />
          </v-col>
        </v-row>
      </v-container>
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
import Menu from "@/components/Menu.vue";
import Footer from "@/components/footer.vue";
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
