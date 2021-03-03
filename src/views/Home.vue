<template>
  <div class="home">
    <el-button type="success" @click="btnHnadler">配置表关系</el-button>
    <el-button type="primary" @click="btnHandler2">spreadjs操作</el-button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    
  },
  methods:{
    btnHnadler() {
      this.$router.push('/config')
    },
    btnHandler2() {
      this.$router.push('/list')
    }
  }
}
</script>

<style scoped>
.home{
  padding-top: 400px;
}
</style>
