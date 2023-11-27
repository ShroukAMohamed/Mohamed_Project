<script>
import RelatedCard from '@/components/ProductView/View_Components/RelatedCard.vue'

export default {
  name: 'RelatedProducts',
  components: { RelatedCard },
  data() {
    return {
      products: [
        {
          name: 'لوحة ألعاب هافيت HV-G92',
          sale: '25%',
          photo: require('../../assets/AppleAirPodsMax.png'),
          price: '120 دولارا',
          offer: '160 دولارا',
          rateNum: '80'
        },
        {
          name: 'لوحة ألعاب هافيت HV-G92',
          sale: '25%',
          photo: require('../../assets/AppleAirPodsMax.png'),
          price: '120 دولارا',
          offer: '160 دولارا',
          rateNum: '80'
        },
        {
          name: 'لوحة ألعاب هافيت HV-G92',
          sale: '25%',
          photo: require('../../assets/AppleAirPodsMax.png'),
          price: '120 دولارا',
          offer: '160 دولارا',
          rateNum: '80'
        },
        {
          name: 'لوحة ألعاب هافيت HV-G92',
          sale: '25%',
          photo: require('../../assets/AppleAirPodsMax.png'),
          price: '120 دولارا',
          offer: '160 دولارا',
          rateNum: '80'
        }
      ]
    }
  }
}
</script>

<template>
  <div class="RelatedProducts">
    <span>البند ذو الصلة</span>
    <div class="row mt-5">
      <div v-for="(product, index) in products" :key="index" class="col-lg-3 col-sm-6">
        <RelatedCard
          :name="product.name"
          :sale="product.sale"
          :photo="product.photo"
          :price="product.price"
          :offer="product.offer"
          :rate-num="product.rateNum"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../../scss/main';
.RelatedProducts {
  margin-top: 60px;
  > span:first-child {
    margin-right: 40px;
    color: #db4444;
    font-weight: bolder;
    position: relative;
    &:before {
      position: absolute;
      content: '';
      background-color: #db4444;
      width: 20px;
      height: 40px;
      bottom: -5px;
      right: -35px;
      border-radius: 4px;
    }
  }
}
</style>
