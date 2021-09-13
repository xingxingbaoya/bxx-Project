<template>
   <div id="main" :class="'page'+ state.pageNum" ref="imageChange">
      <div id="page1" v-show="state.transform" @click="toClassical">
        <el-image :src="p1" />
      </div>
      <div id="page2" v-show="state.transform" style="animation-name: none; animation-direction: normal; animation-duration: 0s; animation-delay: 0s;">
        <div id="company">
          <p style="color:#D73231; font-size:36px"><strong>COMPANY</strong></p>
          <p style="color:#00000; font-size:26px">公司概况</p>
          <el-image :src="icon"></el-image>
        </div>
        <div class="content">
          <div id="detail">
            <span style="color:#b61620; font-size:32px"><strong>走进设计院</strong></span>
            <p style="color:#656565;font-size:14px;float: left;">湖南省教育建筑设计院有限公司（原湖南省教育建筑设计院）位于长沙市开福区东风路四条巷42号。公司于1984年由省教育厅组织创建，2015年由省教育厅整体移交省国资委，并于2017年完成公司制改造。</p>
            <p style="color:#656565;font-size:14px">公司拥有建筑工程设计（含总承包）乙级资质、城市规划丙级资质。现有各类专业技术人员30余名，其中高级工程师职称6人、中级工程师职称22人；一级注册建筑师、一级注册结构师、注册规划师、注册设备师共8人，专业技术人员占比达95％，具有较强的人才优势与创新动能。</p>
          </div>
          <div id="element">
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import icon from '@/assets/images/companyicon.png'
import p1 from '@/assets/images/p1.jpg'
import p2 from '@/assets/images/p2.jpg'
import { reactive, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const imageChange = ref(null)
const state = reactive ({
  transform: true,
  pageNum: null,
})

// 切换到经典作品页面 
const toClassical = () => {
  router.push('./classical')
}

// 鼠标wheel页面滚动
const transform = () => {
  const el1 = document.getElementById('page1')
  const el2 = document.getElementById('page2')
  const el4 = document.getElementById('company')
  const el5 = document.getElementById('detail')
  const el6 = document.getElementById('element')
  var e = e || window.event
  debugger
  if(e.deltaY > 0){
    if(state.pageNum = 3) return
    state.pageNum += 1
    // el1.style.transform = `translateY(calc(-100% - 100px)) scale(1) rotate(0deg)`
    // el2.style.transform = 'translateY(-900px) scale(1) rotate(0deg)'
    // el4.style.transform = 'translateY(80px) scale(1) rotate(0deg)'
    // el5.style.transform = 'translatex(700px) scale(1) rotate(0deg)'
    // el6.style.transform = 'translatex(-700px) scale(1) rotate(0deg)'
  } else {
    if(state.pageNum = 1) return
    state.pageNum -= 1
    // el1.style.transform = 'translateY(0px) scale(1) rotate(0deg)'
    // el2.style.transform = 'translateY(1200px) scale(1) rotate(0deg)'
    // el4.style.transform = 'translateY(-80px) scale(1) rotate(0deg)'
    // el5.style.transform = 'translatex(-700px) scale(1) rotate(0deg)'
    // el6.style.transform = 'translatex(700px) scale(1) rotate(0deg)'
  }
}

onMounted(() => {
  // 监听鼠标滚动
  imageChange.value.addEventListener('wheel', transform)
})
</script>

<style lang="scss" scoped>
#main {
    width: 100%;
    position: relative;
  }
#page1 {
  opacity: 1;
  transition: all 2s ease;
}
#page2 {
  margin: 0 -100px;
  transition: all 2s ease;
  height: 900;
  #company{
    width:100%;
    margin: 20px 0;
    transition: all 2s ease;
  }
  .content {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 100%;
    #detail {
      height: auto;
      width: 400px;
      margin: 100px 100px 20px -200px;
      text-align: left;
      transition: all 2s ease;
    }
    
    #element {
      margin: 100px -100px 20px 100px;
      height: auto;
      width: 309px;
      background: rgb(202, 163, 163);
      transition: all 2s ease;
    }
  }
}
</style>