<?php session_start();
if(isset($_SESSION['matricNo'])){
 $matricNo = $_SESSION['matricNo'];
    $con = mysqli_connect("remotemysql.com","1JTq39QISa","wO8zfGSyqY","1JTq39QISa");   
	$us = mysqli_query($con, "SELECT * FROM studentsinfo WHERE matricNo = '$matricNo'");
    $u=mysqli_fetch_array($us);
	$pwdget= $u['password'];
	$firstname = $u['firstName'];
	$lastname = $u['lastName'];
	$email = $u['email'];
	$dob = $u['dateofbirth'];
	$dept= $u['department'];
	$fact = $u['faculty'];
	}

	else{
	echo "<script> window.open('login.php','_self');</script>";

    }
    ?>
 <!DOCTYPE html>
       <head>
        <link href="css/portal.css" rel="stylesheet"><link href="css/animate.css" rel="stylesheet">
        <link href="css/bootstrap.css" rel="stylesheet">
        <link href="css/css/all.css" rel="stylesheet">
        <script src="js/jquery%203.3.1.js"></script>
        <script src="js/bootstrap.js"></script>
        
        </head>
        <body>

<div class="container-fluid" style="height: 100vh;background-image:url('bg.jpg');background-size: cover" >
     <div class="modal" id="myModal">
        <div class="modal-dialog">
            <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">Change Password</h4>
                    <button type="button" class="close text-danger" data-dismiss="modal">&times;</button>
                </div>

                <!-- Modal body -->
                <div class="modal-body">
                    <div class="formbox p-5 mt-5 shadow-lg" style="background-color: white;border-radius: 5px">
                        <form action="pwdc.php" method="post">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text bg-info text-white">Old Password &nbsp;</span>
                            </div>
                            <input type="password" class="form-control" placeholder="Enter Your Old Password" name="pwdo">
                        </div>

                        <div class="input-group mt-4">
                            <div class="input-group-prepend">
                                <span class="input-group-text bg-info text-white">New Password</span>
                            </div>
                            <input type="password" class="form-control" placeholder="Enter New Password" name="pwdn">
                        </div>
                        <button type="submit" class="btn btn-primary btn-block mt-4" >Change Password</button>
                        </form>
                    </div>

                </div>

                <!-- Modal footer -->
                <div class="modal-footer">

                </div>

            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-3 " style="background-color: rgb(250,255,255);height: 100vh">
            <div class="row mt-3">

                <div class="col-12 text-center" style="padding: 1.25em">
                    <img src="campus.png" class="rounded-circle"  height="200px" width="200px" id="image1">
                </div>

            '</div>

           <div class="row mt-2">
                <div class="col-12 text-center bg-primary">
                    <span class="font-weight-bold text-white shadow-lg text-capitalize" style="font-size: 20px;"><font class="text-uppercase"><?php echo $lastname?></font>
                        , <font class="text-capitalize"><?php echo $firstname;?></font>
                    </span>
                </div>
                <div class="col-12 text-center">
                    <span class="font-weight-bold text-primary" style="font-size: 20px;">Matric Number: <?php echo $matricNo ?></span>
                </div>

                <div class="col-12 mt-4 font-weight-bold ml-3" style="font-size:16px">
                    <a href="#" ><i class="fa fa-book"> </i><span class="ml-3">Registered Courses</span></a>
                </div>

                <div class="col-12 mt-2 font-weight-bold ml-3" style="font-size:16px">
                    <a href="#" data-toggle="modal" data-target="#myModal"><i class="fa fa-lock"> </i><span class="ml-3">Change Password</span></a>
                </div>

                <div class="col-12 mt-5 font-weight-bold text-center"  style="font-size:19px">
                    <a href="logout.php" ><button class="btn btn-danger text-center">Log Out<i class="fa fa-sign-out-alt ml-3"></i></button></a>
                </div>
            </div>
        </div>
        <div class="col-1" style="background-color: rgba(250,255,255,0.78);height: 100vh">

        </div>

        <div class="col-8 p-5" style="background-color: rgba(250,255,255,0.78);height: 100vh">
            <div class="ml-3 mr-3 rounded" style="background-color: rgba(97,164,255,0.86);height: 90vh">
                <div class="row">
                    <div class="col-12 text-center  font-weight-bold" style="font-size: 35px">
                         <div class="bg-white rounded-top shadow-lg text-primary text-capitalize">Welcome  <?php echo $firstname ?></div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-6 text-white" >

                        <div class="mt-5 text-center bg-dark rounded-right col" style="font-size: 30px">First Name: <span class=" font-weight-bold">  <?php echo $firstname ?></span></div>

                        <div class="mt-5 text-center bg-dark rounded-right col" style="font-size: 25px">Email: <span class=" font-weight-bold">  <?php echo $email ?></span></div>

                        <div class="mt-5 text-center bg-dark rounded-right col" style="font-size: 25px">Faculty: <span class=" font-weight-bold">  <?php echo $fact ?></span></div>
                    </div>

                    <div class="col-6 text-white" >

                        <div class="mt-5 text-center bg-dark rounded-left " style="font-size: 30px">Last Name: <span class=" font-weight-bold">  <?php echo $lastname ?></span></div>

                        <div class="mt-5 text-center bg-dark rounded-left col" style="font-size: 25px">Date of Birth: <span class=" font-weight-bold">  <?php echo $dob ?></span></div>

                        <div class="mt-5 text-center bg-dark rounded-left col" style="font-size: 25px">Department: <span class=" font-weight-bold">  <?php echo $dept ?></span></div>
                    </div>
                </div>


            </div>
        </div>
    </div>

</div>

</body>
</html>






