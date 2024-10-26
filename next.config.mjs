const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/preschool-in-:state(\\w+)',
        destination: '/preschool-in/state/:state',
      },
      {
        source: '/preschool-in-:city(\\w+)-in-:state(\\w+)',
        destination: '/preschool-in/city-state/:city/:state',
      },
      {
        source: '/preschool-in-:location(\\w+)-in-:city(\\w+)-in-:state(\\w+)',
        destination: '/preschool-in/location-city-state/:location/:city/:state',
      },
    ];
  },
};
  
export default nextConfig;
  