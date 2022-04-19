package com.example.cloud.gateway;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
public class FallbackController {

    @RequestMapping("/orderFallBack")
    public Mono<String> orderServiceFallBack() {

        return Mono.just("......Order Service is not up..");
    }
    @RequestMapping("/paymentFallback")
    public Mono<String> paymentServiceFallBack() {
       // return Flux.just("......Payment Service is not up...");
        return Mono.just("......Payment Service is not up...");
    }
}
