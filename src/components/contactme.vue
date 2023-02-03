<template>
  <div>
    <v-card
    class="mx-auto"
    max-width="500" >
    <v-card-item class="bg-cyan-darken-1">
      <v-card-title>
        <span class="text-h5">Javier Cabrera</span>
      </v-card-title>

      <template v-slot:append>
        <v-defaults-provider
          :defaults="{
            VBtn: {
              variant: 'text',
              density: 'comfortable',
            }
          }"
        >

        </v-defaults-provider>
      </template>
    </v-card-item>

    <v-list class="bg-blue">


      <v-divider inset></v-divider>


      <v-divider inset></v-divider>

      <v-list-item
      
      href="mailto: javier.cabrera.escoz@gmail.com"
        prepend-icon="mdi-email"
        title="javier.cabrera.escoz@gmail.com"
      ></v-list-item>
      <v-list-item prepend-icon="mdi-linkedin" href="https://www.linkedin.com/in/javierescoz/">
          Linkedin
      </v-list-item>
      <v-list-item prepend-icon="mdi-github" href="https://github.com/Tommyscripts">
        Github
      </v-list-item>
    </v-list>
    <v-textarea class="bg-white"  placeholder="Puede clickar en el correo para mandarme un email, o rellenar este campo y darle al boton enviar. Además de tener mi github y mi linkedin." variant="outlined"></v-textarea>
    <v-btn color="light-blue darken-1" >Enviar</v-btn>
  </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    selection: 1,
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>
