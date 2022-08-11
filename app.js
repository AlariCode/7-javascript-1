function canAccessWebsite(age) {
	if (age < 18) {
		return 'Нет';
	}
	return 'Да';
}

console.log(canAccessWebsite(19));

const canAccessWebsite2 = age => age < 18 ? 'Нет' : 'Да';

console.log(canAccessWebsite2(19));
