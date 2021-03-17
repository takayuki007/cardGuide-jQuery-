$(function (){
    //Q1.年会費は無料がいい？
    //無料を選択
    $('.js-click-free').on('click', function (){
        $('.js-annualFee').hide().addClass('invisible');
        $('.js-travel').fadeIn(3000, function (){
            $(this).removeClass('invisible');
        });
    })
    //有料を選択
    $('.js-click-paid').on('click', function (){
        $('.js-annualFee').hide().addClass('invisible');
        $('.js-miles').fadeIn(3000, function (){
            $(this).removeClass('invisible')
        });
    })

    //Q2.よく旅行に行く？
    //旅行に行く！を選択
    $('.js-go').on('click', function (){
        $('.js-travel').hide().addClass('invisible');
        $('.js-cedyna').fadeIn(3000, function (){
            $(this).removeClass('invisible')
        });
    })
    //旅行に行かない！を選択
    $('.js-notGO').on('click', function (){
        $('.js-travel').hide().addClass('invisible');
        $('.js-smbc').fadeIn(3000, function (){
            $(this).removeClass('invisible')
        });
    })

    //Q3.マイル重視？それともステータス重視？
    //マイル重視！を選択
    $('.js-miles-important').on('click', function (){
        $('.js-miles').hide().addClass('invisible');
        $('.js-ana').fadeIn(3000, function (){
            $(this).removeClass('invisible')
        });
    })
    //ステータス重視！を選択
    $('.js-status-important').on('click', function (){
        $('.js-miles').hide().addClass('invisible');
        $('.js-amex').fadeIn(3000, function (){
            $(this).removeClass('invisible')
        });
    })
})