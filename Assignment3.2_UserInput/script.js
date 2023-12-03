function check()
{
// grab values from user inputs
var firstName = document.getElementById("firstName").value
var lastName = document.getElementById("lastName").value
var zipCode = document.getElementById("zipCode").value

// combine first name + space + last name
var fullName = firstName + " " + lastName

// count the characters of the name!
if (fullName.length < 20) 
{    // verify if the zip code is the correct amount of characters
    if (zipCode.length == 5)
    {
        // if both the name and zip code verify it will reveal the secret phrase
     location.replace("strings2.html")
    }
    else
    {
        // if zipcode is not 5 characters it will give this alert 
        alert ("Warning -- Zipcode is Not a Valid Entry!")
    }
}
else
{
    // if the name is more than 20 chracters - it will show an alert
    alert ("Warning -- Name is Not a Valid Entry!")
}
}
