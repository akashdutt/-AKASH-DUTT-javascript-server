import validateEmail from './helpers'

export default function validateUsers(users) {
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
