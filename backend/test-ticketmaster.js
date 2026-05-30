require('dotenv').config();
const { fetchTicketmasterEvents, fetchTicketmasterVenues } = require('./utils/ticketmaster');

const test = async () => {
    console.log('Testing Ticketmaster Events (Jalandhar, IN)...');
    const eventsJalandhar = await fetchTicketmasterEvents('', 'Jalandhar', 'IN');
    console.log(`Fetched ${eventsJalandhar.length} events in Jalandhar.`);

    console.log('\nTesting Ticketmaster Events (General India)...');
    const eventsIndia = await fetchTicketmasterEvents('', '', 'IN');
    console.log(`Fetched ${eventsIndia.length} events in India.`);

    if (eventsIndia.length === 0) {
        console.log('\nTesting Major Indian Cities...');
        const eventsMumbai = await fetchTicketmasterEvents('', 'Mumbai', 'IN');
        console.log(`Fetched ${eventsMumbai.length} events in Mumbai.`);

        const eventsDelhi = await fetchTicketmasterEvents('', 'New Delhi', 'IN');
        console.log(`Fetched ${eventsDelhi.length} events in New Delhi.`);
    }

    console.log('\nTesting Ticketmaster Events (USA)...');
    const eventsUS = await fetchTicketmasterEvents('', '', 'US');
    console.log(`Fetched ${eventsUS.length} events in USA.`);
};

test();
