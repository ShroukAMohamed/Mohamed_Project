<template>
  <div class="InfoCompletion">
    <div class="">
      <div class="d-flex">
        <img src="../../assets/logoShape.png" />
        <h2 class="me-3">إستكمال البيانات</h2>
      </div>
    </div>
    <p class="text-secondary mt-2 text-style">برجاء اكمال البيانات لإنشاء حساب جديد</p>
    <div class="info-completion">
      <div>
        <label for="Name"> الإسم كاملا </label>
        <input id="Name" type="text" class="form-control mt-2" name="full_name" placeholder="ex@gmail.com" />
      </div>
      <div class="mt-3">
        <label for="phoneNum">رقم هاتف إضافي</label>
        <div class="d-flex justify-content-between">
          <input id="phoneNum" type="text" class="form-control mt-2" name="phoneNum" placeholder="0000000000" />
          <div class="mt-2 selector">
            <select class="form-select">
              <option>20+</option>
              <option>1+</option>
            </select>
          </div>
        </div>
      </div>
      <SelectComponent />
      <input type="submit" value="إنشاء حساب" class="btn btn-danger mt-5 makeAcc" @click.prevent="Profile" />
    </div>
  </div>
</template>

<script>
import SelectComponent from '@/components/SelectComponent.vue'

export default {
  name: 'InfoCompletion',
  components: { SelectComponent },
  methods: {
    Profile() {
      this.$router.push('/Profile')
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../scss/variables';
@import '../../scss/main';
.InfoCompletion {
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
  .info-completion {
    width: 100%;
    max-width: 360px;
    .makeAcc {
      width: 100%;
      padding: 12px 0 !important;
    }
    input:not(.makeAcc) {
      padding: 12px;
      background-color: #f5f5f5;
      border: none;
      font-size: 14px;
      &::placeholder {
        color: #a7a7a7;
        font-size: 13px;
      }
    }
    #phoneNum {
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
