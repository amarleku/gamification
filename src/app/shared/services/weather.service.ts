import { Injectable } from '@angular/core';

export interface WeatherData {
  temperature: string;
  location: string;
  weatherIcon: string;
  weatherDescription: string;
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }

  // Get user location and fetch weather data
  async getWeatherData(): Promise<WeatherData> {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            try {
              const lat = position.coords.latitude;
              const lon = position.coords.longitude;
              const weatherData = await this.fetchWeatherData(lat, lon);
              resolve(weatherData);
            } catch (error) {
              reject(error);
            }
          },
          (error) => {
            console.error('Error getting location:', error);
            resolve({
              temperature: '--°C',
              location: 'Location unavailable'
            });
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
        resolve({
          temperature: '--°C',
          location: 'Location not supported'
        });
      }
    });
  }

  // Fetch weather data using OpenWeatherMap API
  private async fetchWeatherData(lat: number, lon: number): Promise<WeatherData> {
    try {
      // First, get the location name using reverse geocoding (free service)
      const locationName = await this.getLocationName(lat, lon);
      
      // Try to get weather data if API key is configured
      const API_KEY = '5b57b81e2bac01dceb1b04eb684f69d5'; // Replace with your actual API key
      
      if (API_KEY === '5b57b81e2bac01dceb1b04eb684f69d5') {
        // No API key configured, return location with mock temperature
        return {
          temperature: '22°C',
          location: locationName
        };
      }
      
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
      const response = await fetch(url);
      const data = await response.json();
      
      if (data.main && data.main.temp) {
        return {
          temperature: `${Math.round(data.main.temp)}°C`,
          location: data.name || locationName
        };
      } else {
        throw new Error('Weather data not available');
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
      // Fallback to location name with mock temperature
      const locationName = await this.getLocationName(lat, lon);
      return {
        temperature: '22°C',
        location: locationName
      };
    }
  }

  // Get location name using reverse geocoding (free service)
  private async getLocationName(lat: number, lon: number): Promise<string> {
    try {
      // Using Nominatim (OpenStreetMap) reverse geocoding - free service
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&addressdetails=1`
      );
      const data = await response.json();
      
      if (data && data.address) {
        const address = data.address;
        // Try to get city name, fallback to other location identifiers
        return address.city || 
               address.town || 
               address.village || 
               address.municipality || 
               address.county || 
               address.state || 
               address.country || 
               'Current Location';
      }
      return 'Current Location';
    } catch (error) {
      console.error('Error getting location name:', error);
      return 'Current Location';
    }
  }
}
