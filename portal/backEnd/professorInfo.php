<?php
/**
* professorInfo.js
*
* @author Edwin Cotto <cottosoftwaredevelopment@gmail.com>>
* @copyright Edwin Cotto, All rights reserved.
*
* @version 2024-April-22 initial version
*/

$professorInfo=[
    [
        "professorName"=>"Trisha",
        "professorEmail"=>"tren@email.com",
        "professorOffice"=>"Building 132, Room 101",
        "professorOfficeHours"=>"Monday 10:21am-12:20pm, Wednesday 1:20pm-3:20pm, Friday 10:30am-12:00pm"
    ],
    [
    "professorName"=>"Edwin Cotto",
    "professorEmail"=>"example@email.com",
    "professorOffice"=>"Building 1, Room 101",
    "professorOfficeHours"=>"Monday 10:00am-12:00pm, Wednesday 1:00pm-3:00pm, Friday 10:00am-12:00pm"
    ],
    [
        "professorName"=>"Tristan",
        "professorEmail"=>"mple@email.com",
        "professorOffice"=>"Building 122, Room 101",
        "professorOfficeHours"=>"Monday 10:01am-12:00pm, Wednesday 1:20pm-3:00pm, Friday 10:04am-12:00pm"
        ]
];

echo json_encode($professorInfo);
?>