<template>
  <div class="list">
    <div class="tableList" v-for="(item,index) in data" :key="index">
      <h4>{{ item.type}}</h4>
      <ul>
          <li :key="index" v-for="(obj,index) in item.list" @click="btnHandler(obj.id,item.type)">
              {{obj.name}}
          </li>
          <li><el-button @click="btnHandler(0,item.type)">新增一个</el-button></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data:[]
    }
  },
  created() {},
  mounted() {
      this.getList()
  },
  methods: {
    getList() {
      this.axios({
        method: 'get',
        url: '/api/Table/GetAllData'
      })
        .then((res) => {
          if (res.data.code == 0) {
            this.data = res.data.data
            console.log(this.data)
          } else {
            alert(res.data.msg)
          }
        })
        .catch((error) => {
           this.$message.error(error)
        })
    },
    btnHandler(id,tableName){
        this.$router.push({path: '/SpreadJs', query: {id: id,tableName:tableName}});
    }
  },
}
</script>

<style scoped >
    li{
        cursor: pointer;
        color: rgb(34, 79, 228);
        list-style: none;
    }
    .list{
      text-align: left;
      width: 700px;
      margin: 0 auto;
    }
</style>
