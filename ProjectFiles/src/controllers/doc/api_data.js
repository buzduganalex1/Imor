define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "C__GitRepositories_Vips_ProjectFiles_src_controllers_doc_main_js",
    "groupTitle": "C__GitRepositories_Vips_ProjectFiles_src_controllers_doc_main_js",
    "name": ""
  },
  {
    "type": "create",
    "url": "/vips/create/",
    "title": "Create an image",
    "name": "createImage",
    "group": "Images",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the image</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type of the image</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contentUrl",
            "description": "<p>url of the image</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>Author of the image</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contentLocation",
            "description": "<p>The location of the content in the picture</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "datePublished",
            "description": "<p>The date the image was publised</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the image</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n    \"_id\": \"5bfe4ce90d61243bdc56555f\",\n    \"name\": \"Beach in Mexico\",\n    \"type\": \"ImageObject\",\n    \"contentUrl\": \"mexico-beach.jpg\",\n    \"author\": \"Jane Doe\",\n    \"contentLocation\": \"Puerto Vallarta, Mexico\",\n    \"datePublished\": \"2018-01-25\",\n    \"description\": \"I took this picture while on vacation last year.\",\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Content-Type\" : \"application/json\",\n  \"Authorization\" : \"example token\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Id",
            "optional": false,
            "field": "Id",
            "description": "<p>The id of the created image</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": "HTTP/1.1 200 OK\n{  \n    \"Id\": \"5bfa48127f7ea73004e59575\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingParameterException",
            "description": "<p>There was an missing parameter</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad request\n{\n     \"errors\": {\n         \"name\": {\n             \"message\": \"Path `name` is required.\",\n             \"name\": \"ValidatorError\",\n             \"properties\": {\n                 \"message\": \"Path `name` is required.\",\n                 \"type\": \"required\",\n                 \"path\": \"name\",\n                 \"value\": \"\"\n             },\n             \"kind\": \"required\",\n             \"path\": \"name\",\n             \"value\": \"\"\n         }\n     },\n     \"_message\": \"image validation failed\",\n     \"message\": \"image validation failed: name: Path `name` is required.\",\n     \"name\": \"ValidationError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./image.controller.js",
    "groupTitle": "Images"
  },
  {
    "type": "delete",
    "url": "/vips/images/id/delete",
    "title": "Deletes an image",
    "name": "deleteimage",
    "group": "Images",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Id",
            "description": "<p>Id of the image that will be deleted</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Content-Type\" : \"application/json\",\n  \"Authorization\" : \"example token\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>An informative message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": "HTTP/1.1 200 OK\n{  \n    'message' : 'Success'\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ImageNotFound",
            "description": "<p>The id of the image was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalErrorOnDelete",
            "description": "<p>Internal error on deletion.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "ImageNotFound",
          "content": "HTTP/1.1 400 Bad request\n{\n    \"message\": \"Image was not found\"\n}",
          "type": "json"
        },
        {
          "title": "InternalErrorOnDelete",
          "content": "HTTP/1.1 500 Internal error\n{  \n    \"message\": {\n                \"Cast to ObjectId failed for value \\\"test\\\" at path \\\"_id\\\" for model \\\"image\\\"\",\n                \"name\": \"CastError\",\n                \"stringValue\": \"\\\"test\\\"\",\n                \"kind\": \"ObjectId\",\n                \"value\": \"test\",\n                \"path\": \"_id\"\n               }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./image.controller.js",
    "groupTitle": "Images"
  },
  {
    "type": "getImageDetails",
    "url": "/vips/images/id",
    "title": "Get details of an image",
    "name": "getImageDetails",
    "group": "Images",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Id",
            "description": "<p>Id of the image that will be returned</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Content-Type\" : \"application/json\",\n  \"Authorization\" : \"example token\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the image</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type of the image</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contentUrl",
            "description": "<p>url of the image</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>Author of the image</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contentLocation",
            "description": "<p>The location of the content in the picture</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "datePublished",
            "description": "<p>The date the image was publised</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the image</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": "HTTP/1.1 200 OK\n {\n     \"_id\": \"5bfe4ce90d61243bdc56555f\",\n     \"name\": \"Beach in Mexico\",\n     \"type\": \"ImageObject\",\n     \"contentUrl\": \"mexico-beach.jpg\",\n     \"author\": \"Jane Doe\",\n     \"contentLocation\": \"Puerto Vallarta, Mexico\",\n     \"datePublished\": \"2018-01-25\",\n     \"description\": \"I took this picture while on vacation last year.\",\n     \"__v\": 0\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ImageWasNotFound",
            "description": "<p>The id of the image was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalErrorOnGetDetails",
            "description": "<p>The system failed to get an image.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "MissingImage",
          "content": "HTTP/1.1 400 Bad request\n{\n    \"message\": \"Image not found\"\n}",
          "type": "json"
        },
        {
          "title": "InternalErrorOnGetDetails",
          "content": "HTTP/1.1 500 Internal error\n{  \n    \"message\": {\n                \"Cast to ObjectId failed for value \\\"test\\\" at path \\\"_id\\\" for model \\\"Image\\\"\",\n                \"name\": \"CastError\",\n                \"stringValue\": \"\\\"test\\\"\",\n                \"kind\": \"ObjectId\",\n                \"value\": \"test\",\n                \"path\": \"_id\"\n               }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./image.controller.js",
    "groupTitle": "Images"
  },
  {
    "type": "get",
    "url": "/vips/images",
    "title": "Gets all images",
    "name": "getImages",
    "group": "Images",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>The sparql query used for interogation</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "prefixes",
            "description": "<p>The prefixes that it will contain</p>"
          }
        ]
      }
    },
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Content-Type\" : \"application/json\",\n  \"Authorization\" : \"example token\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "images",
            "description": "<p>All images that satisfy the query</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": "HTTP/1.1 200 OK\n{  \n   \"images\": [\n        {\n             \"_id\": \"5bfe4ce90d61243bdc56555d\",\n             \"name\": \"Beach in Mexico 1\",\n             \"type\": \"ImageObject\",\n             \"contentUrl\": \"mexico-beach.jpg\",\n             \"author\": \"Jane Doe\",\n             \"contentLocation\": \"Puerto Vallarta, Mexico\",\n             \"datePublished\": \"2018-01-25\",\n             \"description\": \"I took this picture while on vacation last year.\",\n             \"__v\": 0\n         },\n                         {\n             \"_id\": \"5bfe4ce90d61243bdc56555g\",\n             \"name\": \"Beach in Mexico 2\",\n             \"type\": \"ImageObject\",\n             \"contentUrl\": \"mexico-beach.jpg\",\n             \"author\": \"Jane Doe\",\n             \"contentLocation\": \"Puerto Vallarta, Mexico\",\n             \"datePublished\": \"2018-01-25\",\n             \"description\": \"I took this picture while on vacation last year.\",\n             \"__v\": 0\n         },\n         {\n             \"_id\": \"5bfe4ce90d61243bdc56555q\",\n             \"name\": \"Beach in Mexico 3\",\n             \"type\": \"ImageObject\",\n             \"contentUrl\": \"mexico-beach.jpg\",\n             \"author\": \"Jane Doe\",\n             \"contentLocation\": \"Puerto Vallarta, Mexico\",\n             \"datePublished\": \"2018-01-25\",\n             \"description\": \"I took this picture while on vacation last year.\",\n             \"__v\": 0\n         }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingPrefixes",
            "description": "<p>The prefixes are missing.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "MissingPrefixes",
          "content": "HTTP/1.1 400 BadRequest\n{  \n    \"message\": {\n                    \"Prefixes are missing\"\n               }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./image.controller.js",
    "groupTitle": "Images"
  },
  {
    "type": "get",
    "url": "/vips/images/test",
    "title": "Tests the api",
    "name": "testimage",
    "group": "Images",
    "version": "0.1.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>message the controller works</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": "{\n Greetings from the Images contdroller!\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NameEmptyError",
            "description": "<p>The name was empty.</p>"
          }
        ]
      }
    },
    "filename": "./image.controller.js",
    "groupTitle": "Images"
  },
  {
    "type": "updateImage",
    "url": "/vips/images/id/update",
    "title": "Update an image",
    "name": "updateImage",
    "group": "Images",
    "version": "0.1.0",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n    \"_id\": \"5bfe4ce90d61243bdc56555f\",\n    \"name\": \"Beach in Mexico 2\",\n    \"type\": \"ImageObject\",\n    \"contentUrl\": \"mexico-beach.jpg\",\n    \"author\": \"Jane Doe\",\n    \"contentLocation\": \"Puerto Vallarta, Mexico\",\n    \"datePublished\": \"2018-01-25\",\n    \"description\": \"I took this picture while on vacation last year.\",\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Content-Type\" : \"application/json\",\n  \"Authorization\" : \"example token\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the image</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type of the image</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contentUrl",
            "description": "<p>url of the image</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>Author of the image</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contentLocation",
            "description": "<p>The location of the content in the picture</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "datePublished",
            "description": "<p>The date the image was publised</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the image</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": "HTTP/1.1 200 OK\n {\n     \"_id\": \"5bfe4ce90d61243bdc56555f\",\n     \"name\": \"Beach in Mexico again 2\",\n     \"type\": \"ImageObject\",\n     \"contentUrl\": \"mexico-beach.jpg\",\n     \"author\": \"Jane Doe\",\n     \"contentLocation\": \"Puerto Vallarta, Mexico\",\n     \"datePublished\": \"2018-01-25\",\n     \"description\": \"I took this picture while on vacation last year.\",\n     \"__v\": 0\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ImageWasNotFound",
            "description": "<p>The id of the image was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalErrorOnUpdate",
            "description": "<p>Failed to updated due to internal errors.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Missingimage",
          "content": "HTTP/1.1 400 Bad request\n{\n    \"message\": \"image not found\"\n}",
          "type": "json"
        },
        {
          "title": "InternalErrorOnUpdate",
          "content": "HTTP/1.1 500 Internal error\n{  \n    \"message\": {\n                \"Cast to ObjectId failed for value \\\"test\\\" at path \\\"_id\\\" for model \\\"image\\\"\",\n                \"name\": \"CastError\",\n                \"stringValue\": \"\\\"test\\\"\",\n                \"kind\": \"ObjectId\",\n                \"value\": \"test\",\n                \"path\": \"_id\"\n               }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./image.controller.js",
    "groupTitle": "Images"
  }
] });
