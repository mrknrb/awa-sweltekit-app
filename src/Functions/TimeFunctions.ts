import { TimeUnits } from '../Egyebek/TimeUnit/TimeUnits';
import { AMF } from '../Egyebek/AMF';
import { timeUnitsArray } from '../Egyebek/TimeUnit/timeUnitsArray';

export abstract class TimeFunctions {
	static BasicToUnit(value: number, unit: TimeUnits) {
		let unitdata = AMF.get(timeUnitsArray, unit);
		if (!unitdata) return;
		let result = value * unitdata.convertNumber;
		return result;
	}
	static UnitToBasic(value: number, unit: TimeUnits) {
		let unitdata = AMF.get(timeUnitsArray, unit);
		if (!unitdata) return;
		let result = value / unitdata.convertNumber;
		return result;
	}
	static MinuteToHourMinute(totalMinutes: number) {
		console.log(totalMinutes);
		const minutes = totalMinutes % 60;
		const hours = Math.floor(totalMinutes / 60);

		return `${this.padTo2Digits(hours)}:${this.padTo2Digits(minutes)}`;
	}
	static HourMinuteToMinute(value: number) {}

	static padTo2Digits(num: number) {
		return num.toString().padStart(2, '0');
	}
}
