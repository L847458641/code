 $(document).ready(getList());

  function getList() {
    //获取的数组
    var categoryLists = '';
    var numArr = ['0-2499元', '2500-3999元', '4000-3999元', '6000-9999元', '10000元以上'];

    var levelList = '';
    //拼接标签
    var categoryListes = '';
    var levelListes = '';
    var numStr = "";
    $.ajax({
      type: "GET",
      url: 'http://api.sykcloud.com/server/project/all-crowd?platform=3&version=1.0.0&keyword=&category_id=&level_id=&start_money=&end_money=&page=&size=&sign=91ffb6534a54ff11a56ea36c4763cac6&nonce=1598006931&c_identity=jidinvoke&debugger=jid&channel=website',
      dataType: "json",
      success: function (res) {
        categoryLists = res.res.source.categoryList;
        levelList = res.res.source.levelList;
        /****for循环****/
        for (let i = 0; i < categoryLists.length; i++) {
          categoryListes += '<span style=" margin-left: 20px;"><a href="#" style="color:#000" >' + categoryLists[
              i].category_name +
            '</a></sapn>';
        };
        document.getElementById("info_item_1").innerHTML = categoryListes;

        for (let i = 0; i < levelList.length; i++) {
          levelListes += '<span style=" margin-left: 20px;"><a href="#" style="color:#000" >' + levelList[i]
            .level_name +
            '</a></sapn>';
        };
        document.getElementById("info_item_2").innerHTML = levelListes;
      }
    });
    for (let i = 0; i < numArr.length; i++) {
      numStr += '<span style=" margin-left: 20px;"><a href="#" style="color:#000" >' + numArr[i] + '</a></sapn>';
    };
    document.getElementById("info_item_3").innerHTML = numStr;
  }