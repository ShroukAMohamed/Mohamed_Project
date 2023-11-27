<script>
export default {
  name: 'ProductDetails',
  props: ['productSpecification', 'orderDetails', 'rateNum'],
  methods: {
    RateUs(Stars) {
      const stars = document.querySelectorAll(Stars)

      stars.forEach((star, index1) => {
        star.addEventListener('click', () => {
          stars.forEach((star, index2) => {
            index1 >= index2 ? star.classList.add('active') : star.classList.remove('active')
          })
        })
      })
    }
  }
}
</script>

<template>
  <div class="ProductDetails">
    <div class="row">
      <div class="col-xl-6 col-12">
        <div class="row">
          <div class="col-12">
            <div class="">
              <div class="d-flex">
                <img src="../../assets/logoShape.png" />
                <h2 class="me-3">مواصفات المنتج</h2>
              </div>
              <p class="mt-4">
                {{ productSpecification }}
              </p>
            </div>
          </div>
          <div class="col-12 mt-xl-4 gy-5 gy-xl-0">
            <div class="">
              <div class="d-flex">
                <img src="../../assets/logoShape.png" />
                <h2 class="me-3">تفاصيل الطلب</h2>
              </div>
              <p class="mt-4">
                {{ orderDetails }}
              </p>
            </div>
          </div>
          <div class="col-12 gy-5 gy-xl-4">
            <span>مراجعات</span>
            <h3 class="mt-4">مراجعات العملاء</h3>
            <div class="mt-4 text-center">
              <div class="stars me-2">
                <i class="fa-regular fa-star text-secondary"></i>
                <i class="fa-regular fa-star text-secondary"></i>
                <i class="fa-regular fa-star text-secondary"></i>
                <i class="fa-regular fa-star text-secondary"></i>
                <i class="fa-regular fa-star text-secondary"></i>
              </div>
              <p>{{ rateNum }} تقييم</p>
              <div class="ProgressBar">
                <div class="d-flex align-items-center justify-content-between">
                  <span>0</span>
                  <div class="progress">
                    <div
                      class="progress-bar bg-danger"
                      role="progressbar"
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div class="stars me-2">
                    <i class="fa-solid fa-star text-warning"></i>
                    <i class="fa-solid fa-star text-warning"></i>
                    <i class="fa-solid fa-star text-warning"></i>
                    <i class="fa-solid fa-star text-warning"></i>
                    <i class="fa-solid fa-star text-warning"></i>
                  </div>
                </div>
                <div class="d-flex align-items-center justify-content-between mt-1">
                  <span>0</span>
                  <div class="progress">
                    <div
                      class="progress-bar bg-danger"
                      role="progressbar"
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div class="stars me-2">
                    <i class="fa-regular fa-star text-secondary"></i>
                    <i class="fa-solid fa-star text-warning"></i>
                    <i class="fa-solid fa-star text-warning"></i>
                    <i class="fa-solid fa-star text-warning"></i>
                    <i class="fa-solid fa-star text-warning"></i>
                  </div>
                </div>
                <div class="d-flex align-items-center justify-content-between mt-1">
                  <span>0</span>
                  <div class="progress">
                    <div
                      class="progress-bar bg-danger"
                      role="progressbar"
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div class="stars me-2">
                    <i class="fa-regular fa-star text-secondary"></i>
                    <i class="fa-regular fa-star text-secondary"></i>
                    <i class="fa-solid fa-star text-warning"></i>
                    <i class="fa-solid fa-star text-warning"></i>
                    <i class="fa-solid fa-star text-warning"></i>
                  </div>
                </div>
                <div class="d-flex align-items-center justify-content-between mt-1">
                  <span>0</span>
                  <div class="progress">
                    <div
                      class="progress-bar bg-danger"
                      role="progressbar"
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div class="stars me-2">
                    <i class="fa-regular fa-star text-secondary"></i>
                    <i class="fa-regular fa-star text-secondary"></i>
                    <i class="fa-regular fa-star text-secondary"></i>
                    <i class="fa-solid fa-star text-warning"></i>
                    <i class="fa-solid fa-star text-warning"></i>
                  </div>
                </div>
                <div class="d-flex align-items-center justify-content-between mt-1">
                  <span>0</span>
                  <div class="progress">
                    <div
                      class="progress-bar bg-danger"
                      role="progressbar"
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div class="stars me-2">
                    <i class="fa-regular fa-star text-secondary"></i>
                    <i class="fa-regular fa-star text-secondary"></i>
                    <i class="fa-regular fa-star text-secondary"></i>
                    <i class="fa-regular fa-star text-secondary"></i>
                    <i class="fa-solid fa-star text-warning"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-6 col-lg-12 gy-5 gy-xl-0">
        <div class="row">
          <div class="col-12">
            <div>
              <div class="d-flex">
                <img src="../../assets/logoShape.png" />
                <h2 class="me-3">وصف بسيط للمنتج</h2>
              </div>
              <p class="mt-2 text-secondary">لن يتم نشر عنوان بريدك الإلكتروني. تم وضع علامة على الحقول المطلوبة</p>
            </div>
            <form>
              <div class="mt-3">
                <div class="d-flex justify-content-between">
                  <div>
                    <span>تقييمك : </span>
                    <span class="text-danger"> * </span>
                  </div>
                  <div class="rate-1" @mouseenter="RateUs('.rate-1 span')">
                    <label>
                      <input type="checkbox" />
                      <span> <i class="fa-solid fa-star"></i></span>
                    </label>
                    <label>
                      <input type="checkbox" />
                      <span> <i class="fa-solid fa-star"></i></span>
                    </label>
                    <label>
                      <input type="checkbox" />
                      <span> <i class="fa-solid fa-star"></i></span>
                    </label>
                    <label>
                      <input type="checkbox" />
                      <span> <i class="fa-solid fa-star"></i></span>
                    </label>
                    <label>
                      <input type="checkbox" />
                      <span> <i class="fa-solid fa-star"></i></span>
                    </label>
                  </div>
                </div>
                <div class="d-flex justify-content-between mt-1">
                  <div>
                    <span>قيمة المال</span>
                  </div>
                  <div class="rate-2" @mouseenter="RateUs('.rate-2 span')">
                    <label>
                      <input type="checkbox" />
                      <span> <i class="fa-solid fa-star"></i></span>
                    </label>
                    <label>
                      <input type="checkbox" />
                      <span> <i class="fa-solid fa-star"></i></span>
                    </label>
                    <label>
                      <input type="checkbox" />
                      <span> <i class="fa-solid fa-star"></i></span>
                    </label>
                    <label>
                      <input type="checkbox" />
                      <span> <i class="fa-solid fa-star"></i></span>
                    </label>
                    <label>
                      <input type="checkbox" />
                      <span> <i class="fa-solid fa-star"></i></span>
                    </label>
                  </div>
                </div>
                <div class="d-flex justify-content-between mt-1">
                  <div>
                    <span>سرعة التسليم</span>
                  </div>
                  <div class="rate-3" @mouseenter="RateUs('.rate-3 span')">
                    <label>
                      <input type="checkbox" />
                      <span> <i class="fa-solid fa-star"></i></span>
                    </label>
                    <label>
                      <input type="checkbox" />
                      <span> <i class="fa-solid fa-star"></i></span>
                    </label>
                    <label>
                      <input type="checkbox" />
                      <span> <i class="fa-solid fa-star"></i></span>
                    </label>
                    <label>
                      <input type="checkbox" />
                      <span> <i class="fa-solid fa-star"></i></span>
                    </label>
                    <label>
                      <input type="checkbox" />
                      <span> <i class="fa-solid fa-star"></i></span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="mt-4">
                <div>
                  <span>مراجعاتك</span>
                  <span class="text-danger"> * </span>
                  <textarea rows="7" class="form-control mt-2"></textarea>
                </div>
                <div class="mt-3">
                  <label for="Name"> الاسم <span class="text-danger">*</span></label>
                  <input id="Name" type="text" class="form-control mt-2" />
                </div>
                <div class="mt-3">
                  <label for="Email"> البريد الإلكتروني <span class="text-danger">*</span></label>
                  <input id="Email" type="text" class="form-control mt-2" />
                </div>
                <div class="mt-4">
                  <div class="d-flex">
                    <div>
                      <input id="save" type="checkbox" />
                    </div>
                    <div class="me-2">
                      <span
                        >احفظ اسمي، بريدي الإلكتروني، والموقع الإلكتروني في هذا المتصفح لاستخدامها في المرة القادمة التي أقوم
                        فيها بالتعليق.</span
                      >
                      <p class="mt-2">يجب عليك تسجيل الدخول لتتمكن من إضافة الصور إلى رأيك.</p>
                    </div>
                  </div>
                </div>
                <input type="submit" value="ارسال" />
                <p class="mt-4">مرجعات</p>
                <p class="text-secondary">لا توجد اي مرجعات بعد</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../../scss/main';
