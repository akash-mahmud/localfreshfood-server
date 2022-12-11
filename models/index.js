const Sequelize = require("sequelize");

// const sequelize = new Sequelize("sqlite::memory:", { logging: false });

const sequelize = new Sequelize(
  // "postgres://postgres:1234@localhost:5432/localfreshfoods",
  "postgres://postgres:1234@localhost:5432/development",
  { logging: false }
);

const AdminModel = require("./admin");
const UserModel = require("./user");

const CategoryModel = require("./category");
const MainCategoryModel = require("./mainCategory");
const SubCategoryModel = require("./subCategory");
const ProducModel = require("./product");
const ReveiwModel = require("./reveiws");
const VendorModel = require("./vendors");

const Admin = AdminModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);
const Category = CategoryModel(sequelize, Sequelize);
const MainCategory = MainCategoryModel(sequelize, Sequelize);
const SubCategory = SubCategoryModel(sequelize, Sequelize);
const Product = ProducModel(sequelize, Sequelize);
const Review = ReveiwModel(sequelize, Sequelize);
const Vendor = VendorModel(sequelize, Sequelize);



Admin.hasMany(Category);

Category.hasMany(SubCategory);
Category.hasMany(Product);
Category.hasMany(Vendor);
Category.belongsTo(Admin);

MainCategory.hasMany(Product);
MainCategory.hasMany(SubCategory);

SubCategory.hasMany(Product);
SubCategory.belongsTo(Category);
SubCategory.belongsTo(MainCategory);

User.hasMany(Review);
User.hasMany(Product);
User.hasMany(Vendor);

Review.belongsTo(User);
Review.belongsTo(Product);

Product.hasMany(Review);
Product.belongsTo(Vendor);
Product.belongsTo(MainCategory);
Product.belongsTo(SubCategory);
Product.belongsTo(Category);
Product.belongsTo(User);

Vendor.belongsTo(User);
Vendor.belongsTo(Category);
Vendor.hasMany(Product);


sequelize.sync().then(() => {
  console.log(`Database & tables created!`);
});
module.exports = {
  Admin,
  User,
  Category,
  MainCategory,
  SubCategory,
  Product,
  Review,
  Vendor,
};
