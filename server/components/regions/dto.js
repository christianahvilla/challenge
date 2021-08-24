const single = (region) => (
    region
);

const multiple = (resources) => resources.map((resource) => single(resource));

module.exports = {
    single,
    multiple,
};
