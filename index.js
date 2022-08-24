// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = () => (['Antonia', 'Nuru']);

const  returnLastTwoDrivers = () => (['Amari', 'Mo']);

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(fare) {
    return function (fareQuadruple) {
         fareQuadruple = fare * 5;
         return fareQuadruple;
    }}
    
const fareDoubler = function (fareAmount) {
    fareAmount = (createFareMultiplier(fareAmount)()/5); 
     return fareAmount * 2;
    }
const fareTripler = function (fareAmount) {
    fareAmount = (createFareMultiplier(fareAmount)()/5); 
     return fareAmount * 3;
    }   
function  selectDifferentDrivers(drivers, func) {
    return func(drivers);
}