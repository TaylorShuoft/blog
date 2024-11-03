<template>
    <div>
      <h1>创建新文章</h1>
      <el-form :model="form">
        <el-form-item label="标题">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="作者">
          <el-input v-model="form.author"></el-input>
        </el-form-item>
        <el-form-item label="内容">
          <el-input type="textarea" v-model="form.content"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">提交</el-button>
          <el-button @click="$router.push('/')">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CreatePost',
    data() {
      return {
        form: {
          title: '',
          author: '',
          content: ''
        }
      };
    },
    methods: {
        async submitForm() {
  try {
    const response = await this.$axios.post('http://localhost:5000/api/posts', this.form);
    console.log('请求成功，服务器响应:', response.data);
    this.$router.push('/');
  } catch (error) {
    console.error('创建文章失败:', error);
    if (error.response) {
      console.error('服务器返回错误:', error.response.data);
    } else if (error.request) {
      console.error('没有收到服务器的响应:', error.request);
    } else {
      console.error('请求错误:', error.message);
    }
  }
}
    }
  };
  </script>
  
  <style scoped>
  h1 {
    margin-bottom: 20px;
  }
  </style>
  