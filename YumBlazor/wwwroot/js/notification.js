window.ShowToastr = function (type, message) {
    if(type == "success") {
        toastr.success(message);
    }
    else if (type == "error") {
        toastr.error(message);
    }
}