<script>
import { store,getAnotherPage} from "../store";

export default {
    
    
    data() {
        return {
            store,
           
           
            

        }
    },
   methods:{
    getAnotherPage

    
   }
    
    
}
</script>


<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item" ><a class="page-link" @click="getAnotherPage" href="#">Previous</a></li>
          <li class="page-item"><a class="page-link" @click="" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
      </nav>
 
</template>



<style>

</style>