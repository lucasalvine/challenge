const request = require('supertest');
const app = require('../../src/app');
const truncate = require('../utils/truncate');

describe('Find Movie', () => {
  afterAll(async () => {
    await truncate();
  });
  it('find movie by true censorship', function (done) {
    request(app)
      .get('/movies')
      .query({ censorship: true })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });

  it('find movie by false censorship', function (done) {
    request(app)
      .get('/movies')
      .query({ censorship: false })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});