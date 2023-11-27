<script>
export default {
  name: 'ShoppingCart',
  methods: {
    ConfirmPage() {
      this.$router.push('/ConfirmShopping')
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="shopping-cart">
      <p><span class="text-secondary">الرئيسية</span><span class="ms-2 me-2 text-secondary"> / </span> عربة التسوق</p>
      <div class="row">
        <div class="col-12">
          <table class="w-100">
            <thead>
              <tr>
                <th scope="col">المنتج</th>
                <th scope="col">السعر</th>
                <th scope="col">نسبة الربح</th>
                <th scope="col">الكمية</th>
                <th scope="col">المجموع الفرعي</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"><img src="../assets/g92-2.png" /> شاشات الكريستال</th>
                <td>$660</td>
                <td>$660</td>
                <td><input type="number" min="1" /></td>
                <td>$660</td>
              </tr>
              <tr>
                <th scope="row"><img src="../assets/g27cq4.png" />لوحة العاب H1</th>
                <td>$550</td>
                <td>$550</td>
                <td><input type="number" min="1" /></td>
                <td>$550</td>
              </tr>
            </tbody>
          </table>
          <button class="btn btn-outline-dark rounded-1 mt-4">العودة الي المتجر</button>
          <div class="shoppingCard mt-5">
            <h4 class="pb-3">إجمالي العربة</h4>
            <div class="d-flex justify-content-between">
              <span>المجموع الفرعي:</span>
              <span>$1750</span>
            </div>
            <div class="line"></div>
            <div class="d-flex justify-content-between">
              <span>نسبة الربح:</span>
              <span>$1750</span>
            </div>
            <div class="line"></div>
            <div class="d-flex justify-content-between">
              <span>المجموع:</span>
              <span>$1750</span>
            </div>
            <button class="mt-3" @click="ConfirmPage">طلب</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.shopping-cart {
  margin-top: 60px;
  table {
    border-collapse: separate;
    border-spacing: 0 3em;
    tr {
      box-shadow: 0px 1px 13px 0px #0000000d;
    }
    td,
    th {
      padding: 20px;
      padding-right: 25px;
      input[type='number'] {
        width: 80px;
        height: 40px;
        outline: none;
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
        }
        &::-webkit-outer-spin-button {
          position: relative;
          &:before {
            position: absolute;
            content: '\f077';
            font-family: FontAwesome;
            font-size: 16px;
          }
        }
      }
      img {
        width: 40px;
        height: 40px;
        margin-left: 15px;
      }
    }
  }
  button:first-of-type {
    padding: 13px 35px;
  }
  .shoppingCard {
    width: 100%;
    max-width: 470px;
    border: 1.5px solid black;
    padding: 25px 16px;
    margin: auto;
    margin-left: 0;
    h4 {
      font-size: 20px;
    }
    .line {
      border-bottom: 1px solid #6c6c6c;
      margin: 10px 0;
    }
    button {
      width: 100%;
      max-width: 190px;
      background-color: #db4444;
      color: white;
      border: 0;
      border-radius: 5px;
    }
  }
}
</style>
