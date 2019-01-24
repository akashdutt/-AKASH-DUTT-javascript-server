export default function notFoundRoute(req, res, next) {
	console.log("inside notFoundRoute");
	next("Not Found");
}
