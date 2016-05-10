(function () {
    //头部选项卡
    var aTopTabBtn=$('.index-tab-btngroup .btn'),
        aTopTabItem=$('.index-tab-item');
    aTopTabBtn.on('click', function () {
        var iNow=$(this).index();
        aTopTabBtn.removeClass('active');
        $(this).addClass('active');
        aTopTabItem.removeClass('show');
        aTopTabItem.eq(iNow).addClass('show');
    });
    //评测选项卡
    var aTabBtn=$('#module-title .title'),
        aTabItem=$('#module-title .index-lanmu');
    aTabBtn.on('click', function () {
        var iNow=$(this).index();
        aTabBtn.removeClass('active');
        $(this).addClass('active');
        aTabItem.removeClass('show');
        aTabItem.eq(iNow).addClass('show');
    });
    //新游选项卡
    var aNewgmBtn=$('#module-newgm .title'),
        aNewgmItem=$('#module-newgm .game-start-list');
    aNewgmBtn.on('click', function () {
        var iNow=$(this).index();
        aNewgmBtn.removeClass('active');
        $(this).addClass('active');
        aNewgmItem.removeClass('show');
        aNewgmItem.eq(iNow).addClass('show');
    });
    //分类游戏选项卡
    var aclassifybtn=$('#test-module .title'),
        aclassifyitem=$('.public-module-box .game-classify');
    aclassifybtn.on('click', function () {
        var iNow=$(this).index();
        aclassifybtn.removeClass('active');
        $(this).addClass('active');
        aclassifyitem.removeClass('show');
        aclassifyitem.eq(iNow).addClass('show');
    });
    //轮播图
    var aFocusBtn=$(".index-focus-box .btn-group"),
        aFocusBanner=$(".index-focus-list li")
    aFocusBtn.on('click','li', function () {
        aFocusBtn.find('li').removeClass('active');
        $(this).addClass('active');
        aFocusBanner.hide();
        aFocusBanner.eq($(this).index()).fadeIn();
    });
})();