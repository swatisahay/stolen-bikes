import { Poster } from './poster';
import $ from 'jquery';
import './styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



$(document).ready(function() {
  $('#poster-make').click(function() {
    let city= $('#location').val();
    function showResults(response){
      for (let i = 0; i < response.bikes.length; i++) {
        // $('.showBike').append("<li>" + bikes[i].title + "<br>" + `<img src="${bike.bikes[i].thumb}"/>`+ "</li>" );
        // foundCounter ++;
        $('.showBikes').prepend("<li>" + response.bikes[i].title + "<br>" + `<img src="${response.bikes[i].thumb}"/>`+ "</li>");
      }

      // $('.showImage').text(`city:${response.results[0].location.city}`);
      // $('.showWeather').text(`The weather in ${city} is ${response.weather[0].description}`);
    }
    function error(){
      $('#errors').text("There was an error processing your request. Please try again.");
    }
    $('#location').val("");
    Poster.getData(city, showResults, error);
  });
});
