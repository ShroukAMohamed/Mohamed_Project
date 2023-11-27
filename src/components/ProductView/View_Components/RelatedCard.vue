<script>
export default {
  name: 'RelatedCard',
  props:['sale','photo','name','price','offer','rateNum']
}
</script>

<template>
  <div class="Contain">
    <div class="Card">
      <span class="sale">{{ sale }}</span>
      <img class="img-fluid" :src="photo" />
      <span class="likeIcon"><i class="fa-regular fa-heart"></i></span>
    </div>
    <p class="mb-2 mt-3">{{ name }}</p>
    <div class="details">
      <span> {{ price }}</span>
      <span>{{ offer }}</span>
    </div>
    <div class="d-flex mt-1">
      <div class="stars">
        <i class="fa-solid fa-star text-warning ms-1"></i>
        <i class="fa-solid fa-star text-warning ms-1"></i>
        <i class="fa-solid fa-star text-warning ms-1"></i>
        <i class="fa-solid fa-star text-warning ms-1"></i>
        <i class="fa-solid fa-star text-warning ms-1"></i>
      </div>
      <span class="me-3 text-secondary">({{ rateNum }})</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../../../scss/main';
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
      left: 10px;
      top: 10px;
      font-size: 13px;
      color: white;
      background-color: #db4444;
      padding: 6px 15px;
      border-radius: 5px;
    }
    .likeIcon {
      background-color: white;
      padding: 4px 8px;
      border-radius: 50%;
      font-size: 18px;
      cursor: pointer;
      top: 10px;
      right: 8px;
    }
  }
  p {
    font-weight: bolder;
  }
  div.details {
    span {
      font-weight: bolder;
    }
    span:first-child {
      color: $red;
    }
    span:nth-child(2) {
      color: gray;
      margin-right: 13px;
      text-decoration: line-through;
    }
  }
  > div:last-child {
    font-size: 14px;
  }
}
</style>
