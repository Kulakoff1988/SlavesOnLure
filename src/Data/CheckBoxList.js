const CheckBoxList = [
    {
        Name: `First`,
        Children: [
            {
                Name: `SubFirst`
            },
            {
                Name: `SubSecond`
            }]
    },
    {
        Name: `Second`,
        Children: [
            {
                Name: `SubSecond`
            },
            {
                Name: `SubSecond`,
                Children: [
                    {
                        Name: `subSubSecond`
                    },
                    {
                        Name: `subSubSecond`,
                        Children: [
                            {
                                Name: `subSubSubSecond`
                            },
                            {
                                Name: `subSubSubSecond`
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        Name: `Third`,
        Children: [
            {
                Name: `SubThird`,
                Children: [
                    {
                        Name: `subSubThird`,
                        Children: [
                            {
                                Name: `subSubSubThird`
                            },
                            {
                                Name: `subSubSubThird`
                            }
                        ]
                    }
                ]
            },
            {
                Name: `SubThird`,
            }]
    },
];

module.exports = CheckBoxList;