<template>
  <div class="container">
    <div class="Profile">
      <div class="row">
        <div class="col-xl-2 col-lg-3 order-last order-lg-first gy-5 gy-lg-0">
          <p>الرئيسية <span> / حسابي </span></p>
          <ul>
            <li><img src="../assets/profile.png" /> حسابي</li>
            <li><img src="../assets/orders.png" /> طلباتي</li>
            <li><img src="../assets/Group81615.png" /> نسبة الأرباح</li>
            <li><img src="../assets/subscribes.png" /> الإشتراكات</li>
            <li><img src="../assets/wallet.png" /> المحفظة</li>
            <li><img src="../assets/logout.png" /> تسجيل الخروج</li>
          </ul>
          <button class="btn btn-secondary">تغيير كلمة المرور</button>
        </div>
        <div class="col-xl-10 col-lg-9">
          <div class="background">
            <div class="d-flex align-items-center justify-content-center h-100">
              <div class="gradient-border">
                <div id="img-view">
                  <form>
                    <input id="input-file" type="file" class="my_file" accept="image/*" />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <form class="saveChanges">
            <div class="row">
              <div class="col-md-6">
                <div class="input-fields">
                  <div>
                    <label for="email"> البريد الإلكتروني </label>
                    <input id="email" type="text" class="form-control mt-2" name="email" placeholder="ex@gmail.com" />
                  </div>
                  <div class="mt-3">
                    <label for="phone"> الهاتف </label>
                    <div class="d-flex justify-content-between">
                      <input id="phone" type="text" class="form-control mt-2" name="phone" placeholder="0000000000" />
                      <div class="mt-2 selector">
                        <select class="form-select">
                          <option>20+</option>
                          <option>1+</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="mt-3">
                    <label for="name"> الإسم كاملا </label>
                    <input id="name" type="text" class="form-control mt-2" name="name" placeholder="ex@gmail.com" />
                  </div>
                  <div class="mt-3">
                    <label for="phoneNum">رقم هاتف إضافي</label>
                    <input id="phoneNum" type="text" class="form-control mt-2" name="confirmPass" placeholder="0000000000" />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="selectComponent">
                  <SelectComponent />
                  <input type="submit" value="حفظ التعديلات" class="btn btn-danger mt-5 save-edits rounded-1" @click.prevent />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SelectComponent from '@/components/SelectComponent.vue'
import UploadImg from '@/mixins/UploadImg.vue'

export default {
  name: 'ProfileVue',
  components: { SelectComponent },
  mixins: [UploadImg]
}
</script>

<style scoped lang="scss">
@import '../scss/main';
.Profile {
  margin-top: 50px;
  ul {
    list-style: none;
    padding-right: 0;
    li {
      cursor: pointer;
      font-size: 14px;
      font-weight: bold;
      img {
        padding-left: 6px;
      }
    }
    li:not(li:first-child) {
      position: relative;
      margin: 23px 0;
      &:before {
        content: '';
        position: absolute;
        border-bottom: 0.8px solid #b4b4b4;
        width: 100%;
        height: 1px;
        top: -12px;
        pointer-events: none;
      }
    }
  }
  button {
    width: 100%;
    max-width: 180px;
    margin-top: 10px;
    padding: 10px 0;
  }
  .saveChanges {
    margin-top: 80px;
    .save-edits {
      width: 100%;
      padding: 13px 0;
    }
    .selectComponent {
      width: 100%;
      max-width: 400px;
      margin: auto;
    }
    .input-fields {
      width: 100%;
      max-width: 360px;
      margin: auto;
      .continue {
        width: 100%;
        padding: 12px 0 !important;
      }
      input:not(.continue) {
        padding: 12px;
        background-color: #f5f5f5;
        border: none;
        font-size: 14px;
        &::placeholder {
          color: #a7a7a7;
          font-size: 13px;
        }
      }
      #phone {
        max-width: 250px;
      }
      .selector {
        width: 100%;
        max-width: 85px;
        select {
          font-size: 13px;
          height: 100%;
          background-color: #f5f5f5;
          border: 0;
        }
      }
      label {
        font-weight: bold;
        font-size: 13px;
      }
    }
  }
  .background {
    background-image: url('../assets/Frame.png');
    width: 100%;
    height: 25vh;
    .gradient-border {
      position: relative;
      //border: 1.5px solid #9f9f9f;
      //border-radius: 50%;
      //padding: 4px;
      bottom: -35px;
      #img-view {
        background-image: url('../assets/user_photo.png');
        width: 250px;
        height: 250px;
        border-radius: 50%;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        bottom: -35px;
        .my_file {
          position: absolute;
          width: 60px;
          box-sizing: border-box;
          left: 70%;
          top: 60%;
          display: flex;
          justify-content: center;
          outline: none;
          color: transparent;
          cursor: pointer;
          &::-webkit-file-upload-button {
            visibility: hidden;
          }
          &:after {
            content: '\f16d';
            font-family: 'FontAwesome';
            font-size: 35px;
            color: black;
            padding: 2px 0;
            background-color: #f5f5f5;
            text-align: center;
            border-radius: 50%;
            border: 1px solid gray;
          }
        }
      }
    }
  }
}
</style>
