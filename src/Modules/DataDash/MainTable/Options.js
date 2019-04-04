const Options = new Lure.Content ({
    Name: `Options`,
    Target: `.mainTable`,
    Type: `tableSheet`,
    Content:    `<table class="options">
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
        Target: `#options`
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

module.exports = Options;