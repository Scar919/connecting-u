const router = require('express').Router();
const { 
    getAllUsers, 
    getUserById, 
    createUser, 
    updateUser, 
    deleteUser, 
    createFriend, 
    deleteFriend } = require('../../controllers/user-controller');

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.post('/:userId/friends/:friendId', createFriend);
router.delete('/:userId/friends/:friendId', deleteFriend);

module.exports = router;