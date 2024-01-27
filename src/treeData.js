const treeData = [
    {
        title: "1",
        expanded: true,
        type: "divison",
        divisonView: "h",
        children: [
            {
                title: "1.1",
                expanded: true,
                type: "section",
                headerView: "v",
                view: "form",
                children: [
                    {
                        title: "1.1.1",
                        serviceKey: "firstName",
                        subtitle: "",
                        type: "field"
                    },
                    {
                        title: "1.1.2",
                        subtitle: "",
                        serviceKey: "lastName",
                        type: "field",
                        children: [
                            {
                                title: "1.1.2.1",
                                serviceKey: "firstName",
                                subtitle: "",
                                type: "field"
                            }
                        ]
                    },
                ]
            },
            {
                title: "1.2",
                expanded: true,
                type: "section",
                view: "table",
                headerView: "v",
                children: [
                    {
                        title: "1.2.1",
                        subtitle: "",
                        serviceKey: "address1",
                        type: "field"
                    },
                    {
                        title: "1.2.2",
                        subtitle: "",
                        type: "group",
                        children: [
                            {
                                title: "1.2.2.1",
                                serviceKey: "zipCode",
                                subtitle: "",
                                type: "field"
                            }
                        ]
                    }
                ]
            },
            {
                title: "1.3",
                subtitle: "",
                headerView: "v",
                type: "section",
                view: "readonly",
                children: [
                    {
                        title: "1.3.1",
                        subtitle: "",
                        serviceKey: "accountNo",
                        type: "field"
                    },
                ]
            }
        ]
    },
    {
        title: "2",
        expanded: false,
        type: "divison",
        divisonView: "h",
        children: [
            {
                title: "2.1",
                expanded: true,
                type: "section",
                headerView: "v",
                view: "form",
                children: [
                    {
                        title: "2.1.1",
                        serviceKey: "firstName",
                        subtitle: "",
                        type: "field"
                    },
                    {
                        title: "2.1.2",
                        subtitle: "",
                        type: "group",
                        children: [
                            {
                                title: "2.1.2.1",
                                subtitle: "",
                                serviceKey: "email",
                                type: "field"
                            }
                        ]
                    }
                ]
            },
            {
                title: "2.2",
                expanded: true,
                type: "section",
                view: "table",
                headerView: "v",
                children: [
                    {
                        title: "2.2.1",
                        subtitle: "",
                        serviceKey: "address1",
                        type: "field"
                    },
                    {
                        title: "2.2.2",
                        subtitle: "",
                        type: "group",
                        children: [
                            {
                                title: "2.2.2.1",
                                serviceKey: "zipCode",
                                subtitle: "",
                                type: "field"
                            }
                        ]
                    }
                ]
            },
            {
                title: "2.3",
                subtitle: "",
                headerView: "v",
                type: "section",
                view: "readonly",
                children: [
                    {
                        title: "2.3.1",
                        subtitle: "",
                        serviceKey: "accountNo",
                        type: "field"
                    },
                ]
            }
        ]
    }
];

export default treeData;
