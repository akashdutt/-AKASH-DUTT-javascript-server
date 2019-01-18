const permissions = {
    'getUsers': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        delete: [],
    }
    ,'getPasswords': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        delete: [],
    }
}

function hasPermission(moduleName, role, permissionType) {
    if (permissions.hasOwnProperty(moduleName)) {
        if (permissions[moduleName]['all'].includes(role)) {
            console.log(true)
        } else if (permissions[moduleName][permissionType].includes(role)) {
            console.log(true)
        } else {
            console.log(false)
        }
    } else {
        console.log(false)
    }
}
hasPermission('getUsers', 'trainer', 'read')