export default function errorHandler(err, req, res, next) {
	console.log("in errorhandler");
	res.json({
		error: err,
		message: "error",
		status: 500,
		timestamp: new Date()
	});
}
