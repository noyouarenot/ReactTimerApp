var React = require('react');

// var WeatherMessage = React.createClass({
//   render:function(){
//     var location = this.props.location;
//     var temp = this.props.temp;
//
//     return(
//       <p>The temperature in {location} is {temp} F.</p>
//     );
//   }
// });

var WeatherMessage = ({temp, location}) =>{
  
  return(
    <p>The temperature in {location} is {temp} F.</p>
  );
};

module.exports = WeatherMessage;
