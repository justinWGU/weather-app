package com.ortiz.weather_app.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

// repsonsible for repsonding to front-end reqs and returing weather data
@CrossOrigin("http://localhost:4200")
@RestController  // Annotation returns domain obj instead of view
public class WeatherController {

    @GetMapping("/hello") // maps hello endpoint to hello method whch handles get reqs
    public String hello() {
        return "Hello from Spring Boot!";
    }
}
