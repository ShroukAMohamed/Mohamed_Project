<template>
  <div class="container">
    <div class="LatestOffers">
      <div class="row">
        <div class="col-12 p-0">
          <div class="me-4">
            <div class="d-flex">
              <img src="../../assets/logoShape.png" />
              <h2 class="me-3">أحدث العروض</h2>
            </div>
          </div>
        </div>
      </div>
      <div id="carousel1" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="4000">
            <div class="row Carousel mt-lg-4">
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
          <div class="carousel-item" data-bs-interval="4000">
            <div class="row mt-lg-4">
              <div
                v-for="(product, index) in products2"
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
          <div class="carousel-item" data-bs-interval="4000">
            <div class="row Carousel mt-lg-4">
              <div
                v-for="(product, index) in products3"
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
        <button class="carousel-control-prev" type="button" data-bs-target="#carousel1" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carousel1" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="d-flex justify-content-center">
        <button class="btn btn-danger" @click="ProductsPage">مشاهدة كل المنتجات</button>
      </div>
    </div>
  </div>
</template>

<script>
import ProductComponent from '@/components/Home/home_components/ProductComponent.vue'

export default {
  name: 'LatestOffers',
  components: { ProductComponent },
  props: ['carouselNo', 'carouselBtn', 'dataInterval'],
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
      ],
      products2: [
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
      ],
      products3: [
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
  },
  methods: {
    ProductsPage() {
      this.$router.push('/Products')
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../scss/variables';
@import '../../scss/main';
.LatestOffers {
  margin-top: 80px;
  @include textStyle;
  .carousel-control-prev {
    left: 0;
    top: -60px;
    height: 60px;
    width: 60px;
    opacity: 1 !important;
    @include breakpoints(medium) {
      top: -60px;
    }
    @include breakpoints(smaller) {
      left: 0;
      top: -50px;
    }
    .carousel-control-prev-icon {
      background-image: url('../../assets/LeftArrow.png');
      width: 46px;
      height: 46px;
    }
  }
  .carousel-control-next {
    right: 85%;
    top: -60px;
    height: 60px;
    width: 60px;
    opacity: 1 !important;
    @include breakpoints(medium) {
      right: 70%;
    }
    @include breakpoints(smaller) {
      right: 200px;
      top: -50px;
    }
    .carousel-control-next-icon {
      background-image: url('../../assets/RightArrow.png');
      width: 46px;
      height: 46px;
    }
  }
  > div:last-child {
    margin-top: 80px;
    button {
      padding: 12px 35px;
    }
  }
}
</style>
