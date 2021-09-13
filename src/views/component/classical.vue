<template>
  <div class="main">
    <div class="mianpc">
      <div class="mask">
        <!-- 导航定位 -->
        <div class="nav">
          您现在所在的位置:
          <el-breadcrumb separator=">">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">经典作品</a></el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="blank">
        <div class="blankitem">经典作品</div>
        <div class="blankitemchildren">教育基础</div>
        <div class="blankitemchildren">高等教育</div>
        <div class="blankitemchildren">其他</div>
      </div>
      <div class="blankcontent">
      </div>
    </div>
  </div>
</template>

<script setup>
import mainpc from "@/assets/images/mainpc.jpg";
</script>

<style lang="scss">
.main {
  height: 900px;
  .mianpc {
    height: 120px;
    background: url("@/assets/images/mainpc.jpg") no-repeat;
    .mask {
      height: 100%;
      background-color: #b6162066;
      color: #fff;
      font-size: 14px;
      position: relative;
      display: flex;
      align-items: center;
      .nav {
        display: inline;
        color: #fff;
        position: absolute;
        left: 300px;
      }
    }
  }
  .content {
    margin: 0 300px;
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
  }
  .blank {
    margin: 10px;
    height: auto;
    width: 230px;
    background-color: rgb(240, 185, 181,0);
    .blankitem {
      height: 40px;
      line-height: 40px;
      vertical-align: middle;
      background-color: #b61620;
      color: #fff;
    }
    .blankitemchildren {
      height: 40px;
      line-height: 40px;
      vertical-align: middle;
      background-color: #f5f5f5;
      color: #b61620;
    }
  }
  .blankcontent{
        margin: 10px;
        height:100%;
        width: 100%;
        background-color: rgb(240, 185, 181);
    }
}
</style>