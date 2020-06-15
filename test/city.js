const chai = require('chai');
const chaiHttp = require('chai-http');
let server = require("../index")

chai.should();

chai.use(chaiHttp);


describe('Cities API', () => {
    // Get all cities
    describe('GET /gradovi', () => {
        it('It should get all the cities', (done) => {
            chai.request(server)
                .get("/gradovi")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.equal(3);
                    done();
                });
        });
    });

    // Get by id rout
    describe('GET /gradovi/:id', () => {
        it('It should get firs city in a db Kakanj', (done) => {
            chai.request(server)
                .get("/gradovi/1")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('naziv').equal('Kakanj');
                    done();
                });
        });
    });

    // Post city
    describe('POST /gradovi', () => {
        it('It should add a new city', (done) => {
            const body = {
                grad: {
                    naziv: "Bihac",
                    brojStanovnika: 330000
                }
            }
            chai.request(server)
                .post("/gradovi")
                .send(body)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('naziv').equal('Bihac');
                    res.body.should.have.property('id').equal(4);
                    done();
                });
        });
    });

}); 
