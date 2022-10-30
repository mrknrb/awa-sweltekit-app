export abstract class MoneyTimeFunctions {
	static costToWorkMinutes(earningMinutes: number, costDay: number) {
		return costDay / earningMinutes;
	}
}
