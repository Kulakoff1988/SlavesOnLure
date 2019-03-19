const CategoryList = [
    {ID: 1, Name: 'Initiator', IconColor: '#371f17', SubCategories: [{ID: 1, Name: 'Doom'},{ID: 2, Name: 'Huskar'},]},
    {ID: 2, Name: 'Carry', IconColor: '#8d3113', SubCategories: [{ID: 1, Name: 'Abaddon'},{ID: 2, Name: 'Spirit Breaker'}]},
    {ID: 3, Name: 'Disabler', IconColor: '#f5431a', SubCategories: [{ID: 1, Name: 'Clockwerk'},{ID: 2, Name: 'Kunkka'}]},
    {ID: 4, Name: 'Support', IconColor: '#c76838', SubCategories: [{ID: 1, Name: 'Phoenix'},{ID: 2, Name: 'Underlord'}]},
    {ID: 5, Name: 'Pusher', IconColor: '#f4841a', SubCategories: [{ID: 1, Name: 'Tiny'},{ID: 2, Name: 'Enigma'}]},
];

CategoryList.sort((a, b) => {
    if (a.Name > b.Name) return 1;
    if (a.Name < b.Name) return -1;
    return 0;
});

module.exports = CategoryList;
