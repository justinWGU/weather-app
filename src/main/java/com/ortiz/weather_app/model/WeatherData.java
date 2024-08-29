package com.ortiz.weather_app.model;


public class WeatherData {

    private double temperature = 0.0;
    private int humidity = 0;
    private String description = "";

    public WeatherData() {
    }

    public WeatherData(double temperature, int humidity, String description) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.description = description;
    }

    public double getTemperature() {
        return temperature;
    }

    public void setTemperature(double temperature) {
        this.temperature = temperature;
    }

    public int getHumidity() {
        return humidity;
    }

    public void setHumidity(int humidity) {
        this.humidity = humidity;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
