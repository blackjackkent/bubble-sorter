class Cache {
	constructor() {
		this.data = {};
	}
	update(winner, loser) {
		if (!this.data[winner]) {
			this.data[winner] = [];
		}
		if (this.data[winner].includes(loser)) {
			return;
		}
		this.data[winner].push(loser);
	}
	getCachedLosers(value) {
		if (this.data[value]) {
			return this.data[value];
		}
		return [];
	}
}

export default Cache;