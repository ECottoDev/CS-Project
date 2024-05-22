<?php
/**
* professorInfo.js
*
* @author Edwin Cotto <cottosoftwaredevelopment@gmail.com>>
* @copyright Edwin Cotto, All rights reserved.
*
* @version 2024-April-22 initial version
*/

//connect to database and get the professor information
$connection = mysqli_connect("localhost", "Edwin", "PUPRFaculty2024", "PUPR_Faculty");
if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
};

//get the professor information from professorInfo table
$result = mysqli_query($connection, "SELECT * FROM professors");

//create an array to store the professor information
$professorInfo = array();
while ($row = mysqli_fetch_array($result)) {
    $professorInfo[] = $row;
};

//return the professor information
echo json_encode($professorInfo);

//close the connection
mysqli_close($connection);

?>