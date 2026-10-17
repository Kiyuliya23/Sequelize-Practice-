import User from './user.js';
import Post from "./post.js";
import Category from './category.js';
import Products from "./products.js";



// ЭТО НАПИСАННЫЕ ФССОЦИАЦИИ 


// One-to-One  СВЯЗЬ ОДИН К ОДНОМУ 
// User.hasOne(Post, {foreignKey: "userId", as: "post"});
// Post.belongsTo(User, {foreignKey: "userId", as: "user"});
// // 
 

// One-to-Many
 User.hasMany(Post, { foreignKey: "userId", as: "posts" });
 Post.belongsTo(User, { foreignKey: "userId", as: "user" });

 Category.hasMany(Products, {  // hasMany- одна категория может содержать много продуктов
    foreignKey: "categoryName", //categoryName-внешний ключ в таблице Products
    sourceKey: "name",
 });
 Products.belongsTo(Category, { //belongsTo — каждый продукт принадлежит одной категории.
    foreignKey: "categoryName",
    targetKey: "name",

 });


// Many-to-Many
// User.belongsToMany(Post, {
//   through: "UserPosts",
//   as: "posts",
//   foreignKey: "userId",
// });
// Post.belongsToMany(User, {
//   through: "UserPosts",
//   as: "users",
//   foreignKey: "postId",
// });
export { User, Post, Category, Products };