.ProductDetails {
  margin-top: 80px;
  @include textStyle;
  .row {
    > div:first-child {
      .row {
        > div:first-of-type,
        > div:nth-of-type(2) {
          > div {
            width: 100%;
            max-width: 480px;
            p {
              text-align: justify;
              color: gray;
            }
            @include breakpoints(large){
              max-width: 800px;
            }
          }
        }
        > div:nth-child(3) {
          max-width: 550px;
          @include breakpoints(large){
            max-width: 800px;
          }
          > span {
            margin-right: 38px;
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
              right: -10px;
              border-radius: 4px;
            }
          }
          h3 {
            font-size: 36px;
            letter-spacing: 1.5px;
            font-weight: bolder;
          }
          .ProgressBar {
            direction: ltr;
            .progress {
              height: 12px;
              width: 380px;
              @include breakpoints(large) {
                width: 500px;
              }
            }
          }
          .stars:not(:first-of-type) {
            font-size: 12px;
          }
        }
      }
    }
    > div:nth-child(2) {
      .row {
        > div {
          width: 100%;
          max-width: 555px;
          @include breakpoints(large){
            max-width: 800px;
          }
          div:first-child {
            p {
              font-size: 15px;
            }
          }
          form {
            > div:first-child {
              > div {
                span:first-child {
                  font-size: 15px;
                }
                span:nth-child(2) {
                  font-size: 20px;
                  margin-top: 5px;
                }
                .rate-1,
                .rate-2,
                .rate-3 {
                  direction: ltr;
                  label {
                    input {
                      display: none;
                    }
                    span {
                      font-size: 14px;
                      color: #c9c9c9;
                      margin-right: 5px;
                      cursor: pointer;
                    }
                    span.active {
                      color: #ff9c1a;
                    }
                  }
                }
              }
            }
            > div:nth-child(2) {
              > div:first-child {
                textarea {
                  resize: none;
                }
              }
              > div:nth-child(4) {
                span {
                  font-size: 15px;
                }
                p {
                  font-size: 15px;
                  color: gray;
                }
              }
              input[type='checkbox'] {
                cursor: pointer;
              }
              input[type='submit'] {
                border: 0;
                background-color: #db4444;
                color: white;
                border-radius: 5px;
                padding: 8px 30px;
                font-size: 14px;
                font-weight: bolder;
              }
            }
          }
        }
      }
    }
  }
}
</style>
