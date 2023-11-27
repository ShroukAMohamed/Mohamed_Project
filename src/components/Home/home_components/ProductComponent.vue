<template>
  <div class="Contain">
    <div class="Card">
      <span class="sale">{{ sale }}</span>
      <img class="img-fluid" :src="photo" @click="ProductViewPage" />
      <span class="likeIcon"><i class="fa-regular fa-heart"></i></span>
    </div>
    <p class="mb-2 mt-3">{{ name }}</p>
    <div class="details">
      <span> {{ ratio }}</span>
      <span>{{ price }}</span>
    </div>
    <button class="btn btn-danger mt-2">أضف الي العربة</button>
  </div>
</template>

<script>
export default {
  name: 'ProductComponent',
  props: ['sale', 'photo', 'name', 'ratio', 'price'],
  methods: {
    ProductViewPage() {
      this.$router.push('/ProductView')
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../../scss/main';
@import '../../../scss/variables';
.Contain {
  width: 100%;
  max-width: 270px;
  margin: auto;
  @include breakpoints(medium) {
    max-width: 300px;
  }
  .Card {
    width: 100%;
    max-width: 300px;
    max-height: 300px;
    position: relative;
    background-color: #f5f5f5;
    border-radius: 5px;
    img {
      width: 100%;
      height: 250px !important;
      cursor: pointer;
    }
    span {
      position: absolute;
    }
    .sale {
      left: 20px;
      font-size: 13px;
      color: white;
      background-color: $red;
      padding: 13px 6px;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
    }
    .likeIcon {
      background-color: white;
      padding: 4px 8px;
      border-radius: 50%;
      font-size: 18px;
      cursor: pointer;
    }
    .likeIcon {
      top: 10px;
      right: 8px;
    }
  }
  p {
    font-weight: bolder;
  }
  button {
    width: 100%;
    padding: 10px 0;
    font-size: 13px;
  }
  div.details {
    span {
      font-weight: bolder;
    }
    span:first-child {
      background-color: black;
      color: white;
      padding: 0 5px;
      border-radius: 5px;
      font-size: 13px;
    }
    span:nth-child(2) {
      color: $red;
      margin-right: 12px;
    }
  }
}
</style>
