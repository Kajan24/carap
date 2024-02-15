<?php

require_once '../php/connection.php';

function allBrand(): array
{
    $pdo = db();
    $SQL = "SELECT id, name, since, longitude, latitude, `group`
    FROM brand b ";
    $statement = $pdo->prepare($SQL);
    $params = array();
    $statement->execute(($params));
    $eleves = $statement->fetchAll(PDO::FETCH_ASSOC);
    return $eleves;
}

function oneBrand($id): array
{
    $pdo = db();
    $SQL = "SELECT id, name, since, longitude, latitude, `group`
    FROM brand b 
    WHERE id = :id";
    $statement = $pdo->prepare($SQL);
    $params = array(':id' => $id);
    $statement->execute($params);
    $eleve = $statement->fetch(PDO::FETCH_ASSOC);
    return $eleve;
}
