# Doctor Lookup

#### A doctor locator application.

#### By _**Anousone Kaseumsouk, 08.10.2018**_

## Description

Doctor Lookup is an application that allows a user to enter a medical issue into a form, submit it, and receives a list of doctors in Seattle who can treat their medical issue.

## Technologies Used

* _Javascript ES6_
* _Jquery_
* _Node.js_
* _Npm_
* _Jasmine_
* _Karma_
* _Bootstrap_
* _CSS_
* _Webpacks_
* _APIs_

## Setup/Installation Requirements

- Install DoctorLookup by cloning this repository.
- Install all the webpacks in package.json.
- Navigate to BetterDoctor to register for an API key.
- Create an .env file, add your new API key.
- Save .env file
- Run the command npm run build
- Run command npm run start

## Support and contact details

For any questions or support details, please email: anousonekaseumsouk@icloud.com

### Spec

| User Behavior | Input | Output |
|----|----|----|  
| A user should be able to enter a medical issue to receive a list of doctors | "flu" | List: Mindy Hu, etc... |
| A user should be able to to enter a name to receive a list of doctors  | "Mindy Hu" | list: Mindy Hu, etc...  |
| If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients  | "Mindy Hu" | Mindy Hu, 600 1st Ave, Seattle, WA 98104, (206) 777-7425, mindyhu.com, accepting new patients: yes. |
| If the API call results in an error, return a notification that states what the error is | "Mindy Hu"  |  error bad request |
| If the query response doesn't include any doctors, returns that no doctors meet the criteria | "Mindy Hu"  | No doctors met that criteria |

### License

*This software is licensed under the MIT license.*

Copyright (c) 2018 **Anousone Kaseumsouk**
