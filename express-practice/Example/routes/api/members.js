const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const members = require('../../Members');
const { check, validationResult } = require('express-validator');

const creation_checks = [
  check("email").custom((val) => {
    console.log(val);
    return true;
  }).notEmpty().withMessage("User must have an email").bail()
    .isString().isEmail().withMessage("Email must be valid"),
  check("name").notEmpty().withMessage("User must have a name").bail().isString()
];

const idFilter = req => member => member.id === parseInt(req.params.id);

// Gets All Members
router.get('/', (req, res) => res.json(members));

// Get Single Member
router.get('/:id', (req, res) => {
  const found = members.some(idFilter(req));

  if (found) {
    res.json(members.filter(idFilter(req)));
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

// Create Member
router.post('/', creation_checks, (req, res) => {

  console.log(req.body);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
  }

  const newMember = {
    ...req.body,
    id: uuid.v4(),
    status: 'active'
  };

  members.push(newMember);
  res.json(members);
  // res.redirect('/');
});

// Update Member
router.put('/:id', check("email").optional().isEmail(), (req, res) => {

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
  }

  const found = members.some(idFilter(req));

  if (found) {
    members.forEach((member, i) => {
      if (idFilter(req)(member)) {

        const updMember = {...member, ...req.body};
        members[i] = updMember
        res.json({ msg: 'Member updated', updMember });
      }
    });
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

// Delete Member
router.delete('/:id', (req, res) => {
  const found = members.some(idFilter(req));

  if (found) {
    res.json({
      msg: 'Member deleted',
      members: members.filter(member => !idFilter(req)(member))
    });
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

module.exports = router;