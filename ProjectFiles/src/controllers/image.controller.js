const Image = require('../models/image.model');
const mongoose = require('mongoose')

/**
 * @api {get} /vips/images/test Tests the api
 * @apiName testimage
 * @apiGroup Images
 * @apiVersion 0.1.0
 * 
 * @apiSuccess {String} success message the controller works
 * 
 * @apiSuccessExample Example data on success
 * {
 *  Greetings from the Images contdroller!
 * }
 * @apiError NameEmptyError The name was empty. 
 * 
 */
exports.test = function (req, res) {
    res.send('Greetings from the Images contdroller!');
};

/**
 * @api {create} /vips/create/ Create an image
 * @apiName createImage
 * @apiGroup Images
 * @apiVersion 0.1.0
 * 
 * @apiParam {String} name Name of the image
 * @apiParam {String} duration Duration of the image
 * @apiParam {String} thumbnail Thumbnail of the image 
 * @apiParam {String} description Description of the image
 * @apiPermission admin
 * 
 * @apiSuccess {Id} Id The id of the created image
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
 *           "_message": "image validation failed",
 *           "message": "image validation failed: name: Path `name` is required.",
 *           "name": "ValidationError"
 *      }
 */
exports.image_create = function (req, res) {
    var imageId = mongoose.Types.ObjectId();

    let image = new Image({
        _id : imageId,
        name: req.body.name,
        duration: req.body.duration,
        thumbnail: req.body.thumbnail,
        description: req.body.description
    });

    image.save(function (err) {
        res.set('Content-Type', 'application/json');
        
        if (err) {
            return res.status(400).send(err);
        }
        
        res.send({
            'Id' : imageId
        })
    })
};

/**
 * @api {getImageDetails} /vips/images/id Get details of an image
 * @apiName getImageDetails
 * @apiGroup Images
 * @apiVersion 0.1.0
 * 
 * @apiParam {String} Id Id of the image that will be returned
 * @apiPermission none
 * 
 * @apiSuccess {String} name Name of the image
 * @apiSuccess {String} duration Duration of the image
 * @apiSuccess {String} thumbnail Thumbnail of the image 
 * @apiSuccess {String} description Description of the image
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
 * @apiError ImageWasNotFound The id of the User was not found.
 * @apiErrorExample MissingImage:
 *      HTTP/1.1 400 Bad request
 *      {
 *          "message": "Image not found"
 *      }
 * @apiErrorExample InternalError:
 *      HTTP/1.1 500 Internal error
 *      {  
 *          "message": {
 *                      "Cast to ObjectId failed for value \"test\" at path \"_id\" for model \"Image\"",
 *                      "name": "CastError",
 *                      "stringValue": "\"test\"",
 *                      "kind": "ObjectId",
 *                      "value": "test",
 *                      "path": "_id"
 *                     }
 *      }
 */
exports.image_details = function (req, res) {
    Image.findById(req.params.id, function (err, image) {
        if(image == null || image === ""){
            return res.status(400).send({
                'message' : 'Image not found'
            }); 
        }

        if (err){
            return res.status(500).send({
                'message' : err
            });
        } 
        res.send(image);
    })
};

/**
 * @api {updateImage} /vips/images/id/update Update an image
 * @apiName updateImage
 * @apiGroup Images
 * @apiVersion 0.1.0
 * 
 * @apiParam {String} Id Id of the Image that will be updated
 * @apiPermission admin
 * 
 * @apiSuccess {String} name Name of the image
 * @apiSuccess {String} duration Duration of the image
 * @apiSuccess {String} thumbnail Thumbnail of the image 
 * @apiSuccess {String} description Description of the image
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
 * @apiError ImageWasNotFound The id of the User was not found.
 * @apiErrorExample Missingimage:
 *      HTTP/1.1 400 Bad request
 *      {
 *          "message": "image not found"
 *      }
 * @apiErrorExample InternalError:
 *      HTTP/1.1 500 Internal error
 *      {  
 *          "message": {
 *                      "Cast to ObjectId failed for value \"test\" at path \"_id\" for model \"image\"",
 *                      "name": "CastError",
 *                      "stringValue": "\"test\"",
 *                      "kind": "ObjectId",
 *                      "value": "test",
 *                      "path": "_id"
 *                     }
 *      }
 */
exports.image_update = function (req, res) {
    Image.findById(req.params.id, function(err, image){
        if(image == null){
            return res.status(400).send({
                'message' : 'image not found'
            });
        }

        image.set(req.body);
        image.save(function (err, updatedimage) {
            if (err) {
                return res.status(500).send(err);
            }

            res.send(updatedimage);
          });
    })
};

/**
 * @api {delete} /vips/images/id/delete Deletes an image
 * @apiName deleteimage
 * @apiGroup Images
 * @apiVersion 0.1.0
 * 
 * @apiParam {String} Id Id of the image that will be deleted
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
 *                      "Cast to ObjectId failed for value \"test\" at path \"_id\" for model \"image\"",
 *                      "name": "CastError",
 *                      "stringValue": "\"test\"",
 *                      "kind": "ObjectId",
 *                      "value": "test",
 *                      "path": "_id"
 *                     }
 *      }
 */
exports.image_delete = function (req, res) {
    Image.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.status(400).send({
                'message' : "image was not found"
            });
        }

        res.status(200).send({
            'message' : 'Delete was with success'
        });
    })
};