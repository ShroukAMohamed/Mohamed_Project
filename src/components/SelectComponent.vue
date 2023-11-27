<template>
  <div class="">
    <label class="mb-2 mt-2" for="gender"> الجنس </label>
    <div class="d-flex justify-content-between">
      <label for="male" class="selectStyle d-flex justify-content-around align-items-center">
        <input id="male" type="radio" name="gender" />
        <span></span>
        <label for="male">ذكر</label>
        <span></span>
        <span><i class="fa-solid fa-mars"></i></span>
      </label>
      <label for="female" class="selectStyle d-flex justify-content-around align-items-center">
        <input id="female" type="radio" name="gender" />
        <span></span>
        <label for="female">أنثي</label>
        <span></span>
        <span><i class="fa-solid fa-venus"></i></span>
      </label>
    </div>
  </div>
  <div class="mt-4">
    <label for="classification">الأقسام المفضلة</label>
    <div id="carousel3" class="carousel slide mt-2" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="row Carousel mt-lg-4 justify-content-center">
            <ClassifyComponent
              v-for="(Category, index) in Categories"
              :key="index"
              :category-name="Category.categoryName"
              :category-img="Category.categoryImg"
              :index="Category.id"
            />
          </div>
        </div>
        <div class="carousel-item">
          <div class="row mt-lg-4 justify-content-center">
            <ClassifyComponent
              v-for="(Category, index) in Categories2"
              :key="index"
              :category-name="Category.categoryName"
              :category-img="Category.categoryImg"
              :index="Category.id"
            />
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carousel3" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carousel3" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
import ClassifyComponent from '@/components/Register/ClassifyComponent.vue'

export default {
  name: 'SelectComponent',
  components: { ClassifyComponent },
  data() {
    return {
      Categories: [
        {
          id: 1,
          categoryName: 'إلكترونيات',
          categoryImg: require('../assets/electronics_icon.png')
        },
        {
          id: 2,
          categoryName: 'إلكترونيات',
          categoryImg: require('../assets/beauty_dress.png')
        },
        {
          id: 3,
          categoryName: 'إلكترونيات',
          categoryImg: require('../assets/joystick_icon.png')
        },
        {
          id: 4,
          categoryName: 'إلكترونيات',
          categoryImg: require('../assets/bag_icon.png')
        }
      ],
      Categories2: [
        {
          id: 5,
          categoryName: 'إلكترونيات',
          categoryImg: require('../assets/electronics_icon.png')
        },
        {
          id: 6,
          categoryName: 'إلكترونيات',
          categoryImg: require('../assets/electronics_icon.png')
        },
        {
          id: 7,
          categoryName: 'إلكترونيات',
          categoryImg: require('../assets/electronics_icon.png')
        },
        {
          id: 8,
          categoryName: 'إلكترونيات',
          categoryImg: require('../assets/electronics_icon.png')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import '../scss/main';
label {
  font-size: 14px;
}
@include carouselStyle;
.carousel-control-prev-icon {
  background-image: url('../assets/LeftArrow.png');
}
.carousel-control-next-icon {
  background-image: url('../assets/RightArrow.png');
}
@include selectStyle;
</style>
