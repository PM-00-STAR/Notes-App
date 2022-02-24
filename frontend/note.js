
var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();
let saveHandle

var Textbox = $("#textarea");
var instructions = $("#instructions");

var Content = "";

recognition.continuous = true;

recognition.onresult = function (event) {
  var current = event.resultIndex;

  var transcript = event.results[current][0].transcript;

  Content += transcript;
  Textbox.val(Content);
};

$("#start").on("click", function (e) {
  if ($(this).text() == "Stop Recording") {
    $(this).html("Start Recording");
    $("#instructions").html("");
    recognition.stop();
  } else {
    $(this).html("Stop Recording");
    $("#instructions").html("Voice Recognition is on");
    if (Content.length) {
      Content += " ";
    }
    recognition.start();
  }
});


async function getNewFileHandle() {
  
  const handle = await window.chooseFileSystemEntries();
  return handle;
}
async function loadFile() {

  saveHandle = await getNewFileHandle()

  if(await verifyPermission(saveHandle,true)){
 
  // Request permission, if the user grants permission, return true.
    const file = await saveHandle.getFile();
    const contents = await file.text();
    console.log(contents);
    Content += contents;
    $("textarea").val(contents);
  }}

  async function saveFile(saveHandle,content){
    const writable = await saveHandle.createWritable();
    // Write the contents of the file to the stream.
    await writable.write(content);
    // Close the file and write the contents to disk.
    await writable.close();

    alert("File Changes were Saved")
  }

  async function verifyPermission(fileHandle, withWrite) {
    const opts = {};
    if (withWrite) {
      opts.writable = true;
    }
    // Check if we already have permission, if so, return true.
    if (await fileHandle.queryPermission(opts) === 'granted') {
      return true;
    }
    // Request permission to the file, if the user grants permission, return true.
    if (await fileHandle.requestPermission(opts) === 'granted') {
      return true;
    }
    // The user did nt grant permission, return false.
    return false;
  }

 $("#clear").click(function () {
   Textbox.val("");
  
  $("#start").html("Start Recording")
});

Textbox.on("input", function () {
  Content = $(this).val();
});


//Previous code

// var speechRecognition= window.webkitSpeechRecognition || window.speechRecognition;
// var recognition = new speechRecognition();
// var textbox= $("#textbox");
// var instructions=$("#instructions");
// var content="";
// recognition.continuous=true;
// recognition.onstart=function(){
//   instructions.text("voice r3ecognition is on")
// }
// $("start-btn").click(function (event))
// {
//   if(content.length)
//   {
//   content+="";
// }
// recognition.Start()
// }
