export default function diamond(n: number): void {
	let pattern: string = "";
	for (let i: number = 1; i <= n; i++) {
		for (let j: number = 1; j <= n - i; j++) {
			pattern = pattern + " ";
		}
		for (let j: number = 1; j <= 2 * i - 1; j++) {
			pattern = pattern + "*";
		}
		console.log(pattern);
		pattern = "";
	}
	for (let k: number = 1; k <= n; k++) {
		for (let j: number = 1; j <= k; j++) {
			pattern = pattern + " ";
		}
		for (let j: number = 1; j <= 2 * (n - k) - 1; j++) {
			pattern = pattern + "*";
		}
		console.log(pattern);
		pattern = "";
	}
}
