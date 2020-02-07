const { gql } = require('apollo-server');

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
	type User {
		id: ID!
		username: String!
		pets: [Pet]
	}
	type Pet {
		id: ID!
		name: String!
		type: String
		createdAt: String
		user: User!
	}

	type Query {
		user: User!
		pets(input: PetInput): [Pet]!
	}

	type Mutation {
		createPet(input: NewPetInput): Pet!
	}

	input PetInput {
		type: String
	}

	input NewPetInput {
		name: String!
		type: String!
	}
`;

module.exports = typeDefs;
