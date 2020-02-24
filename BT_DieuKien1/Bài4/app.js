function compare() {
    let one, tow, therr;
    one = document.getElementById("Numberone").value;
    tow = document.getElementById("Numbertow").value;
    therr = document.getElementById("Numbertherr").value;
    if (one > tow && one > therr) {
        document.getElementById('result').innerHTML = "Số Lớn Nhất Là Số" + one;
    } else if (tow > one && tow > therr) {
        document.getElementById('result').innerHTML = "Số Lớn Nhất Là Số" + tow;
    } else {
        document.getElementById('result').innerHTML = "Số Lớn Nhất Là Số" + therr;
    }
}
