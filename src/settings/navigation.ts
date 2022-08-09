export const mainMenu = [
    {
        id: '1',
        title: 'All products',
    },
    {
        id: '2',
        title: 'Packaging',
    },
    {
        id: '3',
        title: 'Drinkware',
    },
    {
        id: '4',
        title: 'Apparel',
    },
    {
        id: '5',
        title: 'Notebooks',
    },
    {
        id: '6',
        title: 'Backpacks',
    },
];

export interface IMenuItem {
    title: string;
}

export interface IMenu {
    menu?: string;
    title?: string;
    menuList: IMenuItem[];
}

export const footerMenu: IMenu[] = [
    {
        menu: 'footer',
        title: 'Our company',
        menuList: [
            {
                title: 'About us',
            },
            {
                title: 'FAQ',
            },
            {
                title: 'Partnership',
            },
            {
                title: 'Sustainability',
            },
            {
                title: 'Blog',
            },
        ],
    },
    {
        menu: 'footer',
        title: 'How can we help',
        menuList: [
            {
                title: 'Place a ticket',
            },
            {
                title: 'Track your order',
            },
            {
                title: 'Help center',
            },
        ],
    },
    {
        menu: 'footer',
        title: 'Information',
        menuList: [
            {
                title: 'Contact us',
            },
            {
                title: 'Live chat',
            },
            {
                title: 'Privacy',
            },
            {
                title: 'Terms of use',
            },
        ],
    },
];
