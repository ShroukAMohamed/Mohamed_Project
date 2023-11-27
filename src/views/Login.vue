<template>
  <div class="container">
    <div class="Login">
      <div class="row justify-content-between">
        <div class="col-lg-4 col-md-6 mt-lg-5">
          <div>
            <div class="d-flex">
              <img src="../assets/logoShape.png" />
              <h2 class="me-3">تسجيل الدخول</h2>
            </div>
          </div>
          <p class="text-secondary mt-2 text-style">برجاء اكمال البيانات لاستكمال عمليه الدخول</p>
          <form method="" class="mt-5">
            <div>
              <label for="email"> البريد الإلكتروني / رقم الهاتف </label>
              <input id="email" type="text" class="form-control mt-2" name="email" placeholder="ex@gmail.com" />
            </div>
            <div class="mt-3">
              <label for="password"> كلمة المرور </label>
              <input id="password" type="password" class="form-control mt-2" name="password" placeholder="*************" />
            </div>
            <input type="submit" value="تسجيل الدخول" class="btn btn-danger mt-5 logIn" @click.prevent />
            <div class="d-flex mt-3">
              <p>ليس لديك حساب ؟</p>
              <router-link to="/Register" class="text-danger me-3 fw-bold">إنشاء حساب</router-link>
            </div>
          </form>
        </div>
        <div class="col-lg-8 col-md-6 text-start pe-md-4">
          <img class="img-fluid" src="../assets/SideImage.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginVue'
}
</script>

<style scoped lang="scss">
@import '../scss/main';
.Login {
  margin-top: 50px;
  @include textStyle;
  .text-style {
    font-size: 18px;
  }
  form {
    width: 100%;
    max-width: 360px;
    .logIn {
      width: 100%;
      padding: 12px 0 !important;
    }
    input:not(.logIn) {
      padding: 12px;
      background-color: #f5f5f5;
      border: none;
      font-size: 14px;
      &::placeholder {
        color: #a7a7a7;
        font-size: 13px;
      }
    }
    label {
      font-weight: bold;
      font-size: 13px;
    }
  }
}
</style>
