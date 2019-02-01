export default function equilateral(n: number): void {
	let pattern: string = "";
	for (let i: number = 1; i <= n; i++) {
		for (let j: number = 1; j <= n - i; j++) {
			pattern = pattern + " ";
		}
		for (let j: number = 1; j <= i * 2 - 1; j++) {
			pattern = pattern + "*";
		}
		console.log(pattern);
		pattern = "";
	}
}
