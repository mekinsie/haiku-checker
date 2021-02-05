import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Haiku from "./haiku.js";

$(document).ready(function() {
  $("#haikuForm").submit(function(event) {
    event.preventDefault();
    const input1 = $("#line1Input").val();
    const input2 = $("#line2Input").val();
    const input3 = $("#line3Input").val();
    const haiku = new Haiku(input1, input2, input3);
    const response = haiku.haikuChecker();
    if (response === true) {
      $("#isHaiku").show();
      $("#notHaiku").hide();
    } else { 
      $("#notHaiku").show();
      $("#isHaiku").hide();
    }
  });
});