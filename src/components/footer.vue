<template>
  <v-footer id="footer" padless app>
    <v-card flat tile width="100%" class="red lighten-1 text-center">
      <v-card
        flat
        tile
        class="indigo lighten-1 white--text justify-center"
        color="#009688">
        <v-card-text class="center">
          <v-btn color="#000000">
            <a
              href="https://www.linkedin.com/in/javierescoz/"
              class="amber--text text--darken-1 ml-4">
              <v-icon size="24px" id="text" color="#E53935" dark rounded>
                mdi-linkedin
              </v-icon></a>
          </v-btn>
          <v-btn color="#000000">
            <a
              href="https://github.com/Tommyscripts"
              class="amber--text text--darken-1 ml-4">
              <v-icon size="24px" id="text" color="#E53935" dark rounded>
                mdi-github</v-icon>
            </a>
          </v-btn>
        </v-card-text>
        <v-card-text class="white--text">
          {{ new Date().toLocaleString() }}
        </v-card-text>
        <v-divider></v-divider>
      </v-card>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    items: ["default", "absolute", "fixed"],
    padless: true,
    variant: "default",
  }),
  computed: {
    localAttrs() {
      const attrs = {};

      if (this.variant === "default") {
        attrs.absolute = true;
        attrs.fixed = true;
      } else {
        attrs[this.variant] = true;
      }
      return attrs;
    },
  },
};
</script>
<style>
#footer {
  background-color: rgb(224, 237, 243);
  color: rgb(43, 39, 39);
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: .5rem;
  width: 100%;
  height:fit-content;
  /* min-height: 30px; */
  flex-shrink: 0;
}
@media(min-width: 900px) {
  #footer {
    flex-direction: row;
    justify-content: space-around;
    text-align: justify;
  }
}
</style>