const { Sequelize } = require('sequelize');

// 创建 Sequelize 实例
const sequelize = new Sequelize('my_blog', 'root', '20031128cs', {
  host: 'localhost',
  dialect: 'mysql'
});

// 测试数据库连接
sequelize.authenticate()
  .then(() => {
    console.log('成功连接到 MySQL 数据库');
  })
  .catch(err => {
    console.error('无法连接到数据库:', err);
  });

module.exports = sequelize;
