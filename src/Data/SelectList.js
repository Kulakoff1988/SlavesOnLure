const SelectList = [{
    Name: `Библиотека №1`,
    ID: 1,
    Title: `МСК`,
    Children: [
        {
            Name: `Ворота`,
            ID: 1,
            Title: `GTS`,
            Children: [
                {
                    Name: `Северные ворота`,
                    Title: `N-GTS`,
                    ID: 1
                },
                {
                    Name: `Южные ворота`,
                    Title: `S-GTS`,
                    ID: 2
                }
            ]
        },
        {
            Name: `Станции книговыдачи`,
            ID: 2,
            Title: `STN`,
            Children: [
                {
                    Name: `Восточная станция`,
                    Title: `E-STN`,
                    ID: 1
                },
                {
                    Name: `Западная станция`,
                    Title: `W-STN`,
                    ID: 2
                }
            ]
        }]
},
    {
        Name: `Библиотека №2`,
        ID: 1,
        Title: `ДБН`,
        Children: [
            {
                Name: `Ворота`,
                ID: 1,
                Title: `GTS`,
                Children: [
                    {
                        Name: `Северные ворота`,
                        ID: 1,
                        Title: `N-GTS`,
                        Children: [
                            {
                                Name: `North-1`,
                                Title: `N-GTS1`,
                                ID: 1
                            },
                            {
                                Name: `North-2`,
                                Title: `N-GTS2`,
                                ID: 2
                            }
                        ]
                    },
                    {
                        Name: `Южные ворота`,
                        Title: `S-GTS`,
                        ID: 2
                    }
                ]
            },
            {
                Name: `Станции книговыдачи`,
                ID: 2,
                Title: `STN`,
                Children: [
                    {
                        Name: `Восточная станция`,
                        Title: `W-STN`,
                        ID: 1
                    },
                    {
                        Name: `Западная станция`,
                        Title: `E-STN`,
                        ID: 2
                    }
                ]
            }]
    }];

module.exports = SelectList;