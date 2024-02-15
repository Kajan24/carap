USE `carap`;

DROP TABLE IF EXISTS `brand`;

CREATE TABLE `brand` (
    `id` INT(11) NOT NULL AUTO_INCREMENT UNIQUE,
    `name` VARCHAR(100) NOT NULL,
    `since` INT(11) NOT NULL,
    `longitude` FLOAT NOT NULL,
    `latitude` FLOAT NOT NULL,
    `group` VARCHAR(255) NULL,
    PRIMARY KEY(`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;