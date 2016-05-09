(function () {
    
    var aTopTabBtn=$('.index-tab-btngroup .btn'),
        aTopTabItem=$('.index-tab-item');
    aTopTabBtn.on('click', function () {
        var iNow=$(this).index();
        aTopTabBtn.removeClass('active');
        $(this).addClass('active');
        aTopTabItem.removeClass('show');
        aTopTabItem.eq(iNow).addClass('show');
    });
    
    var aTabBtn=$('#module-title .title'),
        aTabItem=$('#module-title .index-lanmu');
    aTabBtn.on('click', function () {
        var iNow=$(this).index();
        aTabBtn.removeClass('active');
        $(this).addClass('active');
        aTabItem.removeClass('show');
        aTabItem.eq(iNow).addClass('show');
    });
    
    var aclassifybtn=$('#module .title'),
        aclassifyitem=$('#module .game-classify');
    aclassifybtn.on('click', function () {
        var iNow=$(this).index();
        aclassifybtn.removeClass('active');
        $(this).addClass('active');
        aclassifyitem.removeClass('show');
        aclassifyitem.eq(iNow).addClass('show');
    });
})();