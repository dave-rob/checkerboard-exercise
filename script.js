var con = document.createElement("Container")
document.body.appendChild(con);
con.style.display = "flex";
con.style.flexWrap = "wrap";
con.style.width = "800px";
con.style.height = "800px";

for (var i = 0; i<64; i++){
    var tile = con.appendChild(document.createElement("div"));
    tile.style.height="12.5%";
    tile.style.width="12.5%";
}

var tiles = document.querySelectorAll("div");

var row = 1;
var col = 0;
for (var i = 0; i < tiles.length; i++) {
  //if row is odd, want odd col red & if row is even, even col are red
  if (row % 2 == 1 && (i + 1) % 2 == 1 || row % 2 == 0 && (i + 1) % 2 == 0) {
    //rgba-rgb+opacity 0(transparent)-1(opaque)
    tiles[i].style.backgroundColor = "rgba(215, 95, 15, " + (1-.01*i) + ")";
  } else {
    tiles[i].style.backgroundColor = "rgba(21, 195, 155, " + (.03 * i) + ")";
  }

  if (col % 7 == 0 && col != 0) {
    row++;
    col = 0;
  } else {
    col++;
  }
}  