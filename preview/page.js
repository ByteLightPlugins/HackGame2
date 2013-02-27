$(function () {
  
  var currentID = 0;
  var content = JSON.parse(BL.getContentForPreview().content[0].data);
  $('#text').append('' + content.body + '');
  $('#text').append(' ' + currentID);
  
  if (currentID == 0){
    
  }
  
 
  document.getElementById('imgContent1').style.display='none';
  document.getElementById('imgContent2').style.display='none';
  //document.getElementById('imgContent3').style.display='none';
 
  BL.previewReady();
});

function found() {
  document.getElementById('imgContent').style.display='none';
  document.getElementById('imgContent1').style.display='inline';
}

function found2() {
  document.getElementById('imgContent1').style.display='none';
  document.getElementById('imgContent2').style.display='inline';
}

function found3() {
  document.getElementById('imgContent2').style.display='none';
  document.getElementById('imgContent3').style.display='inline';
}

function next() {
  document.getElementById('imgContent2').style.display='none';
  document.getElementById('imgContent3').style.display='inline';
}