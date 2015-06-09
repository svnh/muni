# SF Transportation
> JSON server for 511 API

### Table of Contents
1. [API]
  1. [Endpoints]
  1. [Parameters]

### API
**All API information taken from the [511 Reference]**
##### Endpoints
Endpoint | Query Parameters | Description
--- | --- | ---
`GET /getAgencies` | `token` | Retrieves a list of agencies
`GET /getRoutesForAgencies` | `token` `agencyNames` |  Returns the list of routes for a specific agency
`GET /getRoutesForAgency` | `token` `agencyName` |  Returns the list of routes for a specific agency
`GET /getStopsForRoute` | `token` `routeIDF` | Returns list of stops for a particular route
`GET /getStopsForRoutes` | `token` `routeIDF` | Returns list of stops for multiple routes
`GET /getNextDeparturesByStopName` | `token` `agencyName` `stopName` | Returns list of Departure Times for a given stop
`GET /getNextDeparturesByStopCode` | `token` `stopcode` | Retrieve a list of Departure times for a particular stop

##### Parameters
Query Parameter | Description
--- | ---
`token` | A valid security token used for making service calls
`routeIDF` | A combination of Agency Name, Route Code and Route Direction Code separated by a ‘~’
`agencyName` |  Agency name provided by the `getAgencies` service
`agencyNames` |  Valid list of agency names separated by ‘|’, agency names can be obtained
from the GetAgencies service
`stopName` | Stop Name provided by the `getStopsForRoutes` or `getStopsForRoute` service
`stopcode` | Stop Code of a particular stop, obtained through the `getStopsForRoutes` or `getStopsForRoute` services

Example: `http://localhost:3001/getNextDeparturesByStopCode?agencyName=SF-MUNI&stopCode=13735`

<!-- Links -->
[API]: #api
[511 Reference]: http://assets.511.org/pdf/RTT%20API%20V2.0%20Reference.pdf
[Endpoints]: #endpoints
[Endpoints]: #endpoints
[Parameters]: #parameters
