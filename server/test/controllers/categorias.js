var should = require('should');
var request = require('supertest');
var server = require('../../index');

describe('controllers', function() {

  describe('categorias', function() {

    describe('GET /categorias', function() {

        it('should return a json array', function(done) {

            request(server)
                .get('/categorias')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .end(function(err, res) {
                    should.not.exist(err);

                    should.exist(res.body);

                    done();
                });
        });

        it('should return an xml doc', function(done) {

            request(server)
                .get('/categorias')
                .set('Accept', 'application/xml')
                .expect('Content-Type', /xml/)
                .expect(200)
                .end(function(err, res) {
                    should.not.exist(err);

                    should.exist(res.body);

                    done();
                });
        });

        it('should return an html doc', function(done) {

            request(server)
                .get('/categorias')
                .set('Accept', 'text/html')
                .expect('Content-Type', /html/)
                .expect(200)
                .end(function(err, res) {
                    should.not.exist(err);

                    should.exist(res.body);

                    done();
                });
        });

    });

    describe('GET /categorias/{categoriaId}', function() {

      it('should return an object by its id', function(done) {
        var id = '58dacc09ae99b5415be48314';

        request(server)
          .get('/categorias/' + id)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            should.exist(res.body.id);
            res.body.id.should.equal(id);

            done();
          });
      });

    });

  });

});
