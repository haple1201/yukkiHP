//var $ = require("jquery");
/*
//modal
$(function(){
 
  //テキストリンクをクリックしたら
 $("#modal-open").click(function(){
      //body内の最後に<div id="modal-bg"></div>を挿入
     $("body").append('<div id="modal-bg"></div>');
 
    //画面中央を計算する関数を実行
    modalResize();
 
    //モーダルウィンドウを表示
        $("#modal-bg,#modal-main").fadeIn("slow");
 
    //画面のどこかをクリックしたらモーダルを閉じる
      $("#modal-bg,#modal-main").click(function(){
          $("#modal-main,#modal-bg").fadeOut("slow",function(){
         //挿入した<div id="modal-bg"></div>を削除
              $('#modal-bg').remove() ;
         });
 
        });
 
    //画面の左上からmodal-mainの横幅・高さを引き、その値を2で割ると画面中央の位置が計算できます
     $(window).resize(modalResize);
      function modalResize(){
 
            var w = $(window).width();
          var h = $(window).height();
 
            var cw = $("#modal-main").outerWidth();
           var ch = $("#modal-main").outerHeight();
 
        //取得した値をcssに追加する
            $("#modal-main").css({
                "left": ((w - cw)/2) + "px",
                "top": ((h - ch)/2) + "px"
          });
     }
   });
});
*/

/* モーダルウィンドウ */
$(function(){
    
    $("#modal-open").click(function(){
        //キーボード操作などにより、オーバーレイが多重起動するのを防止する
        $( this ).blur() ;	//ボタンからフォーカスを外す
        if( $( "#modal-overlay" )[0] ) return false ;		//新しくモーダルウィンドウを起動しない (防止策1)
        //if($("#modal-overlay")[0]) $("#modal-overlay").remove() ;		//現在のモーダルウィンドウを削除して新しく起動する (防止策2)
        //オーバーレイを出現させる
        $( "body" ).append( '<div id="modal-overlay"></div>' ) ;
        $( "#modal-overlay" ).fadeIn( "slow" ) ;
        //コンテンツをセンタリングする
        centeringModalSyncer() ;
        //コンテンツをフェードインする
        $( "#modal-content" ).fadeIn( "slow" ) ;
        //[#modal-overlay]、または[#modal-close]をクリックしたら…
        
        $( "#modal-overlay,#modal-close" ).unbind().click( function(){
        //[#modal-content]と[#modal-overlay]をフェードアウトした後に…
        
            $( "#modal-content,#modal-overlay" ).fadeOut( "slow" , function(){
                    //[#modal-overlay]を削除する
                    $('#modal-overlay').remove() ;
                
            } ) ;
        } ) ;
    } ) ;
    //リサイズされたら、センタリングをする関数[centeringModalSyncer()]を実行する
    $( window ).resize( centeringModalSyncer ) ;
    //センタリングを実行する関数
    function centeringModalSyncer() {
    //画面(ウィンドウ)の幅、高さを取得
    var w = $( window ).width() ;
    var h = $( window ).height() ;
    // コンテンツ(#modal-content)の幅、高さを取得
    // jQueryのバージョンによっては、引数[{margin:true}]を指定した時、不具合を起こします。
    var cw = $( "#modal-content" ).outerWidth( {margin:true} );
    var ch = $( "#modal-content" ).outerHeight( {margin:true} );
    var cw = $( "#modal-content" ).outerWidth();
    var ch = $( "#modal-content" ).outerHeight();
    //センタリングを実行する
    $( "#modal-content" ).css( {"left": ((w - cw)/2) + "px","top": ((h - ch)/2) + "px"} ) ;
    }
 } ) ;

