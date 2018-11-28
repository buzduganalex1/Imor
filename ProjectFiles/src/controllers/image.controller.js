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
 * @apiParam {String} type Type of the image 
 * @apiParam {String} contentUrl url of the image
 * @apiParam {String} author Author of the image
 * @apiParam {String} contentLocation The location of the content in the picture 
 * @apiParam {Date} datePublished The date the image was publised 
 * @apiParam {String} description Description of the image
 * @apiParamExample {json} Request-Example
 *       {
 *           "_id": "5bfe4ce90d61243bdc56555f",
 *           "name": "Beach in Mexico",
 *           "type": "ImageObject",
 *           "contentUrl": "mexico-beach.jpg",
 *           "author": "Jane Doe",
 *           "contentLocation": "Puerto Vallarta, Mexico",
 *           "datePublished": "2018-01-25",
 *           "description": "I took this picture while on vacation last year.",
 *           "__v": 0
 *       }
 * @apiPermission admin
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Content-Type" : "application/json",
 *       "Authorization" : "example token"
 *     }
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
        type: req.body.type,
        contentUrl: req.body.contentUrl,
        author: req.body.author,
        contentLocation : req.body.contentLocation,
        datePublished : req.body.datePublished,
        description : req.body.description
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
 * 
 * @apiPermission none
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Content-Type" : "application/json",
 *       "Authorization" : "example token"
 *     }
 * 
 * @apiSuccess {String} name Name of the image
 * @apiSuccess {String} type Type of the image 
 * @apiSuccess {String} contentUrl url of the image
 * @apiSuccess {String} author Author of the image
 * @apiSuccess {String} contentLocation The location of the content in the picture 
 * @apiSuccess {Date} datePublished The date the image was publised 
 * @apiSuccess {String} description Description of the image
 * 
 * @apiSuccessExample Example data on success
 *      HTTP/1.1 200 OK
 *       {
 *           "_id": "5bfe4ce90d61243bdc56555f",
 *           "name": "Beach in Mexico",
 *           "type": "ImageObject",
 *           "contentUrl": "mexico-beach.jpg",
 *           "author": "Jane Doe",
 *           "contentLocation": "Puerto Vallarta, Mexico",
 *           "datePublished": "2018-01-25",
 *           "description": "I took this picture while on vacation last year.",
 *           "__v": 0
 *       }
 * 
 * @apiError ImageWasNotFound The id of the image was not found.
 * @apiErrorExample MissingImage
 *      HTTP/1.1 400 Bad request
 *      {
 *          "message": "Image not found"
 *      }
 * @apiError InternalErrorOnGetDetails The system failed to get an image.
 * @apiErrorExample InternalErrorOnGetDetails
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
 * @apiParamExample {json} Request-Example
 *       {
 *           "_id": "5bfe4ce90d61243bdc56555f",
 *           "name": "Beach in Mexico 2",
 *           "type": "ImageObject",
 *           "contentUrl": "mexico-beach.jpg",
 *           "author": "Jane Doe",
 *           "contentLocation": "Puerto Vallarta, Mexico",
 *           "datePublished": "2018-01-25",
 *           "description": "I took this picture while on vacation last year.",
 *           "__v": 0
 *       }
 * @apiPermission admin
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Content-Type" : "application/json",
 *       "Authorization" : "example token"
 *     }
 * 
 * @apiSuccess {String} name Name of the image
 * @apiSuccess {String} type Type of the image 
 * @apiSuccess {String} contentUrl url of the image
 * @apiSuccess {String} author Author of the image
 * @apiSuccess {String} contentLocation The location of the content in the picture 
 * @apiSuccess {Date} datePublished The date the image was publised 
 * @apiSuccess {String} description Description of the image
 * 
 * @apiSuccessExample Example data on success
 *      HTTP/1.1 200 OK
 *       {
 *           "_id": "5bfe4ce90d61243bdc56555f",
 *           "name": "Beach in Mexico again 2",
 *           "type": "ImageObject",
 *           "contentUrl": "mexico-beach.jpg",
 *           "author": "Jane Doe",
 *           "contentLocation": "Puerto Vallarta, Mexico",
 *           "datePublished": "2018-01-25",
 *           "description": "I took this picture while on vacation last year.",
 *           "__v": 0
 *       }
 * 
 * @apiError ImageWasNotFound The id of the image was not found.
 * @apiErrorExample Missingimage
 *      HTTP/1.1 400 Bad request
 *      {
 *          "message": "image not found"
 *      }
 * @apiError InternalErrorOnUpdate Failed to updated due to internal errors.
 * @apiErrorExample InternalErrorOnUpdate
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
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Content-Type" : "application/json",
 *       "Authorization" : "example token"
 *     }
 * 
 * @apiSuccess {String} message An informative message
 * 
 * @apiSuccessExample Example data on success
 *      HTTP/1.1 200 OK
 *      {  
 *          'message' : 'Success'
 *      }
 * 
 * @apiError ImageNotFound The id of the image was not found.
 * @apiErrorExample ImageNotFound
 *      HTTP/1.1 400 Bad request
 *      {
 *          "message": "Image was not found"
 *      }
 * 
 * @apiError InternalErrorOnDelete Internal error on deletion.
 * @apiErrorExample InternalErrorOnDelete
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

/**
 * @api {get} /vips/images Gets all images
 * @apiName getImages
 * @apiGroup Images
 * @apiVersion 0.1.0
 * 
 * @apiParam {String} query The sparql query used for interogation
 * @apiParam {String[]} prefixes The prefixes that it will contain
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Content-Type" : "application/json",
 *       "Authorization" : "example token"
 *     }
 * 
 * @apiSuccess {String[]} images All images that satisfy the query
 * 
 * @apiSuccessExample Example data on success
 *      HTTP/1.1 200 OK
 *      {  
 *         "images": [
 *              {
 *                   "_id": "5bfe4ce90d61243bdc56555d",
 *                   "name": "Beach in Mexico 1",
 *                   "type": "ImageObject",
 *                   "contentUrl": "mexico-beach.jpg",
 *                   "author": "Jane Doe",
 *                   "contentLocation": "Puerto Vallarta, Mexico",
 *                   "datePublished": "2018-01-25",
 *                   "description": "I took this picture while on vacation last year.",
 *                   "__v": 0
 *               },
 *                               {
 *                   "_id": "5bfe4ce90d61243bdc56555g",
 *                   "name": "Beach in Mexico 2",
 *                   "type": "ImageObject",
 *                   "contentUrl": "mexico-beach.jpg",
 *                   "author": "Jane Doe",
 *                   "contentLocation": "Puerto Vallarta, Mexico",
 *                   "datePublished": "2018-01-25",
 *                   "description": "I took this picture while on vacation last year.",
 *                   "__v": 0
 *               },
 *               {
 *                   "_id": "5bfe4ce90d61243bdc56555q",
 *                   "name": "Beach in Mexico 3",
 *                   "type": "ImageObject",
 *                   "contentUrl": "mexico-beach.jpg",
 *                   "author": "Jane Doe",
 *                   "contentLocation": "Puerto Vallarta, Mexico",
 *                   "datePublished": "2018-01-25",
 *                   "description": "I took this picture while on vacation last year.",
 *                   "__v": 0
 *               }
 *          ]
 *      }
 * @apiError MissingPrefixes The prefixes are missing.
 * @apiErrorExample MissingPrefixes
 *      HTTP/1.1 400 BadRequest
 *      {  
 *          "message": {
 *                          "Prefixes are missing"
 *                     }
 *      }
 */
exports.image_query = function (req, res) {
};