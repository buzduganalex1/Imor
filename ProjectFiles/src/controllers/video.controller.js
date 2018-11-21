const Video = require('../models/video.model');

/**
 * @api {get} /vips/videos/test Tests the api
 * @apiName testVideo
 * @apiGroup videos
 * @apiVersion 0.1.0
 * 
 * @apiSuccess {String} success message the controller works
 * 
 * @apiSuccessExample Example data on success
 * {
 *  Greetings from the Video contdroller!
 * }
 * @apiError NameEmptyError The name was empty. 
 * 
 */
exports.test = function (req, res) {
    res.send('Greetings from the Video contdroller!');
};

exports.video_create = function (req, res) {
    let video = new Video(
        {
            name: req.body.name,
            duration: req.body.duration,
            thumbnail : req.body.thumbnail,
            description: req.body.description
        }
    );

    video.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Video Created successfully')
    })
};

exports.video_details = function (req, res) {
    video.findById(req.params.id, function (err, video) {
        if (err) return next(err);
        res.send(video);
    })
};

exports.video_update = function (req, res) {
    video.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, video) {
        if (err) return next(err);
        res.send('Video udpated.');
    });
};

exports.video_delete = function (req, res) {
    video.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

exports.video_sparql_endpoint =function (req, res){
    const {SparqlClient, SPARQL} = require('sparql-client-2');

    const client =
      new SparqlClient('http://data.nobelprize.org/sparql')
        .register({
          db: 'http://dbpedia.org/resource/',
          dbo: 'http://dbpedia.org/ontology/',
          dbpediaowl: 'http://dbpedia.org/ontology/'
        });
        
        client.query(req.params.queryString).execute().then(queryResult => res.send(queryResult))
}