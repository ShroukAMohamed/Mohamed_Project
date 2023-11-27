<script>
export default {
  name: 'ConfirmationVue'
}
</script>

<template>
  <div class="container">
    <div class="Confirmation">
      <div class="row">
        <p>
          <span class="text-secondary">الرئيسية</span><span class="ms-2 me-2 text-secondary"> / </span
          ><span class="text-secondary">حسابي</span><span class="ms-2 me-2 text-secondary"> / </span
          ><span class="text-secondary">منتج</span><span class="ms-2 me-2 text-secondary"> / </span
          ><span class="text-secondary">عرض العربة</span><span class="ms-2 me-2 text-secondary"> / </span>
          الدفع
        </p>
        <div class="col-12 mt-5">
          <div>
            <div class="d-flex">
              <img src="../assets/logoShape.png" />
              <h2 class="me-3">تأكيد الطلب</h2>
            </div>
          </div>
        </div>
      </div>
      <form>
        <div class="row justify-content-between mt-3">
          <div class="col-lg-5">
            <div>
              <label for="firstName" class="text-secondary">الاسم الاول <span class="text-danger">*</span></label>
              <input id="firstName" type="text" class="form-control mt-2" />
            </div>
            <div>
              <label for="city" class="text-secondary mt-4">البلدة/المدينة<span class="text-danger">*</span></label>
              <input id="city" type="text" class="form-control mt-2" />
            </div>
            <div>
              <label for="place" class="text-secondary mt-4">الحي</label>
              <input id="place" type="text" class="form-control mt-2" />
            </div>
            <div>
              <label for="address" class="text-secondary mt-4">عنوان الشارع <span class="text-danger">*</span></label>
              <input id="address" type="text" class="form-control mt-2" />
            </div>
            <div>
              <label for="apartment" class="text-secondary mt-4">شقة، طابق، الخ (اختياري) </label>
              <input id="apartment" type="text" class="form-control mt-2" />
            </div>
            <div>
              <label for="zip" class="text-secondary mt-4">الرمز البريدي ZIP <span class="text-danger">*</span></label>
              <input id="zip" type="text" class="form-control mt-2" />
            </div>
            <div>
              <label for="phone" class="text-secondary mt-4">رقم الهاتف<span class="text-danger">*</span></label>
              <input id="phone" type="text" class="form-control mt-2" />
            </div>
            <div class="saveInfo d-flex align-items-center mt-4">
              <input id="saveInfo" type="checkbox" />
              <label for="saveInfo" class="text-secondary me-2"
                >احفظ هذه المعلومات لتسجيل المغادرة بشكل أسرع في المرة القادمة</label
              >
            </div>
          </div>
          <div class="col-lg-5 gy-5 gy-lg-4">
            <div class="products-selected">
              <div class="d-flex justify-content-between">
                <span><img class="ms-3" src="../assets/g27cq4.png" /> شاشات الكريستال السائل</span>
                <span>$1100</span>
              </div>
              <div class="d-flex justify-content-between">
                <span><img class="ms-3" src="../assets/g92-2.png" /> لوحة ألعاب H1</span>
                <span>$650</span>
              </div>
            </div>
            <div class="d-flex justify-content-between">
              <span>المجموع الفرعي:</span>
              <span>$1750</span>
            </div>
            <div class="line"></div>
            <div class="d-flex justify-content-between">
              <span>قيمة الشحن:</span>
              <span>$1750</span>
            </div>
            <div class="line"></div>
            <div class="d-flex justify-content-between">
              <span>المجموع:</span>
              <span>$1750</span>
            </div>
            <!-- Button trigger modal -->
            <input
              type="submit"
              value="تأكيد الطلب"
              class="mt-4"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              @click.prevent
            />

            <!-- Modal -->
            <div
              id="staticBackdrop"
              class="modal fade"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-body d-flex flex-column align-items-center">
                    <div class="pb-4 mt-3"><img src="../assets/Tick.svg" /></div>
                    <p class="mb-2">لقد تمت عملية الطلب بنجاح</p>
                    <p>تستطيع ان تري حالة الطلب الخاص بك الأن من قائمة طلباتي الخاصة بك</p>
                    <button type="button" class="mb-3 mt-3" data-bs-dismiss="modal">حسنََا</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../scss/main';
.Confirmation {
  margin-top: 60px;
  @include textStyle;
  .row:first-of-type {
    p {
      font-size: 14px;
    }
  }
  form {
    .row {
      > div:nth-child(2) {
        .products-selected {
          padding-bottom: 35px;
          > div:not(:first-child) {
            margin-top: 30px;
          }
        }
        .line {
          border-bottom: 1px solid #6c6c6c;
          margin: 15px 0;
        }
        img {
          width: 45px;
          height: 40px;
        }
      }
      input[type='text'] {
        background-color: #f5f5f5;
        padding: 8px;
        width: 100%;
        max-width: 470px;
      }
      input[type='submit'] {
        width: 100%;
        max-width: 150px;
        background-color: #db4444;
        color: white;
        border: 0;
        border-radius: 5px;
        padding: 13px 35px;
      }
      .saveInfo {
        label {
          font-size: 15px;
          cursor: pointer;
        }
        input[type='checkbox'] {
          width: 20px;
          height: 20px;
          accent-color: #db4444;
          cursor: pointer;
        }
      }
      .modal-body {
        img {
          width: 90px !important;
          height: 90px !important;
        }
        p:first-of-type {
          font-size: 22px;
          font-weight: bolder;
        }
        p:nth-of-type(2) {
          width: 100%;
          max-width: 300px;
          text-align: center;
          color: #5d5e62;
          line-height: 25px;
        }
        button {
          width: 100%;
          max-width: 150px;
          background-color: #db4444;
          color: white;
          border: 0;
          border-radius: 5px;
          padding: 10px 0;
        }
      }
    }
  }
}
</style>
