const request = require('supertest');
const app = require('../../src/app');
const truncate = require('../utils/truncate');

describe('Create Movie', () => {
  beforeAll(async () => {
    await truncate();
  });

  it('create movie with a name, censorship, director, and casting', function (done) {
    request(app)
      .post('/movies')
      .send({
        movieName: "Green Book",
        releaseDate: "2020-02-02",
        censorship: true,
        director: "Peter Farrelly",
        casting: [
          "Viggo Mostensen",
          "Mahershala Ali",
          "Linda Cardellini"]
      })
      .set('Accept', 'application/json')
      .expect(201)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });

  it('create movie when the casting is greater than 10', function (done) {
    request(app)
      .post('/movies')
      .send({
        movieName: "Green Book",
        releaseDate: "2020-02-02",
        censorship: true,
        director: "Peter Farrelly",
        casting: [
          "Viggo Mostensen",
          "Mahershala Ali",
          "Linda Cardellini",
          "Dimeter Marinov",
          "Iqbal Theba",
          "Sebastian Maniscalco",
          "P.J. Byne",
          "Tom Virtue",
          "Dennis W. Hall",
          "Randal Gonzalez",
          "Maggie Nixon"
        ]
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404)
      .expect({ "message": "Can not save the movie, the casting is greater than 10" })
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });

  it('create movie with a name, non censorship, director, and casting', function (done) {
    request(app)
      .post('/movies')
      .send({
        movieName: "Bacurau",
        releaseDate: "2020-02-02",
        censorship: false,
        director: "Kleber Mendonça",
        casting: [
          "Sônia Braga",
          "Udo Kier",
          "Bárbara Colen",
          "Silvero Pereira"
        ]
      })
      .set('Accept', 'application/json')
      .expect(201)
      .end(function (err) {
        if (err) return done(err);
        done();
      });
  });

  it('create movie with a name, censorship, director, and maximum casting', function (done) {
    request(app)
      .post('/movies')
      .send({
        movieName: "O Auto da Compadecida",
        releaseDate: "2020-02-02",
        censorship: false,
        director: "Guel Arraes",
        casting: [
          "Matheus Nachtergaele",
          "Selton Mello",
          "Rogério Cardoso",
          "Lima Duarte",
          "Denise Fraga",
          "Diogo Vilela",
          "Paulo Goulart",
          "Virginia Cavendish",
          "Aramis Trindade",
          "Marco Nanini"
        ]
      })
      .set('Accept', 'application/json')
      .expect(201)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });

});
