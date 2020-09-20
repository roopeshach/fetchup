<?php

$target_dir = "files/" . basename($_FILES['fetchup']['name']);
if(move_uploaded_file($_FILES['fetchup']['tmp_name'],$target_dir)){
    $res->response = "File ".$_FILES['fetchup']['name']." is successfully uploaded";
}else{
    $res->response = "Something got an error ! File Upload failed";
}
echo json_encode($res);
