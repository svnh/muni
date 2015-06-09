module.exports = {
  getAgencies: {
    path: '/Transit2.0/GetAgencies.aspx'
  },
  getRoutesForAgencies: {
    path: '/Transit2.0/GetRoutesForAgencies.aspx',
    params: 'agencyNames'
  },
  getRoutesForAgency: {
    path: '/Transit2.0/GetRoutesForAgency.aspx',
    params: 'agencyName'
  },
  getStopsForRoute: {
    path: '/Transit2.0/GetStopsForRoute.aspx',
    params: 'routeIDF'
  },
  getStopsForRoutes: {
    path: '/Transit2.0/GetStopsForRoutes.aspx',
    params: 'routeIDF'
  },
  getNextDeparturesByStopName: {
    path: '/Transit2.0/GetNextDeparturesByStopName.aspx',
    params: ['agencyName', 'stopName']
  },
  getNextDeparturesByStopCode: {
    path: '/Transit2.0/GetNextDeparturesByStopCode.aspx',
    params: 'stopcode'
  }
};
