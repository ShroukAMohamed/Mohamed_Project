<template>
  <footer class="footer d-flex align-items-center">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 col-sm-6">
          <img class="logo mb-4" src="../../assets/logo.png" />
          <p class="mb-0">حقوق الطبع والنشر &copy; 2023 افرلي.</p>
          <span>جميع الحقوق محفوظة</span>
        </div>
        <div class="col-lg-2 col-sm-6">
          <p>تابعنا</p>
          <div class="mb-2">
            <a href="#"
              ><span><i class="fa-brands fa-facebook"></i></span> Facebook</a
            >
          </div>
          <div class="mb-2">
            <a href="#"
              ><span><i class="fa-brands fa-instagram"></i></span> Instagram</a
            >
          </div>
          <div class="mb-2">
            <a href="#"
              ><span><i class="fa-brands fa-x-twitter"></i></span> Twitter</a
            >
          </div>
          <div class="mb-2">
            <a href="#"
              ><span><i class="fa-brands fa-linkedin"></i></span> LinkedIn</a
            >
          </div>
        </div>
        <div class="col-lg-2 col-sm-6 gy-4 gy-lg-0">
          <p>روابط هامة</p>
          <p><a href="#">رابط هام</a></p>
          <p><a href="#">رابط هام</a></p>
          <p><a href="#">رابط هام</a></p>
          <p><a href="#">رابط هام</a></p>
        </div>
        <div class="col-lg-3 col-sm-6 gy-4 gy-lg-0">
          <h4>Download App</h4>
          <p class="mb-2">Save 3$ with App New User Only</p>
          <div class="d-flex justify-content-end">
            <div class="d-flex flex-column ms-2">
              <a href="#"> <img src="../../assets/playstore.png" /></a>
              <a href="#" class="mt-2"> <img src="../../assets/download-appstore.png" /></a>
            </div>
            <img src="../../assets/Qrcode1.png" />
          </div>
          <div class="mt-3 icons">
            <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
            <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
          </div>
        </div>
      </div>
      <div class="line"></div>
      <div
        class="d-flex flex-column align-items-center justify-content-start align-items-md-start justify-content-md-between flex-md-row rights"
      >
        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookies Settings</a>
        </div>
        <p class="mt-2 mt-md-0">&copy; 2023 Relume. All rights reserved</p>
      </div>
      <div class="text-center">
        <span>Developed by</span>
        <a class="text-white" href="https://github.com/kamalsroor" target="_blank" rel="noopener">@kamalsroor</a>
      </div>
    </div>
  </footer>
</template>
<script setup></script>
<style lang="scss" scoped>
@import '../../scss/variables';
@import '../../scss/main';
footer {
  margin-top: 100px;
  color: white;
  background-color: $gray-900;
  @include breakpoints(mobile) {
    text-align: center !important;
  }
  .container {
    margin: 70px auto;
    .row {
      > div:first-child {
        p,
        span {
          font-weight: 400;
        }
        .logo {
          width: 75px;
          height: 75px;
        }
      }
      > div:nth-child(2) {
        div:not(:first-child) {
          font-size: 14px;
          a {
            font-size: 14px;
            font-weight: 400;
            cursor: pointer;
            color: white;
            text-decoration: none;
            span {
              font-size: 19px;
              padding-left: 10px;
            }
          }
        }
        @include breakpoints(large) {
          text-align: end;
        }
        @include breakpoints(mobile) {
          text-align: center;
        }
      }
      > div:nth-child(3) {
        p:not(:first-child) {
          font-size: 14px;
          a {
            color: white;
            text-decoration: none;
          }
        }
      }
      > div:nth-child(4) {
        text-align: end !important;
        @include breakpoints(mobile) {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        h4 {
          font-size: 20px;
          line-height: 28px;
        }
        p {
          font-size: 12px;
          color: #d5d5d5;
        }
        .icons {
          a {
            font-size: 20px;
            padding: 15px 0;
            margin: 0 15px;
            color: white;
          }
        }
      }
    }
    .line {
      border-bottom: 1px solid white;
      margin-top: 40px;
      margin-bottom: 20px;
    }
    .rights {
      > div {
        a {
          font-size: 14px;
          margin-left: 20px;
          color: white;
        }
      }
      p {
        direction: ltr !important;
        font-size: 14px;
      }
      @include breakpoints(small) {
      }
    }
  }
}
</style>
