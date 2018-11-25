const Video = require('../models/video.model');
const mongoose = require('mongoose')

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

/**
 * @api {create} /vips/create/ Create a video
 * @apiName createVideo
 * @apiGroup videos
 * @apiVersion 0.1.0
 * 
 * @apiParam {String} name Name of the video
 * @apiParam {String} duration Duration of the video
 * @apiParam {String} thumbnail Thumbnail of the video 
 * @apiParam {String} description Description of the video
 * @apiPermission admin
 * 
 * @apiSuccess {Id} Id The id of the created video
 * 
 * @apiSuccessExample Example data on success
 *      HTTP/1.1 200 OK
 *      {  
 *          "Id": "5bfa48127f7ea73004e59575"
 *      }
 * 
 * @apiError MissingParameterException There was an missing parameter
 * @apiErrorExample Error-Response:
 *      HTTP/1.1 400 Bad request
 *      {
 *           "errors": {
 *               "name": {
 *                   "message": "Path `name` is required.",
 *                   "name": "ValidatorError",
 *                   "properties": {
 *                       "message": "Path `name` is required.",
 *                       "type": "required",
 *                       "path": "name",
 *                       "value": ""
 *                   },
 *                   "kind": "required",
 *                   "path": "name",
 *                   "value": ""
 *               }
 *           },
 *           "_message": "Video validation failed",
 *           "message": "Video validation failed: name: Path `name` is required.",
 *           "name": "ValidationError"
 *      }
 */
exports.video_create = function (req, res) {
    var videoId = mongoose.Types.ObjectId();

    let video = new Video({
        _id : videoId,
        name: req.body.name,
        duration: req.body.duration,
        thumbnail: req.body.thumbnail,
        description: req.body.description
    });

    video.save(function (err) {
        res.set('Content-Type', 'application/json');
        
        if (err) {
            return res.status(400).send(err);
        }
        
        res.send({
            'Id' : videoId
        })
    })
};

/**
 * @api {getVideoDetails} /vips/videos/id Get a video details
 * @apiName getVideoDetails
 * @apiGroup videos
 * @apiVersion 0.1.0
 * 
 * @apiParam {String} Id Id of the video that will be returned
 * @apiPermission none
 * 
 * @apiSuccess {String} name Name of the video
 * @apiSuccess {String} duration Duration of the video
 * @apiSuccess {String} thumbnail Thumbnail of the video 
 * @apiSuccess {String} description Description of the video
 * 
 * @apiSuccessExample Example data on success
 *      HTTP/1.1 200 OK
 *       {
 *           "_id": "5bfa4f4a33f6a2091007450c",
 *           "name": "apples",
 *           "duration": "100",
 *           "description": "test",
 *           "__v": 0
 *       }
 * 
 * @apiError VideoWasNotFound The id of the User was not found.
 * @apiErrorExample MissingVideo:
 *      HTTP/1.1 400 Bad request
 *      {
 *          "message": "Video not found"
 *      }
 * @apiErrorExample InternalError:
 *      HTTP/1.1 500 Internal error
 *      {  
 *          "message": {
 *                      "Cast to ObjectId failed for value \"test\" at path \"_id\" for model \"Video\"",
 *                      "name": "CastError",
 *                      "stringValue": "\"test\"",
 *                      "kind": "ObjectId",
 *                      "value": "test",
 *                      "path": "_id"
 *                     }
 *      }
 */
exports.video_details = function (req, res) {
    Video.findById(req.params.id, function (err, video) {
        if(video == null || video === ""){
            return res.status(400).send({
                'message' : 'Video not found'
            }); 
        }

        if (err){
            return res.status(500).send({
                'message' : err
            });
        } 
        res.send(video);
    })
};

/**
 * @api {updateVideo} /vips/videos/id/update Update a video
 * @apiName updateVideo
 * @apiGroup videos
 * @apiVersion 0.1.0
 * 
 * @apiParam {String} Id Id of the video that will be updated
 * @apiPermission admin
 * 
 * @apiSuccess {String} name Name of the video
 * @apiSuccess {String} duration Duration of the video
 * @apiSuccess {String} thumbnail Thumbnail of the video 
 * @apiSuccess {String} description Description of the video
 * 
 * @apiSuccessExample Example data on success
 *      HTTP/1.1 200 OK
 *       {
 *           "_id": "5bfa4f4a33f6a2091007450c",
 *           "name": "apples",
 *           "duration": "120",
 *           "description": "test",
 *           "__v": 0
 *       }
 * 
 * @apiError VideoWasNotFound The id of the User was not found.
 * @apiErrorExample MissingVideo:
 *      HTTP/1.1 400 Bad request
 *      {
 *          "message": "Video not found"
 *      }
 * @apiErrorExample InternalError:
 *      HTTP/1.1 500 Internal error
 *      {  
 *          "message": {
 *                      "Cast to ObjectId failed for value \"test\" at path \"_id\" for model \"Video\"",
 *                      "name": "CastError",
 *                      "stringValue": "\"test\"",
 *                      "kind": "ObjectId",
 *                      "value": "test",
 *                      "path": "_id"
 *                     }
 *      }
 */
exports.video_update = function (req, res) {
    Video.findById(req.params.id, function(err, video){
        if(video == null){
            return res.status(400).send({
                'message' : 'Video not found'
            });
        }

        video.set(req.body);
        video.save(function (err, updatedVideo) {
            if (err) {
                return res.status(500).send(err);
            }

            res.send(updatedVideo);
          });
    })
};

/**
 * @api {delete} /vips/videos/id/delete Deletes an video
 * @apiName deleteVideo
 * @apiGroup videos
 * @apiVersion 0.1.0
 * 
 * @apiParam {String} Id Id of the video that will be deleted
 * @apiPermission admin
 * 
 * @apiSuccess {String} message An informative message
 * 
 * @apiSuccessExample Example data on success
 *      HTTP/1.1 200 OK
 *      {  
 *          'message' : 'Success'
 *      }
 * 
 * @apiError UserNotFound The id of the User was not found.
 * @apiErrorExample Error-Response:
 *      HTTP/1.1 400 Bad request
 *      {  
 *          "message": {
 *                      "Cast to ObjectId failed for value \"test\" at path \"_id\" for model \"Video\"",
 *                      "name": "CastError",
 *                      "stringValue": "\"test\"",
 *                      "kind": "ObjectId",
 *                      "value": "test",
 *                      "path": "_id"
 *                     }
 *      }
 */
exports.video_delete = function (req, res) {
    Video.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.status(400).send({
                'message' : "Video was not found"
            });
        }

        res.status(200).send({
            'message' : 'Delete was with success'
        });
    })
};