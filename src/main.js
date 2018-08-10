import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import $ from "jquery";
import { DoctorLookup } from "./DoctorLookup.js";

$(document).ready(function(){
  $("#doctorForm").submit(function(event) {
    event.preventDefault();
    let doctorName = $("#doctorSearch").val();
    let foundDoctor = new DoctorLookup();
    let promise = foundDoctor.getDoctorByName(doctorName);
    promise.then(function(response) {
        let body = JSON.parse(response);
        body.data.forEach(function(data){
          let doctor = data.profile.first_name + " " + data.profile.last_name;
          console.log(doctor);
          $("#resultsArea").append("<li>" + doctor + "</li>");
        })

        }, function(error) {
        $('.showErrors').text(`There was an error processing your request: ${error.message}`);
      });

    // let searchSympton = $("#symptonSearch").val();
    // let promise = DoctorLookup.getSearchSympton(searchSympton);
    // promise.then(function(response) {
    //     let body = JSON.parse(response);
    //     $("#resultsArea").text('Your sympton result is ${query}');
    //     }, function(error) {
    //     $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    //   });
   });
  });
