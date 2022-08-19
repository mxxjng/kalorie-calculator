import kurzhantelBankdruecken from '../data/gainzfire-data/kurzhantel-bankdruecken.json';
import langhantelBankdruecken from '../data/gainzfire-data/bankdruecken.json';
import rudernKurzhantel from '../data/gainzfire-data/rudern-kurzhantel.json';
import schraegbankdrueckenKurzhantel from '../data/gainzfire-data/schraegbankdruecken-kurzhantel.json';
import seithebenMaschiene from '../data/gainzfire-data/seitheben-maschine.json';
import trizepsdrueckenuek from '../data/gainzfire-data/trizepsdruecken-ueber-kopf-vorgebeugt-am-kabelzug.json';
import seithebenKurzhantel from '../data/gainzfire-data/seitheben-kurzhantel-stehend.json';
import trizepsdrueckenKabelzug from '../data/gainzfire-data/trizepsdruecken-kabelzug.json';
import pushpress from '../data/gainzfire-data/pushpress.json';
import rumKreuzheben from '../data/gainzfire-data/kreuzheben-rum.json';
import kniebeugen from '../data/gainzfire-data/kniebeugen-langhantel.json';
import buttefly from '../data/gainzfire-data/butterfly-geraet.json';
import bizepsKH from '../data/gainzfire-data/bizepscurls-kurzhantel.json';
import bizepsSZ from '../data/gainzfire-data/bizepscurls-sz.json';
import latzug from '../data/gainzfire-data/latzug-brust.json';
import beinbeugen from '../data/gainzfire-data/beinbeugen-liegend.json';
import beinstrecken from '../data/gainzfire-data/beinstrecken.json';
import reverseFlys from '../data/gainzfire-data/reverse-flys-maschine.json';

export const strengthData = [
	{ category: 'Brust', name: 'Kurzhantel Bankdrücken', data: kurzhantelBankdruecken },
	{ category: 'Brust', name: 'Langhantel Bankdrücken', data: langhantelBankdruecken },
	{
		category: 'Brust',
		name: 'Kurzhantel Schrägbankdrücken',
		data: schraegbankdrueckenKurzhantel
	},
	{ category: 'Rücken', name: 'Rudern mit Kurzhantel', data: rudernKurzhantel },
	{ category: 'Schulter', name: 'Seitheben Maschine', data: seithebenMaschiene },
	{
		category: 'Trizeps',
		name: 'Trizepsdrücken über Kopf vorgebeugt am Kabelzug',
		data: trizepsdrueckenuek
	},
	{
		category: 'Schulter',
		name: 'Seitheben mit Kurzhantel stehend',
		data: seithebenKurzhantel
	},
	{
		category: 'Trizeps',
		name: 'Trizepsdrücken Kabelzug stehend',
		data: trizepsdrueckenKabelzug
	},
	{
		category: 'Schulter',
		name: 'Pushpress Langhantel stehend',
		data: pushpress
	},
	{
		category: 'Beine',
		name: 'Rumänisches Kreuzheben',
		data: rumKreuzheben
	},
	{
		category: 'Beine',
		name: 'Kniebeugen Langhantel',
		data: kniebeugen
	},
	{
		category: 'Brust',
		name: 'Buttefly Gerät',
		data: buttefly
	},
	{
		category: 'Bizeps',
		name: 'Bizepscurls Kurzhantel',
		data: bizepsKH
	},
	{
		category: 'Bizeps',
		name: 'Bizepscurls SZ Stange',
		data: bizepsSZ
	},
	{
		category: 'Rücken',
		name: 'Latziehen zur Brust',
		data: latzug
	},
	{
		category: 'Beine',
		name: 'Beinbeugen liegend',
		data: beinbeugen
	},
	{
		category: 'Beine',
		name: 'Beinstrecken',
		data: beinstrecken
	},
	{
		category: 'Schulter',
		name: 'Reverse Flys Maschine / Kabelzug',
		data: reverseFlys
	}
];
