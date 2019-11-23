const faker = require("faker");
// index.js
module.exports = () => {
	const data = { users: [] };
	// Create 1000 users
	for (let i = 0; i < 1000; i++) {
		const randomName = faker.name.findName();
		data.users.push({ id: i, name: randomName });
	}
	return data;
};
