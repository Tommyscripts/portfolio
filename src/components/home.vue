<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374" color="#009688">
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img cover height="250" src="../img/me.jpg"></v-img>

    <v-card-item>
      <v-card-title>Javier Cabrera Escoz</v-card-title>
    </v-card-item>

    <v-card-text>
      <div>
        Siempre me ha llamado la atención la tecnología y la informática, por
        cosas de la vida nunca pude dedicarme ni aprender a programar, debido a
        esto unos meses antes de la pandemia decidi hacer un curso de
        programación web, el cual tuvo sus problemas debido a la pandemia, y a
        otras circunstancias, poco despues consegui una subención para hacer un
        bootcamp, el cual realize sin pensarme dos veces, gracias a eso aprendí
        a programar.
        <br />
        Algo más sobre mi, me encanta leer, escribir, los videojuegos. Una de
        mis sagas favoritas es Metal Gear, me encanta el cine y ver series en mi
        tiempo libre.
      </div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>
  </v-card>

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
