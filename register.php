<?php session_start();
if(isset($_POST['fname'])){

    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $email = $_POST['email'];
    $dob = $_POST['dob'];
    $pwd = sha1($_POST['pwd']);
    $fact = $_POST['fact'];
    $dept = $_POST['dept'];
    

    $connection = mysqli_connect("remotemysql.com","1JTq39QISa","wO8zfGSyqY","1JTq39QISa");   
    $query =  "INSERT into studentsinfo (firstName, lastName,password,email,dateofbirth,department,faculty) values ('$fname','$lname','$pwd','$email','$dob','$dept','$fact')";
    mysqli_query($connection, $query);
    $us = mysqli_query($connection, "SELECT * FROM studentsinfo WHERE email = '$email'");

    $u=mysqli_fetch_array($us);
    // $pwdget= $u['password'];
    $mat = $u['matricNo'];

    
    $_SESSION['matricNo'] = $mat;
    // $_SESSION['pwd'] = $pwdget;

    
   
    echo "<script>alert('Your Matric Number is ' + $mat); window.open('dashboard.php','_self')</script>";
}

else{

    echo "<script> window.open('registration.php','_self');</script>";
    }

?>
