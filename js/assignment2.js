// What is the length of the "data" array (2 pts.)? 
  data.length


// What is the fourth element of the array *hint: remember how indexing for arrays beings (2 pts.)
  var element4 = data[5]

// Using the array "map" funcitonality, create a variable "city_names" that has the name of each city (4 pts.)
  var city_names = data.map(function(d) {
    return d.city
  })

// Using the array "map" funcitonality, create a variable "populations" that the population of each city (4 pts.)
  var populations = data.map(function(d) {
    return d.pop
  })

// Sort the data variable by median age (4 pts.)
  data.sort(function(a,b){
    return a.age - b.age
  })
 

// Based on this, what are the cities with the youngest/oldest median ages? (2 pts.)
  youngest_city = data[0]
  
  data.sort(function(a,b){
    return b.age - a.age
  })
 
  oldest_city = data[0]
  
// Write a function called "description" that takes in an object (one element from the data array) and constructs the following sentence (4 pts.):


// "The median age in " {city} " is " {median age}"
  var description = function(d) {
    return "The median age in " + d.city + " is " + d.age
  }
 

// Pass one of the data elements to your function and view the results
  description(data[0])
 
  
// Using the array filter functionality, create an array called "maleCities" that has the names of cities where there are more men than women (3 pts.)
  var maleCities = data.filter(function(d) {
    if (d.males>d.females) {
      return d.city
    }
  })
 

// How many of the top 100 cities have more males than females?
  maleCities.length