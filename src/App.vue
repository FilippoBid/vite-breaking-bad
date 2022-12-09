<script>
import { store, getExternalData } from "./store";
import TheCardContainer from "./components/TheCardContainer.vue";
import TheNavbar from "./components/TheNavbar.vue";
import { onMounted } from "vue";

export default {

  components: { TheCardContainer,TheNavbar },

  data() {
    return {
      store,


    }

  },
  mounted() {
    getExternalData();

  }
}



</script>


<template>

<div class="container">

  <TheNavbar></TheNavbar>
  <TheCardContainer></TheCardContainer>

</div>

</template>

<style lang="scss">
@use "./style/general.scss"
</style>
