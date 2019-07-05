<?php session_start();
if(isset($_SESSION['matricNo'])){

 	$pwdo = sha1($_POST['pwdo']);
	$pwdn = sha1($_POST['pwdn']);
	if($pwdo != "" && $pwdn != ""){
		$matricNo = $_SESSION['matricNo'];
		$con = mysqli_connect("remotemysql.com","1JTq39QISa","wO8zfGSyqY","1JTq39QISa");   
	$us = mysqli_query($con, "SELECT * FROM studentsinfo WHERE matricNo = '$matricNo'");
	$u=mysqli_fetch_array($us);
	$pwdget= $u['password'];
	if($pwdget == $pwdo){
		$uss = mysqli_query($con,"UPDATE studentsinfo SET password = '$pwdn' WHERE matricNo = '$matricNo'");
		echo "<script> window.open('dashboard.php','_self');</script>";
	}
	else{

	}
	}
	else{
		echo "<script> window.open('dashboard.php','_self');</script>";
	}
	
	}

	else{
	echo "<script> window.open('login.php','_self');</script>";

    }

?>