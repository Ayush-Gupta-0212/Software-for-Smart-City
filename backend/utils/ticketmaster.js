const axios = require('axios');

const TM_API_URL = 'https://app.ticketmaster.com/discovery/v2';
const CONSUMER_KEY = process.env.TICKETMASTER_CONSUMER_KEY;

const fetchTicketmasterEvents = async (keyword = '', city = '', countryCode = 'IN') => {
    try {
        if (!CONSUMER_KEY) {
            console.warn('Ticketmaster Consumer Key is missing');
            return [];
        }

        const params = {
            apikey: CONSUMER_KEY,
            keyword: keyword,
            city: city,
            countryCode: countryCode, // Use the parameter
            sort: 'date,asc',
            size: 20 // Limit to 20 events
        };

        const response = await axios.get(`${TM_API_URL}/events.json`, { params });

        if (!response.data._embedded || !response.data._embedded.events) {
            return [];
        }

        return response.data._embedded.events.map(event => ({
            _id: `tm_${event.id}`, // Prefix to distinguish from local IDs
            title: event.name,
            description: event.info || event.pleaseNote || 'No description available.',
            location: event._embedded?.venues?.[0]?.name || event.place?.city?.name || 'Unknown Location',
            date: event.dates?.start?.dateTime || event.dates?.start?.localDate,
            imageUrl: event.images?.find(img => img.ratio === '16_9' && img.width > 600)?.url || event.images?.[0]?.url,
            ticketPrice: event.priceRanges?.[0]?.min || 0,
            isPaid: !!(event.priceRanges?.[0]?.min > 0),
            maxAttendees: null, // Unlimited/Unknown for external events
            source: 'ticketmaster',
            externalLink: event.url
        }));
    } catch (error) {
        console.error('Error fetching Ticketmaster events:', error.message);
        return [];
    }
};

const fetchTicketmasterVenues = async (keyword = '', city = '', countryCode = 'IN') => {
    try {
        if (!CONSUMER_KEY) {
            console.warn('Ticketmaster Consumer Key is missing');
            return [];
        }

        const params = {
            apikey: CONSUMER_KEY,
            keyword: keyword,
            city: city, // Optional: filter by city if needed
            countryCode: countryCode, // Use the parameter
            size: 20
        };

        const response = await axios.get(`${TM_API_URL}/venues.json`, { params });

        if (!response.data._embedded || !response.data._embedded.venues) {
            return [];
        }

        return response.data._embedded.venues.map(venue => ({
            _id: `tm_${venue.id}`,
            name: venue.name,
            description: venue.generalInfo?.generalRule || 'No specific rules listed.',
            location: `${venue.city?.name}, ${venue.state?.name || ''}`,
            imageUrl: venue.images?.find(img => img.ratio === '16_9')?.url || venue.images?.[0]?.url || 'https://via.placeholder.com/400x300?text=Venue', // Venues sometimes lack images in TM
            entryFee: 0, // Venues don't usually have an "entry fee" in this API
            rating: 0, // No rating in TM
            source: 'ticketmaster',
            externalLink: venue.url
        }));
    } catch (error) {
        console.error('Error fetching Ticketmaster venues:', error.message);
        return [];
    }
};

module.exports = { fetchTicketmasterEvents, fetchTicketmasterVenues };
