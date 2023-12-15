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
		// RouteRepo routeRepo = context.getBean(RouteRepo.class);
		// RateRepo rateRepo = context.getBean(RateRepo.class);
		customqueryRepo customqueryRepo = context.getBean(customqueryRepo.class);

		customqueryRepo.findByCustomCondition("U").forEach(carrier1 -> {
			System.out.println(carrier1);
		});

		carrierRepo.findByCarriername("DHL").forEach(carrier -> {
			System.out.println(carrier);
		});

	}

}
