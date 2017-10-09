export function ratingToStarIcon(rating: number = 0){
	const MAX_VALUE = 5,
		STAR_FILL = '<ion-icon name="star"></ion-icon>',
		STAR_HALF = '<ion-icon name="star-half"></ion-icon>',
		STAR_NONE = '<ion-icon name="star-outline"></ion-icon>';
	
	let markedStar = MAX_VALUE - Math.round(rating),
		stars = '';

	//marked stars
	for(let i = 0; i < markedStar; i++){
		stars += STAR_FILL;
	}

	//half star (is exist)
	if(rating - markedStar > 0){
		markedStar++;
		stars += STAR_HALF;
	}

	//unmarked stars
	for(let i = markedStar; i < MAX_VALUE; i++){
		stars += STAR_NONE;
	}

	return stars;
}