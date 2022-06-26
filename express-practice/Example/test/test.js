process.env.NODE_ENV = 'test';

const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../index');

chai.use(chaiHttp);

describe('GET members', () => {
    it('Return all members', (done) => {
        chai.request(server)
        .get('/api/members')
        .end((err,res) => {
            res.should.have.status(200);
            //should.exist(res);
            res.body.should.be.a('array');
        done();
        })
    })
})

describe('GET /api/members/:id', () => {
    it('Return a single member by its id', (done) => {
        const id = 1;
        chai.request(server)
        .get('/api/members/' + id)
        .end((err,res) => {
            res.should.have.status(200);
            res.body[0].should.have.property('name');
            res.body[0].should.have.property('email');
            res.body[0].should.have.property('status');
            res.body.length.should.be.eq(1);
        done();
        })
    })
});

describe('POST /api/members/', () => {
    it('Create member', (done) => {
        let member = {
            name: 'Will Smith',
            email: 'will@gmail.com'
        };
        chai.request(server)
        .post('/api/members/')
        .send(member)
        .end((err,res) => {
            res.should.have.status(200);
            //res.body.should.be.a('object');
            res.body[res.body.length-1].should.have.property('name').equal(member.name);
            res.body[res.body.length-1].should.have.property('email').equal(member.email);
            res.body[res.body.length-1].should.have.property('status').equal('active');
        done();
        })
    })
});

describe('PUT /api/members/:id', () => {
    it('Update member', (done) => {
        let id = 1;
        let member = {
            id: 1,
            name: 'Johnny Depth',
            email: 'johnyd@gmail.com',
            status: 'inactive'
        }
        chai.request(server)
        .put('/api/members/' + id)
        .send(member)
        .end((err,res) => {
            res.should.have.status(200);
            res.body.should.have.property('msg').equal('Member updated');
        done();
        })
    })
})

describe('DELETE /api/members/:id', () => {
    it('Delete a member by id', (done) => {
        let id = 1;
        chai.request(server)
        .delete('/api/members/' + id)
        .end((err,res) => {
            res.should.have.status(200);
            res.body.should.have.property('msg').equal('Member deleted');
            res.body.should.have.property('members');
        done();
        })
    })
})