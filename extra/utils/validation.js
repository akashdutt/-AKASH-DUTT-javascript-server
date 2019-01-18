const users = [{
    traineeEmail: 'trainee1@successive.tech',
    reviewerEmail: 'reviewer1@successive.tech',
},
{
    traineeEmail: 'akash@successive.com',
    reviewerEmail: 'akash@google.com'
},
{
    traineeEmail: 'akashdutt@successive.tech',
    reviewerEmail: 'akash@gmail.tech'
}
]

function validateEmail(email) {
let regex = /^[A-Za-z0-9._%+-]+@successive.tech$/
return regex.test(email)
}

function validateUsers(users) {
let validCount = 0;
let invalidCount = 0;
users.forEach(element => {
    const {
        traineeEmail,
        reviewerEmail
    } = element;
    if (validateEmail(traineeEmail)) {
        validCount++;
        console.log(traineeEmail, 'is a valid email')
    } else {
        invalidCount++
        console.log(traineeEmail, 'is not a valid')
    }
    if (validateEmail(reviewerEmail)) {
        validCount++;
        console.log(reviewerEmail, 'is a valid email')

    } else {
        invalidCount++;
        console.log(reviewerEmail, 'is not a valid')

    }

});
console.log('total valid emails are', validCount)
console.log('total invalid emails are', invalidCount)
}
validateUsers(users);