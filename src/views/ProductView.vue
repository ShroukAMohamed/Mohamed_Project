<script>
import ProductDetails from '@/components/ProductView/ProductDetails.vue'
import RelatedProducts from '@/components/ProductView/RelatedProducts.vue'
import ViewComponent from '@/components/ProductView/ViewComponent.vue'

export default {
  name: 'ProductView',
  components: { RelatedProducts, ProductDetails, ViewComponent },
  data() {
    return {
      products: [
        require('../assets/image_57.png'),
        require('../assets/image_58.png'),
        require('../assets/image_61.png'),
        require('../assets/image_59.png')
      ],
      product: require('../assets/image_63.png'),
      productName: 'لوحة تحكم هافيك HV G-92',
      commentsNum: '150',
      productStatus: 'متاح في المخزن',
      productCost: '192.00 دولاراً',
      aboutProduct:
        'غلاف وحدة تحكم بلايستيشن 5 مصنوع من الفينيل عالي الجودة مع لاصق قناة هوائية لسهولة التركيب بدون فقاعات وإزالة خالية من الفوضى، حساس للضغط.',
      productSpecification:
        'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي',
      orderDetails:
        'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي',
      rateNum: '0'
    }
  }
}
</script>

<template>
  <div class="container">
    <ViewComponent
      :products="products"
      :product="product"
      :product-name="productName"
      :comments-num="commentsNum"
      :product-status="productStatus"
      :product-cost="productCost"
      :about-product="aboutProduct"
    />
    <ProductDetails :product-specification="productSpecification" :order-details="orderDetails" :rate-num="rateNum" />
    <RelatedProducts />
  </div>
</template>

<style scoped lang="scss"></style>
