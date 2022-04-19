package com.example.spring.boot.cloud.gateway.config;

import com.example.spring.boot.cloud.gateway.filter.JwtAuthenticationFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class GatewayConfig {

	@Autowired
	private JwtAuthenticationFilter filter;

	@Bean
	public RouteLocator routes(RouteLocatorBuilder builder) {
		return builder.routes()
				.route("auth", r -> r.path("/auth/**").filters(f -> f.filter(filter)).uri("lb://auth"))
				.route("payment-service", r -> r.path("/payment/**").filters(f -> f.filter(filter)).uri("lb://PAYMENT-SERVICE"))
				.route("order-service", r -> r.path("/order/**").filters(f -> f.filter(filter)).uri("lb://ORDER-SERVICE")).build();

	}

}
