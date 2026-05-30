const Attraction = require('../models/Attraction');
const { fetchTicketmasterVenues } = require('../utils/ticketmaster');

// @desc    Get all attractions
// @route   GET /api/attractions
// @access  Public
const getAttractions = async (req, res) => {
    try {
        // 1. Fetch Local Attractions
        const localAttractionsPromise = Attraction.find({});

        // 2. Fetch Ticketmaster Venues
        const tmVenuesPromise = fetchTicketmasterVenues('', 'Jalandhar');

        const [localAttractions, tmVenues] = await Promise.all([localAttractionsPromise, tmVenuesPromise]);

        // 3. Merge
        const allAttractions = [...localAttractions, ...tmVenues];

        res.json(allAttractions);
    } catch (error) {
        console.error('Error fetching attractions:', error);
        res.status(500).json({ message: 'Failed to fetch attractions', error: error.message });
    }
};

// @desc    Create an attraction
// @route   POST /api/attractions
// @access  Private/Admin/AttractionManager
const createAttraction = async (req, res) => {
    const { name, description, location, imageUrl, entryFee } = req.body;

    const attraction = new Attraction({
        name,
        description,
        location,
        imageUrl,
        entryFee,
        manager: req.user._id,
    });

    const createdAttraction = await attraction.save();
    res.status(201).json(createdAttraction);
};

// @desc    Update an attraction
// @route   PUT /api/attractions/:id
// @access  Private/Admin/AttractionManager
const updateAttraction = async (req, res) => {
    const { name, description, location, imageUrl, entryFee } = req.body;
    const attraction = await Attraction.findById(req.params.id);

    if (attraction) {
        attraction.name = name || attraction.name;
        attraction.description = description || attraction.description;
        attraction.location = location || attraction.location;
        attraction.imageUrl = imageUrl || attraction.imageUrl;
        attraction.entryFee = entryFee !== undefined ? entryFee : attraction.entryFee;

        const updatedAttraction = await attraction.save();
        res.json(updatedAttraction);
    } else {
        res.status(404).json({ message: 'Attraction not found' });
    }
};

// @desc    Delete an attraction
// @route   DELETE /api/attractions/:id
// @access  Private/Admin/AttractionManager
const deleteAttraction = async (req, res) => {
    const attraction = await Attraction.findById(req.params.id);

    if (attraction) {
        await attraction.deleteOne();
        res.json({ message: 'Attraction removed' });
    } else {
        res.status(404).json({ message: 'Attraction not found' });
    }
};

module.exports = { getAttractions, createAttraction, updateAttraction, deleteAttraction };
