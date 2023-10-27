-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 27, 2023 at 06:12 PM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 5.5.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `MCQ_Project`
--

-- --------------------------------------------------------

--
-- Table structure for table `account_table`
--

CREATE TABLE `account_table` (
  `id` bigint(20) NOT NULL,
  `email_id` varchar(255) DEFAULT NULL,
  `level` int(11) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `create_time` varchar(255) DEFAULT NULL,
  `update_time` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `account_table`
--

INSERT INTO `account_table` (`id`, `email_id`, `level`, `password`, `phone`, `role`, `user_name`, `create_time`, `update_time`) VALUES
(1, 'user01@gmail.com', 20, '1234', '1234567890', 'user', 'User 01', NULL, '2023-10-26 15:20:20'),
(2, 'admin@gmail.com', 755, '1234', '1234567890', 'admin', 'admin', NULL, '2023-10-26 15:27:02'),
(3, 'super@gmail.com', 777, '1234', '312-213-2576', 'super', 'super Admin', NULL, '2023-10-26 15:26:35'),
(10, 'user02@gmail.com', 9, '1234', '0123456789', 'user', 'user02', NULL, '2023-10-27 10:50:40'),
(11, 'user03@gmail.com', 5, '1234', '0123456789', 'user', 'user03', NULL, NULL),
(12, 'user04@gmail.com', 5, '1234', '0123456789', 'user', 'user04', NULL, NULL),
(13, 'user05@gmail.com', 12, '1234', '0123456789', 'user', 'user05', NULL, '2023-10-26 20:36:25');

-- --------------------------------------------------------

--
-- Table structure for table `question_table`
--

CREATE TABLE `question_table` (
  `id` bigint(20) NOT NULL,
  `answer` varchar(255) DEFAULT NULL,
  `body` varchar(255) DEFAULT NULL,
  `correct` bigint(20) DEFAULT NULL,
  `create_time` varchar(255) DEFAULT NULL,
  `point` int(11) DEFAULT NULL,
  `question` varchar(255) DEFAULT NULL,
  `style` varchar(255) DEFAULT NULL,
  `update_time` varchar(255) DEFAULT NULL,
  `wrong` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `question_table`
--

INSERT INTO `question_table` (`id`, `answer`, `body`, `correct`, `create_time`, `point`, `question`, `style`, `update_time`, `wrong`) VALUES
(1, 'WyJCLnRlc3QiXQ==', 'WyJBLnRlc3QiLCJCLnRlc3QiXQ==', NULL, '2023-10-24 14:40:59', 1, 'This is a single question', 'Single Choice', '2023-10-24 14:40:59', NULL),
(2, 'WyJCLnRlc3QiLCJELnRleHQiLCJFLnRleHQiXQ==', 'WyJBLnRlc3QiLCJCLnRlc3QiLCJDLnRleHQiLCJELnRleHQiLCJFLnRleHQiXQ==', NULL, '2023-10-24 15:13:26', 3, 'This is a Test Question', 'Multiple Choice', '2023-10-24 15:13:26', NULL),
(3, '', '', NULL, '2023-10-26 02:47:03', 5, 'This is a short ANSWER question', 'Short Answer', '2023-10-26 02:47:03', NULL),
(4, 'WyJBLiBUZXN0Il0=', 'WyJBLiBUZXN0IiwiQy50ZXh0Il0=', NULL, '2023-10-27 10:49:24', 2, 'test single ', 'Single Choice', '2023-10-27 10:49:24', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `question_to_tast_table`
--

CREATE TABLE `question_to_tast_table` (
  `id` bigint(20) NOT NULL,
  `question_id` bigint(20) DEFAULT NULL,
  `test_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `question_to_tast_table`
--

INSERT INTO `question_to_tast_table` (`id`, `question_id`, `test_id`) VALUES
(1, 1, 2),
(2, 3, 2),
(3, 1, 3),
(4, 3, 3),
(5, 2, 4),
(7, 3, 5),
(8, 1, 4),
(9, 2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `test_table`
--

CREATE TABLE `test_table` (
  `id` bigint(20) NOT NULL,
  `create_time` varchar(255) DEFAULT NULL,
  `level` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `topic` varchar(255) DEFAULT NULL,
  `update_time` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `test_table`
--

INSERT INTO `test_table` (`id`, `create_time`, `level`, `name`, `topic`, `update_time`) VALUES
(2, '2023-10-23 05:10:59', 20, 'core Java test 1', 'Core Java', '2023-10-23 05:10:59'),
(3, '2023-10-23 05:24:32', 10, 'SQL Test', 'SQL', '2023-10-23 05:24:32'),
(4, '2023-10-23 05:25:23', 50, 'JPA Test 1', 'Spring Data JPA', '2023-10-23 05:25:23'),
(5, '2023-10-23 05:27:06', 23, 'core java test 2', 'Core Java', '2023-10-23 05:27:06'),
(7, '2023-10-23 05:35:28', 40, 'Spring Boot Test 1', 'Spring Boot', '2023-10-23 05:35:28'),
(8, '2023-10-23 05:36:22', 43, 'Spring Boot Test 2', 'Spring Boot', '2023-10-23 05:36:22'),
(9, '2023-10-23 05:37:34', 70, 'Spring Test 1', 'Spring', '2023-10-23 05:37:34'),
(10, '2023-10-23 05:39:28', 55, 'Spring Boot Test 3', 'Spring Boot', '2023-10-23 05:39:28'),
(11, '2023-10-27 03:35:48', 10, 'Core Java Test 1', 'Anyths', '2023-10-27 03:35:48'),
(13, '2023-10-27 04:20:01', 30, 'Spring MVC Test 1', 'Spring MVC', '2023-10-27 04:20:01'),
(14, '2023-10-27 04:21:12', 35, 'Spring MVC Test 2', 'Spring MVC', '2023-10-27 04:21:12'),
(15, '2023-10-27 04:22:08', 40, 'Spring MVC Test 3', 'Spring MVC', '2023-10-27 04:22:08');

-- --------------------------------------------------------

--
-- Table structure for table `topic_table`
--

CREATE TABLE `topic_table` (
  `id` bigint(20) NOT NULL,
  `create_time` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `topic` varchar(255) DEFAULT NULL,
  `update_time` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `topic_table`
--

INSERT INTO `topic_table` (`id`, `create_time`, `description`, `topic`, `update_time`) VALUES
(2, '2023-10-23 01:22:45', 'Core Jave, Java 8, Stream API', 'Core Java', '2023-10-23 01:22:45'),
(4, '2023-10-23 02:05:34', '', 'Spring MVC', '2023-10-23 02:05:34'),
(5, '2023-10-23 02:05:51', '', 'Spring Boot', '2023-10-23 02:05:51'),
(6, '2023-10-23 02:10:46', '', 'Spring Data JPA', '2023-10-23 02:10:46'),
(7, '2023-10-23 02:17:05', '', 'SQL', '2023-10-23 02:17:05'),
(9, '2023-10-27 02:48:18', '', 'Spring', '2023-10-27 02:48:18'),
(10, '2023-10-27 10:44:58', 'java 8', 'Core Java 2', '2023-10-27 10:44:58');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account_table`
--
ALTER TABLE `account_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `question_table`
--
ALTER TABLE `question_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `question_to_tast_table`
--
ALTER TABLE `question_to_tast_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `test_table`
--
ALTER TABLE `test_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `topic_table`
--
ALTER TABLE `topic_table`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account_table`
--
ALTER TABLE `account_table`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
--
-- AUTO_INCREMENT for table `question_table`
--
ALTER TABLE `question_table`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `question_to_tast_table`
--
ALTER TABLE `question_to_tast_table`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `test_table`
--
ALTER TABLE `test_table`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT for table `topic_table`
--
ALTER TABLE `topic_table`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
