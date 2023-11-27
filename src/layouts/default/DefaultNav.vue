<template>
  <nav class="navbar navbar-expand-md navbar-light bg-white fixed-top pt-0 pb-0">
    <div class="container">
      <router-link to="/" class="navbar-brand" @click="collapseNavbar">
        <img class="logo" src="../../assets/logo.png" />
      </router-link>
      <button
        :class="['navbar-toggler', !navbarExpanded && 'collapsed']"
        type="button"
        aria-controls="navbarDefault"
        :aria-expanded="navbarExpanded"
        aria-label="Toggle navigation"
        @click="toggleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="navbarDefault" :class="['collapse navbar-collapse', navbarExpanded && 'show']">
        <div class="d-md-flex justify-content-between w-100">
          <ul class="navbar-nav mr-auto mt-3 pe-0 pe-md-5">
            <li class="nav-item ps-3">
              <router-link to="/" class="nav-link" @click="collapseNavbar">الرئيسية</router-link>
            </li>
            <li class="nav-item ps-3">
              <router-link to="/contactUs" class="nav-link" @click="collapseNavbar">تواصل معنا</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/aboutUs" class="nav-link" @click="collapseNavbar">من نحن</router-link>
            </li>
          </ul>
          <div class="d-md-flex align-items-center mt-3">
            <div class="search d-flex align-items-center d-md-none d-block d-lg-flex">
              <div class="icon">
                <span><i class="fa-solid fa-magnifying-glass"></i></span>
              </div>
              <input class="ps-3" type="search" placeholder="عن ماذا تبحث" />
            </div>
            <div class="mt-3 mb-3 mb-md-0 mt-md-0">
              <span class="notification-icon me-md-4">
                <img src="../../assets/4092563_notification_icon.png" />
              </span>
              <span class="shopping-icon" @click="toShoppingCart()">
                <img src="../../assets/Shopping-icon.png" />
              </span>
              <!--              <span class="like-icon">-->
              <!--                <img src="../../assets/7853757_heart_favorite_bookmarkt_love_icon.png" />-->
              <!--              </span>-->
              <span class="me-md-2" @click="toLogin()">
                <img src="../../assets/user_icon.png" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navbarExpanded: false
    }
  },
  methods: {
    toggleNavbar() {
      this.navbarExpanded = !this.navbarExpanded
    },
    collapseNavbar() {
      this.navbarExpanded = false
    },
    toLogin() {
      this.$router.push('/Login')
    },
    toShoppingCart() {
      this.$router.push('/ShoppingCart')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/variables';
nav {
  border-bottom: 0.2px solid #8c8c8c;
  .nav-link.active {
    color: $red !important;
  }
  .nav-link {
    color: black;
  }
  .logo {
    width: 75px;
    height: 75px;
  }
  span {
    margin: 0 8px;
    img {
      cursor: pointer;
      width: 25px;
    }
  }
  .search {
    background-color: #efefef;
    border-radius: 5px;
    .icon {
      padding: 0 15px;
      font-size: 18px;
    }
    input {
      background-color: transparent;
      border: 0;
      width: 100%;
      padding: 7px 0;
      &:focus {
        outline: none;
      }
      &::placeholder {
        font-size: 14px;
      }
    }
  }
}
</style>
