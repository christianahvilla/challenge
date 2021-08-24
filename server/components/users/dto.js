const singleUser = (resource, index) => ({
    id: index,
    name: resource.username,
    age: resource.age,
});

const multipleUser = (resources) => resources.map((resource, index) => singleUser(resource, index));

const singleUserRegion = (resource, index) => ({
    id: index,
    age: resource.age,
    count: resource.count,
});

const multipleUserRegion = (resources) => resources.map((resource, index) => singleUserRegion(resource, index));

module.exports = {
    singleUser,
    singleUserRegion,
    multipleUser,
    multipleUserRegion,
};
