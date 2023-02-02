<template >
  <v-app >
    <v-main >
      <v-container>
        <v-row class="caja" no-gutters>
          <v-col order="last">
            <v-img cover height="250" src="../img/me.jpg"></v-img>
          </v-col>
          <v-col>
            <v-row
            class="caja"
              ><v-col  cols="12">
                <RouterView />
              </v-col>
            </v-row>
          </v-col>
          <v-col class="caja"  order="first">
            <Menu />
          </v-col>
        </v-row>
      </v-container>
      <v-row>
        <v-col  cols="12">
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
<script>

</script>
<style>
main {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 10;
    left:10;
    background: url( 'https://cdn.pixabay.com/photo/2016/03/26/13/09/organic-1280537_1280.jpg') no-repeat center center;
    background-size:cover;
  }
.caja{
  
    margin-right: -4px;
    vertical-align: top;
    padding: 10px;
    box-sizing: border-box;
    text-align: justify;
    overflow: hidden;
}
</style>