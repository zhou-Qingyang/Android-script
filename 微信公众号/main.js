// function SearchTarget(name) {
//     desc("搜索").click();
//     sleep(600);
//     setText("刷屏");
//     // textContains("搜索公众号和文章").findOne().setText("刷屏");
// }
// SearchTarget()
// exit()

// id("com.tencent.mm:id/d98").findOne().setText("11");
// desc("搜索公众号和文章").findOne().setText("add")

text("搜索").findOne().setText("央视新闻");
sleep(300);
className("android.widget.TextView").text("央视新闻").findOne().click();