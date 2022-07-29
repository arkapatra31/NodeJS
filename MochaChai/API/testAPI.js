const chai = require('chai');
const app = require('./server');
const chaiHttp = require('chai-http');

chai.should();
chai.use(chaiHttp);

chai.use(chaiHttp);

describe("API Tests", () => {

    //TEST SUITE FOR GET METHOD
    describe('GET ROUTES', () => {
        describe('/', () => {
            it("GET INDEX PAGE", (done) => {
                chai.request(app).get('/')
                    .end((err, resp) => {
                        resp.should.have.status(200);
                        resp.should.be.a('string');
                        done();    
                    });
                
            });
        });

        // describe('/users', () => {

        // });
    });

    //TEST SUITE FOR POST METHOD


})