package com.example.spring.boot.cloud.gateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@EnableEurekaClient
@SpringBootApplication
public class CloudSecureGatewayApp {

	public static void main(String[] args) {
		SpringApplication.run(CloudSecureGatewayApp.class, args);
	}

}
