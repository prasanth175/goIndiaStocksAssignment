import DiscussionForm from "./DiscussionForm";
import { BiSolidDownArrow } from "react-icons/bi";
import { AiFillDollarCircle } from "react-icons/ai";
import { TbMessage2 } from "react-icons/tb";

const companiesImages = [
    {
        id: 1,
        imageUrl: 'https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/caprinew1.jpg'
    },
    {
        id: 2,
        imageUrl: 'https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/D1edit.jpg'
    },
    {
        id: 3,
        imageUrl: 'https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/20230306ad.jpg'
    },
    {
        id: 4,
        imageUrl: 'https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/deepind.png'
    },
    {
        id: 5,
        imageUrl: 'https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/dtpatten1.png'
    },
    {
        id: 6,
        imageUrl: 'https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/fino.png'
    },
    {
        id: 7,
        imageUrl: 'https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/ganeshhousing.jpg'
    },
    {
        id: 8,
        imageUrl: 'https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/godawari.jpg'
    },
    {
        id: 9,
        imageUrl: 'https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/gravita.jpg'
    },
    {
        id: 10,
        imageUrl: 'https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/hginfra.jpg'
    },
    {
        id: 11,
        imageUrl: 'https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/infibeamavenues.png'
    },
    {
        id: 12,
        imageUrl: 'https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/lx2.png'
    },
    {
        id: 13,
        imageUrl: 'https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/meghmani.png'
    },
    {
        id: 14,
        imageUrl: 'https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/20230502Zim.jpg'
    },
    {
        id: 15,
        imageUrl: 'https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/20230110unparts.png'
    },
]

const DashboardData = [
    {
        id: 1,
        text: 'Discussion',
        leftImg: <TbMessage2 />,
        right: <BiSolidDownArrow className="h-2 w-2 mr-3" />,
        isSelected: true
    },
    {
        id: 2,
        text: 'Market Stories',
        leftImg: <AiFillDollarCircle />,
        right: '',
        isSelected: false
    },
    {
        id: 3,
        text: 'Sentiment',
        isSelected: false
    },
    {
        id: 4,
        text: 'Market',
        isSelected: false
    },
    {
        id: 5,
        text: 'Sector',
        isSelected: false
    },
    {
        id: 6,
        text: 'Watchlist',
        isSelected: false
    },
    {
        id: 7,
        text: 'Events',
        isSelected: false
    },
    {
        id: 8,
        text: 'News/Interview',
        isSelected: false
    },
]

const Sectors = [
    {
        id: 1,
        text: 'Sector 1',
        color: 'bg-red-500'
    },
    {
        id: 2,
        text: 'Sector 2',
        color: 'bg-blue-500'
    },
    {
        id: 3,
        text: 'Sector 3',
        color: 'bg-yellow-500'
    },
]

const ContentData = [
    {
        id: 1,
        time: '2 min ago',
        contentImg: 'https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/infibeamavenues.png',
        name: 'Lorem Ipsum',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is',
        sector: 'Sector 1',
        color: 'bg-red-500',
        isLiked: true
    },
    {
        id: 2,
        time: '2 min ago',
        name: 'Lorem Ipsum',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is',
        sector: 'Sector 2',
        color: 'bg-blue-500',
        isLiked: false
    },
    {
        id: 3,
        time: '2 min ago',
        name: 'Lorem Ipsum',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is',
        sector: 'Sector 3',
        color: 'bg-yellow-500',
        isLiked: false
    },

]

const MarketData = [
    {
        id: 1, 
        backgroundImg: 'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2013/2/6/1360154668135/Borough-Market-entrance-001.jpg?width=700&quality=85&auto=format&fit=max&s=62183faa3b293c0647f4174d7b29f342',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        id: 2, 
        backgroundImg: 'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2013/2/6/1360154668135/Borough-Market-entrance-001.jpg?width=700&quality=85&auto=format&fit=max&s=62183faa3b293c0647f4174d7b29f342',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        id: 3, 
        backgroundImg: 'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2013/2/6/1360154668135/Borough-Market-entrance-001.jpg?width=700&quality=85&auto=format&fit=max&s=62183faa3b293c0647f4174d7b29f342',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        id: 4, 
        backgroundImg: 'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2013/2/6/1360154668135/Borough-Market-entrance-001.jpg?width=700&quality=85&auto=format&fit=max&s=62183faa3b293c0647f4174d7b29f342',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        id: 5, 
        backgroundImg: 'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2013/2/6/1360154668135/Borough-Market-entrance-001.jpg?width=700&quality=85&auto=format&fit=max&s=62183faa3b293c0647f4174d7b29f342',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        id: 6, 
        backgroundImg: 'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2013/2/6/1360154668135/Borough-Market-entrance-001.jpg?width=700&quality=85&auto=format&fit=max&s=62183faa3b293c0647f4174d7b29f342',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
]

const stocksData = [
    {
        id: 1,
        name: 'NIFTYBank',
        amount: '41,559.40',
        percentage: '0.01%',
        color: 'text-red-500'
    },
    {
        id: 2,
        name: 'BAJAJFINANCE',
        amount: '6,435.50',
        percentage: '0.30%',
        color: 'text-green-500'
    },
    {
        id: 3,
        name: 'NIFTYBank',
        amount: '41,559.40',
        percentage: '0.01%',
        color: 'text-red-500'
    },
    {
        id: 4,
        name: 'BAJAJFINANCE',
        amount: '6,435.50',
        percentage: '0.30%',
        color: 'text-green-500'
    },
    {
        id: 5,
        name: 'NIFTYBank',
        amount: '41,559.40',
        percentage: '0.01%',
        color: 'text-red-500'
    },
    {
        id: 6,
        name: 'BAJAJFINANCE',
        amount: '6,435.50',
        percentage: '0.30%',
        color: 'text-green-500'
    },
    {
        id: 7,
        name: 'NIFTYBank',
        amount: '41,559.40',
        percentage: '0.01%',
        color: 'text-red-500'
    },
    {
        id: 8,
        name: 'BAJAJFINANCE',
        amount: '6,435.50',
        percentage: '0.30%',
        color: 'text-green-500'
    }
]

export {companiesImages, DashboardData, Sectors, ContentData, MarketData, stocksData}