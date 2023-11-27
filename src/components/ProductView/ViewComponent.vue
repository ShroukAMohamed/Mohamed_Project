<script>
export default {
  name: 'ViewComponent',
  props: ['products', 'product', 'productName', 'commentsNum', 'productStatus', 'productCost', 'aboutProduct']
}
</script>

<template>
  <div class="ProductView">
    <p>
      حساب<span> / </span> الألعاب <span> / </span> <span> {{ productName }} </span>
    </p>
    <div class="row">
      <div class="col-lg-2 col-md-3 col-4">
        <div v-for="(i, index) in products" :key="index" class="Card">
          <img class="img-fluid" :src="i" />
        </div>
      </div>
      <div class="col-lg-5 col-md-9 col-8">
        <div class="grey-card">
          <img class="img-fluid" :src="product" />
        </div>
      </div>
      <div class="col-lg-5 col-12 gy-5 gy-lg-0">
        <div class="product-details">
          <h4>{{ productName }}</h4>
          <div class="d-flex mt-3">
            <span>({{ commentsNum }} تعليق)</span>
            <div class="stars me-2">
              <i class="fa-solid fa-star text-warning me-1"></i>
              <i class="fa-solid fa-star text-warning me-1"></i>
              <i class="fa-solid fa-star text-warning me-1"></i>
              <i class="fa-solid fa-star text-warning me-1"></i>
              <i class="fa-solid fa-star text-warning me-1"></i>
            </div>
            <span class="me-5">{{ productStatus }}</span>
          </div>
          <p class="mt-3">{{ productCost }}</p>
          <div>
            <span>{{ aboutProduct }}</span>
          </div>
          <div class="line"></div>
          <form>
            <div>
              <span class="ps-3">الألوان: </span>
              <label for="color-1">
                <input id="color-1" type="radio" name="color" />
              </label>
              <label for="color-2" class="me-2">
                <input id="color-2" type="radio" name="color" />
              </label>
            </div>
            <div class="mt-3">
              <span>مقاس: </span>
              <input id="xl" type="radio" name="size" class="me-2" />
              <label for="xl"> XL </label>
              <input id="large" type="radio" name="size" class="me-2" />
              <label for="large"> L </label>
              <input id="medium" type="radio" name="size" class="me-2" />
              <label for="medium"> M </label>
              <input id="small" type="radio" name="size" class="me-2" />
              <label for="small"> S </label>
              <input id="xs" type="radio" name="size" class="me-2" />
              <label for="xs"> XS </label>
            </div>
            <div class="d-flex mt-4">
              <div class="d-flex justify-content-between">
                <span><i class="fa-solid fa-plus"></i></span>
                <span>0</span>
                <span><i class="fa-solid fa-minus"></i></span>
              </div>
              <input class="me-3" type="submit" value="اشتري الآن" />
              <span class="me-3"><i class="fa-regular fa-heart"></i></span>
            </div>
          </form>
          <div class="d-flex align-items-center mt-5">
            <span class="me-3"><i class="fa-solid fa-truck"></i></span>
            <div class="me-4">
              <p class="mb-0">توصيل مجاني</p>
              <span class="text-decoration-underline">أدخل الرمز البريدي الخاص بك لتوفر التسليم</span>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <span class="me-3"><i class="fa-solid fa-arrow-rotate-right"></i></span>
            <div class="me-4">
              <p class="mb-0">تسليم العودة</p>
              <span>إرجاع مجاني خلال ٣٠ يوما. <a class="text-decoration-underline">تفاصيل</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../../scss/main';
