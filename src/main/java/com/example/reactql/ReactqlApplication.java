package com.example.reactql;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import com.example.reactql.dao.*;
import com.example.reactql.entities.*;
import java.util.List;

@SpringBootApplication
public class ReactqlApplication {

	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(ReactqlApplication.class, args);
		CarrierRepo carrierRepo = context.getBean(CarrierRepo.class);
		RouteRepo routeRepo = context.getBean(RouteRepo.class);
		RateRepo rateRepo = context.getBean(RateRepo.class);
		//customqueryRepo customqueryRepo = context.getBean(customqueryRepo.class);


		// Carrier carrier1 = new Carrier(1, "DHL", "Air");
		// Carrier carrier2 = new Carrier(2, "FedEx", "Drayage");
		// Carrier carrier3 = new Carrier(3, "UPS", "Air");
		// Carrier carrier4 = new Carrier(4, "USPS", "Rail");
		// Carrier carrier5 = new Carrier(5, "DHL", "Drayage");
		// Carrier carrier6 = new Carrier(6, "FedEx", "Rail");
		// Carrier carrier7 = new Carrier(7, "UPS", "Sea");
		// Carrier carrier8 = new Carrier(8, "USPS", "Air");
		// Carrier carrier9 = new Carrier(9, "Maersk Line", "Sea");
		// Carrier carrier10 = new Carrier(10, "FedEx", "Air");
		// Carrier carrier11 = new Carrier(11, "China Railway Express", "Rail");
		// Carrier carrier12 = new Carrier(12, "UPS", "Drayage");
		// Carrier carrier13 = new Carrier(13, "CMA CGM", "Sea");
		// Carrier carrier14 = new Carrier(14, "Deutsche Bahn", "Rail");
		// Carrier carrier15 = new Carrier(15, "Maersk Air", "Air");
		// Carrier carrier16 = new Carrier(16, "YRC Worldwide", "Drayage");
		// Carrier carrier17 = new Carrier(17, "Singapore Airlines Cargo", "Air");
		// Carrier carrier18 = new Carrier(18, "Mediterranean Shipping Company", "Sea");
		// Carrier carrier19 = new Carrier(19, "Emirates SkyCargo", "Air");
		// Carrier carrier20 = new Carrier(20, "Canadian National Railway", "Rail");
		// Carrier carrier21 = new Carrier(21, "XPO Logistics", "Drayage");
		// Carrier carrier22 = new Carrier(22, "Hapag-Lloyd", "Sea");
		// Carrier carrier23 = new Carrier(23, "Indian Railways", "Rail");
		// Carrier carrier24 = new Carrier(24, "Kuehne + Nagel", "Air");
		// Carrier carrier25 = new Carrier(25, "Schneider National", "Drayage");
		// Carrier carrier26 = new Carrier(26, "Evergreen Line", "Sea");
		// Carrier carrier27 = new Carrier(27, "ANA Cargo", "Air");
		// Carrier carrier28 = new Carrier(28, "Russian Railways", "Rail");
		// Carrier carrier29 = new Carrier(29, "Old Dominion Freight Line", "Drayage");
		// Carrier carrier30 = new Carrier(30, "COSCO Shipping Lines", "Sea");
		// Carrier carrier31 = new Carrier(31, "Qatar Airways Cargo", "Air");
		// Carrier carrier32 = new Carrier(32, "Union Pacific Railroad", "Rail");
		// Carrier carrier33 = new Carrier(33, "Cargill Ocean Transportation", "Sea");
		// Carrier carrier34 = new Carrier(34, "LATAM Cargo", "Air");
		// Carrier carrier35 = new Carrier(35, "BNSF Railway", "Rail");
		// Carrier carrier36 = new Carrier(36, "Matson, Inc.", "Sea");
		// Carrier carrier37 = new Carrier(37, "Turkish Airlines Cargo", "Air");
		// Carrier carrier38 = new Carrier(38, "COSCO Shipping Lines", "Rail");
		// Carrier carrier39 = new Carrier(39, "DHL", "Sea");
		// Carrier carrier40 = new Carrier(40, "Qatar Airways Cargo", "Drayage");
		// Carrier carrier41 = new Carrier(41, "Maersk Air", "Rail");
		// Carrier carrier42 = new Carrier(42, "Evergreen Line", "Drayage");
		// Carrier carrier43 = new Carrier(43, "XPO Logistics", "Air");
		// Carrier carrier44 = new Carrier(44, "Emirates SkyCargo", "Rail");
		// Carrier carrier45 = new Carrier(45, "CMA CGM", "Drayage");
		// Carrier carrier46 = new Carrier(46, "Kuehne + Nagel", "Sea");
		// Carrier carrier47 = new Carrier(47, "Hapag-Lloyd", "Air");
		// Carrier carrier48 = new Carrier(48, "Union Pacific Railroad", "Sea");
		// Carrier carrier49 = new Carrier(49, "Turkish Airlines Cargo", "Drayage");
		// Carrier carrier50 = new Carrier(50, "Canadian National Railway", "Air");
		// Carrier carrier51 = new Carrier(51, "Mediterranean Shipping Company", "Rail");
		// Carrier carrier52 = new Carrier(52, "FedEx", "Drayage");
		// Carrier carrier53 = new Carrier(53, "ANA Cargo", "Sea");
		// Carrier carrier54 = new Carrier(54, "BNSF Railway", "Air");
		// Carrier carrier55 = new Carrier(55, "Old Dominion Freight Line", "Rail");
		// Carrier carrier56 = new Carrier(56, "Russian Railways", "Sea");
		// Carrier carrier57 = new Carrier(57, "Schneider National", "Drayage");
		// Carrier carrier58 = new Carrier(58, "Cargill Ocean Transportation", "Air");
		// Carrier carrier59 = new Carrier(59, "LATAM Cargo", "Rail");
		// Carrier carrier60 = new Carrier(60, "Singapore Airlines Cargo", "Sea");



