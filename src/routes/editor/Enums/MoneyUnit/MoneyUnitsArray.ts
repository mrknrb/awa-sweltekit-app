import { MoneyUnits } from './MoneyUnits';
import { UnitDataType } from '../TimeUnit/UnitDataType';

export let moneyUnitsArray: UnitDataType[] = [
	{ _id: MoneyUnits.Money, convertNumber: 1, label: 'Money' },
	{ _id: MoneyUnits.WorkTime, convertNumber: 1, label: 'WorkTime' }
];
