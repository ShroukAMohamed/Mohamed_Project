<template>
  <div class="container">
    <div class="Categories">
      <div class="row">
        <div class="col-12">
          <div class="categoryImg d-flex flex-column justify-content-center">
            <div class="me-md-5 text-center text-md-end">
              <p class="text-danger">اسم الفئة التابع لها المنتج</p>
              <h2 class="text-white pt-3 pb-1">تعزيز تجربه الموسيقي الخاصة بك</h2>
              <div class="counter d-flex justify-content-center justify-content-md-start text-black mt-4 mb-3">
                <div class="d-flex flex-column align-items-center">
                  <p class="mb-0 days"></p>
                  <span>يوم</span>
                </div>
                <div class="d-flex flex-column align-items-center">
                  <p class="mb-0 hours"></p>
                  <span>ساعة</span>
                </div>
                <div class="d-flex flex-column align-items-center">
                  <p class="mb-0 minutes"></p>
                  <span>دقيقة</span>
                </div>
                <div class="d-flex flex-column align-items-center">
                  <p class="mb-0 seconds"></p>
                  <span>ثانية</span>
                </div>
              </div>
              <button class="btn btn-danger mt-4">اشتري الآن</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Counter from '../../mixins/Counter.vue'

export default {
  name: 'ProductEvent',
  mixins: [Counter]
}
</script>

<style scoped lang="scss">
@import '../../scss/main';
.Categories {
  margin-top: 100px;
  > .row {
    .categoryImg {
      position: relative;
      background-image: url('../../assets/IphoneOfferCopy.png');
      width: 100%;
      height: 50vh;
      background-size: cover;
      background-repeat: no-repeat;
      > div {
        width: 100%;
        max-width: 550px;
        h2 {
          font-size: 48px;
          font-weight: bolder;
          letter-spacing: 1.5px;
          @include breakpoints(small) {
            font-size: 25px;
            letter-spacing: normal;
          }
        }
        button {
          width: 100%;
          max-width: 150px;
          padding: 13px 0;
        }
        .counter {
          > div {
            margin-left: 25px;
            background-color: white;
            width: 100%;
            max-width: 56px;
            padding: 11px 0;
            border-radius: 50%;
            p {
              font-family: sans-serif;
              font-weight: 600;
              line-height: 1.1;
            }
            span {
              font-size: 11px;
            }
          }
        }
      }
    }
  }
}
</style>
