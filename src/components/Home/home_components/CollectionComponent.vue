<script>
export default {
  name: 'CollectionComponent',
  props: ['image', 'productName', 'description']
}
</script>

<template>
  <div :style="{ backgroundImage: 'url(' + image + ')' }" class="d-flex align-items-end CollectionComponent">
    <div class="overlay"></div>
    <div class="aboutProduct mb-4 me-4 text-white">
      <h3>{{ productName }}</h3>
      <p>{{ description }}</p>
      <button class="btn btn-danger rounded-0">اطلب الآن</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.CollectionComponent {
  position: relative;
  height: 30vh;
  background-size: cover;
  background-position: center 100%;
  background-repeat: no-repeat;
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }
  .aboutProduct {
    position: relative;
    button {
      padding: 6px 30px;
    }
  }
}
</style>
