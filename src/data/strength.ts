import kurzhantelBankdruecken from '../data/gainzfire-data/kurzhantel-bankdruecken.json';
import rudernKurzhantel from '../data/gainzfire-data/rudern-kurzhantel.json';
import schraegbankdrueckenKurzhantel from '../data/gainzfire-data/schraegbankdruecken-kurzhantel.json';
import seithebenMaschiene from '../data/gainzfire-data/seitheben-maschine.json';

export const strengthData = [
	{ category: 'Brust', name: 'Kurzhantel Bankdrücken', data: kurzhantelBankdruecken },
	{
		category: 'Brust',
		name: 'Kurzhantel Schrägbankdrücken',
		data: schraegbankdrueckenKurzhantel
	},
	{ category: 'Rücken', name: 'Rudern mit Kurzhantel', data: rudernKurzhantel },
	{ category: 'Schulter', name: 'Seitheben Maschine', data: seithebenMaschiene }
];
