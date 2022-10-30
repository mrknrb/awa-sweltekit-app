export abstract class MoneyTimeFunctions {
	static moneyToWorkMinutes(earningHour: number, cost: number) {
		return cost / (earningHour / 60);
	}

	static WorkMinutesToMoney(earningHour: number, WorkMinutes: number) {
		return (earningHour / 60) * WorkMinutes;
	}
}
