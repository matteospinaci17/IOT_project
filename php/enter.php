<?php
// import credentials
include('mysql_credentials.php');

// Open SQL Server connection
$con = new mysqli( $mysql_server, $mysql_user, $mysql_pass, $mysql_db );

// Check for SQL error
if ($con->connect_error) die ("Connection failed: " .$con->connect_error);

$query = "SELECT * FROM cars";
$result = $con->query($query);
echo $con->error;

// Printing part:
echo "All information about the parking:";
echo "<br />";
echo "Id | plate | time_in | time_out\n";
echo "<br />";
while($row = $result->fetch_array()){
    $time_out = $row["time_out"];
    if($time_out == null){
        $time_out = "still inside";
        echo $row["id"] ."|" . $row["plate"] ."|" . $row["time_in"] ."|" . $time_out;
        echo "<br />";
    }
    else{
        echo $row["id"] ."|" . $row["plate"] ."|" . $row["time_in"] ."|" . $row["time_out"];
        echo "<br />";
    }
}
$con->close();