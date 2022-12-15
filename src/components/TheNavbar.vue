<script>
import { store} from "../store";
import axios from 'axios';
import ThePagination from "./ThePagination.vue";
export default {
    components: { ThePagination },
    data() {
        return {
            store,
            gender: ""

        }
    },
    methods:{
        chiamataFiltroGender(){
            axios.get("https://rickandmortyapi.com/api/character/?gender="+ this.gender)
        .then((resp) => {
            store.characterList = resp.data.results;
            

        })
            



        },

    
   }
}
</script>


<template>
    <ThePagination></ThePagination>
    <select @change="chiamataFiltroGender()" class="form-select" aria-label="Default select example" v-model="this.gender" >
        <option selected disabled="true">FILTRA PER GENDER</option>
        <option value="male">MALE</option>
        <option value="female">FEMALE</option>
        <option value="unknow">UNKNOW</option>
      </select>
</template>



<style>

</style>