		// save all these carriers to database by iterating them

		// List<Carrier> carriers = List.of(carrier1, carrier2, carrier3, carrier4, carrier5, carrier6, carrier7, carrier8, carrier9, carrier10,
		// 		carrier11, carrier12, carrier13, carrier14, carrier15, carrier16, carrier17, carrier18, carrier19, carrier20, carrier21,
		// 		carrier22, carrier23, carrier24, carrier25, carrier26, carrier27, carrier28, carrier29, carrier30, carrier31, carrier32,
		// 		carrier33, carrier34, carrier35, carrier36, carrier37, carrier38, carrier39, carrier40, carrier41, carrier42, carrier43,
		// 		carrier44, carrier45, carrier46, carrier47, carrier48, carrier49, carrier50, carrier51, carrier52, carrier53, carrier54,
		// 		carrier55, carrier56, carrier57, carrier58, carrier59, carrier60);

		// carrierRepo.saveAll(carriers);

		// Route route = new Route(1, carrierRepo.findById(1).get(), "Shanghai", "Los Angeles");
		// Route route2 = new Route(2, carrierRepo.findById(2).get(), "Hamburg", "New York");
		// Route route3 = new Route(3, carrierRepo.findById(3).get(), "Tokyo", "San Francisco");
		// Route route4 = new Route(4, carrierRepo.findById(4).get(), "Sydney", "Vancouver");
		// Route route5 = new Route(5, carrierRepo.findById(5).get(), "Dubai", "Miami");
		// Route route6 = new Route(6, carrierRepo.findById(6).get(), "Rotterdam", "Houston");
		// Route route7 = new Route(7, carrierRepo.findById(7).get(), "Mumbai", "Chicago");
		// Route route8 = new Route(8, carrierRepo.findById(8).get(), "London", "Dallas");
		// Route route9 = new Route(9, carrierRepo.findById(9).get(), "Sao Paulo", "Atlanta");
		// Route route10 = new Route(10, carrierRepo.findById(10).get(), "Singapore", "Toronto");
		// Route route11 = new Route(11, carrierRepo.findById(11).get(), "Hong Kong", "Seattle");
		// Route route12 = new Route(12, carrierRepo.findById(12).get(), "Copenhagen", "Boston");
		// Route route13 = new Route(13, carrierRepo.findById(13).get(), "Seoul", "Denver");
		// Route route14 = new Route(14, carrierRepo.findById(14).get(), "Auckland", "Montreal");
		// Route route15 = new Route(15, carrierRepo.findById(15).get(), "Johannesburg", "Phoenix");
		// Route route16 = new Route(16, carrierRepo.findById(16).get(), "Berlin", "Las Vegas");
		// Route route17 = new Route(17, carrierRepo.findById(17).get(), "Istanbul", "Detroit");
		// Route route18 = new Route(18, carrierRepo.findById(18).get(), "Moscow", "Philadelphia");
		// Route route19 = new Route(19, carrierRepo.findById(19).get(), "Bangkok", "Minneapolis");
		// Route route20 = new Route(20, carrierRepo.findById(20).get(), "Toronto", "Rio de Janeiro");
		// Route route21 = new Route(21, carrierRepo.findById(29).get(), "Shenzhen", "Los Angeles");
		// Route route22 = new Route(22, carrierRepo.findById(12).get(), "Cape Town", "New York");
		// Route route23 = new Route(23, carrierRepo.findById(5).get(), "Osaka", "San Francisco");
		// Route route24 = new Route(24, carrierRepo.findById(17).get(), "Toronto", "Vancouver");
		// Route route25 = new Route(25, carrierRepo.findById(42).get(), "Doha", "Miami");
		// Route route26 = new Route(26, carrierRepo.findById(23).get(), "Amsterdam", "Houston");
		// Route route27 = new Route(27, carrierRepo.findById(8).get(), "Chennai", "Chicago");
		// Route route28 = new Route(28, carrierRepo.findById(18).get(), "Paris", "Dallas");
		// Route route29 = new Route(29, carrierRepo.findById(7).get(), "Buenos Aires", "Atlanta");
		// Route route30 = new Route(30, carrierRepo.findById(35).get(), "Jakarta", "Toronto");
		// Route route31 = new Route(31, carrierRepo.findById(51).get(), "Macao", "Seattle");
		// Route route32 = new Route(32, carrierRepo.findById(6).get(), "Rotterdam", "Boston");
		// Route route33 = new Route(33, carrierRepo.findById(20).get(), "Busan", "Denver");
		// Route route34 = new Route(34, carrierRepo.findById(53).get(), "Wellington", "Montreal");
		// Route route35 = new Route(35, carrierRepo.findById(49).get(), "Cairo", "Phoenix");
		// Route route36 = new Route(36, carrierRepo.findById(13).get(), "Helsinki", "Las Vegas");
		// Route route37 = new Route(37, carrierRepo.findById(38).get(), "Ankara", "Detroit");
		// Route route38 = new Route(38, carrierRepo.findById(10).get(), "St. Petersburg", "Philadelphia");
		// Route route39 = new Route(39, carrierRepo.findById(15).get(), "Chiang Mai", "Minneapolis");
		// Route route40 = new Route(40, carrierRepo.findById(43).get(), "Vancouver", "Rio de Janeiro");
		// Route route41 = new Route(41, carrierRepo.findById(16).get(), "Perth", "Los Angeles");
		// Route route42 = new Route(42, carrierRepo.findById(28).get(), "Munich", "New York");
		// Route route43 = new Route(43, carrierRepo.findById(50).get(), "Ho Chi Minh City", "San Francisco");
		// Route route44 = new Route(44, carrierRepo.findById(33).get(), "Mumbai", "Vancouver");
		// Route route45 = new Route(45, carrierRepo.findById(36).get(), "Riyadh", "Miami");
		// Route route46 = new Route(46, carrierRepo.findById(54).get(), "Barcelona", "Houston");
		// Route route47 = new Route(47, carrierRepo.findById(4).get(), "Lima", "Chicago");
		// Route route48 = new Route(48, carrierRepo.findById(44).get(), "Dublin", "Dallas");
		// Route route49 = new Route(49, carrierRepo.findById(19).get(), "Santiago", "Atlanta");
		// Route route50 = new Route(50, carrierRepo.findById(46).get(), "Bangkok", "Toronto");
		// Route route51 = new Route(51, carrierRepo.findById(26).get(), "Shanghai", "Los Angeles");
		// Route route52 = new Route(52, carrierRepo.findById(45).get(), "Hamburg", "New York");
		// Route route53 = new Route(53, carrierRepo.findById(11).get(), "Tokyo", "San Francisco");
		// Route route54 = new Route(54, carrierRepo.findById(48).get(), "Sydney", "Vancouver");
		// Route route55 = new Route(55, carrierRepo.findById(37).get(), "Dubai", "Miami");
		// Route route56 = new Route(56, carrierRepo.findById(31).get(), "Rotterdam", "Houston");
		// Route route57 = new Route(57, carrierRepo.findById(3).get(), "Mumbai", "Chicago");
		// Route route58 = new Route(58, carrierRepo.findById(21).get(), "London", "Dallas");
		// Route route59 = new Route(59, carrierRepo.findById(14).get(), "Sao Paulo", "Atlanta");
		// Route route60 = new Route(60, carrierRepo.findById(27).get(), "Singapore", "Toronto");
		// Route route61 = new Route(61, carrierRepo.findById(7).get(), "Hong Kong", "Seattle");
		// Route route62 = new Route(62, carrierRepo.findById(22).get(), "Copenhagen", "Boston");
		// Route route63 = new Route(63, carrierRepo.findById(25).get(), "Seoul", "Denver");
		// Route route64 = new Route(64, carrierRepo.findById(36).get(), "Auckland", "Montreal");
		// Route route65 = new Route(65, carrierRepo.findById(32).get(), "Johannesburg", "Phoenix");
		// Route route66 = new Route(66, carrierRepo.findById(20).get(), "Berlin", "Las Vegas");
		// Route route67 = new Route(67, carrierRepo.findById(43).get(), "Istanbul", "Detroit");
		// Route route68 = new Route(68, carrierRepo.findById(2).get(), "Moscow", "Philadelphia");
		// Route route69 = new Route(69, carrierRepo.findById(41).get(), "Bangkok", "Minneapolis");
		// Route route70 = new Route(70, carrierRepo.findById(29).get(), "Toronto", "Rio de Janeiro");
		// Route route71 = new Route(71, carrierRepo.findById(53).get(), "Shenzhen", "Los Angeles");
		// Route route72 = new Route(72, carrierRepo.findById(16).get(), "Cape Town", "New York");
		// Route route73 = new Route(73, carrierRepo.findById(1).get(), "Osaka", "San Francisco");
		// Route route74 = new Route(74, carrierRepo.findById(39).get(), "Toronto", "Vancouver");
		// Route route75 = new Route(75, carrierRepo.findById(18).get(), "Doha", "Miami");
		// Route route76 = new Route(76, carrierRepo.findById(15).get(), "Amsterdam", "Houston");
		// Route route77 = new Route(77, carrierRepo.findById(34).get(), "Chennai", "Chicago");
		// Route route78 = new Route(78, carrierRepo.findById(9).get(), "Paris", "Dallas");
		// Route route79 = new Route(79, carrierRepo.findById(10).get(), "Buenos Aires", "Atlanta");
		// Route route80 = new Route(80, carrierRepo.findById(5).get(), "Jakarta", "Toronto");
		// Route route81 = new Route(81, carrierRepo.findById(51).get(), "Macao", "Seattle");
		// Route route82 = new Route(82, carrierRepo.findById(23).get(), "Rotterdam", "Boston");
		// Route route83 = new Route(83, carrierRepo.findById(40).get(), "Busan", "Denver");
		// Route route84 = new Route(84, carrierRepo.findById(53).get(), "Wellington", "Montreal");
		// Route route85 = new Route(85, carrierRepo.findById(49).get(), "Cairo", "Phoenix");
		// Route route86 = new Route(86, carrierRepo.findById(13).get(), "Helsinki", "Las Vegas");
		// Route route87 = new Route(87, carrierRepo.findById(38).get(), "Ankara", "Detroit");
		// Route route88 = new Route(88, carrierRepo.findById(10).get(), "St. Petersburg", "Philadelphia");
		// Route route89 = new Route(89, carrierRepo.findById(15).get(), "Chiang Mai", "Minneapolis");
		// Route route90 = new Route(90, carrierRepo.findById(43).get(), "Vancouver", "Rio de Janeiro");
		// Route route91 = new Route(91, carrierRepo.findById(16).get(), "Perth", "Los Angeles");
		// Route route92 = new Route(92, carrierRepo.findById(28).get(), "Munich", "New York");
		// Route route93 = new Route(93, carrierRepo.findById(50).get(), "Ho Chi Minh City", "San Francisco");
		// Route route94 = new Route(94, carrierRepo.findById(33).get(), "Mumbai", "Vancouver");
		// Route route95 = new Route(95, carrierRepo.findById(36).get(), "Riyadh", "Miami");
		// Route route96 = new Route(96, carrierRepo.findById(54).get(), "Barcelona", "Houston");
		// Route route97 = new Route(97, carrierRepo.findById(4).get(), "Lima", "Chicago");
		// Route route98 = new Route(98, carrierRepo.findById(44).get(), "Dublin", "Dallas");
		// Route route99 = new Route(99, carrierRepo.findById(19).get(), "Santiago", "Atlanta");
		// Route route100 = new Route(100, carrierRepo.findById(46).get(), "Bangkok", "Toronto");
		// Route route101 = new Route(101, carrierRepo.findById(26).get(), "Shanghai", "Los Angeles");
		// Route route102 = new Route(102, carrierRepo.findById(45).get(), "Hamburg", "New York");
		// Route route103 = new Route(103, carrierRepo.findById(11).get(), "Tokyo", "San Francisco");
		// Route route104 = new Route(104, carrierRepo.findById(48).get(), "Sydney", "Vancouver");
		// Route route105 = new Route(105, carrierRepo.findById(37).get(), "Dubai", "Miami");
		// Route route106 = new Route(106, carrierRepo.findById(31).get(), "Rotterdam", "Houston");
		// Route route107 = new Route(107, carrierRepo.findById(3).get(), "Mumbai", "Chicago");
		// Route route108 = new Route(108, carrierRepo.findById(21).get(), "London", "Dallas");
		// Route route109 = new Route(109, carrierRepo.findById(14).get(), "Sao Paulo", "Atlanta");
		// Route route110 = new Route(110, carrierRepo.findById(27).get(), "Singapore", "Toronto");
		// Route route111 = new Route(111, carrierRepo.findById(7).get(), "Hong Kong", "Seattle");
		// Route route112 = new Route(112, carrierRepo.findById(22).get(), "Copenhagen", "Boston");
		// Route route113 = new Route(113, carrierRepo.findById(25).get(), "Seoul", "Denver");
		// Route route114 = new Route(114, carrierRepo.findById(36).get(), "Auckland", "Montreal");
		// Route route115 = new Route(115, carrierRepo.findById(32).get(), "Johannesburg", "Phoenix");
		// Route route116 = new Route(116, carrierRepo.findById(20).get(), "Berlin", "Las Vegas");
		// Route route117 = new Route(117, carrierRepo.findById(43).get(), "Istanbul", "Detroit");
		// Route route118 = new Route(118, carrierRepo.findById(2).get(), "Moscow", "Philadelphia");
		// Route route119 = new Route(119, carrierRepo.findById(41).get(), "Bangkok", "Minneapolis");
		// Route route120 = new Route(120, carrierRepo.findById(29).get(), "Toronto", "Rio de Janeiro");
		// Route route121 = new Route(121, carrierRepo.findById(53).get(), "Shenzhen", "Los Angeles");
		// Route route122 = new Route(122, carrierRepo.findById(16).get(), "Cape Town", "New York");
		// Route route123 = new Route(123, carrierRepo.findById(1).get(), "Osaka", "San Francisco");
		// Route route124 = new Route(124, carrierRepo.findById(39).get(), "Toronto", "Vancouver");
		// Route route125 = new Route(125, carrierRepo.findById(18).get(), "Doha", "Miami");
		// Route route126 = new Route(126, carrierRepo.findById(15).get(), "Amsterdam", "Houston");
		// Route route127 = new Route(127, carrierRepo.findById(34).get(), "Chennai", "Chicago");
		// Route route128 = new Route(128, carrierRepo.findById(9).get(), "Paris", "Dallas");
		// Route route129 = new Route(129, carrierRepo.findById(10).get(), "Buenos Aires", "Atlanta");
		// Route route130 = new Route(130, carrierRepo.findById(5).get(), "Jakarta", "Toronto");
		// Route route131 = new Route(131, carrierRepo.findById(1).get(), "Shanghai", "Los Angeles");
		// Route route132 = new Route(132, carrierRepo.findById(2).get(), "Hamburg", "New York");
		// Route route133 = new Route(133, carrierRepo.findById(3).get(), "Tokyo", "San Francisco");
		// Route route134 = new Route(134, carrierRepo.findById(4).get(), "Sydney", "Vancouver");
		// Route route135 = new Route(135, carrierRepo.findById(5).get(), "Dubai", "Miami");
		// Route route136 = new Route(136, carrierRepo.findById(6).get(), "Rotterdam", "Houston");
		// Route route137 = new Route(137, carrierRepo.findById(7).get(), "Mumbai", "Chicago");
		// Route route138 = new Route(138, carrierRepo.findById(8).get(), "London", "Dallas");
		// Route route139 = new Route(139, carrierRepo.findById(9).get(), "Sao Paulo", "Atlanta");
		// Route route140 = new Route(140, carrierRepo.findById(10).get(), "Singapore", "Toronto");


