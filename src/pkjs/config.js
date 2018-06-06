module.exports = [
  {
    "type": "heading",
    "defaultValue": "Multifunctional 7 Segment Configuration"
  },
  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "defaultValue": "Weather"
      },
      {
        "type": "input",
        "messageKey": "owm_api_key",
        "label": "OWM API Key",
        "description": 'Required to get weather updates, you can get a key <a href="https://www.openweathermap.org">here</a>'
      },
      {
        "type": "input",
        "messageKey": "owm_default_location",
        "label": "Default Location",
        "description": 'Default location to use for weather data, enter your query <a href="https://www.openweathermap.org">here</a> to make sure it works'
      },
      {
        "type": "input",
        "messageKey": "owm_lang",
        "label": "OWM Language String",
        "description": '"en" (default), "de", "fr", etc'
      },
      {
        "type": "select",
        "messageKey": "show_update_time",
        "defaultValue": "phone",
        "label": "Show Update Time",
        "options": [
          { 
            "label": "Time since last update of phone",
            "value": "phone"
          },
          { 
            "label": "Time since last update of data on the server",
            "value": "server"
          }
        ]
      },
      {
        "type": "select",
        "messageKey": "moon_phase",
        "defaultValue": "show_between",
        "label": "Moon Phase",
        "options": [
          { 
            "label": "Show moon between sun set and sun rise",
            "value": "show_between"
          },
          { 
            "label": "Always show moon phase",
            "value": "always_show_moon"
          },
          { 
            "label": "Always show weather icon, no moon phase",
            "value": "always_show_weather"
          },
        ]
      },
      {
        "type": "slider",
        "messageKey": "weather_interval",
        "defaultValue": 60,
        "description": "Number of minutes between a weather update (lower values will consume more power)",
        "label": "Weather Update Interval",
        "min": 10,
        "max": 240,
        "step": 10
      },
    ]
  },
  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "defaultValue": "Additional Weather Info"
      },
      {
        "type": "text",
        "defaultValue": "<b>Placeholder</b> image here"
      },
      {
        "type": "select",
        "messageKey": "info_1",
        "defaultValue": "temp_max_min",
        "label": "Info 1",
        "options": [
          { 
            "label": "Empty",
            "value": "empty"
          },
          { 
            "label": "Conditions",
            "value": "conditions"
          },
          { 
            "label": "Wind Speed",
            "value": "wind_speed"
          },
          { 
            "label": "Humidity",
            "value": "humidity"
          },
          { 
            "label": "Pressure",
            "value": "pressure"
          },
          { 
            "label": "Temp. Max/Min",
            "value": "temp_max_min"
          }
        ]
      },
      {
        "type": "select",
        "messageKey": "info_2",
        "defaultValue": "wind_speed",
        "label": "Info 2",
        "options": [
          { 
            "label": "Empty",
            "value": "empty"
          },
          { 
            "label": "Conditions",
            "value": "conditions"
          },
          { 
            "label": "Wind Speed",
            "value": "wind_speed"
          },
          { 
            "label": "Humidity",
            "value": "humidity"
          },
          { 
            "label": "Pressure",
            "value": "pressure"
          },
          { 
            "label": "Temp. Max/Min",
            "value": "temp_max_min"
          }
        ]
      },
      {
        "type": "select",
        "messageKey": "info_3",
        "defaultValue": "humidity",
        "label": "Info 3",
        "options": [
          { 
            "label": "Empty",
            "value": "empty"
          },
          { 
            "label": "Conditions",
            "value": "conditions"
          },
          { 
            "label": "Wind Speed",
            "value": "wind_speed"
          },
          { 
            "label": "Humidity",
            "value": "humidity"
          },
          { 
            "label": "Pressure",
            "value": "pressure"
          },
          { 
            "label": "Temp. Max/Min",
            "value": "temp_max_min"
          }
        ]
      },
      {
        "type": "select",
        "messageKey": "info_4",
        "defaultValue": "pressure",
        "label": "Info 4",
        "options": [
          { 
            "label": "Empty",
            "value": "empty"
          },
          { 
            "label": "Conditions",
            "value": "conditions"
          },
          { 
            "label": "Wind Speed",
            "value": "wind_speed"
          },
          { 
            "label": "Humidity",
            "value": "humidity"
          },
          { 
            "label": "Pressure",
            "value": "pressure"
          },
          { 
            "label": "Temp. Max/Min",
            "value": "temp_max_min"
          }
        ]
      }
    ]
  },
  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "defaultValue": "Weather Units"
      },
      {
        "type": "select",
        "messageKey": "temp_unit",
        "defaultValue": "celsius",
        "label": "Temperature Units",
        "options": [
          { 
            "label": "Celsius",
            "value": "celsius"
          },
          { 
            "label": "Fahrenheit",
            "value": "fahrenheit"
          }
        ]
      },
      {
        "type": "select",
        "messageKey": "speed_unit",
        "defaultValue": "kmh",
        "label": "Speed Units",
        "options": [
          { 
            "label": "km/h",
            "value": "kmh"
          },
          { 
            "label": "mph",
            "value": "mph"
          },
          {
            "label": "m/s",
            "value": "ms"
          }
        ]
      },
      {
        "type": "select",
        "messageKey": "pressure_unit",
        "defaultValue": "hpa",
        "label": "Pressure Units",
        "options": [
          { 
            "label": "hPa (mBar)",
            "value": "hpa"
          },
          { 
            "label": "mmHg",
            "value": "mmhg"
          },
          {
            "label": "inHg",
            "value": "inhg"
          }
        ]
      },
    ]
  },
  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "defaultValue": "Color Scheme"
      },
      {
        "type": "text",
        "defaultValue": "Under construction"
      }
    ]
  },
  {
    "type": "submit",
    "defaultValue": "Save Settings"
  }
];
