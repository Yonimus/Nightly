INSERT INTO userid (idnum, userid, pass)
VALUES  (1, 'gregali', 1234),
        (2, 'ian', 2345),
        (3, 'isaac', 3456);


INSERT INTO moodtracking (id,userid, date, mood, act1, act2, act3, act4, act5, act6)
VALUES  (1, 'gregali', 01/01/2022,3, 'Skiing' , 'Meditation','Reading',"NULL","NULL","NULL"),
        (2, 'ian', 02/01/2022 , 1, 'Skiing' , 'Meditation','Reading', 'Watching TV', 'Eat Healthy',"NULL"),
        (3, 'isaac', 04/01/022, 1, 'Skiing' , 'Meditation','Reading', 'Watching TV', 'Eat Healthy', 'Family Time'),
        (4, 'isaac', 04/02/022, 2, 'Skiing' , 'Meditation','Reading', 'Watching TV', 'Eat Healthy', 'Family Time'),
        (5, 'isaac',04/03/022, 3, 'Skiing' , 'Meditation','Reading', 'Watching TV', 'Eat Healthy', 'Family Time'),
        (6, 'isaac', 04/04/022, 2, 'Skiing' , 'Meditation','Reading', 'Watching TV', 'Eat Healthy', 'Family Time');