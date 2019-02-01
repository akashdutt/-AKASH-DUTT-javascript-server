import { diamond,equilateral } from './pattern'
diamond(5)
equilateral(5)
import{ hasPermission } from './utils'
hasPermission('getUsers', 'trainee', 'read')
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
import { validateUsers } from './utils'
validateUsers(users);
