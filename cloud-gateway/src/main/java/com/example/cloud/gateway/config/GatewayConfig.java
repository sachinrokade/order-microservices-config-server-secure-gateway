package com.example.cloud.gateway.config;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import reactor.netty.http.client.HttpClient;

@Configuration
public class GatewayConfig {

    @Bean
    public RouteLocator myRoutes(RouteLocatorBuilder builder) {
        return builder.routes()
                .route(p -> p
                         .path("/order/**")
                        .filters(f ->f.circuitBreaker(config -> config.setName("order-service").
                                                                setFallbackUri("forward:/orderFallBack").setRouteId("order-service"))
                                    )

                        .uri("lb://ORDER-SERVICE"))
                .route(p -> p
                        .path("/payment/**")
                        .filters(f ->f.circuitBreaker(config -> config.setName("payment-service").
                                setFallbackUri("forward:/paymentFallback").setRouteId("payment-service"))
                        )

                        .uri("lb://PAYMENT-SERVICE"))
                .build();
    }
}
