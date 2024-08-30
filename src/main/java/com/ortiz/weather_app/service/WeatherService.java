package com.ortiz.weather_app.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

// Class responsible for retrieving data from public api and mapping to weather model class
@Service
public class WeatherService {

    // city variable from input will be appended to url
    private String apiUrl = "http://api.weatherapi.com/v1/current.json?key=e77503e6c87a4abf9eb203542242908&q={city}";

    public String getWeather(String city) {
        RestTemplate restTemplate = new RestTemplate(); // class to make the Http call to weatherapi
        return restTemplate.getForObject(apiUrl, String.class, city); // returns weather data in JSON string
    }
}
