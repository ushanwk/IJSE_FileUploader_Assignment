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


    $.ajax({
        url: 'http://localhost:8080/imguploader/uploader',
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success: function() {
            alert("Added Successfully.");
        },
        error: function() {
            alert("Failed to upload image.");
        }
    });



});


// function loadFiles(){
//
//     $.ajax({
//         url: 'http://localhost:8080/imguploader/uploader',
//         success: function(response) {
//
//             alert("Added Successfully.");
//             console.log(response[1]);
//
//             // $('#bgImg2').css("background-image","url(/Users/ushan_kaushalya/Downloads/Images/abc.jpeg)")
//
//         },
//         error: function() {
//             alert("Failed to upload image.");
//         }
//     });
//
// }