import React from 'react'
import { getFeaturedEvents } from '../dummy-data'
import EventList from '../components/events/event-list'

const HomePage = () => {
    const featuredEvents = getFeaturedEvents();

    return (
        <div>
            <EventList items={featuredEvents}></EventList>
        </div>
    )
}

export default HomePage