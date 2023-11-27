<template>
  <form>
    <div class="CreateAccount">
      <div class="">
        <div class="d-flex">
          <img src="../../assets/logoShape.png" />
          <h2 class="me-3">إنشاء حساب جديد</h2>
        </div>
      </div>
      <p class="text-secondary mt-2 text-style">برجاء اكمال البيانات لإنشاء حساب جديد</p>
      <div class="create-account">
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
          <label for="password"> كلمة المرور </label>
          <input id="password" type="password" class="form-control mt-2" name="password" placeholder="*************" />
        </div>
        <div class="mt-3">
          <label for="confirmPass">تأكيد كلمة المرور</label>
          <input
            id="confirmPass"
            type="password"
            class="form-control mt-2"
            name="password_confirmation"
            placeholder="*************"
          />
        </div>
        <input type="button" class="btn btn-danger mt-5 continue" value="متابعة" @click.prevent="Continue" />
        <div class="d-flex mt-3">
          <p>لديك حساب بالفعل ؟</p>
          <router-link to="/Login" class="text-danger me-3 fw-bold">تسجيل الدخول</router-link>
        </div>
      </div>
    </div>
    <InfoCompletion />
  </form>
</template>

<script>
import $ from 'jquery'
import InfoCompletion from '@/components/Register/InfoCompletion.vue'

export default {
  name: 'CreateAccount',
  components: { InfoCompletion },
  methods: {
    Continue() {
      $('.CreateAccount').hide()
      $('.InfoCompletion').show()
      $('.sideImage').hide()
      $('.background').show()
      $('.nextStep span:nth-child(2)').addClass('Completed')
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../scss/variables';
.InfoCompletion {
  display: none;
}
.CreateAccount {
  > div:first-child {
    > div {
      img {
        width: 25px;
        height: 35px;
      }
      h2 {
        font-weight: bolder;
      }
    }
  }
  .text-style {
    font-size: 18px;
  }
  .create-account {
    width: 100%;
    max-width: 360px;
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
</style>
