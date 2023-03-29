const skills = [
    {id: 13, skill: 'Javascript', learned: true},
    {id: 14, skill: 'CSS', learned: true},
    {id: 15, skill: 'HTML', learned: true}
];
  
module.exports = {
    getAll,
    getOne
};
  
function getAll() {
    return skills;
}

function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    // The Array.prototype.find iterator method is
    // ideal for finding objects within an array
    return skills.find(skill => skill.id === id);
}