<template>
  <div class="home">
    <!-- 导航栏部分 -->
    <div class="navigate">
      <div class="img">
        <el-image :src="logo"></el-image>
      </div>
      <div class="menu">
        <el-menu
        mode="horizontal"
        >
          <el-menu-item index="1"><a @click="toGeneral">公司概况</a></el-menu-item>
          <el-menu-item index="2"><a href="#">资质荣誉</a></el-menu-item>
          <el-menu-item index="3"><a href="#">经典作品</a></el-menu-item>
          <el-menu-item index="2"><a href="#">新闻中心</a></el-menu-item>
          <el-menu-item index="3"><a href="#">联系我们</a></el-menu-item>
        </el-menu>
      </div>
    </div>
    <!-- 主体部分 -->
    <div id="main" ref="imageChange">
      <router-view />
      <!-- <div id="page1" v-show="state.transform" @click="toClassical">
        <el-image :src="p1" />
      </div>
      <div id="page2" v-show="state.transform" >
        <el-image :src="p2" />
      </div>
      <div id="page3">
        <el-image :src="p1" />
      </div> -->
    </div>
  </div>
</template>

<script setup>
import logo from "@/assets/images/jy_logo.png"
import phone from '@/assets/images/phone.png'
import p1 from '@/assets/images/p1.jpg'
import p2 from '@/assets/images/p2.jpg'
import { reactive, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const imageChange = ref(null)
const state = reactive ({
  transform: true,
})

// 切换到经典作品页面 
const toClassical = () => {
  router.push('./classical')
}

// // 鼠标wheel页面滚动
// const transform = () => {
//   const el1 = document.getElementById('page1')
//   const el2 = document.getElementById('page2')
//   const el3 = document.getElementById('page3')
//   var e = e || window.event
//   if(e.wheelDelta-150){
//     el1.style.transform = 'translateY(-1200px) scale(1) rotate(0deg)'
//     el2.style.transform = 'translateY(-900px) scale(1) rotate(0deg)'
//     // el3.style.transform = 'translateY(-900px) scale(1) rotate(0deg)'
//   } else {
//     el1.style.transform = 'translateY(0px) scale(1) rotate(0deg)'
//     el2.style.transform = 'translateY(1200px) scale(1) rotate(0deg)'
//     // el3.style.transform = 'translateY(1200px) scale(1) rotate(0deg)'
//   }
  
// }

// 跳转到公司概况
const toGeneral = () => {
  router.push('./general')
}
// onMounted(() => {
//   // 监听鼠标滚动
//   imageChange.value.addEventListener('wheel', transform)
// })
</script>

<style lang="scss">
.home {
  height: 100%;
  display: block;
  background: url("@/assets/images/background.jpg") no-repeat;
  z-index: 0;
}
.navigate {
  height: 97px;
  position: relative;
  z-index: 999;
  #main {
    width: 100%;
    position: relative;
  }
  .img {
    position: absolute;
    height: 71px;
    width: 524px;
    top: 10px;
    left: 30px;
  }
  .menu {
    position: absolute;
    right: 0;
    width: 779px;
    height: 85px;
    background-color: rgb(0,0,0,0);
    vertical-align: middle;
    line-height: 85px;
    a {
      color: #1E1C76;
      text-decoration: none;
      font-size: 17px;
    }
    .el-menu.el-menu--horizontal {
      display: flex;
      flex-wrap: nowrap;
      background: none;
      border: none;
    }
    .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, 
    .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover {
    background-color: rgb(0,0,0,0);
    border-bottom: 1px solid red;
    }
  }
}
.menu .el-menu.el-menu--horizontal {
      margin-top: 20px;
      display: flex;
      flex-wrap: nowrap;
      background: none;
      border: none;
}
</style>