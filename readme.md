# Api Weather

## Description

This is a simple API that returns the weather of a city. It uses the OpenWeatherMap API to get the weather data.

## Usage

To use this API, you need to send a GET request to the following URL:

```
http://localhost:8080/api/weather?city=YOUR_CITY
```

The response will be a JSON object with the following structure:

```
{
    "city": "YOUR_CITY",
    "temperature": "TEMPERATURE",
    "description": "DESCRIPTION"
}
```

## Example

```
http://localhost:8080/api/weather?city=London
```

Response:

```
{
    "city": "London",
    "temperature": "10.0",
    "description": "clear sky"
}
```

## Author

- **Coupama Brian** - _Initial work_ - [bc_548]()

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

```

```