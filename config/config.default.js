// 此处改为你自己的 Cookie 安全字符串
exports.keys = "xiongmeihui";

// 添加 view 配置
exports.view = {
  defaultViewEngine: "nunjucks",
  mapping: {
    ".tpl": "nunjucks",
  },
};

exports.news = {
  pageSize: 5,
  serverUrl: "https://hacker-news.firebaseio.com/v0",
};
