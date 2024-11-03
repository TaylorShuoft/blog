<template>
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="24">
            <router-link to="/">我的博客</router-link>
          </el-col>
        </el-row>
      </el-header>
    </el-container>
  </template>
  
  <script>
export default {
  name: 'NavbarBlog',
};
  </script>
  
  <style scoped>
  a {
    color: #409eff;
    text-decoration: none;
    font-size: 20px;
  }
  </style>
  