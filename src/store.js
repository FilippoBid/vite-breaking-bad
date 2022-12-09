import { reactive } from 'vue';
import axios, { Axios } from 'axios';
export const store = reactive({
    characterList: [],
    pageNumber: 1 ,




    loading: false

})

export function getExternalData() {
    axios.get("https://rickandmortyapi.com/api/character")
        .then((resp) => {
            store.characterList = resp.data.results;

        })

}
export function getAnotherPage() {
    store.pageNumber++
    axios.get(`https://rickandmortyapi.com/api/character?page=${store.pageNumber}`)
        .then((resp) => {
            store.characterList = resp.data.results;

        })

}