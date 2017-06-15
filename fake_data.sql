INSERT INTO `user` VALUES ("user.test@cerner.com", "user", "test", false);
INSERT INTO `user` VALUES ("tester@cerner.com", "tester", "man", true);

INSERT INTO `event` VALUES (1, "Orientation", "Be Bored for 8 hours", "Riverport Campus", "2017-05-25", "2017-05-25");
INSERT INTO `event` VALUES (2, "Free Pizza", "There will be free pizza provided at the UMKC Dorms", "UMKC Dorms", "2017-06-01", "2017-06-01");
INSERT INTO `event` VALUES (3, "Networking Lunch", "Free Lunch! Wadup", "Innovations Campus", "2017-06-03", "2017-06-03");
INSERT INTO `event` VALUES (4, "Game Night", "Come Play games with other interns", "UMKC Dorms", "2017-06-10", "2017-06-10");
INSERT INTO `event` VALUES (5, "No Other Pub Night", "More Free Food", "No Other Pub", "2017-06-13", "2017-06-13");
INSERT INTO `event` VALUES (6, "Web Training Day", "Meet your favorite Web Training Actors", "World Headquarters", "2017-06-18", "2017-06-20");
INSERT INTO `event` VALUES (7, "Hello World", "You may still need to learn to code. Let us help.", "Innovations Campus", "2017-06-22", "2017-06-22");
INSERT INTO `event` VALUES (8, "Dev Con", "Get Paid, and learn", "Overland Park Convention Center", "2017-06-25", "2017-06-25");
INSERT INTO `event` VALUES (9, "Personal Day", "Stay home and don't go to work", "UMKC Dorm", "2017-06-30", "2017-06-30");
INSERT INTO `event` VALUES (10, "July Fourth party", "Intern 4th of July Party", "No Other Pub", "2017-07-04", "2017-07-04");

INSERT INTO `question` VALUES (1, "How do you sign in?", "I cannot sign into my computer HELP!", "2017-05-25", "user.test@cerner.com");
INSERT INTO `question` VALUES (2, "How do I buy Lunch?", "", "2017-05-30", "user.test@cerner.com");
INSERT INTO `question` VALUES (3, "Can I download spotify?", "Title ^", "2017-06-02", "user.test@cerner.com");
INSERT INTO `question` VALUES (4, "What time should I clock in?", "what time should I clock in at work?", "2017-06-13", "user.test@cerner.com");
INSERT INTO `question` VALUES (5, "Best place to go grocery shopping?", "I can't seem to find a good place", "2017-06-18", "user.test@cerner.com");
INSERT INTO `question` VALUES (6, "Do we get paid for Dev Con?", "", "2017-06-18", "user.test@cerner.com");
INSERT INTO `question` VALUES (7, "My Manager messed up my hours, what do I do?", "My Manager messed up my hours and I don't know how to get it fixed", "2017-06-24", "user.test@cerner.com");
INSERT INTO `question` VALUES (8, "What time do we get paid?", "I need money REALLY bad", "2017-07-01", "user.test@cerner.com");
INSERT INTO `question` VALUES (9, "Can I get some help with homework", "I can't figure out this one problem on my Homework", "2017-07-11", "user.test@cerner.com");
INSERT INTO `question` VALUES (10, "Hello World", "Can't get my hello world program to run in Java", "2017-07-20", "user.test@cerner.com");

INSERT INTO `answer` VALUES (1, "You just use the password you set up at orientation", 1, "tester@cerner.com", true, "2017-05-25");
INSERT INTO `answer` VALUES (2, "Just use the terminals and swipe your cards", 2, "user.test@cerner.com", true, "2017-05-30");
INSERT INTO `answer` VALUES (3, "The answer above is correct", 2, "tester@cerner.com", true, "2017-05-31");
INSERT INTO `answer` VALUES (4, "You aren't allowed to download anything", 3, "user.test@cerner.com", false, "2017-06-02");
INSERT INTO `answer` VALUES (5, "Previous answers are incorrect. you may download whatever you need", 3, "tester@cerner.com", true, "2017-06-02");
INSERT INTO `answer` VALUES (6, "Sorry for the mixup!", 3, "user.test@cerner.com", false, "2017-06-02");
INSERT INTO `answer` VALUES (7, "Whenever you get to work", 4, "tester@cerner.com", true, "2017-06-13");
INSERT INTO `answer` VALUES (8, "Walmart is always good.", 5, "tester@cerner.com", true, "2017-06-18");
INSERT INTO `answer` VALUES (9, "Yes, just download the app.", 6, "tester@cerner.com", true, "2017-06-19");
INSERT INTO `answer` VALUES (10, "Ping me with more details.", 7, "tester@cerner.com", true, "2017-06-24");
INSERT INTO `answer` VALUES (11, "Payday is on Friday", 8, "tester@cerner.com", true, "2017-07-01");
INSERT INTO `answer` VALUES (12, "This isn't a good question for here. Sorry.", 9, "tester@cerner.com", true, "2017-05-25");