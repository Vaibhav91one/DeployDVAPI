import api1 from "../assets/ChallengeImages/api1.png"
import api2 from "../assets/ChallengeImages/api2.jpg"
import api3 from "../assets/ChallengeImages/api3.png"
import api4 from "../assets/ChallengeImages/api4.png"
import api5 from "../assets/ChallengeImages/api5.png"
import api6 from "../assets/ChallengeImages/api6.png"
import api7 from "../assets/ChallengeImages/api7.png"
import api8 from "../assets/ChallengeImages/api8.png"
import api9 from "../assets/ChallengeImages/api9.png"
import api10 from "../assets/ChallengeImages/api10.jpg"


export const challengesDescription = [
    {
        title: "Broken Object-Level Authorization",
        description: "Object-level authorization is an access control mechanism that is usually implemented at the code level to validate that a user can access only objects that they should have access to.",
        number: "1",
        Level: "Easy",
        imageURL: api1,
        hint: "click on get info button",
        writeUp: `
        - Click on the "Get Info" button
        - URL path would be like this "/API1/accounts/id1/personal_info"
        - Change id1 to id2 and you have the flag.
    `
    },
    {
        title: "Broken User Authentication",
        description: "When authentication mechanisms are implemented incorrectly, they can allow attackers to assume other user’s identities.",
        number: "2",
        Level: "Easy",
        imageURL: api2,
        hint: "Register with a new account",
        writeUp: `
        - Register with a new account
        - login with new credentials
        - go to change name section
        - change name to "admin"
        - logout and then login again with name "admin" and you have the flag.
        `,
    },
    {
        title: "Excessive Data Exposure",
        description: "Developers tend to expose all object properties by default, relying on clients to perform data filtering before displaying to the user.",
        number: "3",
        Level: "Moderate",
        imageURL: api3,
        hint: "click on get info button",
        writeUp: `
        - click on get info button
        - url path would be like this "/API3/accounts/id1/raw/personal_info"
        - go one directory back to "/raw" and you have the flag`,
    },
    {
        title: "Lack of Resources and Rate Limiting",
        description: "Too often APIs do not impose any restrictions on the size or number of resources that can be requested by the client or user. ",
        number: "4",
        Level: "Easy",
        imageURL: api4,
        hint: "click on get info button",
        writeUp: `
        - click on get info button
        - refresh the page very quickly and you will get the flag`,
    },
    {
        title: "Broken Function-Level Authorization",
        description: "Authorization flaws can be caused by overly complex access control policies with different hierarchies, groups, and roles, and by an unclear separation between administrative and regular functions.",
        number: "5",
        Level: "Easy",
        imageURL: api5,
        hint: "click on get info button",
        writeUp: `
        - click on get info button
        - url path would be like this "/API5/api/v1/users/gary/personal_info"
        - change it to "/API5/api/v1/users/admin/all_info"
        `,
    },
    {
        title: "Mass Assignment",
        description: "Modern frameworks encourage developers to use functions that automatically bind input from the client into code variables and internal objects.",
        number: "6",
        Level: "Moderate",
        imageURL: api6,
        hint: "click on get info button",
        writeUp: `
        - click on get info button
        - capture the POST request in burpsuite when clicking on the get info button
        - in the request observe the cookies
        - change "isadmin=true" instead of false and resend the request
        - now observe the response and there is flag
        `,
    },
    {
        title: "Security Misconfiguration",
        description: "Security misconfiguration can happen at any level of an API stack, from the network level to the application level.",
        number: "7",
        Level: "Hard",
        imageURL: api7,
        hint: "go to '/robots.txt'",
        writeUp: `
        - go to "/robots.txt"
        - there is a new path "/.config" in disallow
        - go to "/.config"
        - observe the JSON data
        - looks like a request with some special header in it
        - capture the POST request in burpsuite when clicking on the get info button
        - add the "apikey" header with its value in the request and resend it
        - now observe the response and there is flag
        `,
    },
    {
        title: "Improper Assets Management",
        description: "Old API versions are usually unpatched. Improper asset managment can lead to unauthorized access",
        number: "8",
        Level: "Easy",
        imageURL: api8,
        hint: "Click on get my info",
        writeUp: `
        - Visit /API8
        - Click on get my info
        - you will be redirected to "/API8/v2/users/gary/personal_info" endpoint.
        - change v2 to v1 and observe response, the deprecated version displays more information in which the flag is located.
        `,
    },
    {
        title: "Injection ",
        description: "Attackers construct API calls that include SQL, NoSQL, LDAP, OS, or other commands that the API or the backend behind it blindly executes.",
        number: "9",
        Level: "Hard",
        imageURL: api9,
        hint: "There is a login page which is vulnerable to SQL injection.",
        writeUp: `
        - visit /API9
        - There is a login page which is vulnerable to SQL injection.
        - Enter this query in the username parameter to determine the no. of columns returned by application  ORDER BY 2
        - we have 2 columns which can both display strings.
        - Now we will try UNION based query to check if it works UNION SELECT 1,2
        - Now in this part we would have to guess the table name which is in most cases 'users'
        - Enter this query to find the column names of the 'users' table UNION SELECT group_concat(column_name),2 FROM information_schema.columns WHERE table_name='users'
        - from this we get 2 columns username and password. so now we can use this query to get the credentials UNION SELECT username,password FROM users
        - login with the credentials and we get flag.
        `,
    },
    {
        title: "Insufficient logging and monitoring",
        description: "Lack of proper logging, monitoring, and alerting allows attacks and attackers to go unnoticed.",
        number: "10",
        Level: "Moderate",
        imageURL: api10,
        hint: "there is only login , no register.",
        writeUp: `
        - visit /API10
        - there is only login , no register.
        - try to login and then observe the response headers in browser or burpsuite.
        - There is an unusual header X-Powered-By: Vertical mesh solution gamification
        - search it on google, and you will come accross its official site http://verticalmeshsolutiongamification.com/
        - read the last article on this site which states that they store logging information on / server_info endpoint.
        - now visit this endpoint and we can see a sucessful login entry with username and password in it.
        - enter those credentials in the login page and you will get flag.
        `,
    },
]

