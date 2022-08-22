/*
	Дан произвольный url - 
	'https://purpleschool.ru/course/javascript'
	Нужно сделать функцию, которая выводит в консоль:
	- Протокол (https)
	- Доменное имя (purpleschool.ru)
	- Путь внутри сайта (/course/javascript)
*/

const url = 'https://purpleschool.ru/course/javascript';
const url2 = 'https://purpleschool.ru/course/javascript';

function getUrlParts(url) {
	const [protocol, _, host, ...path] = url.split('/');
	if (protocol === 'https:' || protocol === 'http:') {
		if (!host.includes('.')) {
			return;
		}
		console.log(protocol, _, host, path);
		console.log(`Протокол: ${protocol.split(':')[0]}`);
		console.log(`Доменное имя: ${host}`);
		console.log(`Путь внутри сайта: /${path.join('/')}`);
	}
}

getUrlParts(url2);