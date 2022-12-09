
<script>
import TheCard from "./TheCard.vue";
import { store } from "../store";
import 'bootstrap' 
export default {

    components: { TheCard },
    data() {
        return {
            store,

        }
    }
}
</script>

<template>

    <div class="row row-cols-5 g-5 rounded-5">
        <TheCard></TheCard>
    </div>

</template>

<style lang="scss">



</style>