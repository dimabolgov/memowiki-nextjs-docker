import Link from "next/link";
import AddressIcon from "../icons/address-icon";
import DateIcon from "../icons/date-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import Button from "../ui/button";

import classes from './event-item.module.css';

export default function EventItem(props) {
    const { title, image, date, location, id } = props;

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    const forattedAddress = location.replace(', ', "\n");
    const exploreLink = `/events/${id}`;

    return (
        <li className={classes.item}>
            <img src={'/' + image} alt="" width="200" />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{title}</h2>
                    <div className={classes.date}>
                        <DateIcon />
                        <time>{humanReadableDate}</time>
                    </div>
                    <div className={classes.address}>
                        <AddressIcon />
                        <address>{forattedAddress}</address>
                    </div>
                    <div  className={classes.actions}>
                        <Button link={exploreLink}>
                            <span>Explore Event</span>
                            <span className={classes.icon}>
                                <ArrowRightIcon />
                            </span>
                        </Button>
                    </div>
                </div>
            </div>
        </li>
    );
}