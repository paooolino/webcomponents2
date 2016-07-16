<?php
    // read raw post data
    $json = file_get_contents('php://input');
    $ARR = json_decode($json, true);  

    echo json_encode(server($ARR));
    
function server($ARR) {
    
    switch( $ARR["action"] ) {
        
        case "login":
            if( $ARR["user"] == "admin" && $ARR["pass"] == "admin" ) {
                return array(
                    "status" => "ok",
                    "authCode" => "test_auth_code"
                );
            } else {
                return array(
                    "status" => "ko",
                    "serverErrorMessage" => "Impossibile accedere: credenziali errate."
                );
            }
            
        default:
            return array(
                "status" => "ko",
                "serverErrorMessage" => "Azione non valida."
            );
    }
    
}

    