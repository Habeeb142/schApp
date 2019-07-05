$(document).ready(function () {
    
    $(document).ready(function () {
        if($("#fact").val() == "FET"){
            $("#dept").html("<option value='EEE'>Department of Electronics and Electrical Engineering</option>" +
                "<option value='CSE'>Department of Computer Science and Engineering</option>" +
                "<option value='FSE'>Department of Food Science and Engineering</option>");
        }
    });

    $("#fact").change(function () {
        if($("#fact").val() == "FET"){
            $("#dept").html("<option value='EEE'>Department of Electronics and Electrical Engineering</option>" +
                "<option value='CSE'>Department of Computer Science and Engineering</option>" +
                "<option value='FSE'>Department of Food Science and Engineering</option>")
        }

        if($("#fact").val() == "FET"){
            $("#dept").html("<option value='EEE'>Department of Electronics and Electrical Engineering</option>" +
                "<option value='CSE'>Department of Computer Science and Engineering</option>" +
                "<option value='FSE'>Department of Food Science and Engineering</option>")
        }

        else if($("#fact").val() == "FABMSSA")
        {
            $("#dept").html("<option value='BCH'>Department of Biochemistry</option>" +
                "<option value='ANATOMY'>Department of Anatomy</option>" +
                "<option value='PHYS'>Department of Physiology</option>")
        }

        else if($("#fact").val() == "PASSA")
        {
            $("#dept").html("<option value='CHM'>Department of Pure and Applied Chemistry</option>" +
                "<option value='MTH'>Department of Pure and Applied Mathematics</option>" +
                "<option value='BIO'>Department of Pure and Applied Biology</option>")
        }

        else if($("#fact").val() == "FAG")
        {
            $("#dept").html("<option value='AERD'>Department of Agricultural Economics and Rural Development</option>" +
                "<option value='APH'>Department of Animal Production and Health</option>" +
                "<option value='CEP'>Department of Crop Environmental Protection </option>")
        }


    });
    

});