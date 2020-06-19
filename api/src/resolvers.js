/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */
const { models, db } = require('./db');

module.exports = {
	Query: {
		user() {
			return models.User.findOne();
		},
		pets(_, { input }) {
			return models.Pet.findMany().filter(pet => pet.type === input.type);
		},
	},
	Mutation: {
		createPet(_, { input }) {
			return models.Pet.create(input);
		},
	},
	Pet: {
		user(petParent, { input }) {
			console.log(petParent)
			console.log(models.User.findOne(petParent.id))
			return models.User.findOne(petParent.id);
		}
	},
	User: {
		pets(userParent, { input }) {
			console.log(userParent);
			console.log(models.Pet.findOne(userParent.id));
			return models.Pet.findOne(userParent.id)
		}
	}

	// Pet: {
	// 	img(pet) {
	// 		return pet.type === 'DOG'
	// 			? 'https://placedog.net/300/300'
	// 			: 'http://placekitten.com/300/300';
	// 	},
	// },
	// User: {},
};
