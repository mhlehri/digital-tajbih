const jikir1 = document.getElementById("h1");
const jikir2 = document.getElementById("h2");
const jikir3 = document.getElementById("h3");
count1 = 0;
function make1() {
  if (count1 < 33) {
    count1++;
    jikir1.innerText = count1;
  }
}

count2 = 0;
function make2() {
  if (count2 < 34) {
    count2++;
    jikir2.innerText = count2;
  }
}
count3 = 0;
function make3() {
  if (count3 < 33) {
    count3++;
    jikir3.innerText = count3;
  }
}
document.getElementById("btn").addEventListener("click", function () {
  empty = "";
  jikir1.innerText = empty;
  jikir2.innerText = empty;
  jikir3.innerText = empty;
});
