function change() {
    console.log("checked");
    //step 1
    var xhttp = new XMLHttpRequest();
    var txt = document.getElementById("txt");
  
    //step 4
  
   
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          let output = JSON.parse(this.responseText);
          let val = "<table border='1'><thead><tr><th >Task No</th><th>Description</th><th>Status</th></tr></thead><tbody ></tbody>";
  
          for (let x = 0; x < output.length; x++) {
  
            val += <tr >
            <td>
            &nbsp; &nbsp; ${output[x].id} &nbsp;
            </td>
            <td>
            ${output[x].title} &nbsp; &nbsp;
            </td>;
            if (output[x].completed == true) {
              console.log("true");
              val += <td>
              <input type='checkbox' checked> &nbsp; &nbsp;
               </td>;
            }
            else
            {
              val += <td>
              <input type='checkbox'> &nbsp; &nbsp;
               </td>;
            }
  
  
  
            val += </tr>;
  
  
  
          }
          val += </tbody></table>;
          txt.innerHTML = val;
        }
      };
   
    //step 2
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
  
    //step 3
    xhttp.send();
  }