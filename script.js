var con = document.createElement("Container")
document.body.appendChild(con);
con.style.display = "flex";
con.style.flexWrap = "wrap";
con.style.width = "800px";
con.style.height = "800px";
con.style.margin = "auto";

for (var i = 0; i<64; i++){
    var tile = con.appendChild(document.createElement("div"));
    tile.style.height="12.5%";
    tile.style.width="12.5%";
}

var tiles = document.querySelectorAll("div");

var row = 1;
for (var i = 0; i < tiles.length; i++) {
  if (row % 2 == 1 && i % 2 == 0 || row % 2 == 0 && i % 2 == 1) {
    //rgba-rgb+opacity 0(transparent)-1(opaque)
    tiles[i].style.backgroundColor = "rgba(215, 95, 15, " + (1-.01*i) + ")";
  } else {
    tiles[i].style.backgroundColor = "rgba(21, 195, 155, " + (.03 * i) + ")";
  }
  if ((i+1) % 8 == 0 && i != 0) {
    row++;
  }
}  
