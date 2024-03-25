import { TbTruckDelivery, TbBuildingStore } from 'react-icons/tb';
import { GiAmpleDress } from "react-icons/gi";
import { FcInTransit, FcShop } from "react-icons/fc";


export const navItems =[
    {
        id: 1,
        title: 'Catégories',
        path: '/',
        className: 'nav-item nav-hover',
    },
    {
        id: 2,
        title: 'Home',
        path: '/',
        className: "nav-item",
    },
    {
        id: 3,
        title: 'Boutique',
        path: '/shop',
        className: "nav-item",
    },
    {
        id: 4,
        title: 'Fripérie',
        path: '/thriftshop',
        className:"nav-item",
    },
    {
        id: 5,
        title: 'Mon compte',
        path: '/account',
        className: "nav-item",
    },
    {
        id: 6,
        title: 'A Propos',
        path: '/about',
        className: "nav-item",
    },
    {
        id: 7,
        title: 'Contact',
        path: '/contact',
        className: "nav-item",
    }
];
export const dropdownMenu=[
    {
        id: 1,
        title: 'Dropshipping',
        icon: FcInTransit,
        className: 'dropdown-item',

    },
    {
        id: 2,
        title: 'Supermarché',
        icon: FcShop,
        className: 'dropdown-item',

    },
    {
        id: 3,
        title: 'Mode femme',
        icon: GiAmpleDress,
        className: 'dropdown-item',

    },
    {
        id: 4,
        title: 'Mode Homme',
        icon: '',
        className: 'dropdown-item',
    },
    {
        id: 5,
        title: 'Beauté et Hygiene',
        icon: '',
        className: 'dropdown-item',
    },
    {
        id: 6,
        title: 'Produits pour bébé',
        icon: '',
        className: 'dropdown-item',

    },
    {
        id: 7,
        title: 'Informatique',
        icon: '',
        className: 'dropdown-item',

    },
    {
        id: 8,
        title: 'Electroniques',
        icon: '',
        className: 'dropdown-item',

    },
    {
        id: 9,
        title: 'Téléphone et Tablettes',
        icon: '',
        className: 'dropdown-item',
    },
    {
        id: 10,
        title: 'Maison et bureau',
        icon: '',
        className: 'dropdown-item',
    },
    {
        id: 11,
        title: 'Autres catégories',
        icon: '',
        className: 'dropdown-item',
    }
]