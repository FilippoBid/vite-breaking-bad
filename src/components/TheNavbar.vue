<script>
import { store,getAnotherPage } from "../store";
export default {
    data() {
        return {
            store,

        }
    }
}
</script>


<template>
    <div class="h-25 p-5">
        <div class="d-flex me-auto flex-column gap-4 align-items-center w-25">
            <button @click="getAnotherPage()" class="btn rounded-5 btn-light">next page</button>
            <button  class="btn rounded-5 btn-light">prev page</button>

        </div>

    </div>
</template>



<style>

</style>