.ProductView {
  margin-top: 60px;
  > p {
    font-size: 14px;
    color: gray;
    span {
      margin: 0 6px;
    }
    span:last-of-type {
      color: black;
    }
  }
  .row {
    margin-top: 80px;
    .Card {
      width: 100%;
      margin: auto;
      max-width: 170px;
      height: 138px;
      background-color: #f5f5f5;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      img {
        width: 100%;
        max-width: 121px;
        max-height: 114px;
      }
    }
    .Card:not(:first-child) {
      margin-top: 16px;
    }
    .grey-card {
      width: 100%;
      height: 100%;
      max-height: 600px;
      background-color: #f5f5f5;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
        max-width: 446px;
        @include breakpoints(xl) {
          max-width: 300px;
        }
      }
    }
    .product-details {
      width: 100%;
      max-width: 440px;
      margin: auto;
      @include breakpoints(medium){
        margin: 0;
      }
      h4 {
        font-weight: bold;
        letter-spacing: 1px;
      }
      > div:first-of-type {
        span:first-of-type {
          font-size: 14px;
          color: gray;
        }
        div {
          font-size: 14px;
        }
        span:last-of-type {
          position: relative;
          color: #00a63e;
          font-size: 14px;
          &:before {
            position: absolute;
            content: '';
            border: 0.9px solid #838383;
            height: 100%;
            right: -25px;
          }
        }
      }
      p:nth-child(3) {
        font-size: 24px;
        font-weight: bold;
      }
      div:nth-child(4) {
        font-size: 14px;
        max-width: 373px;
        text-align: justify;
        padding-bottom: 10px;
        font-weight: bold;
      }
      .line {
        border: 1px solid #a6a6a6;
        max-width: 400px;
        margin: 20px 0;
      }
      form {
        div:first-child {
          span {
            font-size: 20px;
          }
          input[type='radio'] {
            appearance: none;
          }
          label:nth-child(2),
          label:nth-child(3) {
            position: relative;
            &:before {
              cursor: pointer;
              position: absolute;
              content: '';
              border: 1.5px solid black;
              width: 20px;
              height: 20px;
              border-radius: 50%;
              top: 2px;
              transition: all 0.3s;
            }
            input[type='radio'] {
              position: relative;
              &:before {
                transition: all 0.2s;
                position: absolute;
                content: '';
                background-color: #a0bce0;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                top: -15px;
                cursor: pointer;
              }
            }
          }
          label:nth-child(3) {
            &:before {
              right: 25px;
            }
            input[type='radio'] {
              position: relative;
              &:before {
                background-color: #e07575;
                right: 25px;
              }
            }
          }
          input[type='radio']:checked {
            &:before {
              width: 12px !important;
              height: 12px !important;
              margin-right: 4px;
              margin-top: 4px;
            }
          }
        }
        div:nth-child(2) {
          label {
            border: 1px solid gray;
            margin-right: 12px;
            text-align: center;
            font-size: 14px;
            width: 33px;
            padding: 5px 0;
            border-radius: 5px;
            cursor: pointer;
          }
          input {
            display: none;
          }
          input[type='radio']:checked + label {
            color: white;
            background-color: #db4444;
          }
        }
        div:nth-child(3) {
          div:first-child {
            width: 100%;
            max-width: 150px;
            span:nth-child(2),
            span:nth-child(3) {
              border: 1px solid #8c8c8c;
            }
            span:nth-child(2) {
              padding: 5px 31px;
              border-left: 0;
              border-right: 0;
            }
            span:first-child,
            span:nth-child(3) {
              padding: 5px 10px;
              cursor: pointer;
            }
            span:first-child {
              border-top-right-radius: 5px;
              border-bottom-right-radius: 5px;
              color: white;
              background-color: #db4444;
            }
            span:nth-child(3) {
              border-top-left-radius: 5px;
              border-bottom-left-radius: 5px;
            }
          }
          input {
            border: 0;
            background-color: #db4444;
            color: white;
            border-radius: 5px;
            width: 100%;
            max-width: 150px;
            font-size: 14px;
          }
          > span {
            border: 1px solid #8c8c8c;
            border-radius: 5px;
            padding: 0 10px;
            display: flex;
            align-items: center;
            font-size: 20px;
            cursor: pointer;
          }
        }
      }
      > div:nth-of-type(4),
      > div:nth-of-type(5) {
        border: 1px solid #8c8c8c;
        width: 100%;
        max-width: 400px;
        padding: 20px 0;
        color: black;
        span:first-child {
          font-size: 25px;
        }
        span:last-child {
          font-size: 12px;
          font-weight: bolder;
        }
      }
      > div:nth-of-type(5) {
        border-top: 0;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        a {
          cursor: pointer;
          color: black;
        }
      }
      > div:nth-of-type(4) {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
      }
    }
  }
}
</style>
