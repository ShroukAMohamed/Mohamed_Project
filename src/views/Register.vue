<template>
  <div class="container">
    <div class="Register">
      <div class="row">
        <div class="col-lg-4 col-md-6 gy-5 gy-md-0">
          <div class="nextStep pb-5">
            <span></span>
            <span></span>
          </div>
          <CreateAccount />
        </div>
        <div class="col-lg-8 col-md-6 text-start pe-md-4 order-first order-md-last">
          <img class="img-fluid sideImage" src="../assets/SideImage.png" />
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CreateAccount from '@/components/Register/CreateAccount.vue'
import UploadImg from '@/mixins/UploadImg.vue'

export default {
  name: 'RegisterVue',
  components: { CreateAccount },
  mixins: [UploadImg]
}
</script>

<style scoped lang="scss">
@import '../scss/variables';
@import '../scss/main';
.Register {
  margin-top: 50px;
  .nextStep {
    span:first-child {
      position: relative;
      &:after {
        content: '';
        position: absolute;
        background-color: #bc0000;
        width: 170px;
        height: 8px;
        border-radius: 2px;
        @include breakpoints(large) {
          width: 150px;
        }
      }
    }
    .Completed {
      &:after {
        width: 170px !important;
        @include breakpoints(large) {
          width: 150px !important;
        }
      }
    }
    span:nth-child(2) {
      position: relative;
      &:before {
        content: '';
        position: absolute;
        background-color: #e6e6e6;
        width: 170px;
        height: 8px;
        right: 188px;
        border-radius: 2px;
        @include breakpoints(large) {
          width: 150px;
          right: 160px;
        }
      }
      &:after {
        transition: all 0.5s;
        content: '';
        position: absolute;
        background-color: #bc0000;
        width: 0;
        height: 8px;
        right: 188px;
        border-radius: 2px;
        @include breakpoints(large) {
          right: 160px;
        }
      }
    }
  }
  .background {
    display: none;
    background: url('../assets/Frame.png'), linear-gradient(132.81deg, #c54442 -2.42%, rgba(232, 203, 203, 0) 100.88%);
    width: 100%;
    height: 100%;
    .gradient-border {
      //border: 2px solid #9f9f9f;
      //border-radius: 50%;
      //padding: 3px;
      #img-view {
        position: relative;
        background-image: url('../assets/user_photo.png');
        width: 300px;
        height: 300px;
        border-radius: 50%;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        .my_file {
          position: absolute;
          width: 65px;
          box-sizing: border-box;
          left: 70%;
          top: 65%;
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
            font-size: 42px;
            color: black;
            background-color: white;
            text-align: center;
            border-radius: 50%;
          }
        }
      }
    }
  }
}
</style>
