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
          console.log(body);
      body.data.forEach(function(doctor) {
        $("#resultsArea").append(`<li>${doctor.profile.first_name} ${doctor.profile.last_name} <br>
        ${doctor.practices[0].visit_address.street}, ${doctor.practices[0].visit_address.city}, ${doctor.practices[0].visit_address.state} ${doctor.practices[0].visit_address.zip} <br>
        Phone number: ${doctor.practices[0].phones[0].number} <br>
        Accept new patient: ${doctor.practices[0].accepts_new_patients} </li> <br>`)
      });

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
