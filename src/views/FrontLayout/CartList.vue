<template>
    <p>這是購物車</p>
    <table class="table align-middle">
        <thead>
            <tr>
                <th width="50px"></th>
                <th scope="col" class="text-center">品名</th>
                <th scope="col" width="100px">單價</th>
                <th scope="col" width="220px"  class="text-center">數量/單位</th>
                <th width="150px"></th>
            </tr>
        </thead>
        <tbody class="table-group-divider">
            <template v-if="cartList.length !== 0">
                <tr v-for="cartProduct in cartList" :key="cartProduct.id">
                    <td>
                        <button type="button" class="btn btn-outline-danger btn-sm"
                         @click="() => deleteSingle(cartProduct)"
                         :disabled="loadingItem === cartProduct.id">
                        <!---->
                        X
                        </button>
                    </td>
                    <td class="text-center">
                        {{ cartProduct.product.title }}
                    </td>
                    <td class="fs-5">
                        {{ cartProduct.product.price }}
                    </td>
                    <td class="">
                        <div class="input-group w-50">
                            <input v-model="cartProduct.qty" type="number" min="1" class="form-control"
                            @change="() => editNum(cartProduct)" style="{ disabled= }"
                            :disabled="loadingItem === cartProduct.id">
                            <!---->
                            <span class="input-group-text">
                                {{ cartProduct.product.unit }}
                            </span>
                        </div>
                    </td>
                    <td class="text-end fs-5">
                        ${{ cartProduct.total }}
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="fs-5 text-end fw-bold">
                        總計：
                        ${{  }}
                    </td>
                </tr>
            </template>
            <template v-else>
                <tr>
                    <td>
                    </td>
                    <td class="text-secondary text-end">
                        <h3 class="mt-3">購物車目前沒東西!  叉滴~</h3>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </template>
        </tbody>
    </table>
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      cartList: {},
      loadingItem: ''
    }
  },
  methods: {
    getCart () {
      this.$http.get(`${VITE_APP_URL}api/${VITE_APP_PATH}/cart`)
        .then(res => {
          this.cartList = res.data.data.carts
        })
    },
    deleteSingle (product) {
      this.loadingItem = product.id
      this.$http.delete(`${VITE_APP_URL}api/${VITE_APP_PATH}/cart/${product.id}`)
        .then(res => {
          alert('已刪除產品')
          this.getCart()
          this.loadingItem = ''
        })
        .catch(err => {
          alert(err.response.data.message)
        })
    },
    editNum (product) {
      const data = {
        product_id: product.id,
        qty: product.qty
      }
      this.loadingItem = product.id
      this.$http.put(`${VITE_APP_URL}api/${VITE_APP_PATH}/cart/${product.id}`, { data })
        .then(res => {
          alert(res.data.message)
          this.getCart()
          this.loadingItem = ''
        })
        .catch(err => {
          alert(err.response.data.message)
        })
    }
  },
  mounted () {
    this.getCart()
  }
}
</script>
