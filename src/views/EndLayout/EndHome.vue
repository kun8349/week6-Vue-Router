<template>
     <div class="container">
        <h1 class="text-center my-3">你目前在後台首頁</h1>
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid  d-flex justify-content-center">
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">回到前台</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/admin/order">後台訂單</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/admin/product">後台產品列表</router-link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        <div class="text-center">
            <router-view/>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>
