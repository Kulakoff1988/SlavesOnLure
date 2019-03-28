const SelectList = [{
    Name: `Country`,
    ID: 1,
    Title: `Country`,
    Children: [
        {
            Name: `Russia`,
            ID: 1,
            Title: `Cities`,
            Children: [
                {
                    Name: `Moscow`,
                    ID: 1,
                    Title: `Shops`,
                    Children: [
                        {
                            Name: `Da ladno`,
                            ID: 1,
                            Title: `Department`,
                            Children: [
                                {
                                    Name: `Toys`,
                                    ID: 1,
                                },
                                {
                                    Name: `Food`,
                                    ID: 2
                                }
                            ]
                        },
                        {
                            Name: `Blyat'`,
                            ID: 2
                        }
                    ]
                },
                {
                    Name: `Rostov`,
                    ID: 2,
                    Title: `Shops`,
                    Children: [
                        {
                            Name: `Prison`,
                            ID: 1
                        },
                        {
                            Name: `Police`,
                            ID: 2
                        }
                    ]
                },
                {
                    Name: `Tagil`,
                    ID: 3,
                    Title: `Shops`,
                    Children: [
                        {
                            Name: `Darkness`,
                            ID: 1
                        },
                        {
                            Name: `Hopeless`,
                            ID: 2
                        }
                    ]
                }
            ]
        },
        {
            Name: `China`,
            ID: 2,
            Title: `Cities`,
            Children: [
                {
                    Name: `Beijing`,
                    ID: 1,
                    Title: `Shops`,
                    Children: [
                        {
                            Name: `Imperator`,
                            ID: 1
                        },
                        {
                            Name: `Capital`,
                            ID: 2,
                            Title: `Department`,
                            Children: [
                                {
                                    Name: `Flags`,

                                    ID: 1
                                },
                                {
                                    Name: `Books`,
                                    ID: 2
                                }
                            ]
                        }
                    ]
                },
                {
                    Name: `Hong Kong`,
                    ID: 2,
                    Title: `Shops`,
                    Children: [
                        {
                            Name: `Money`,
                            ID: 1
                        },
                        {
                            Name: `GB`,
                            ID: 2
                        }
                    ]
                },
                {
                    Name: `Shanghai`,
                    ID: 3,
                    Title: `Shops`,
                    Children: [
                        {
                            Name: `Made in China`,
                            ID: 1
                        },
                        {
                            Name: `Design by Apple`,
                            ID: 2
                        }
                    ]
                }
            ]
        },
        {
            Name: `USA`,
            ID: 3,
            Title: `Cities`,
            Children: [
                {
                    Name: `Washington`,
                    ID: 1,
                    Title: `Shops`,
                    Children: [
                        {
                            Name: `White house`,
                            ID: 1
                        },
                        {
                            Name: `Second floor`,
                            ID: 2
                        }
                    ]
                },
                {
                    Name: `New York`,
                    ID: 2,
                    Title: `Shops`,
                    Children: [
                        {
                            Name: `Walmart`,
                            ID: 1
                        },
                        {
                            Name: `Burgers`,
                            ID: 2
                        }
                    ]
                },
                {
                    Name: `Boston`,
                    ID: 3,
                    Title: `Shops`,
                    Children: [
                        {
                            Name: `Massachusetts`,
                            ID: 1
                        },
                        {
                            Name: `People`,
                            ID: 2
                        }
                    ]
                }
            ]
        }
    ]
}];

module.exports = SelectList;