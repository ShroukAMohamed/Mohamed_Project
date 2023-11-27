<script>
export default {
  mounted() {
    // const dropArea = document.getElementById('drop-area')
    const inputFile = document.getElementById('input-file')
    const imageView = document.getElementById('img-view')

    inputFile.addEventListener('change', uploadImage)
    function uploadImage() {
      if (inputFile.files.length !== 0) {
        const imgLink = URL.createObjectURL(inputFile.files[0])

        imageView.style.backgroundImage = `url(${imgLink})`
      }
    }
  }
}
</script>
