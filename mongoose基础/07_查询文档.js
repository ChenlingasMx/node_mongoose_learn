//1. 安装 mongoose
//2. 导入 mongoose
const mongoose = require("mongoose");

//设置 strictQuery 为 true
mongoose.set("strictQuery", true);

//3. 连接 mongodb 服务                        数据库的名称
mongoose.connect("mongodb://127.0.0.1:27017/bibi");

//4. 设置回调
// 设置连接成功的回调  once 一次   事件回调函数只执行一次
mongoose.connection.once("open", () => {
  //5. 创建文档的结构对象
  //设置集合中文档的属性以及属性值的类型
  let BookSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: Number,
    is_hot: Boolean,
  });

  //6. 创建模型对象  对文档操作的封装对象    mongoose 会使用集合名称的复数, 创建集合
  let BookModel = mongoose.model("novel", BookSchema);

  //7.查询单调
  //   BookModel.findOne({ name: "狂飙" }, (err, data) => {
  //     if (err) {
  //       console.log("读取失败");
  //       return;
  //     } else {
  //       console.log("data", data);
  //     }
  //   });

  //8.根据id
  //   BookModel.findById("65a635d500b2a6d95dc5d6c5", (err, data) => {
  //     if (err) {
  //       console.log("读取失败");
  //       return;
  //     } else {
  //       console.log("data", data);
  //     }
  //   });
  // 9批量查询
  BookModel.find({ author: "余华" }, (err, data) => {
    if (err) {
      console.log("读取失败");
      return;
    } else {
      console.log("data", data);
    }
  });

  //10.读取所有
  BookModel.find((err, data) => {
    if (err) {
      console.log("读取失败");
      return;
    } else {
      console.log("data", data);
    }
  });
});

// 设置连接错误的回调
mongoose.connection.on("error", () => {
  console.log("连接失败");
});

//设置连接关闭的回调
mongoose.connection.on("close", () => {
  console.log("连接关闭");
});
