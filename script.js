function change() {
  console.log("checked");
  //step 1
  var xhttp = new XMLHttpRequest();
  var txt = document.getElementById("txt");




  //step 4

 
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let output = JSON.parse(this.responseText);
        let val = "";
     
       

        for (let x = 0; x < output.length; x++) {
          var y = document.createElement("INPUT");
          y.setAttribute("type", "checkbox");
        
          
          val += `<table >
          <br>
          <tr >
          
          <td>${output[x].id} </td>
         
         
          <td>${output[x].title} </td>
          <td><input type="checkbox"></td>
       
       
        
          </tr>
          </table>`;
        
          txt.innerHTML = val;
        }
      }
    };
 
  //step 2
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);

  //step 3
  xhttp.send();
}
