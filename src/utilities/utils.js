export const randamizeElements = (array) => {
	let index = array.length,
		randomIndex;

	while (index !== 0) {
		randomIndex = Math.floor(Math.random() * index);
		index--;
		[array[index], array[randomIndex]] = [array[randomIndex], array[index]];
	}

	return array;
};
