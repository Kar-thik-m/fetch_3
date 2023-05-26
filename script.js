
var container = document.createElement("div");
container.setAttribute("class", "container");

var row = document.createElement("div");
row.setAttribute("claas", "row");
 



var title = document.createElement("div");
title.setAttribute("class", "title");
title.innerHTML = `<h3 ><b>Bible</b></h3>`

var result = document.createElement("div");
result.setAttribute("class", "table");



async function bible() {
 

  var get_value = await fetch("https://bible-api.com/romans%2012:1-2,5-7,9,13:1-9&10");
  var arr = await get_value.json();
 
  for(var i=0;i<arr.verses.length;i++){
    console.log(arr.verses[i].book_id);
  result.innerHTML+=
    `
    <div class="card">
  <div class="card-header">
  ${arr.verses[i].book_name}
  
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <h4><b>Chapter:${arr.verses[i].chapter}</b></h4>
      <p>${arr.verses[i].text}</p>
      <footer class="blockquote-footer"><i>Verse-</i><cite title="Source Title">${arr.verses[i].verse}</cite></footer>
    </blockquote>
  </div>
</div>
   
  `
  
  

  
  }
  
}
bible();

title.append(result);
row.append(title);
container.append(row);
document.body.append(container);