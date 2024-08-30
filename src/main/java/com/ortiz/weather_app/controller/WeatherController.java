package com.ortiz.weather_app.controller;

import com.ortiz.weather_app.service.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

// repsonsible for repsonding to front-end reqs and returing weather data
@CrossOrigin("http://localhost:4200")
@RestController  // Annotation returns domain obj instead of view
public class WeatherController {

    @Autowired // inject Wservice to return and send weather data to front end
    private WeatherService weatherService;

    @GetMapping("/weather")
    public String getWeather(@RequestParam String city) { // maps city param from front end to the city param in this func
        return weatherService.getWeather(city);
    }

    @GetMapping("/hello") // maps hello endpoint to hello method whch handles get reqs
    public String hello() {
        return "Hello from Spring Boot!";
    }
}
