module.exports = {
    dragonTreasure: async (req, res) => {
        const dragonTreasure = await req.app.get('db').get_dragon_treasure(1)
        return res.status(200).send(dragonTreasure)
    },
    getUserTreasure: async (req, res) => {
        const getUserTreasure = await req.app.get('db').get_user_treasure(req.session.user.user_id);
        return res.status(200).send(getUserTreasure);
    },
    addUserTreasure: async (req, res) => {
        const { treasureURL } = req.body;
        const { id } = req.session.user;
        const userTreasure = await req.app.get('db').add_user_treasure([treasureURL, id]);
        return res.status(200).send(userTreasure)
    },
    getAllTreasure: async (req, res) => {
        const getAllTreasure = await req.app.get('db').get_all_treasure()
        return res.status(200).send(getAllTreasure)
    },
};