		// save all these routes to database by iterating them

		// List<Route> routes = List.of(route81, route82, route83, route84, route85, route86, route87, route88, route89, route90,
		// 		route91, route92, route93, route94, route95, route96, route97, route98, route99, route100, route101,
		// 		route102, route103, route104, route105, route106, route107, route108, route109, route110, route111, route112,
		// 		route113, route114, route115, route116, route117, route118, route119, route120, route121, route122, route123,
		// 		route124, route125, route126, route127, route128, route129, route130, route131, route132, route133, route134,
		// 		route135, route136, route137, route138, route139, route140);

		// List<Route> routes = List.of(route, route2, route3, route4, route5, route6, route7, route8, route9, route10,
		// 		route11, route12, route13, route14, route15, route16, route17, route18, route19, route20, route21,
		// 		route22, route23, route24, route25, route26, route27, route28, route29, route30, route31, route32,
		// 		route33, route34, route35, route36, route37, route38, route39, route40, route41, route42, route43,
		// 		route44, route45, route46, route47, route48, route49, route50, route51, route52, route53, route54,
		// 		route55, route56, route57, route58, route59, route60, route61, route62, route63, route64, route65,
		// 		route66, route67, route68, route69, route70, route71, route72, route73, route74, route75, route76,
		// 		route77, route78, route79, route80);

