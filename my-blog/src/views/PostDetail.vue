<template>
  <div>
    <el-button @click="$router.push('/')">返回首页</el-button>
    <h1>{{ post.title }}</h1>
    <p><strong>作者：</strong> {{ post.author }}</p>
    <p><strong>发布时间：</strong> {{ post.date }}</p>
    <div class="content">
      <p>{{ post.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostDetail',
  data() {
    return {
      post: {}
    };
  },
  async created() {
    const postId = this.$route.params.id;
    try {
      const response = await this.$axios.get(`http://localhost:5000/api/posts/${postId}`);
      this.post = response.data;
    } catch (error) {
      console.error('获取文章详情失败:', error);
    }
  }
};
</script>

<style scoped>
h1 {
  margin-top: 20px;
  margin-bottom: 10px;
}
.content {
  margin-top: 20px;
}
</style>
