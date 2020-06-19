const gql = require('graphql-tag');
const { ApolloServer } = require('apollo-server');

const typeDefs = gql`
	type User {
		email: String!
		avatar: String
		friends: [User]!
	}

	type Query {
		me: User!
		shoes(input: ShoesInput): [Shoe]
	}

	type Mutation {
		createNewShoe(input: NewShoeInput): Shoe
	}

	type Shoe {
		brand: String!
		size: Int!
	}

	input ShoesInput {
		brand: String
		size: Int
	}

	input NewShoeInput {
		brand: String!
		size: Int!
	}
`;

const resolvers = {
	Query: {
		me() {
			return {
				email: 'master.yoda@gmail.com',
				avatar: 'http://yoda.png',
				friends: [],
			};
		},
		shoes(_, { input }) {
			return [
				{ brand: 'nike', size: 43 },
				{ brand: 'adiddas', size: 42 },
			].filter(shoe => shoe.brand === input.brand);
		},
	},
	Mutation: {
		createNewShoe(_, { input }) {
			//Ovde bi isao upis u bazu
			return input;
		},
	},
};

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

server.listen(4000).then(() => console.log('Listening on port 4000'));
