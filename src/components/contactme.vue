<template>
  <div>
    <v-card id="fondo" :loading="loading" class="mx-auto my-12" max-width="374">
      Testing Contactme View
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
