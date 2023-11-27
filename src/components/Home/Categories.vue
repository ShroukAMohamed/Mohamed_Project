<template>
  <div class="container">
    <div class="DiscountsCategories">
      <div class="row align-items-center justify-content-between">
        <div class="col-xl-2 col-lg-3 col-12 mt-3">
          <div class="d-lg-flex">
            <div class="Categories d-flex flex-column">
              <ul>
                <li
                  v-for="(i, index) in categories"
                  @mouseover="ChangeIcon('#category' + (index + 1))"
                  @mouseleave="ChangeLeave('#category' + (index + 1))"
                >
                  <div>
                    <span :id="'category' + (index + 1)"
                      ><img class="hovered" :src="i['hoveredIcon']" /><img :src="i['icon']" />
                      {{ i.name }}
                    </span>
                  </div>
                  <ul v-if="i.list" class="Lists" @mousemove="ChangeLeave('#category' + (index + 1))">
                    <li v-for="(lists, index) in i.list" :key="index">
                      <span>{{ lists }}</span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-xl-10 col-lg-9 order-first order-lg-last gy-4 gy-lg-0">
          <div class="Slider">
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="2000">
                  <img :src="Offers[0]" class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block text-white">
                    <div class="d-flex">
                      <p>اطلب الآن</p>
                      <span class="me-2"><i class="fa-solid fa-arrow-left-long"></i></span>
                    </div>
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="4000">
                  <img :src="Offers[0]" class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block text-white">
                    <div class="d-flex">
                      <p>اطلب الآن</p>
                      <span class="me-2"><i class="fa-solid fa-arrow-left-long"></i></span>
                    </div>
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="6000">
                  <img :src="Offers[0]" class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block text-white">
                    <div class="d-flex">
                      <p>اطلب الآن</p>
                      <span class="me-2"><i class="fa-solid fa-arrow-left-long"></i></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'CategoriesVue',
  data() {
    return {
      categories: [
        {
          name: 'الكترونيات',
          icon: require('../../assets/electronics_icon.png'),
          hoveredIcon: require('../../assets/electronics_icon_hovered.png')
        },
        {
          name: 'ملابس',
          icon: require('../../assets/beauty_dress.png'),
          hoveredIcon: require('../../assets/beauty_dress_hovered.png'),
          list: [
            'اسم الصنف هنا',
            'اسم الصنف هنا',
            'اسم الصنف هنا',
            'اسم الصنف هنا',
            'اسم الصنف هنا',
            'اسم الصنف هنا',
            'اسم الصنف هنا'
          ]
        },
        {
          name: 'ترفية',
          icon: require('../../assets/joystick_icon.png'),
          hoveredIcon: require('../../assets/joystick_hovered.png')
        },
        {
          name: 'صحه و جمال',
          icon: require('../../assets/bag_icon.png'),
          hoveredIcon: require('../../assets/bag_hovered.png')
        },
        {
          name: 'اجهزة منزلية',
          icon: require('../../assets/TV.png'),
          hoveredIcon: require('../../assets/TV_hovered.png')
        },
        {
          name: 'الكترونيات',
          icon: require('../../assets/electronics_icon.png'),
          hoveredIcon: require('../../assets/electronics_icon_hovered.png')
        },
        {
          name: 'ملابس',
          icon: require('../../assets/beauty_dress.png'),
          hoveredIcon: require('../../assets/beauty_dress_hovered.png')
        },
        {
          name: 'ترفية',
          icon: require('../../assets/joystick_icon.png'),
          hoveredIcon: require('../../assets/joystick_hovered.png')
        },
        {
          name: 'صحه و جمال',
          icon: require('../../assets/bag_icon.png'),
          hoveredIcon: require('../../assets/bag_hovered.png')
        }
      ],
      Offers: [require('../../assets/IphoneOffer(2).png')]
    }
  },
  methods: {
    ChangeIcon(categoryNum) {
      $(categoryNum).children('.hovered').show().next().hide()
    },
    ChangeLeave(categoryNum) {
      $(categoryNum).children('.hovered').hide().next().show()
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../scss/variables';
@import '../../scss/main';
.DiscountsCategories {
  .Categories {
    > ul {
      position: relative;
      list-style: none;
      padding: 0;
      &:before {
        content: '';
        position: absolute;
        border-left: 0.8px solid #858585;
        height: 100%;
        left: -35px;
        @include breakpoints(xl) {
          left: -10px;
        }
        @include breakpoints(medium) {
          left: 0;
        }
      }
      @include breakpoints(medium) {
        width: 100%;
      }
      li:nth-child(2) {
        position: relative;
        &:hover ul {
          display: initial;
        }
        ul {
          position: absolute;
          list-style: none;
          top: 0;
          right: 160px;
          width: 170px;
          display: none;
          background: white;
          padding: 10px 0;
          z-index: 2;
          box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.155);
          li:not(:last-of-type) {
            border-bottom: 0.5px solid #7c7c7c;
          }
          li {
            padding: 7px 0;
            span {
              cursor: pointer;
              margin-right: 10px;
            }
          }
        }
      }
      li {
        width: 100% !important;
        div {
          margin: 10px 0;
          cursor: pointer;
          padding: 0 15px;
          transition: all 0.2s;
          &:hover {
            background-color: $red;
            color: white;
          }
          img.hovered {
            display: none;
          }
          span {
            font-weight: bolder;
            img {
              padding-left: 10px;
            }
          }
        }
      }
    }
  }
  .line {
    position: relative;
    &:after {
      content: '';
      position: absolute;
      width: 0.8px;
      height: 100%;
      background-color: #d2d2d2;
      right: 35px;
      @include breakpoints(xl) {
        right: 15px;
      }
    }
  }
  .Slider {
    width: 100%;
    max-width: 1030px;
    margin: auto;
    .carousel-indicators {
      [data-bs-target] {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        margin: 0 6px;
        background-color: white;
      }
    }
    .carousel-caption {
      width: 100%;
      left: 0;
      right: 0;
      text-align: right;
      > div {
        cursor: pointer;
        position: relative;
        right: 68px;
        top: 20px;
        p {
          position: relative;
          &:before {
            content: '';
            position: absolute;
            border-bottom: 1px solid white;
            width: 100%;
            height: 3px;
            bottom: 0;
          }
        }
      }
    }
  }
}
</style>
