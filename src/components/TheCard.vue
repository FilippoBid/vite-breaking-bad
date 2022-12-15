<script>
import { store } from "../store";
export default {
    data() {
        return {
            store,

        }
    },
    
}
</script>


<template> <!-- //creo il layout della singola card contenente le informazioni prese  -->

    <div class="col" v-for="(personaggio,index) in store.characterList" :key="index">
        <div class="card">
            <img class="card-img-top" :src="personaggio.image" alt="immagine di {{personaggio.name}}">
            <div class="card-body">
                <h4 class="card-title">{{personaggio.name}}</h4>
                <p class="card-text">razza : {{personaggio.species}}</p>
                <p class="card-text">stato : {{personaggio.status}}</p>
                <a href="#" class="btn btn-primary">go top</a>
            </div>
        </div>

    </div>

</template>



<style>

</style>