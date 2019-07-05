<?php session_start();
if(isset($_SESSION['matricNo'])){
    echo "<script> window.open('dashboard.php','_self');</script>";
}

?>
<!DOCTYPE html>
<head>
    <title></title>
    <link href="css/portal.css" rel="stylesheet">
    <link href="css/animate.css" rel="stylesheet">
    <link href="css/bootstrap.css" rel="stylesheet">
    <link href="css/css/all.css" rel="stylesheet">
    <script src="js/jquery%203.3.1.js"></script>
    <script src="js/bootstrap.js"></script>
    <script src="js/portal.js"></script>
    <script>
$(document).ready(function () {

    $("#pwd2").keyup(function () {

        if($("#pwd2").val().length >= $("#pwd1").val().length){

            if($("#pwd2").val() != $("#pwd1").val()){
                  $("#pwdd").text("Password do not match");
             }
             else{
                   $("#pwdd").text("");
             }
         }
         else{
                   $("#pwdd").text("");
          }
    });

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

        else if($("#fact").val() == "FABAMSSA")
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
    </script>
</head>
<body>

<div class="container-fluid" style="height: 100vh;background-image:url('bg.jpg');background-size: cover">
    <div class="row ">

        <div class="col-2"></div>
        <div class="col-8 mt-5">

                <div class="formbox p-5 mt-5 shadow-lg animated pulse" style="background-color: white;border-radius: 5px">
                    <div class="text-center font-weight-bold mb-3">Please fill in your details accurately</div>
                    <form  action="register.php" autocomplete="off" method="post" enctype="multipart/form-data">
                        <div class="row">
                            <div class="col-6">
                                <label for="fname" class="mr-sm-2">First Name:</label>
                                <input type="text" class="form-control mb-2 mr-sm-2" id="fname" name="fname" required>
                            </div>
                            <div class="col-6">
                                <label for="lname" class="mr-sm-2">Last Name:</label>
                                <input type="text" class="form-control mb-2 mr-sm-2" id="lname" name="lname" required>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-6">
                                <label for="email" class="mr-sm-2">Email:</label>
                                <input type="email" class="form-control mb-2 mr-sm-2" id="email" name="email" required>
                            </div>

                            <div class="col-6">
                                <label for="dob" class="mr-sm-2">Date of Birth:</label>
                                <input type="date" class="form-control mb-2 mr-sm-2" id="dob" name="dob" required>
                            </div>
                        </div>

                        <div class="row">

                            <div class="col-6">
                                <label for="pwd1" class="mr-sm-2">Password:</label>
                                <input type="password" class="form-control mb-2 mr-sm-2" id="pwd1" required >
                            </div>

                            <div class="col-6">
                                <label for="pwd2" class="mr-sm-2">Enter Password Again:</label>
                                <input type="password" class="form-control mb-2 mr-sm-2" id="pwd2" name="pwd" required>
                                <div class="text-right small text-danger" id="pwdd"></div>
                            </div>
                        </div>

                        <div class="row ">

                            <div class="col-6">
                                <div class="form-group">
                                    <label for="fact">Faculty:</label>
                                    <select class="form-control mb-2 mr-sm-2" id="fact" name="fact" required>
                                        <option value="FET">Faculty of Engineering and Technology</option>
                                        <option value="FABMSSA">Faculty of Basic Medical Sciences</option>
                                        <option value="PASSA">Faculty of Pure and Applied Sciences</option>
                                        <option value="FAG">Faculty of Agricultural Sciences</option>
                                    </select>
                                </div>


                            </div>
                            <div class="col-6">
                                <label for="dept" class="mr-sm-2">Department:</label>
                                <select class="form-control mb-2 mr-sm-2" id="dept" name="dept" required>

                                </select>
                            </div>
                        </div>


                        <div>
                            <button type="submit" class="btn btn-primary btn-block mt-2">REGISTER</button>
                        </div>

                    </form>

                    <div class="text-right mt-3">
                        Have an account? <a href="index.php"><button class="btn btn-success">LOGIN NOW</button></a>
                    </div>
                </div>
        </div>


    <div class="col-2"></div>

</div>

</div>






</body>

</html>