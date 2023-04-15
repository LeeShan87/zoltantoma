function printDiv(divName) {
    var printContents = document.getElementsByTagName(divName)[0].innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}