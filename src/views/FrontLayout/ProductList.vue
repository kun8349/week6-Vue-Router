<template>
    <h2 class="text-center">
      產品列表
    </h2>
    <table class="table text-start align-middle">
      <thead>
        <tr>
          <th scope="col">圖片</th>
          <th scope="col">產品名稱</th>
          <th scope="col">價格</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        <tr v-for="product in products" :key="product.id">
          <td width="150px">
            <img :src="product.imageUrl" alt="主要圖片" class="img-fluid">
          </td>
          <td>{{ product.title }}</td>
          <td class="fs-5">${{ product.price }}</td>
          <td class="text-center">
            <div class="btn-group" role="group" aria-label="Basic outlined example">
              <router-link :to="`/product/${product.id}`" type="button" class="btn btn-sm btn-outline-dark">
                查看更多
              </router-link>
              <button type="button" class="btn btn-sm btn-outline-primary" @click="() => addCart(product.id)">
                加入購物車
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      products: {}
    }
  },
  methods: {
    getProducts () {
      this.$http.get(`${VITE_APP_URL}api/${VITE_APP_PATH}/products`)
        .then(res => {
          this.products = res.data.products
        })
    },
    addCart (item) {
      const data = {
        product_id: item,
        qty: 1
      }
      this.$http.post(`${VITE_APP_URL}api/${VITE_APP_PATH}/cart`, { data })
        .then(res => {
          alert(res.data.message)
        })
        .catch(err => {
          alert(err.response.data.message)
        })
    }
  },
  mounted () {
    this.getProducts()
  }
}

</script>
