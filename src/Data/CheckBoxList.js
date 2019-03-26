const CheckBoxList = [
    {
        Name: `First`,
        Children: [
            {
                Name: `First.1`
            },
            {
                Name: `First.2`
            }]
    },
    {
        Name: `Second`,
        Children: [
            {
                Name: `Second.1`
            },
            {
                Name: `Second.2`,
                Children: [
                    {
                        Name: `Second.2.1`
                    },
                    {
                        Name: `Second.2.1`,
                        Children: [
                            {
                                Name: `Second.2.1.1`
                            },
                            {
                                Name: `Second.2.1.2`
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
                Name: `Third.1`,
                Children: [
                    {
                        Name: `Third.1.1`,
                        Children: [
                            {
                                Name: `Third.1.1.1`
                            },
                            {
                                Name: `Third.1.1.2`
                            }
                        ]
                    }
                ]
            },
            {
                Name: `Third.2`,
            }]
    },
];

module.exports = CheckBoxList;