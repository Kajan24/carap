DROP DATABASE IF EXISTS `carap`;

CREATE DATABASE `carap`;

USE `carap`;

-- Create user for local access
DROP USER IF EXISTS 'carap_admin' @'localhost';

CREATE USER 'carap_admin' @'localhost' IDENTIFIED BY 'Super';

GRANT
Insert
    ON spectacle.* TO 'carap_admin' @'localhost';

GRANT
Select
    ON spectacle.* TO 'carap_admin' @'localhost';

GRANT
Update
    ON spectacle.* TO 'carap_admin' @'localhost';

GRANT Delete ON spectacle.* TO 'carap_admin' @'localhost';