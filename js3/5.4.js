function lod(color) {
  switch (color.toLowerCase()) {
    case "yello":
    case "pink":
    case "orange":
      console.log("light color");
      break;
    case "blue":
    case "purple":
    case "brown":
      console.log("dark color");
      break;

    default:
      console.log("unknown color");

      break;
  }
}
lod("PiNk");
