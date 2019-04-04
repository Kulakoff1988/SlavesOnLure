const Events = new Lure.Content ({
    Name: `Events`,
    Target: `.mainTable`,
    Type: `tableSheet`,
    Content:    `<table class="events">
                    <thead>
                        <tr>
                            <th>Дата</th>
                            <th>Оборудование</th>
                            <th>Наименование</th>
                            <th>Инв-й номер</th>
                            <th>Место хранения</th>
                            <th>Какие то данные</th>
                        </tr>
                    </thead>
                </table>`,
    Control: {
        Target: `#events`
    },
    ControllerConfig: {
        Target: ``,
        ListElement: `<tr>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                     </tr>`
    }
});

module.exports = Events;