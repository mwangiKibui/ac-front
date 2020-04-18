import React,{useState} from 'react';
//core-components
import Link from 'next/link'
//third-party
import {IoMdShare} from 'react-icons/io';
import {Card,CardHeader,CardMedia,CardContent,Avatar,CardActions,makeStyles} from '@material-ui/core';
import {red} from '@material-ui/core/colors';
//the styles
import '../../styles/styles.scss';
//components
import ModalShare from './ModalShare';

const useStyles = makeStyles({
    root:{
        background:'rgb(19,38,57)',
        color:'#fff',
        marginTop:'2px',
        marginBottom:'5px'
    },
    media:{
        height:0,
        paddingTop:'56.25%'
    },
    avatar:{
        backgroundColor:red[500]
    },
    img:{
        width:'100%',
        height:'100%'
    }
});

const HostelCard = ({data}) => {

    const classes = useStyles();
    const [isOpen,setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    let title = `${data['name']} hostel in allcomrades platform`;
    let message  = `share ${data['name']} hostel via other platforms`;
    let link = `https://allcomrades.co.ke/platform/hostels/${data['_id']}`;

    return (
        <>
        <Card className="hostel_card-root">
           <CardHeader 
             avatar={
                 <Avatar aria-label="hostel" className="hostel_card-avatar">
                  {
                  data.name[0].toUpperCase()
                  }
                 </Avatar>
             }
             title={
                 <Link  href={`/hostels/${data['slug']}`}>
                     <a className="hostel_card-name">{data['name']}</a>
                 </Link>
             }
             subheader={
                <h5
                className="hostel_card-subheader">
                    {data.location}
                </h5>
             }
             />
            <CardMedia  title={data.name}>
                <img src={data.profiles[0]} alt="" className="hostel_card-img" />
            </CardMedia>
            <CardContent>
            <div className="hostel_card-actions">
            <p className="hostel_card-description">{data.type}.</p>
            
            <IoMdShare className="hostel_card_icon--link" onClick={toggle}/>
            <ModalShare title={title} toggle={toggle} isOpen={isOpen} message={message} link={link} />
            </div>
            
            </CardContent>
            <CardActions>
                <button className="btn btn-success">
                        view more
                </button>
            </CardActions>
        </Card>
        <style jsx>{`
        .root{
            background:'rgb(19,38,57)' !important,
            color:'#fff',
            marginTop:'2px',
            marginBottom:'5px'
        };
        .media{
            height:0;
            paddingTop:'56.25%';
        };
        .avatar{
            backgroundColor:${red[500]};
        };
        `}
        </style>
        </>
    )
};

export default HostelCard;