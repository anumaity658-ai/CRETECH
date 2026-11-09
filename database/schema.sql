-- Optional MySQL table for enquiries.
-- The site works without a database: enquiries are saved in storage/private/enquiries.json.
-- Use this only if you later want enquiries in MySQL as well.

CREATE TABLE IF NOT EXISTS enquiries (
    id          CHAR(16)      NOT NULL PRIMARY KEY,
    created_at  DATETIME      NOT NULL,
    status      VARCHAR(20)   NOT NULL DEFAULT 'new',
    name        VARCHAR(100)  NOT NULL,
    email       VARCHAR(150)  NOT NULL,
    phone       VARCHAR(30)   NOT NULL DEFAULT '',
    service     VARCHAR(100)  NOT NULL DEFAULT '',
    message     TEXT          NOT NULL,
    ip          VARCHAR(45)   NOT NULL DEFAULT '',
    mailed      TINYINT(1)    NOT NULL DEFAULT 0,
    INDEX idx_created (created_at),
    INDEX idx_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
