

function printModal() {
    var printContent = document.getElementById("printable-content");
    var printWindow = window.open('', '', 'height=500,width=800'); 
    
    printWindow.document.write('<html><head><title>Bill Summary</title>');
    printWindow.document.write('<style>body {margin-top:10%; margin-left:25%; width: 40%;  border: 3px solid#481bdc; height:50%; padding: 10px; text-align: center; font-family: Arial, sans-serif; padding: 20px; }');
    printWindow.document.write('.modal-header { font-size: 24px; font-weight: bold; }');
    printWindow.document.write('dl { margin: 60px 0; }');
    printWindow.document.write('dt {  font-weight: bold; text-align: center; }');
    printWindow.document.write('dd {background-color:#609ad0; margin-bottom: 15px; }');
    printWindow.document.write('.print { display: none; }'); 
    printWindow.document.write('</style></head><body>');
    printWindow.document.write(printContent.innerHTML); 
    printWindow.document.write('</body></html>');

    printWindow.document.close(); 
    printWindow.print(); 
}