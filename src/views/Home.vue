<template>
  <CategoriesVue />
  <LatestOffers />
  <div class="container">
    <div class="line"></div>
  </div>
  <latestProduct />
  <ProductEvent />
  <DiscountsVue />
  <NewCollection />
  <div class="rules">
    <div class="row justify-content-center">
      <div class="col-lg-3">
        <div class="text-center">
          <div class="iconStyle">
            <img src="../assets/shield-tick.png" />
          </div>
          <p class="mb-1">نسبة ارباح علي كل منتج</p>
          <span>طلب منتجات حسب الباقة المختارة</span>
        </div>
      </div>
      <div class="col-lg-3 gy-5 gy-lg-0">
        <div class="text-center">
          <div class="iconStyle">
            <img src="../assets/Icon-Customerservice.png" />
          </div>
          <p class="mb-1">دعم فني 24/7</p>
          <span>دعم فني شامل علي مدار 24/7</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import latestProduct from '@/components/Home/latestProduct.vue'
import CategoriesVue from '@/components/Home/Categories.vue'
import DiscountsVue from '@/components/Home/Discounts.vue'
import LatestOffers from '@/components/Home/latestOffers.vue'
import NewCollection from '@/components/Home/NewCollection.vue'
import ProductEvent from '@/components/Home/ProductEvent.vue'

export default {
  name: 'Home',
  components: {
    ProductEvent,
    NewCollection,
    DiscountsVue,
    CategoriesVue,
    LatestOffers,
    latestProduct
  }
}
</script>

<style lang="scss" scoped>
.line {
  border-bottom: 1px solid #bbbbbb;
  margin-top: 60px;
}
.rules {
  p {
    font-weight: bolder;
    font-size: 19px;
  }
  span {
    font-size: 14px;
  }
  margin-top: 100px;
  .iconStyle {
    position: relative;
    background-color: black;
    width: 100%;
    max-width: 55px;
    padding: 7px 0;
    border-radius: 50%;
    margin: auto;
    margin-bottom: 35px;
    &:after {
      content: '';
      position: absolute;
      border: 11px solid rgba(63, 63, 63, 0.37);
      width: 75px;
      height: 75px;
      border-radius: 50%;
      left: -10px;
      top: -10.5px;
    }
  }
}
</style>
