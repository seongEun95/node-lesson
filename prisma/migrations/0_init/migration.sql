/* yarn run v1.22.19 */
/* $ /Users/siwon/Desktop/sico/seongeun/nodejs-lesson/node_modules/.bin/prisma migrate diff --from-empty --to-schema-datamodel prisma/schema.prisma --script */
-- CreateTable
CREATE TABLE `artists` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(20) NOT NULL,
    `age` INTEGER UNSIGNED NOT NULL,
    `createdAt` DATETIME(0) NOT NULL,
    `updatedAt` DATETIME(0) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `songs` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(20) NOT NULL,
    `lyrics` TEXT NOT NULL,
    `createdAt` DATETIME(0) NOT NULL,
    `updatedAt` DATETIME(0) NOT NULL,
    `artistId` INTEGER UNSIGNED NULL,

    INDEX `artistId`(`artistId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `songs` ADD CONSTRAINT `songs_ibfk_1` FOREIGN KEY (`artistId`) REFERENCES `artists`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

/* Done in 0.78s. */
