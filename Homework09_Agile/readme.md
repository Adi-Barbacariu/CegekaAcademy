# CegekaAcademy2021 - Agile Homework 

**Requirements**

Come up with 3 project ideas and describe one one of them in terms of
functionalities. Try and split the scope into epics, stories and then
prioritize them. Justify your decisions.

## Project Ideas: 

✔️1. **Vehicle Manager**: an application which can manage your cars informations and can alert you before a document of the car expires. Also, you can see the car services around your location and use different services in case of having a problem with your car.

2. **B2B Online Marketplace**: an application for wholesalers who want to sell their products and entrepreneurs who want to buy them for their businesses.

3. **Productivity Time App**: an application that can restrict an user from using social media excessively and can help him to focus more on his work.    

## Vehicle Manager

**Functionalities:**

- Create accounts for users using forms or using Facebook Login feature. 

- Add cars and their informations to your account.

- Create reminders about cars' informations and alert the user via notifications.

- View car services near the user's location.

- Be able to make an emergency call when you have a problem with your car.

## Epics
  
  **📍 Ability to create and manage an account on the application's SignUp page**

**Description**

As an user, I want to be able to create a personal account in order to access my personal informations.
   
**Goals**: 
- An user is able to create an account with the following attributes: first name, last name, email address, password.
- An user is able to create an account using third-party auth features(Facebook Login API).
- An user can read his account's information on the MyAccount page.
   
**Stories**:
   
1. Implement an "Create an account" form which creates a new account in the database 
   
2. Add an "Login" form which lets users access the application's main page
   
3. Implement an "SignUp with Facebook" form which lets users create an account using Facebook API 

- - - -

**📍 Enable users to manage his owned cars**

**Description**

As an user, I want to be able to make CRUD operations(create, read, update, delete) on my owned cars.
   
**Goals**: 
- An user is able to add a car with the following attributes: brand, model, year of fabrication, registration plate number, color, image, description.
- An user is able to read/update his owned cars and all its informations on the MyCars page.
- An user is able to delete any car from the MyCars page.
   
**Stories**:
   
1. Implement an "Add a new car" button and its functionality to the main page of the application. 
   
2. Implement a "MyCars" page where the user can view his owned cars' info. 
   
3. Add an "Edit Car" button on MyCars page for every shown car.

4. Add an "Remove Car" button on MyCars page for every shown car.

- - - -

**📍 Enable users to receive reminders about the validity of cars' documents**

**Description**

Enable user to get informed about the documents which need to be renewed(like ITP, RCA or Vignette) before the the expiry date is passed.
   
**Goals**: 
- An user is able to add informations about different car documents: type of the document, expiry date.
- An user gets reminders based on the provided informations.
   
**Stories**:
   
1. Implement an "Add New Document" button and for every shown car on MyCars page which adds a new document to the database.
   
2. Implement the functionality of the app to send the reminders via messages/notifications to the user's smartphone.
   
3. Add a new page called "MyReminders" where the user can manage his reminders.

- - - -

**📍 Ability to view car services near user's location**

**Description**

Enable user to interact with a map which displays car services near his current location.
   
**Goals**: 

An user is able to select a service from the map and view its information like: phone number, address, open hours
   
**Stories**:
   
1. Implement a new page called "Find Service" which must display a map, user's current location and car services' locations.
   
2. Add a "Service Info" button near every car service location on the map which displays informations about that service.
   
- - - -

**📍 Ability to get assistance if encountered a problem when driving**

**Description**

Based on his location, the user can get assistance in case he has a problem with his car like a flat tire, or other tehnical problems.
   
**Goals**: 

An user is able to call asistance in case of problems
   
**Stories**:
   
1. Implement a new "Call a Tow Truck" button which sends service assistance to the user's location
   
2. Display on a map, where is the tow truck in real time.

- - - -

## Priority

The Epics are ordered based on their priority level, first being the most important and the lastest being the least imporant. The most important part for the user is to be able to create an account and use it in order to organize his informations about his owned cars. 

Then, being able to get notifications based on the status of the cars' documents is an important feature. 

At last, it's a useful feature for the user to be able to view car services around him and also, in case of a problem, to reach for help using this app.
