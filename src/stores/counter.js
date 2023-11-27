import axios from 'axios'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    counter: 0
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    Post_Register() {
      const data = new FormData(event.target)

      return axios
        .post(
          'https://api.postman.com/collections/9544429-3453f1a8-6d48-4859-b143-c0da8047f568?access_key=PMAT-01HDW0VM1HPRM3YDAB79P0J0JH/register',
          data
        )
        .then(function (data) {
          console.log(data)
        })
    }
  }
})
