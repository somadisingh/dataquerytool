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

		routeRepo.findByOrigin("Shanghai").forEach(route -> {
			System.out.println(route);
		});

	}

}
