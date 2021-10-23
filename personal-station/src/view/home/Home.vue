<!--
 * @Author: your name
 * @Date: 2021-10-19 10:40:11
 * @LastEditTime: 2021-10-19 19:57:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personal-station\src\view\Home.vue
-->
<template>
  <div class="home">
    <img src="../../assets/hometitle.png" class="img">
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
  width: 100%;
  height: 100vh;
  background: url('../../assets/home.png') center center no-repeat;
}
.img{
  margin: 100px 400px;
  cursor: pointer;
}
</style>
