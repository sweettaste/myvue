<template>
  <div class="container">
  <el-container>
  <el-header >

  </el-header>
  <el-container>
    <el-aside width="200px">
       <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item>
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </el-menu-item>
            </el-submenu>
          </el-menu>   
    </el-aside>
    <el-main>Main</el-main>
  </el-container>
  </el-container>


  </div>
</template>
<script>
export default {
  
}
</script>
<style>
  .container{
    width: 100%;
    height: 100vh;
  }
  .el-header, .el-footer {
    background-color: #545c64;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  .el-container {
    margin-bottom: 40px;
    height: 100%;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .el-menu-vertical-demo{
    height: 100%;
  }
</style>