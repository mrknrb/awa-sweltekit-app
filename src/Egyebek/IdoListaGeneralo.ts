import { TimeUnits } from './TimeUnit/TimeUnits';
import { TimeUnitCalculator } from './TimeUnit/TimeUnitCalculator';

export function IdoListaGeneralo(timeUnit: TimeUnits, listaDarab: number, osszIdotartam: number) {
	let lista: { absolutIdotartam: number; timeUnitIdotartam: number }[] = [];

	for (let i = 0; i < listaDarab; i++) {
		let timeunitEgy = (osszIdotartam * i) / listaDarab;
		let foszam = Math.floor(TimeUnitCalculator.DailyMinutesToUnit(timeUnit, timeunitEgy));

		lista.push({
			timeUnitIdotartam: foszam,
			absolutIdotartam: timeunitEgy
		});
	}
	return lista;
}
