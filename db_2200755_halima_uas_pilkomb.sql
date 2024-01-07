-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 05, 2024 at 05:12 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_2200755_halima_uas_pilkomb`
--

-- --------------------------------------------------------

--
-- Table structure for table `peminjamanbuku_halima`
--

CREATE TABLE `peminjamanbuku_halima` (
  `id` int(11) NOT NULL,
  `judul_buku` varchar(50) NOT NULL,
  `jumlah` int(11) DEFAULT NULL,
  `nama_peminjam` varchar(40) NOT NULL,
  `alamat_peminjam` varchar(100) NOT NULL,
  `noHp_peminjam` varchar(20) NOT NULL,
  `tanggal_pinjam` date NOT NULL,
  `tanggal_pengembalian` date NOT NULL,
  `lama_pinjam` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `peminjamanbuku_halima`
--

INSERT INTO `peminjamanbuku_halima` (`id`, `judul_buku`, `jumlah`, `nama_peminjam`, `alamat_peminjam`, `noHp_peminjam`, `tanggal_pinjam`, `tanggal_pengembalian`, `lama_pinjam`) VALUES
(1, 'Sebuah Seni Untuk Bersikap Bodo Amat', 1, 'Salsabila', 'Jl. Harun No.5, Jatiwaringin', '085811505607', '2023-10-01', '2023-10-05', '4 hari'),
(2, 'Atomic Habits', 1, 'Abidzar', 'Jl. Pondok Indah No.2A, Kebayoran Lama', '081111198765', '2023-10-11', '2023-10-21', '10 hari'),
(3, 'Gadis Kretek', 1, 'Vici', 'Jl. Anggrek No.10, Cengkareng', '081298347653', '2023-10-19', '2023-10-26', '7 hari'),
(4, 'Hunter x Hunter', 2, 'Catheez', 'Jl. Akasia Banten No.4B, Pamulang', '081109128734', '2023-11-10', '2023-11-24', '14 hari'),
(5, 'What\'s So Wrong About Your Life', 1, 'Daniel', 'Jl. Raden Ismail No.7 , Gambir', '089218376456', '2023-12-06', '2023-12-17', '11 hari');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `peminjamanbuku_halima`
--
ALTER TABLE `peminjamanbuku_halima`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `peminjamanbuku_halima`
--
ALTER TABLE `peminjamanbuku_halima`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
