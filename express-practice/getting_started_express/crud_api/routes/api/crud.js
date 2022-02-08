const express = require('express');
const path = require('path');
const uuid = require('uuid');
const members = require('../../members');
const router = express.Router();

// Getting all members
router.get('/', (req, res) => res.json(members));

// Getting single member (: precedes params)
router.get('/:id', (req, res) => {
    // finding if the member is present
    const found = members.some(member => member.id === parseInt(req.params.id));

    // returning the specific member
    if (found)
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    // returning bad request err
    else
        res.status(400).json({ msg: `No member with the id of ${req.params.id}` })
});

// Posting a member
router.post('/', (req, res) => {
    // creating new member
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }

    // checking member name and email
    if (!newMember.name || !newMember.email) {
        res.status(400).json(({ msg: 'Please include a name and email'} ))
    } else {
        members.push(newMember);
        res.send(members);
    }
});

// Updating a member
router.put('/:id', (req, res) => {
    // finding if the member is present
    const found = members.some(member => member.id === parseInt(req.params.id));

    // updating a specific member
    if (found) {
        const updMember = req.body;
        members.forEach(member => {
            if (member.id === parseInt(req.params.id)) {
                member.name = updMember.name ? updMember.name : member.name;
                member.email = updMember.email ? updMember.email: member.email;

                res.json({ msg: 'Member updated', member })
            }
        });
    }
    // returning bad request err
    else
        res.status(400).json({ msg: `No member with the id of ${req.params.id}` })
});

// Deleting a member
router.delete('/:id', (req, res) => {
    // finding if the member is present
    const found = members.some(member => member.id === parseInt(req.params.id));

    // deleting the specific member
    if (found) {
        // members = members.filter(member => member.id !== parseInt(req.params.id));
        // true delete ^^^
        res.json({
            msg: 'Member deleted',
            members: members.filter(member => member.id !== parseInt(req.params.id))
        });
    }
    // returning bad request err
    else
        res.status(400).json({ msg: `No member with the id of ${req.params.id}` })
});

module.exports = router;
