import { Rating } from '../rating/rating';

export class Bank{
	
	private id: number;
	private name: string;
	private address: string;
	private rating: number;
	private favourites: number;
	private ratings: Rating[]

	constructor(
		id: number, 
		name: string, 
		address: string, 
		rating: number,
		favourites: number,
		ratings: Rating[]){

		this.id = id;
		this.name = name;
		this.address = address;
		this.rating = rating;
		this.favourites = favourites;
		this.ratings = ratings;
	}
}

