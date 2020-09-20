<?php
 
$target_dir = "files/" . basename($_FILES['fetchup']['name']);
move_uploaded_file($_FILES['fetchup']['tmp_name'],$target_dir);
 
