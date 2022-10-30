import { UnitDataType } from './UnitDataType';
import { TimeUnits } from './TimeUnits';

export let timeUnitsArray: UnitDataType[] = [
	{ _id: TimeUnits.Day, convertNumber: 1, label: '/day' },
	{ _id: TimeUnits.Week, convertNumber: 7, label: '/week' },
	{ _id: TimeUnits.Month, convertNumber: 30, label: '/mon' },
	{ _id: TimeUnits.Year, convertNumber: 365, label: '/year' }
];
