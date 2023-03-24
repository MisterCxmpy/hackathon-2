DROP TABLE IF EXISTS diary;

CREATE TABLE diary (
    diary_id INT GENERATED ALWAYS AS IDENTITY,
    title VARCHAR(100) NOT NULL,
    date DATE NOT NULL,
    time TIME NOT NULL,
    text VARCHAR(255) NOT NULL,
    category VARCHAR(255),
    PRIMARY KEY (diary_id)
);

INSERT INTO
    diary (
        title,
        date,
        time,
        text,
        category
    )
VALUES
    (
        'Dear Diary - 1',
        '2023-03-24',
        '09:15',
        'Today I saw a bird!',
        ''
    ),
    (
        'Dear Diary - 2',
        '2023-03-24',
        '09:20',
        'Today I saw a Cat!',
        ''
    ),
    (
        'Dear Diary - 3',
        '2023-03-24',
        '09:25',
        'Today I saw a Dog!',
        ''
    ),
    (
        'Dear Diary - 4',
        '2023-03-24',
        '09:30',
        'Today I saw a Snake!',
        ''
    );