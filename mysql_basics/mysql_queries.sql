--Feature Set 1 - MySQL Basics
SELECT * FROM `students` WHERE `username` LIKE 'yaerilim'
UPDATE `students` SET `email`='helloyaeri@gmail.com' WHERE `username`='yaerilim'
INSERT INTO `students` SET `name`='New Student', `email`='imnew@email.com', `age`='35', `SSN`='456789123', `username`='addedstudent', `password`=sha1('123newbee'), `joined`=now(), `status`= 'active'
DELETE FROM `students` WHERE `username`='addedstudent'

--Feature Set 2 - Make a Table
--Select all todo_items made by user_id 123
SELECT * FROM `items` WHERE `user_id` LIKE '123'
--Insert a new item by user_id 123
INSERT INTO `items` SET `title`='do laundry', `details`='hand wash blouses', `timestamp`=now(), `user_id`='123'
--Delete a item by user_id 123
DELETE FROM `items` WHERE `title`='homework'
--Update a item by user_id 123
UPDATE `items` SET `details`='hand wash dresses' WHERE `user_id`='123'
--Perform a select to get all information from user_id 123
SELECT * FROM `items` WHERE `user_id` LIKE '123'