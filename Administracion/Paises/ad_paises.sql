-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-03-2025 a las 02:11:44
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pruebas_cp`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ad_paises`
--

CREATE TABLE `ad_paises` (
  `pais_key` int(3) NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  `clave_desc` varchar(15) DEFAULT NULL,
  `codigo` varchar(3) NOT NULL,
  `cve_continente` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ad_paises`
--

INSERT INTO `ad_paises` (`pais_key`, `descripcion`, `clave_desc`, `codigo`, `cve_continente`) VALUES
(1, 'Afganistan', 'AFG', 'AF', 'AFR'),
(2, 'Albania', 'ALB', 'AL', 'AFR'),
(3, 'Alemania', 'DEU', '0', ''),
(4, 'Andorra', 'AND', '0', ''),
(5, 'Angola', 'AGO', '0', ''),
(6, 'Antigua y Barbuda', 'ATG', '0', ''),
(7, 'Arabia Saudita', 'SAU', '0', ''),
(8, 'Argelia', 'DZA', '0', ''),
(9, 'Argentina', 'ARG', '0', ''),
(10, 'Armenia', 'ARM', '0', ''),
(11, 'Australia', 'AUS', '0', ''),
(12, 'Austria', 'AUT', '0', ''),
(13, 'Azerbaiyán', 'AZE', '0', ''),
(14, 'Bahamas', 'BHS', '0', ''),
(15, 'Bangladés', 'BGD', '0', ''),
(16, 'Barbados', 'BRB', '0', ''),
(17, 'Baréin', 'BHR', '0', ''),
(18, 'Bélgica', 'BEL', '0', ''),
(19, 'Belice', 'BLZ', '0', ''),
(20, 'Benín', 'BEN', '0', ''),
(21, 'Bielorrusia', 'BLR', '0', ''),
(22, 'Birmania', 'MMR', '0', ''),
(23, 'Bolivia', 'BOL', '0', ''),
(24, 'Bosnia y Herzegovina', 'BIH', '0', ''),
(25, 'Botsuana', 'BWA', '0', ''),
(26, 'Brasil', 'BRA', '0', ''),
(27, 'Brunéi', 'BRN', '0', ''),
(28, 'Bulgaria', 'BGR', '0', ''),
(29, 'Burkina Faso', 'BFA', '0', ''),
(30, 'Burundi', 'BDI', '0', ''),
(31, 'Bután', 'BTN', '0', ''),
(32, 'Cabo Verde', 'CPV', '0', ''),
(33, 'Camboya', 'KHM', '0', ''),
(34, 'Camerún', 'CMR', '0', ''),
(35, 'Canadá', 'CAN', '0', ''),
(36, 'Catar', 'QAT', '0', ''),
(37, 'Chad', 'TCD', '0', ''),
(38, 'Chile', 'CHL', '0', ''),
(39, 'China', 'CHN', '0', ''),
(40, 'Chipre', 'CYP', '0', ''),
(41, 'Ciudad del Vaticano', 'VAT', '0', ''),
(42, 'Colombia', 'COL', '0', ''),
(43, 'Comoras', 'COM', '0', ''),
(44, 'Corea del Norte', 'PRK', '0', ''),
(45, 'Corea del Sur', 'KOR', '0', ''),
(46, 'Costa de Marfil', 'CIV', '0', ''),
(47, 'Costa Rica', 'CRI', '0', ''),
(48, 'Croacia', 'HRV', '0', ''),
(49, 'Cuba', 'CUB', '0', ''),
(50, 'Dinamarca', 'DNK', '0', ''),
(51, 'Dominica', 'DMA', '0', ''),
(52, 'Ecuador', 'ECU', '0', ''),
(53, 'Egipto', 'EGY', '0', ''),
(54, 'El Salvador', 'SLV', '0', ''),
(55, 'Emiratos Árabes Unidos', 'ARE', '0', ''),
(56, 'Eritrea', 'ERI', '0', ''),
(57, 'Eslovaquia', 'SVK', '0', ''),
(58, 'Eslovenia', 'SVN', '0', ''),
(59, 'España', 'ESP', '0', ''),
(60, 'Estados Unidos', 'USA', '0', ''),
(61, 'Estonia', 'EST', '0', ''),
(62, 'Etiopía', 'ETH', '0', ''),
(63, 'Filipinas', 'PHL', '0', ''),
(64, 'Finlandia', 'FIN', '0', ''),
(65, 'Fiyi', 'FJI', '0', ''),
(66, 'Francia', 'FRA', '0', ''),
(67, 'Gabón', 'GAB', '0', ''),
(68, 'Gambia', 'GMB', '0', ''),
(69, 'Georgia', 'GEO', '0', ''),
(70, 'Ghana', 'GHA', '0', ''),
(71, 'Granada', 'GRD', '0', ''),
(72, 'Grecia', 'GRC', '0', ''),
(73, 'Guatemala', 'GTM', '0', ''),
(74, 'Guinea', 'GIN', '0', ''),
(75, 'Guinea-Bisáu', 'GNB', '0', ''),
(76, 'Guinea Ecuatorial', 'GNQ', '0', ''),
(77, 'Guyana', 'GUY', '0', ''),
(78, 'Haití', 'HTI', '0', ''),
(79, 'Honduras', 'HND', '0', ''),
(80, 'Hungría', 'HUN', '0', ''),
(81, 'India', 'IND', '0', ''),
(82, 'Indonesia', 'IDN', '0', ''),
(83, 'Irak', 'IRQ', '0', ''),
(84, 'Irán', 'IRN', '0', ''),
(85, 'Irlanda', 'IRL', '0', ''),
(86, 'Islandia', 'ISL', '0', ''),
(87, 'Islas Marshall', 'MHL', '0', ''),
(88, 'Islas Salomón', 'SLB', '0', ''),
(89, 'Israel', 'ISR', '0', ''),
(90, 'Italia', 'ITA', '0', ''),
(91, 'Jamaica', 'JAM', '0', ''),
(92, 'Japón', 'JPN', '0', ''),
(93, 'Jordania', 'JOR', '0', ''),
(94, 'Kazajistán', 'KAZ', '0', ''),
(95, 'Kenia', 'KEN', '0', ''),
(96, 'Kirguistán', 'KGZ', '0', ''),
(97, 'Kiribati', 'KIR', '0', ''),
(98, 'Kuwait', 'KWT', '0', ''),
(99, 'Laos', 'LAO', '0', ''),
(100, 'Lesoto', 'LSO', '0', ''),
(101, 'Letonia', 'LVA', '0', ''),
(102, 'Líbano', 'LBN', '0', ''),
(103, 'Liberia', 'LBR', '0', ''),
(104, 'Libia', 'LBY', '0', ''),
(105, 'Liechtenstein', 'LIE', '0', ''),
(106, 'Lituania', 'LTU', '0', ''),
(107, 'Luxemburgo', 'LUX', '0', ''),
(108, 'Macedonia del Norte', 'MKD', '0', ''),
(109, 'Madagascar', 'MDG', '0', ''),
(110, 'Malasia', 'MYS', '0', ''),
(111, 'Malaui', 'MWI', '0', ''),
(112, 'Maldivas', 'MDV', '0', ''),
(113, 'Malí', 'MLI', '0', ''),
(114, 'Malta', 'MLT', '0', ''),
(115, 'Marruecos', 'MAR', '0', ''),
(116, 'Mauricio', 'MUS', '0', ''),
(117, 'Mauritania', 'MRT', '0', ''),
(118, 'México', 'MEX', '0', ''),
(119, 'Micronesia', 'FSM', '0', ''),
(120, 'Moldavia', 'MDA', '0', ''),
(121, 'Mónaco', 'MCO', '0', ''),
(122, 'Mongolia', 'MNG', '0', ''),
(123, 'Montenegro', 'MNE', '0', ''),
(124, 'Mozambique', 'MOZ', '0', ''),
(125, 'Namibia', 'NAM', '0', ''),
(126, 'Nauru', 'NRU', '0', ''),
(127, 'Nepal', 'NPL', '0', ''),
(128, 'Nicaragua', 'NIC', '0', ''),
(129, 'Níger', 'NER', '0', ''),
(130, 'Nigeria', 'NGA', '0', ''),
(131, 'Noruega', 'NOR', '0', ''),
(132, 'Nueva Zelanda', 'NZL', '0', ''),
(133, 'Omán', 'OMN', '0', ''),
(134, 'Países Bajos', 'NLD', '0', ''),
(135, 'Pakistán', 'PAK', '0', ''),
(136, 'Palaos', 'PLW', '0', ''),
(137, 'Palestina', 'PSE', '0', ''),
(138, 'Panamá', 'PAN', '0', ''),
(139, 'Papúa Nueva Guinea', 'PNG', '0', ''),
(140, 'Paraguay', 'PRY', '0', ''),
(141, 'Perú', 'PER', '0', ''),
(142, 'Polonia', 'POL', '0', ''),
(143, 'Portugal', 'PRT', '0', ''),
(144, 'Reino Unido', 'GBR', '0', ''),
(145, 'República Centroafricana', 'CAF', '0', ''),
(146, 'República Checa', 'CZE', '0', ''),
(147, 'República del Congo', 'COG', '0', ''),
(148, 'República Democrática del Congo', 'COD', '0', ''),
(149, 'República Dominicana', 'DOM', '0', ''),
(150, 'Ruanda', 'RWA', '0', ''),
(151, 'Rumanía', 'ROU', '0', ''),
(152, 'Rusia', 'RUS', '0', ''),
(153, 'Samoa', 'WSM', '0', ''),
(154, 'San Cristóbal y Nieves', 'KNA', '0', ''),
(155, 'San Marino', 'SMR', '0', ''),
(156, 'San Vicente y las Granadinas', 'VCT', '0', ''),
(157, 'Santa Lucía', 'LCA', '0', ''),
(158, 'Santo Tomé y Príncipe', 'STP', '0', ''),
(159, 'Senegal', 'SEN', '0', ''),
(160, 'Serbia', 'SRB', '0', ''),
(161, 'Seychelles', 'SYC', '0', ''),
(162, 'Sierra Leona', 'SLE', '0', ''),
(163, 'Singapur', 'SGP', '0', ''),
(164, 'Siria', 'SYR', '0', ''),
(165, 'Somalia', 'SOM', '0', ''),
(166, 'Sri Lanka', 'LKA', '0', ''),
(167, 'Suazilandia', 'SWZ', '0', ''),
(168, 'Sudáfrica', 'ZAF', '0', ''),
(169, 'Sudán', 'SDN', '0', ''),
(170, 'Sudán del Sur', 'SSD', '0', ''),
(171, 'Suecia', 'SWE', '0', ''),
(172, 'Suiza', 'CHE', '0', ''),
(173, 'Surinam', 'SUR', '0', ''),
(174, 'Tailandia', 'THA', '0', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `ad_paises`
--
ALTER TABLE `ad_paises`
  ADD PRIMARY KEY (`pais_key`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
