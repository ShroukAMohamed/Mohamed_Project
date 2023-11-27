<template>
  <div class="container">
    <div class="Products">
      <div class="row">
        <div class="col-lg-3 gy-5 Filter">
          <div class="d-flex justify-content-between">
            <span>الفئات</span>
            <span>إعادة تعيين</span>
          </div>
          <ul>
            <li class="d-flex justify-content-between">
              <label class="d-flex align-items-center"> <input type="checkbox" name="filter" /> كل الفئات</label>
              <span>10</span>
            </li>
            <li class="d-flex justify-content-between">
              <label class="d-flex align-items-center"> <input type="checkbox" name="filter" /> اسم الفئة</label>
              <span>10</span>
            </li>
            <li class="d-flex justify-content-between">
              <label class="d-flex align-items-center"> <input type="checkbox" name="filter" /> اسم الفئة</label>
              <span>10</span>
            </li>
            <li class="d-flex justify-content-between">
              <label class="d-flex align-items-center"> <input type="checkbox" name="filter" /> اسم الفئة</label>
              <span>10</span>
            </li>
            <li class="d-flex justify-content-between">
              <label class="d-flex align-items-center"> <input type="checkbox" name="filter" /> اسم الفئة</label>
              <span>10</span>
            </li>
            <li class="d-flex justify-content-between">
              <label class="d-flex align-items-center"> <input type="checkbox" name="filter" /> اسم الفئة</label>
              <span>10</span>
            </li>
          </ul>
          <div class="line"></div>
          <p>المتاح</p>
          <div class="d-flex justify-content-between">
            <span><span>0</span> تم تحديدة</span>
            <span>إعادة تعيين</span>
          </div>
          <ul>
            <li class="d-flex justify-content-between">
              <label class="d-flex align-items-center"> <input type="checkbox" name="filter" /> في المخزون</label>
              <span>5</span>
            </li>
            <li class="d-flex justify-content-between">
              <label class="d-flex align-items-center text-secondary">
                <input type="checkbox" name="filter" /> غير متاح في المخزون</label
              >
              <span class="text-secondary">0</span>
            </li>
          </ul>
          <div class="line"></div>
          <p>العلامات التجارية</p>
          <div class="d-flex justify-content-between">
            <span><span>0</span> تم تحديدة</span>
            <span>إعادة تعيين</span>
          </div>
          <ul>
            <li class="d-flex justify-content-between">
              <label class="d-flex align-items-center"> <input type="checkbox" name="filter" /> اسم العلامة التجارية</label>
              <span>10</span>
            </li>
            <li class="d-flex justify-content-between">
              <label class="d-flex align-items-center"> <input type="checkbox" name="filter" /> اسم العلامة التجارية</label>
              <span>10</span>
            </li>
            <li class="d-flex justify-content-between">
              <label class="d-flex align-items-center"> <input type="checkbox" name="filter" /> اسم العلامة التجارية</label>
              <span>10</span>
            </li>
            <li class="d-flex justify-content-between">
              <label class="d-flex align-items-center"> <input type="checkbox" name="filter" /> اسم العلامة التجارية</label>
              <span>10</span>
            </li>
          </ul>
        </div>
        <div class="col-lg-9">
          <div class="row">
            <div v-for="(product, index) in products" :key="index" class="col-xl-4 col-sm-6 gy-5">
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
    </div>
  </div>
</template>

<script>
import ProductComponent from '@/components/Home/home_components/ProductComponent.vue'

export default {
  name: 'ProductsVue',
  components: { ProductComponent },
  data() {
    return {
      products: [
        {
          name: 'سماعة رأس لاسلكية عالية الجودة',
          sale: '25%',
          photo: require('../assets/AppleAirPodsMax.png'),
          ratio: 'نسبه التسويق 7.00$',
          price: '199.99$'
        },
        {
          name: 'سماعة رأس لاسلكية عالية الجودة',
          sale: '25%',
          photo: require('../assets/iPhone13ProMax.jpeg'),
          ratio: 'نسبه التسويق 7.00$',
          price: '199.99$'
        },
        {
          name: 'سماعة رأس لاسلكية عالية الجودة',
          sale: '25%',
          photo: require('../assets/AppleAirPodsMax.png'),
          ratio: 'نسبه التسويق 7.00$',
          price: '199.99$'
        },
        {
          name: 'سماعة رأس لاسلكية عالية الجودة',
          sale: '25%',
          photo: require('../assets/iPhone13ProMax.jpeg'),
          ratio: 'نسبه التسويق 7.00$',
          price: '199.99$'
        },
        {
          name: 'سماعة رأس لاسلكية عالية الجودة',
          sale: '25%',
          photo: require('../assets/AppleAirPodsMax.png'),
          ratio: 'نسبه التسويق 7.00$',
          price: '199.99$'
        },
        {
          name: 'سماعة رأس لاسلكية عالية الجودة',
          sale: '25%',
          photo: require('../assets/iPhone13ProMax.jpeg'),
          ratio: 'نسبه التسويق 7.00$',
          price: '199.99$'
        },
        {
          name: 'سماعة رأس لاسلكية عالية الجودة',
          sale: '25%',
          photo: require('../assets/AppleAirPodsMax.png'),
          ratio: 'نسبه التسويق 7.00$',
          price: '199.99$'
        },
        {
          name: 'سماعة رأس لاسلكية عالية الجودة',
          sale: '25%',
          photo: require('../assets/iPhone13ProMax.jpeg'),
          ratio: 'نسبه التسويق 7.00$',
          price: '199.99$'
        },
        {
          name: 'سماعة رأس لاسلكية عالية الجودة',
          sale: '25%',
          photo: require('../assets/AppleAirPodsMax.png'),
          ratio: 'نسبه التسويق 7.00$',
          price: '199.99$'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import '../scss/main';
.Products {
  margin-top: 25px;
  .Contain {
    max-width: 280px;
    margin-left: 0;
    @include breakpoints(medium) {
      margin: auto;
    }
  }
  ul {
    padding: 0;
  }
  .Filter {
    > div:first-of-type,
    > div:nth-of-type(3),
    > div:nth-of-type(5) {
      span:first-child {
        font-weight: bolder;
      }
      span:nth-child(2) {
        font-size: 15px;
        color: #595959;
        cursor: pointer;
      }
    }
    ul {
      li {
        margin-top: 12px;
        label {
          cursor: pointer;
          input[type='checkbox'] {
            cursor: pointer;
            appearance: none;
            background-color: #f6dbdb;
            width: 30px;
            height: 30px;
            border-radius: 8px;
            margin-left: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            &:after {
              font-family: FontAwesome;
              content: '\f00c';
              font-size: 12px;
              color: white;
              display: none;
            }
            &:hover {
              background-color: #ffcbcb;
            }
            &:checked {
              background-color: #952323;
              &:after {
                display: block;
              }
            }
          }
        }
      }
    }
    .line {
      width: 100%;
      height: 1px;
      border: 0.8px solid #bdbdbd;
      margin-bottom: 15px;
    }
  }
}
</style>
