//顯示視窗前呼叫
//$("#ooo").on("show.bs.modal",function(e){
  console.log('顯示視窗前呼叫');
});

//轉場特效結束，已完全呈現時呼叫
//$("#ooo").on("shown.bs.modal",function(e){
  console.log('轉場特效結束，已完全呈現時呼叫');
});

//關閉視窗前呼叫
$("#ooo").on("hide.bs.modal",function(e){
  console.log('關閉視窗前呼叫');
});

//轉場特效結束，已完全隱藏時呼叫
$("#ooo").on("hidden.bs.modal",function(e){
  console.log('轉場特效結束，已完全隱藏時呼叫');
});

//隱藏視窗
$("#ooo").modal('hide');

//開啟視窗
//$("#ooo").modal('show');

//切換視窗顯示、不顯示
//$("#ooo").modal('toggle');
