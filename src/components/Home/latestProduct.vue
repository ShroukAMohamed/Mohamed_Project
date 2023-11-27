<template>
  <div class="container">
    <div class="latestProduct">
      <div class="row">
        <div class="col-12">
          <div class="d-sm-flex justify-content-between">
            <div class="d-flex me-4">
              <img src="../../assets/logoShape.png" />
              <h2 class="me-3">أحدث العروض</h2>
            </div>
            <button class="btn btn-danger ms-sm-3 mt-4 mt-sm-0 me-4 me-sm-0">المزيد</button>
          </div>
        </div>
      </div>
      <div class="row mt-lg-4">
        <div
          v-for="(product, index) in products"
          :id="'product' + (index + 1)"
          :key="index"
          class="col-lg-3 col-sm-6 gy-5 gy-lg-0"
        >
          <ProductComponent
            :sale="product.sale"
            :name="product.name"
            :price="product.price"
            :ratio="product.ratio"
            :photo="product.photo"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductComponent from '@/components/Home/home_components/ProductComponent.vue'

export default {
  name: 'LatestProduct',
  components: { ProductComponent },
  data() {
    return {
      products: [
        {
          name: 'سماعة رأس لاسلكية عالية الجودة',
          sale: '25%',
          photo: require('../../assets/iPhone13ProMax.jpeg'),
          ratio: 'نسبه التسويق 7.00$',
          price: '199.99$'
        },
        {
          name: 'سماعة رأس لاسلكية عالية الجودة',
          sale: '25%',
          photo: require('../../assets/AppleAirPodsMax.png'),
          ratio: 'نسبه التسويق 7.00$',
          price: '199.99$'
        },
        {
          name: 'سماعة رأس لاسلكية عالية الجودة',
          sale: '25%',
          photo: require('../../assets/iPhone13ProMax.jpeg'),
          ratio: 'نسبه التسويق 7.00$',
          price: '199.99$'
        },
        {
          name: 'سماعة رأس لاسلكية عالية الجودة',
          sale: '25%',
          photo: require('../../assets/AppleAirPodsMax.png'),
          ratio: 'نسبه التسويق 7.00$',
          price: '199.99$'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../scss/main';
.latestProduct {
  margin-top: 50px;
  @include textStyle;
}
</style>
