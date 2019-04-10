const SelectList = [{
    Name: `Библиотека №1`,
    ID: `Lib`,
    Title: `Б-№1`,
    Children: [
        {
            Name: `Ридеры/Планшеты`,
            ID: `Reader`,
            Title: `Rd/Tb`,
            Children: [
                {
                    Name: `Точка-1`,
                    Title: `Pnt1`,
                    ID: 1
                },
                {
                    Name: `Точка-2`,
                    Title: `Pnt2`,
                    ID: 2
                }
            ]
        },
        {
            Name: `ПКС-ворота`,
            ID: `Gates`,
            Title: `Gts`,
            Children: [
                {
                    Name: `Ворота-1`,
                    Title: `Gts1`,
                    ID: 1
                },
                {
                    Name: `Ворота-2`,
                    Title: `Gts2`,
                    ID: 2
                }
            ]
        },
        {
            Name: `Станции самостоятельного обслуживания`,
            ID: `SSS`,
            Title: `SSS`,
            Children: [
                {
                    Name: `ССО-1`,
                    Title: `SSS1`,
                    ID: 1
                },
                {
                    Name: `CCО-2`,
                    Title: `SSS2`,
                    ID: 2
                }
            ]
        },
        {
            Name: `Станции самостоятельного возврата`,
            ID: `SRS`,
            Title: `SRS`,
            Children: [
                {
                    Name: `ССВ-1`,
                    Title: `SRS1`,
                    ID: 1
                },
                {
                    Name: `CCВ-2`,
                    Title: `SRS2`,
                    ID: 2
                }
            ]
        },
        {
            Name: `Станции SMART-BOX`,
            ID: `SBX`,
            Title: `SMB`,
            Children: [
                {
                    Name: `С-SMB-1`,
                    Title: `SMB1`,
                    ID: 1
                },
                {
                    Name: `C-SMB-2`,
                    Title: `SMB2`,
                    ID: 2
                }
            ]
        },
        {
            Name: `Умные полки`,
            ID: `SmartShelf`,
            Title: `SS`,
            Children: [
                {
                    Name: `УП-1`,
                    Title: `SS1`,
                    ID: 1
                },
                {
                    Name: `УП-2`,
                    Title: `SS2`,
                    ID: 2
                }
            ]
        }]
    },
    {
        Name: `Библиотека №2`,
        ID: `Lib`,
        Title: `Б-№2`,
        Children: [
            {
                Name: `Ридеры/Планшеты`,
                ID: `Reader`,
                Title: `Rd/Tb`,
                Children: [
                    {
                        Name: `Точка-1`,
                        Title: `Pnt1`,
                        ID: 1
                    },
                    {
                        Name: `Точка-2`,
                        Title: `Pnt2`,
                        ID: 2
                    }
                ]
            },
            {
                Name: `ПКС-ворота`,
                ID: `Gates`,
                Title: `Gts`,
                Children: [
                    {
                        Name: `Ворота-1`,
                        Title: `Gts1`,
                        ID: 1
                    },
                    {
                        Name: `Ворота-2`,
                        Title: `Gts2`,
                        ID: 2
                    }
                ]
            },
            {
                Name: `Станции самостоятельного обслуживания`,
                ID: `SSS`,
                Title: `SSS`,
                Children: [
                    {
                        Name: `ССО-1`,
                        Title: `SSS1`,
                        ID: 1
                    },
                    {
                        Name: `CCО-2`,
                        Title: `SSS2`,
                        ID: 2
                    }
                ]
            },
            {
                Name: `Станции самостоятельного возврата`,
                ID: `SRS`,
                Title: `SRS`,
                Children: [
                    {
                        Name: `ССВ-1`,
                        Title: `SRS1`,
                        ID: 1
                    },
                    {
                        Name: `CCВ-2`,
                        Title: `SRS2`,
                        ID: 2
                    }
                ]
            },
            {
                Name: `Станции SMART-BOX`,
                ID: `SBX`,
                Title: `SMB`,
                Children: [
                    {
                        Name: `С-SMB-1`,
                        Title: `SMB1`,
                        ID: 1
                    },
                    {
                        Name: `C-SMB-2`,
                        Title: `SMB2`,
                        ID: 2
                    }
                ]
            },
            {
                Name: `Умные полки`,
                ID: `SmartShelf`,
                Title: `SS`,
                Children: [
                    {
                        Name: `УП-1`,
                        Title: `SS1`,
                        ID: 1
                    },
                    {
                        Name: `УП-2`,
                        Title: `SS2`,
                        ID: 2
                    }
                ]
            }]
    }];

module.exports = SelectList;