const Settings = new Lure.Content ({
    Name: `Settings`,
    Target: `.mainTable`,
    Type: `tableSheet`,
    Content:    `<table class="settings">
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
        Target: `#settings`
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

module.exports = Settings;