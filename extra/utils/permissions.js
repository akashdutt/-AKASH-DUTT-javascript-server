import { permissions } from '../constants'
export default function hasPermission(moduleName, role, permissionType) {
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
