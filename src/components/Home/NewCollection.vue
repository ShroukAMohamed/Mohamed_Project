<template>
  <div class="container">
    <div class="newCollection">
      <div class="row">
        <div class="col-12 pb-5">
          <div class="d-flex">
            <img src="../../assets/logoShape.png" />
            <h2 class="me-3">وصلت حديثا</h2>
          </div>
        </div>
        <div class="col-lg-6 firstImg">
          <CollectionComponent
            :image="Collection[0].image"
            :product-name="Collection[0].name"
            :description="Collection[0].description"
          />
        </div>
        <div class="col-lg-6">
          <div class="row">
            <div class="col-12 gy-4 gy-lg-0">
              <CollectionComponent
                :image="Collection[1].image"
                :product-name="Collection[1].name"
                :description="Collection[1].description"
              />
            </div>
            <div class="col-lg-6 gy-4">
              <CollectionComponent
                :image="Collection[2].image"
                :product-name="Collection[2].name"
                :description="Collection[2].description"
              />
            </div>
            <div class="col-lg-6 gy-4">
              <CollectionComponent
                :image="Collection[3].image"
                :product-name="Collection[3].name"
                :description="Collection[3].description"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CollectionComponent from '@/components/Home/home_components/CollectionComponent.vue'

export default {
  name: 'NewCollection',
  components: { CollectionComponent },
  data() {
    return {
      Collection: [
        {
          image: require('../../assets/ecofriendly-beauty-product.jpg'),
          name: 'بلايستيشن 5',
          description: 'وصف عن المنتج المعروض'
        },
        {
          image: require('../../assets/plastic-container.jpg'),
          name: 'بلايستيشن 5',
          description: 'وصف عن المنتج المعروض'
        },
        {
          image: require('../../assets/pexels-erik-mclean-7487832.jpg'),
          name: 'بلايستيشن 5',
          description: 'وصف عن المنتج المعروض'
        },
        {
          image: require('../../assets/pexels-erik-mclean-7487832.jpg'),
          name: 'بلايستيشن 5',
          description: 'وصف عن المنتج المعروض'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.newCollection {
  margin-top: 100px;
  > div.row {
    > div:first-child {
      img {
        width: 25px;
        height: 35px;
      }
      h2 {
        font-weight: bolder;
      }
    }
    .firstImg {
      .CollectionComponent {
        height: 62.5vh !important;
      }
    }
  }
}
</style>