		// routeRepo.saveAll(routes);

		// Rate rate = new Rate(1, routeRepo.findById(1).get(), "$1000");
		// Rate rate2 = new Rate(2, routeRepo.findById(2).get(), "$4500");
		// Rate rate3 = new Rate(3, routeRepo.findById(3).get(), "$3200");
		// Rate rate4 = new Rate(4, routeRepo.findById(4).get(), "$5700");
		// Rate rate5 = new Rate(5, routeRepo.findById(5).get(), "$6900");
		// Rate rate6 = new Rate(6, routeRepo.findById(6).get(), "$2200");
		// Rate rate7 = new Rate(7, routeRepo.findById(7).get(), "$4200");
		// Rate rate8 = new Rate(8, routeRepo.findById(8).get(), "$1500");
		// Rate rate9 = new Rate(9, routeRepo.findById(9).get(), "$7800");
		// Rate rate10 = new Rate(10, routeRepo.findById(10).get(), "$3200");
		// Rate rate11 = new Rate(11, routeRepo.findById(11).get(), "$5200");
		// Rate rate12 = new Rate(12, routeRepo.findById(12).get(), "$6300");
		// Rate rate13 = new Rate(13, routeRepo.findById(13).get(), "$4100");
		// Rate rate14 = new Rate(14, routeRepo.findById(14).get(), "$1800");
		// Rate rate15 = new Rate(15, routeRepo.findById(15).get(), "$8900");
		// Rate rate16 = new Rate(16, routeRepo.findById(16).get(), "$4400");
		// Rate rate17 = new Rate(17, routeRepo.findById(17).get(), "$3600");
		// Rate rate18 = new Rate(18, routeRepo.findById(18).get(), "$5400");
		// Rate rate19 = new Rate(19, routeRepo.findById(19).get(), "$2500");
		// Rate rate20 = new Rate(20, routeRepo.findById(20).get(), "$7000");
		// Rate rate21 = new Rate(21, routeRepo.findById(21).get(), "$1200");
		// Rate rate22 = new Rate(22, routeRepo.findById(22).get(), "$6800");
		// Rate rate23 = new Rate(23, routeRepo.findById(23).get(), "$3400");
		// Rate rate24 = new Rate(24, routeRepo.findById(24).get(), "$4600");
		// Rate rate25 = new Rate(25, routeRepo.findById(25).get(), "$5500");
		// Rate rate26 = new Rate(26, routeRepo.findById(26).get(), "$4800");
		// Rate rate27 = new Rate(27, routeRepo.findById(27).get(), "$2700");
		// Rate rate28 = new Rate(28, routeRepo.findById(28).get(), "$7600");
		// Rate rate29 = new Rate(29, routeRepo.findById(29).get(), "$1900");
		// Rate rate30 = new Rate(30, routeRepo.findById(30).get(), "$3300");
		// Rate rate31 = new Rate(31, routeRepo.findById(31).get(), "$4100");
		// Rate rate32 = new Rate(32, routeRepo.findById(32).get(), "$5800");
		// Rate rate33 = new Rate(33, routeRepo.findById(33).get(), "$6300");
		// Rate rate34 = new Rate(34, routeRepo.findById(34).get(), "$5200");
		// Rate rate35 = new Rate(35, routeRepo.findById(35).get(), "$1800");
		// Rate rate36 = new Rate(36, routeRepo.findById(36).get(), "$8700");
		// Rate rate37 = new Rate(37, routeRepo.findById(37).get(), "$4600");
		// Rate rate38 = new Rate(38, routeRepo.findById(38).get(), "$3100");
		// Rate rate39 = new Rate(39, routeRepo.findById(39).get(), "$4700");
		// Rate rate40 = new Rate(40, routeRepo.findById(40).get(), "$6700");
		// Rate rate41 = new Rate(41, routeRepo.findById(41).get(), "$3800");
		// Rate rate42 = new Rate(42, routeRepo.findById(42).get(), "$2400");
		// Rate rate43 = new Rate(43, routeRepo.findById(43).get(), "$6700");
		// Rate rate44 = new Rate(44, routeRepo.findById(44).get(), "$5500");
		// Rate rate45 = new Rate(45, routeRepo.findById(45).get(), "$1200");
		// Rate rate46 = new Rate(46, routeRepo.findById(46).get(), "$4300");
		// Rate rate47 = new Rate(47, routeRepo.findById(47).get(), "$5700");
		// Rate rate48 = new Rate(48, routeRepo.findById(48).get(), "$3300");
		// Rate rate49 = new Rate(49, routeRepo.findById(49).get(), "$7200");
		// Rate rate50 = new Rate(50, routeRepo.findById(50).get(), "$2900");
		// Rate rate51 = new Rate(51, routeRepo.findById(51).get(), "$6500");
		// Rate rate52 = new Rate(52, routeRepo.findById(52).get(), "$1600");
		// Rate rate53 = new Rate(53, routeRepo.findById(53).get(), "$3100");
		// Rate rate54 = new Rate(54, routeRepo.findById(54).get(), "$4400");
		// Rate rate55 = new Rate(55, routeRepo.findById(55).get(), "$3800");
		// Rate rate56 = new Rate(56, routeRepo.findById(56).get(), "$8200");
		// Rate rate57 = new Rate(57, routeRepo.findById(57).get(), "$6700");
		// Rate rate58 = new Rate(58, routeRepo.findById(58).get(), "$1500");
		// Rate rate59 = new Rate(59, routeRepo.findById(59).get(), "$5300");
		// Rate rate60 = new Rate(60, routeRepo.findById(60).get(), "$3900");
		// Rate rate61 = new Rate(61, routeRepo.findById(61).get(), "$4800");
		// Rate rate62 = new Rate(62, routeRepo.findById(62).get(), "$3500");
		// Rate rate63 = new Rate(63, routeRepo.findById(63).get(), "$6900");
		// Rate rate64 = new Rate(64, routeRepo.findById(64).get(), "$5100");
		// Rate rate65 = new Rate(65, routeRepo.findById(65).get(), "$2300");
		// Rate rate66 = new Rate(66, routeRepo.findById(66).get(), "$5400");
		// Rate rate67 = new Rate(67, routeRepo.findById(67).get(), "$4200");
		// Rate rate68 = new Rate(68, routeRepo.findById(68).get(), "$6200");
		// Rate rate69 = new Rate(69, routeRepo.findById(69).get(), "$7400");
		// Rate rate70 = new Rate(70, routeRepo.findById(70).get(), "$3200");
		// Rate rate71 = new Rate(71, routeRepo.findById(71).get(), "$1600");
		// Rate rate72 = new Rate(72, routeRepo.findById(72).get(), "$6800");
		// Rate rate73 = new Rate(73, routeRepo.findById(73).get(), "$2100");
		// Rate rate74 = new Rate(74, routeRepo.findById(74).get(), "$4300");
		// Rate rate75 = new Rate(75, routeRepo.findById(75).get(), "$5700");
		// Rate rate76 = new Rate(76, routeRepo.findById(76).get(), "$4700");
		// Rate rate77 = new Rate(77, routeRepo.findById(77).get(), "$6600");
		// Rate rate78 = new Rate(78, routeRepo.findById(78).get(), "$3600");
		// Rate rate79 = new Rate(79, routeRepo.findById(79).get(), "$5000");
		// Rate rate80 = new Rate(80, routeRepo.findById(80).get(), "$2900");
		// Rate rate81 = new Rate(81, routeRepo.findById(81).get(), "$6500");
		// Rate rate82 = new Rate(82, routeRepo.findById(82).get(), "$1800");
		// Rate rate83 = new Rate(83, routeRepo.findById(83).get(), "$3200");
		// Rate rate84 = new Rate(84, routeRepo.findById(84).get(), "$4500");
		// Rate rate85 = new Rate(85, routeRepo.findById(85).get(), "$3900");
		// Rate rate86 = new Rate(86, routeRepo.findById(86).get(), "$8600");
		// Rate rate87 = new Rate(87, routeRepo.findById(87).get(), "$6700");
		// Rate rate88 = new Rate(88, routeRepo.findById(88).get(), "$1500");
		// Rate rate89 = new Rate(89, routeRepo.findById(89).get(), "$5300");
		// Rate rate90 = new Rate(90, routeRepo.findById(90).get(), "$2800");
		// Rate rate91 = new Rate(91, routeRepo.findById(91).get(), "$4100");
		// Rate rate92 = new Rate(92, routeRepo.findById(92).get(), "$6200");
		// Rate rate93 = new Rate(93, routeRepo.findById(93).get(), "$2100");
		// Rate rate94 = new Rate(94, routeRepo.findById(94).get(), "$4400");
		// Rate rate95 = new Rate(95, routeRepo.findById(95).get(), "$5900");
		// Rate rate96 = new Rate(96, routeRepo.findById(96).get(), "$4800");
		// Rate rate97 = new Rate(97, routeRepo.findById(97).get(), "$2400");
		// Rate rate98 = new Rate(98, routeRepo.findById(98).get(), "$7200");
		// Rate rate99 = new Rate(99, routeRepo.findById(99).get(), "$1100");
		// Rate rate100 = new Rate(100, routeRepo.findById(100).get(), "$3700");
		// Rate rate101 = new Rate(101, routeRepo.findById(101).get(), "$4400");
		// Rate rate102 = new Rate(102, routeRepo.findById(102).get(), "$4700");
		// Rate rate103 = new Rate(103, routeRepo.findById(103).get(), "$2300");
		// Rate rate104 = new Rate(104, routeRepo.findById(104).get(), "$3500");
		// Rate rate105 = new Rate(105, routeRepo.findById(105).get(), "$1800");
		// Rate rate106 = new Rate(106, routeRepo.findById(106).get(), "$8500");
		// Rate rate107 = new Rate(107, routeRepo.findById(107).get(), "$4600");
		// Rate rate108 = new Rate(108, routeRepo.findById(108).get(), "$3100");
		// Rate rate109 = new Rate(109, routeRepo.findById(109).get(), "$4800");
		// Rate rate110 = new Rate(110, routeRepo.findById(110).get(), "$6600");
		// Rate rate111 = new Rate(111, routeRepo.findById(111).get(), "$3800");
		// Rate rate112 = new Rate(112, routeRepo.findById(112).get(), "$2500");
		// Rate rate113 = new Rate(113, routeRepo.findById(113).get(), "$6800");
		// Rate rate114 = new Rate(114, routeRepo.findById(114).get(), "$5500");
		// Rate rate115 = new Rate(115, routeRepo.findById(115).get(), "$1400");
		// Rate rate116 = new Rate(116, routeRepo.findById(116).get(), "$4100");
		// Rate rate117 = new Rate(117, routeRepo.findById(117).get(), "$5800");
		// Rate rate118 = new Rate(118, routeRepo.findById(118).get(), "$7200");
		// Rate rate119 = new Rate(119, routeRepo.findById(119).get(), "$2100");
		// Rate rate120 = new Rate(120, routeRepo.findById(120).get(), "$6700");
		// Rate rate121 = new Rate(121, routeRepo.findById(121).get(), "$1600");
		// Rate rate122 = new Rate(122, routeRepo.findById(122).get(), "$6900");
		// Rate rate123 = new Rate(123, routeRepo.findById(123).get(), "$2900");
		// Rate rate124 = new Rate(124, routeRepo.findById(124).get(), "$3200");
		// Rate rate125 = new Rate(125, routeRepo.findById(125).get(), "$3100");
		// Rate rate126 = new Rate(126, routeRepo.findById(126).get(), "$2600");
		// Rate rate127 = new Rate(127, routeRepo.findById(127).get(), "$7500");
		// Rate rate128 = new Rate(128, routeRepo.findById(128).get(), "$2000");
		// Rate rate129 = new Rate(129, routeRepo.findById(129).get(), "$3500");
		// Rate rate130 = new Rate(130, routeRepo.findById(130).get(), "$4900");
		// Rate rate131 = new Rate(131, routeRepo.findById(131).get(), "$6500");
		// Rate rate132 = new Rate(132, routeRepo.findById(132).get(), "$1400");
		// Rate rate133 = new Rate(133, routeRepo.findById(133).get(), "$2800");
		// Rate rate134 = new Rate(134, routeRepo.findById(134).get(), "$4200");
		// Rate rate135 = new Rate(135, routeRepo.findById(135).get(), "$3700");
		// Rate rate136 = new Rate(136, routeRepo.findById(136).get(), "$8200");
		// Rate rate137 = new Rate(137, routeRepo.findById(137).get(), "$6800");
		// Rate rate138 = new Rate(138, routeRepo.findById(138).get(), "$1500");
		// Rate rate139 = new Rate(139, routeRepo.findById(139).get(), "$5300");
		// Rate rate140 = new Rate(140, routeRepo.findById(140).get(), "$3900");

