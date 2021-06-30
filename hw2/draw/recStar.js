let draw = function () 
{
  let star = "";
  let times = 5
  for (let i = 0; i < times; i++) {
    for (let j = 0; j < times; j++) {
      if (i < 4 && i > 0) {
        if (j == 0 || j == 4) {
          star = star + "*"
        } else {
          star = star + " "
        }
      } else {
        star = star + "*"
      }
    }
    console.log(star);
    star = "";
  }
}
module.exports = draw;

