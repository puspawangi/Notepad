// Tukar Font --> need to tukar default font lagi
function changeFont(){
    var myFont = document.getElementById("input-font").value;
    document.execCommand('fontName', false, myFont);
    document.getElementById(input).style.fontFamily=Arial;
  }


  //Tukar font size --> need to tukar default font size lagi
  function changeSize(){
    var mysize = document.getElementById("fontSize").value;
    document.execCommand('fontSize', false, mysize);
    document.getElementById(input).style.fontSize=1;
  }

//clear button 
function clrBtn(){
    var clr = document.getElementById("input").value = " ";
    

}

/* Save File */


function saveFile()
    {
        const output = document.getElementById('input'); //

        let data = output.innerHTML;

        const textToBlob = new Blob([data],{type : 'text/plain'})

        const sFileName = "New Notes";

        let newFileLink = document.createElement("a");
        newFileLink.download = sFileName;

        if (window.webkitURL != null)
          {
            newFileLink.href = window.webkitURL.createObjectURL(textToBlob);
          }
          else
          {
            newFileLink.href = window.URL.createObjectURL(textToBlob);
            newFileLink.style.display = "none";
            document.body.appendChild(newFileLink);
          }

          newFileLink.click();


    } 