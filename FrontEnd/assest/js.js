$('#uploadBtn').click(function () {

    var fileReader = new FileReader();

    var fileInput = document.getElementById('chooseFile');
    var file = fileInput.files[0];
    var formData = new FormData();
    formData.append('file',file);

    fileReader.onload =function (e) {
        $('#bgImg').css("background-image","url("+e.target.result+")");
    };
    fileReader.readAsDataURL(file);
});