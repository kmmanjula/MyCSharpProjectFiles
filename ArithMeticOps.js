// JavaScript source code
function Sum(txtid1, txtid2) {
    var n1 = Number(document.getElementById(txtid1).value);
    var n2 = Number(document.getElementById(txtid2).value);
    var n3 = n1 + n2;
    var msg = n1 + " + " + n2 + " = " + n3;
    alert(msg)
}
function Diff(txtid1, txtid2) {
    var n1 = Number(document.getElementById(txtid1).value);
    var n2 = Number(document.getElementById(txtid2).value);
    var n3 = n1 - n2;
    var msg = n1 + " - " + n2 + " = " + n3;
    alert(msg)
}
function Prod(txtid1, txtid2) {
    var n1 = Number(document.getElementById(txtid1).value);
    var n2 = Number(document.getElementById(txtid2).value);
    var n3 = n1 * n2;
    var msg = n1 + " * " + n2 + " = " + n3;
    alert(msg)
}

function ArithmeticOps(txtid1, txtid2, arthOprn) {
    var n1 = Number(document.getElementById(txtid1).value);
    var n2 = Number(document.getElementById(txtid2).value);
    var msg = "Invalid Operator";
    var n3 = null;
    if (arthOprn == "+") {
        n3 = n1 + n2;
    }
    else if (arthOprn == "-") {
        n3 = n1 - n2;
    }
    else if (arthOprn == "*") {
        n3 = n1 * n2;
    }

    if (n3 != null)
        msg = n1 + arthOprn + n2 + " = " + n3;
    alert(msg)
}
