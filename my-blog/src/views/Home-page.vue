<template>
  <div>
    <h1>博客文章列表</h1>
    <el-button type="primary" @click="createPost">新建文章</el-button>
    <el-table :data="posts" style="width: 100%">
      <el-table-column prop="title" label="标题" width="180"></el-table-column>
      <el-table-column prop="author" label="作者" width="180"></el-table-column>
      <el-table-column prop="date" label="发布时间"></el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button size="mini" @click="viewPost(scope.row.id)">查看</el-button>
          <el-button size="mini" type="danger" @click="deletePost(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Home-page',
  data() {
    return {
      posts: []
    };
  },

  created(){
    this.fetchPosts();
  },

  methods: {
    async fetchPosts(){
      try{
        const response=await this.$axios.get('http://localhost:5000/api/posts');
        this.posts=response.data;
      }catch(error){
        console.log('获取列表失败',error);
      
      }
    },

    viewPost(id){
      this.$router.push(`/post/${id}`);
    },
    
    createPost(){
      this.$router.push('/create');
    },

    async deletePost(id){
      try{
        await this.$axios.delete(`http://localhost:5000/api/posts/${id}`);
        this.fetchPosts();
      }catch(error){
        console.log('删除失败',error);
      }
    },


    
  }
};
</script>
<style scoped>
h1 {
  margin-bottom: 20px;
}
</style>