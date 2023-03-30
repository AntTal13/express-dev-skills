const skills = [
    {id: 13, skill: 'Javascript', learned: true},
    {id: 14, skill: 'CSS', learned: true},
    {id: 15, skill: 'HTML', learned: true}
];
  
module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
  };
  
function update(id, updatedSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, updatedSkill);
}

function deleteOne(id) {
    // All properties attached to req.params are strings!
    id = parseInt(id);
    // Find the index based on the id of the skill object
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}

function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    // New skills would be to learn
    skill.done = false;
    skills.push(skill);
}
  
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