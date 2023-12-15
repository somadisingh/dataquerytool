package com.example.reactql;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import com.example.reactql.dao.CarrierRepo;
import com.example.reactql.dao.RateRepo;
import com.example.reactql.dao.RouteRepo;
import com.example.reactql.entities.Rate;
import com.example.reactql.entities.Carrier;
import com.example.reactql.entities.Route;
import java.util.List;

@SpringBootApplication
public class ReactqlApplication {

	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(ReactqlApplication.class, args);
		CarrierRepo carrierRepo = context.getBean(CarrierRepo.class);
		RouteRepo routeRepo = context.getBean(RouteRepo.class);
		RateRepo rateRepo = context.getBean(RateRepo.class);

		// Carrier carrier = new Carrier();
		// carrier.setCarrierName("United Parcel Service");
		// Carrier res = carrierRepo.save(carrier);
		// System.out.println(res);

		// Carrier carrier2 = new Carrier();
		// carrier2.setCarrierName("DHL");
		// Carrier res2 = carrierRepo.save(carrier2);
		// System.out.println(res2);

		// Carrier carrier3 = new Carrier();
		// carrier3.setCarrierName("FedEx");
		// Carrier res3 = carrierRepo.save(carrier3);
		// System.out.println(res3);

		// Carrier carrier4 = new Carrier();
		// carrier4.setCarrierName("United States Postal Service");
		// Carrier res4 = carrierRepo.save(carrier4);
		// System.out.println(res4);

		carrierRepo.findByCarriername("DHL").forEach(carrier1 -> {
			System.out.println(carrier1);
		});

		// Route route = new Route();
		// route.setOrigin("San Francisco");
		// route.setDestination("Dallas");
		// //route.setRouteid(1);
		// route.setCarrier(carrierRepo.findById(3).get());
		// Route res21 = routeRepo.save(route);
		// System.err.println(res21);

		// Route route2 = new Route();
		// route2.setOrigin("Bora Bora");
		// route2.setDestination("Hawaii");
		// //route2.setRouteid(2);
		// route2.setCarrier(carrierRepo.findById(4).get());
		// Route res211 = routeRepo.save(route2);
		// System.err.println(res211);
		
		routeRepo.findByOrigin("San Francisco").forEach(route1 -> {
			System.out.println(route1);
		});

		// Rate rate = new Rate();
		// rate.setRate("₹100");
		// rate.setRoute(routeRepo.findById(1).get());
		// Rate res55 = rateRepo.save(rate);
		// System.out.println(res55);

		// Rate rate2 = new Rate();
		// rate2.setRate("₹200");
		// rate2.setRoute(routeRepo.findById(2).get());
		// Rate res25 = rateRepo.save(rate2);
		// System.out.println(res25);


		rateRepo.findByRate("₹100").forEach(rate1 -> {
			System.out.println(rate1);
		});

	}

}
