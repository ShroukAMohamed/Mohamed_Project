<script>
export default {
  data() {
    return {
      date: 'Dec 31, 2023 23:59:59'
    }
  },
  mounted() {
    const countDownDate = new Date(this.date).getTime()
    const counter = setInterval(() => {
      const dateNow = new Date().getTime()
      const dateDiff = countDownDate - dateNow
      const days = Math.floor(dateDiff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((dateDiff % (1000 * 60)) / 1000)

      if (
        document.querySelector('.days') &&
        document.querySelector('.hours') &&
        document.querySelector('.minutes') &&
        document.querySelector('.seconds')
      ) {
        document.querySelector('.days').innerHTML = days
        document.querySelector('.hours').innerHTML = hours
        document.querySelector('.minutes').innerHTML = minutes
        document.querySelector('.seconds').innerHTML = seconds
      } else {
        clearInterval(counter)
      }

      if (dateDiff < 0) {
        clearInterval(counter)
      }
    }, 1000)
  }
}
</script>
