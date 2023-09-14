function change() {
  console.log("checked");
  //step 1
  var xhttp = new XMLHttpRequest();
  var txt = document.getElementById("txt");

  //step 4

  let promise = new Promise(function (resolve, reject) {
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let output = JSON.parse(this.responseText);
        let val = "";

        for (let x = 0; x < output.length; x++) {
          val += `<table border='1'>
          <br>
          <tr >
          <td>
          &nbsp; &nbsp; ${output[x].id} &nbsp;
          </td>
          <td>
          ${output[x].title} &nbsp; &nbsp;
          </td>
          <td>
         <input type="checkbox"> &nbsp; &nbsp;
          </td>
       
        
          </tr>
          </table>`;
          if (output[x].title == true) {
            console.log("true");
          }

          txt.innerHTML = val;
        }
      }
    };
  });
  //step 2
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);

  //step 3
  xhttp.send();
}
