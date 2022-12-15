<script>
import { store} from "../store";
import ThePagination from "./ThePagination.vue";
export default {
    components: { ThePagination },
    data() {
        return {
            store,
            gender: ""

        }
    }
}
</script>


<template>
    <ThePagination></ThePagination>
    <select class="form-select" aria-label="Default select example" v-model="this.gender" placeholder="FILTRA PER GENDER">
        <option selected disabled="true">FILTRA PER GENDER</option>
        <option value="1">MALE</option>
        <option value="2">FEMALE</option>
        <option value="3">UNKNOW</option>
      </select>
</template>



<style>

</style>