		// List<Rate> rates = List.of(rate, rate2, rate3, rate4, rate5, rate6, rate7, rate8, rate9, rate10,
		// 		rate11, rate12, rate13, rate14, rate15, rate16, rate17, rate18, rate19, rate20, rate21,
		// 		rate22, rate23, rate24, rate25, rate26, rate27, rate28, rate29, rate30, rate31, rate32,
		// 		rate33, rate34, rate35, rate36, rate37, rate38, rate39, rate40, rate41, rate42, rate43,
		// 		rate44, rate45, rate46, rate47, rate48, rate49, rate50, rate51, rate52, rate53, rate54,
		// 		rate55, rate56, rate57, rate58, rate59, rate60, rate61, rate62, rate63, rate64, rate65,
		// 		rate66, rate67, rate68, rate69, rate70, rate71, rate72, rate73, rate74, rate75, rate76,
		// 		rate77, rate78, rate79, rate80, rate81, rate82, rate83, rate84, rate85, rate86, rate87,
		// 		rate88, rate89, rate90, rate91, rate92, rate93, rate94, rate95, rate96, rate97, rate98,
		// 		rate99, rate100, rate101, rate102, rate103, rate104, rate105, rate106, rate107, rate108,
		// 		rate109, rate110, rate111, rate112, rate113, rate114, rate115, rate116, rate117, rate118,
		// 		rate119, rate120, rate121, rate122, rate123, rate124, rate125, rate126, rate127, rate128,
		// 		rate129, rate130, rate131, rate132, rate133, rate134, rate135, rate136, rate137, rate138,
		// 		rate139, rate140);

		// rateRepo.saveAll(rates);



		// rateRepo.findAll().forEach(System.out::println);

	}

}
