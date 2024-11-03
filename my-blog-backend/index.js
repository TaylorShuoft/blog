const express = require('express');
const { Sequelize } = require('sequelize');
const postRoutes = require('./routes/postRoutes');
const cors = require('cors'); // 引入 cors 中间件

// 创建 Express 应用
const app = express();

// 使用 cors 中间件
app.use(cors());

// 解析 JSON 请求体
app.use(express.json());

// 使用 Sequelize 连接 MySQL
const sequelize = new Sequelize('my_blog', 'root', '20031128cs', {
  host: 'localhost',
  dialect: 'mysql'
});

// 测试数据库连接并同步表
sequelize.authenticate()
  .then(() => {
    console.log('成功连接到 MySQL 数据库');
    sequelize.sync().then(() => {
      console.log('数据库同步成功');
    });
  })
  .catch(err => {
    console.error('无法连接到数据库:', err);
  });

// 使用路由
app.use('/api/posts', postRoutes);

// 启动服务器
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`服务器正在 http://localhost:${PORT} 上运行`);
});
