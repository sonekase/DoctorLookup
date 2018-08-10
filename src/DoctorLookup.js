export class DoctorLookup {
  lookupDoctor(name, symptom) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      console.log(name);
      let symptom = "sore throat";
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${symptom}&location=wa-seattle&skip=0&limit=10&user_key=bfc8bedd9abed33fcee231ec56644a37`;
      request.onload = function() {
        if (this.status === 200) {
          console.log(request.response);
          resolve(request.response);
        } else {
          console.log("bad");
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }

  // getSearchSympton(sympton) {
  //   return new Promise(function(resolve, reject) {
  //     let request = new XMLHttpRequest();
  //     let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=headache&location=wa-seattle&skip=0&limit=50&user_key=bfc8bedd9abed33fcee231ec56644a37`;
  //     request.onload = function() {
  //       if (this.status === 200) {
  //         resolve(request.response);
  //       } else {
  //         reject(Error(request.statusText));
  //       }
  //     }
  //     request.open("GET", url, true);
  //     request.send();
  //   });
  // };
}
