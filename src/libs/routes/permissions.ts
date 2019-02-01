import { permissions } from "../constants";
export default function hasPermission(
	moduleName: string,
	Role: any,
	permissionType: string
): boolean {
	console.log("inside has permission",moduleName,Role,permissionType)
	if (permissions.hasOwnProperty(moduleName)) {
		console.log("inside if")
		if (permissions[moduleName]["all"].includes(Role)) {
			console.log("true")
			return true;
		} else if (permissions[moduleName][permissionType].includes(Role)) {
			return true ;
		} else {
			return false;
		}
	} else {
		return false;
	}
}
