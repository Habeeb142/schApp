<?php session_start();
if(isset($_SESSION['matricNo'])){
    echo "<script> window.open('dashboard.php','_self');</script>";
}
?>
<!DOCTYPE html>
<head>
    <title>Portal</title>
    <link href="css/portal.css" rel="stylesheet">
    <link href="css/animate.css" rel="stylesheet">
    <link href="css/bootstrap.css" rel="stylesheet">
    <link href="css/css/all.css" rel="stylesheet">
    <script src="js/jquery%203.3.1.js"></script>
    <script src="js/bootstrap.js"></script>


</head>
<body>

<div class="container-fluid" style="height: 100vh;background-image:url('bg.jpg');background-size: cover" >
    <div class="row bg1">
        <div class="col-md-3 "></div>
        <div class="col-12 col-md-6 mt-5">

                <div class="formbox p-5 mt-5 shadow-lg animated pulse" style="background-color: white;border-radius: 5px">
                    <form action="login.php" method="post" autocomplete="off" >
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text bg-info text-white">Matric Number</span>
                            </div>
                            <input type="Number" required class="form-control" min="0" placeholder="Enter Your Matric Number" name="matricNo" id="matric">
                        </div>

                        <div class="input-group mt-4">
                            <div class="input-group-prepend">
                                <span class="input-group-text bg-info text-white" >Password &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            </div>
                            <input type="password" required id="pwd" class="form-control"  placeholder="&bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull;" name="password">
                        </div>


                    <button id="submit" class="btn btn-primary btn-block mt-4" >Submit</button>
                    </form>


                    <div class="text-right mt-3">
                         Don't have an account? <a href="registration.php"><button class="btn btn-success">REGISTER NOW</button></a>
                    </div>
                </div>
        </div>


    <div class="col-md-3"></div>

</div>

</div>






</body>

</html>