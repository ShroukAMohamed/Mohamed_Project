<template>
  <div class="col-2 p-0 ms-2 me-2">
    <label :for="'Category' + index" class="category d-flex flex-column align-items-center justify-content-center">
      <input :id="'Category' + index" name="Category" type="checkbox" />
      <img :src="categoryImg" />
      <p class="mb-0">{{ categoryName }}</p>
      <span></span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'ClassifyComponent',
  props: ['index', 'categoryImg', 'categoryName']
}
</script>

<style scoped lang="scss">
@import '../../scss/main';
@import '../../scss/variables';
.category {
  position: relative;
  cursor: pointer;
  width: 100%;
  padding: 10px 0;
  background-color: #f3f3f3;
  border-radius: 5px;
  input[type='checkbox'] {
    display: none;
  }
  img {
    width: 25px;
    height: 25px;
  }
  p {
    font-size: 10px;
  }
  span {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  input[type='checkbox']:checked ~ span {
    border: 1px solid $red;
    border-radius: 5px;
  }
}
</style>
