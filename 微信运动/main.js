// ctrl + shift + p 
// F5开始执行
function dz() {  //点赞功能
    var set = id("com.tencent.mm:id/dj2").find();    //查找排行榜好友并返一个集合
    for (var i = 1; i < set.length; i++) {          //遍历集合元素
        set.get(i).parent().parent().click();       //选择元素进行点击
        sleep(600);                                 //休息0.6s
        if (text("我的主页").findOnce()) {        // 判断是否点到自己如果是则返回
            back();                               //功能键返回
            sleep(700);
        }
    }
    if (scrollDown()) {                           //遍历完完成后进行翻页操作
        sleep(200);
    }
    else {
        toast("点赞完成")
        flag = 1;                                //如果flag=1则无法翻页择退出点赞功能
    }
}
var flag = 0;    //用于判断程序是否继续运行
while (flag == 0) {             //进行循环操作如果flag==0则运行点赞功能否则脚本结束
    try {
        dz();
    }
    catch (e) {
        dz();
    }


}
toast("程序已退出");
