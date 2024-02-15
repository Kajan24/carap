<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
header('Content-Type: application/json; charset=utf-8');
require_once './brand.php';


$requestMethod = $_SERVER["REQUEST_METHOD"];


if ($requestMethod == "GET") {
    if (filter_input(INPUT_GET, 'id', FILTER_VALIDATE_INT)) {
        $message = oneBrand(filter_input(INPUT_GET, 'id', FILTER_VALIDATE_INT));
        http_response_code(200);
        echo json_encode($message);
    } else {
        $message = allBrand();
        http_response_code(200);
        echo json_encode($message);
    }
} else {
    $message = "Le programme ne sait que lire les données.";
    http_response_code(400);
}
