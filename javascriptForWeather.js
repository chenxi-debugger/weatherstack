document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.section-6-tabs .tab');
    const codeBlock = document.getElementById('weather-data');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const tabId = tab.getAttribute('href').substring(1);
            let content = '';

            if (tabId === 'current') {
                content = `{
"request": {
"type": "City",
"query": "San Francisco, United States of America",
"language": "en",
"unit": "m"
},
"location": {
"name": "San Francisco",
"country": "United States of America",
"region": "California",
"lat": "37.776",
"lon": "-122.419",
"timezone_id": "America/Los_Angeles",
"localtime": "2025-03-04 02:35",
"localtime_epoch": 1678490800,
"utc_offset": "-8.0"
},
"current": {
"observation_time": "02:35 PM",
"temperature": 15,
"weather_code": 123,
"weather_icons": [
    "https://assets.weatherstack.com/images/wsymbol.png"
],
"weather_descriptions": ["Overcast"],
"wind_speed": 17,
"wind_degree": 260,
"wind_dir": "W",
"pressure": 1015,
"precip": 0,
"humidity": 80,
"cloudcover": 100,
"feelslike": 15,
"uv_index": 0,
"visibility": 16
}
}`;
            } else if (tabId === 'history') {
                content = `{
"request": {
"type": "City",
"query": "New York, United States of America",
"language": "en",
"unit": "m"
},
"location": {
"name": "New York",
"country": "United States of America",
"region": "New York",
"lat": "40.714",
"lon": "-74.006",
"timezone_id": "America/New_York",
"localtime": "2019-09-08 09:36",
"localtime_epoch": 1567935360,
"utc_offset": "-4.0"
},
"current": {
"observation_time": "01:36 PM",
"temparature": 18,
"weather_code": 113,
"weather_icons": [
    "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
],
"weather_descriptions": [
    "Sunny"
],
"wind_speed": 7,
"wind_degree": 270,
"wind_dir": "W",
"pressure": 1018,
"precip": 0,
"humidity": 70,
"cloudcover": 0,
"feelslike": 18,
"uv_index": 5,
"visibility": 16
},
"historical": {
"2013-07-01": {
    "date": "2013-07-01",
    "date_epoch": 1372636800,
    "astro": {
        "sunrise": "05:29 AM",
        "sunset": "08:31 PM",
        "moonrise": "12:59 AM",
        "moonset": "02:42 PM",
        "moon_phase": "Last Quarter",
        "moon_illumination": 40
    },
    "mintemp": 21,
    "maxtemp": 25,
    "avgtemp": 22,
    "totalsnow": 0,
    "sunhour": 12.5,
    "uv_index": 5
}
}
}`;
            } else if (tabId === 'marine-weather') {
                content = `{
"request": {
"type": "LatLon",
"query": "Lat 45.00 and Lon -2.00",
"language": "en",
"unit": "m"
},
"forecast": [
{
    "date": "2025-02-27",
    "date_epoch": 1740614400,
    "astro": {
        "sunrise": "07:48 AM",
        "sunset": "06:51 PM",
        "moonrise": "07:44 AM",
        "moonset": "06:18 PM",
        "moon_phase": "New Moon",
        "moon_illumination": 0
    },
    "mintemp": 10,
    "maxtemp": 12,
    "avgtemp": 11,
    "tides": [
        {
            "tideTime": "3:57 AM",
            "tideHeight_mt": "4.26",
            "tideDateTime": "2025-02-27 03:57",
            "tide_type": "HIGH"
        },
        {
            "tideTime": "10:13 AM",
            "tideHeight_mt": "0.52",
            "tideDateTime": "2025-02-27 10:13",
            "tide_type": "LOW"
        },
        {
            "tideTime": "4:21 PM",
            "tideHeight_mt": "4.16",
            "tideDateTime": "2025-02-27 16:21",
            "tide_type": "HIGH"
        },
        {
            "tideTime": "10:24 PM",
            "tideHeight_mt": "0.56",
            "tideDateTime": "2025-02-27 22:24",
            "tide_type": "LOW"
        }
    ],
    "uv_index": 3,
    "hourly": [
        {
            "time": "0",
            "temperature": 12,
            "wind_speed": 28,
            "wind_degree": 266,
            "wind_dir": "W",
            "weather_code": 353,
            "weather_icons": [
                "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0025_light_rain_showers_night.png"
            ],
            "weather_descriptions": [
                "Light rain shower"
            ],
            "precip": 0.4,
            "humidity": 86,
            "visibility": 10,
            "pressure": 1022,
            "cloudcover": 100,
            "heatindex": 12,
            "dewpoint": 9,
            "windchill": 9,
            "windgust": 39,
            "feelslike": 9,
            "sig_height_m": "0.7",
            "swell_height": "2.4",
            "swell_dir": 290,
            "swell_dir_16_point": "WNW",
            "swell_period_secs": 11,
            "water_temp": 10,
            "uv_index": 1
        }
        // Additional hourly data truncated for brevity
    ]
}
// Additional forecast days truncated for brevity
]
}`;
            } else if (tabId === 'marine-history') {
                content = `{
"request": {
"type": "LatLon",
"query": "Lat 42.00 and Lon 21.43",
"language": "en",
"unit": "m"
},
"historical": {
"2015-01-20": {
    "date": "2015-01-20",
    "date_epoch": 1421712000,
    "astro": {
        "sunrise": "06:57 AM",
        "sunset": "04:33 PM",
        "moonrise": "06:24 AM",
        "moonset": "04:50 PM",
        "moon_phase": "New Moon",
        "moon_illumination": 0
    },
    "mintemp": 12,
    "maxtemp": 15,
    "avgtemp": 14,
    "tides": [
        {
            "tideTime": "3:33 AM",
            "tideHeight_mt": "0.46",
            "tideDateTime": "2015-01-20 03:33",
            "tide_type": "HIGH"
        },
        {
            "tideTime": "10:04 AM",
            "tideHeight_mt": "0.03",
            "tideDateTime": "2015-01-20 10:04",
            "tide_type": "LOW"
        }
        // Additional tides truncated for brevity
    ],
    "uv_index": 3,
    "hourly": [
        {
            "time": "0",
            "temperature": 13,
            "wind_speed": 16,
            "wind_degree": 92,
            "wind_dir": "E",
            "weather_code": 353,
            "weather_icons": [
                "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0025_light_rain_showers_night.png"
            ],
            "weather_descriptions": [
                "Light rain shower"
            ],
            "precip": 0,
            "humidity": 83,
            "visibility": 10,
            "pressure": 1014,
            "cloudcover": 100,
            "heatindex": 13,
            "dewpoint": 15,
            "windchill": 13,
            "windgust": 36,
            "feelslike": 13,
            "sig_height_m": 1.3,
            "swell_height": 1.1,
            "swell_dir": 91,
            "swell_dir_16_point": "E",
            "swell_period_secs": 7,
            "water_temp": 11,
            "uv_index": 1
        }
        // Additional hourly data truncated for brevity
    ]
}
// Additional historical days truncated for brevity
}
}`;
            } else if (tabId === 'forecast') {
                content = `{
"request": {
"type": "City",
"query": "Chicago, United States of America",
"language": "en",
"unit": "m"
},
"location": {
"name": "Chicago",
"country": "United States of America",
"region": "Illinois",
"lat": "41.850",
"lon": "-87.650",
"timezone_id": "America/Chicago",
"localtime": "2019-09-08 08:39",
"localtime_epoch": 1567931940,
"utc_offset": "-5.0"
},
"current": {
"observation_time": "01:39 PM",
"temparature": 19,
"weather_code": 122,
"weather_icons": [
    "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
],
"weather_descriptions": [
    "Overcast"
],
"air_quality": {
    "co": "516.15",
    "no2": "40.145",
    "o3": "49",
    "so2": "8.325",
    "pm2_5": "7.215",
    "pm10": "7.215",
    "us-epa-index": "1",
    "gb-defra-index": "1"
},
"wind_speed": 17,
"wind_degree": 100,
"wind_dir": "E",
"pressure": 1019,
"precip": 0,
"humidity": 73,
"cloudcover": 100,
"feelslike": 19,
"uv_index": 4,
"visibility": 16
},
"forecast": {
"2019-09-08": {
    "date": "2019-09-08",
    "date_epoch": 1567900800,
    "astro": {
        "sunrise": "06:23 AM",
        "sunset": "07:13 PM",
        "moonrise": "04:25 PM",
        "moonset": "12:58 AM",
        "moon_phase": "First Quarter",
        "moon_illumination": 62
    },
    "mintemp": 10,
    "maxtemp": 18,
    "avgtemp": 16,
    "totalsnow": 0,
    "sunhour": 6.5,
    "uv_index": 4,
    "air_quality": {
        "co": "456.284",
        "no2": "41.5436",
        "o3": "58.24",
        "so2": "8.406400000000001",
        "pm2_5": "9.7532",
        "pm10": "9.8272",
        "us-epa-index": "1",
        "gb-defra-index": "1"
    },
    "hourly": [
        {
            "time": "0",
            "temperature": 8,
            "wind_speed": 17,
            "wind_degree": 297,
            "wind_dir": "WNW",
            "weather_code": 122,
            "weather_icons": [
                "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
            ],
            "weather_descriptions": [
                "Overcast "
            ],
            "precip": 0,
            "humidity": 74,
            "visibility": 10,
            "pressure": 1003,
            "cloudcover": 94,
            "heatindex": 8,
            "dewpoint": 3,
            "windchill": 5,
            "windgust": 25,
            "feelslike": 5,
            "chanceofrain": 0,
            "chanceofremdry": 87,
            "chanceofwindy": 0,
            "chanceofovercast": 87,
            "chanceofsunshine": 10,
            "chanceoffrost": 0,
            "chanceofhightemp": 0,
            "chanceoffog": 0,
            "chanceofsnow": 0,
            "chanceofthunder": 0,
            "uv_index": 0,
            "air_quality": {
                "co": "432.9",
                "no2": "26.085",
                "o3": "60",
                "so2": "6.66",
                "pm2_5": "6.105",
                "pm10": "6.105",
                "us-epa-index": "1",
                "gb-defra-index": "1"
            }
        }
        // Additional hourly data truncated for brevity
    ]
}
}
}`;
            }

            codeBlock.textContent = content;
        });
    });
});