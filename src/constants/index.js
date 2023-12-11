import api1 from "../assets/ChallengeImages/api1.png"
import api2 from "../assets/ChallengeImages/api2.jpg"
import api3 from "../assets/ChallengeImages/api3.png"
import api4 from "../assets/ChallengeImages/api4.png"
import api5 from "../assets/ChallengeImages/api5.png"
import api6 from "../assets/ChallengeImages/api6.png"
import api7 from "../assets/ChallengeImages/api7.png"
import api8 from "../assets/ChallengeImages/api8.png"

export const challengesDescription = [
    {
        title: "Broken Object-Level Authorization",
        description: "Object-level authorization is an access control mechanism that is usually implemented at the code level to validate that a user can access only objects that they should have access to.",
        number: "1",
        Level:"Easy",
        imageURL: api1
    },
    {
        title: "Broken User Authentication",
        description: "When authentication mechanisms are implemented incorrectly, they can allow attackers to assume other user’s identities.",
        number: "2",
        Level:"Easy",
        imageURL: api2
    },
    {
        title: "Excessive Data Exposure",
        description: "Developers tend to expose all object properties by default, relying on clients to perform data filtering before displaying to the user.",
        number: "3",
        Level:"Easy",
        imageURL: api3
    },
    {
        title: "Lack of Resources and Rate Limiting",
        description: "Too often APIs do not impose any restrictions on the size or number of resources that can be requested by the client or user. ",
        number: "4",
        Level:"Easy",
        imageURL: api4
    },
    {
        title: "Broken Function-Level Authorization",
        description: "Authorization flaws can be caused by overly complex access control policies with different hierarchies, groups, and roles, and by an unclear separation between administrative and regular functions.",
        number: "5",
        Level:"Easy",
        imageURL: api5
    },
    {
        title: "Mass Assignment",
        description: "Modern frameworks encourage developers to use functions that automatically bind input from the client into code variables and internal objects.",
        number: "6",
        Level:"Easy",
        imageURL: api6
    },
    {
        title: "Security Misconfiguration",
        description: "Security misconfiguration can happen at any level of an API stack, from the network level to the application level.",
        number: "7",
        Level:"Easy",
        imageURL: api7
    },
    {
        title: "Improper Assets Management",
        description: "Old API versions are usually unpatched. Improper asset managment can lead to unauthorized access",
        number: "8",
        Level:"Easy",
        imageURL: api8
    },
]

