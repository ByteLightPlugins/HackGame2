var currentID = 0;

$(function () {
  
  
  var content = JSON.parse(BL.getContentForPreview().content[0].data);
  $('#text').append('' + content.body + '');
  $('#text').append(' ' + currentID);
  
 
  document.getElementById('imgContent1').style.display='none';
  document.getElementById('imgContent2').style.display='none';
  
  document.getElementById('next').style.display='none';
  document.getElementById('next2').style.display='none';
  document.getElementById('next3').style.display='none';
  //document.getElementById('imgContent3').style.display='none';
 
  BL.previewReady();
});

function found() {
  document.getElementById('imgContent').style.display='none';
  document.getElementById('next').style.display='inline';
}

function found2() {
  document.getElementById('imgContent1').style.display='none';
  document.getElementById('next2').style.display='inline';
}

function found3() {
  document.getElementById('imgContent2').style.display='none';
  document.getElementById('next3').style.display='inline';
}

function next() {
  document.getElementById('imgContent2').style.display='none';
  document.getElementById('imgContent3').style.display='inline';
}

function check(){
  if (currentID==2){
     currentID = 3;
    document.getElementById('next3').style.display='none';
    document.getElementById('imgContent3').style.display='inline';
  }
 
 if (currentID==1){
     currentID = 2;
    document.getElementById('next2').style.display='none';
    document.getElementById('imgContent2').style.display='inline';
  }
  
  if (currentID==0){
    currentID = 1;
    document.getElementById('next').style.display='none';
    document.getElementById('imgContent1').style.display='inline';
  }
  
 
}

