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
            "field": "duration",
            "description": "<p>Duration of the image</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "thumbnail",
            "description": "<p>Thumbnail of the image</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the image</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
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
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad request\n{  \n    \"message\": {\n                \"Cast to ObjectId failed for value \\\"test\\\" at path \\\"_id\\\" for model \\\"image\\\"\",\n                \"name\": \"CastError\",\n                \"stringValue\": \"\\\"test\\\"\",\n                \"kind\": \"ObjectId\",\n                \"value\": \"test\",\n                \"path\": \"_id\"\n               }\n}",
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
            "field": "duration",
            "description": "<p>Duration of the image</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "thumbnail",
            "description": "<p>Thumbnail of the image</p>"
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
          "content": "HTTP/1.1 200 OK\n {\n     \"_id\": \"5bfa4f4a33f6a2091007450c\",\n     \"name\": \"apples\",\n     \"duration\": \"100\",\n     \"description\": \"test\",\n     \"__v\": 0\n }",
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
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "MissingImage:",
          "content": "HTTP/1.1 400 Bad request\n{\n    \"message\": \"Image not found\"\n}",
          "type": "json"
        },
        {
          "title": "InternalError:",
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
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Id",
            "description": "<p>Id of the Image that will be updated</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
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
            "field": "duration",
            "description": "<p>Duration of the image</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "thumbnail",
            "description": "<p>Thumbnail of the image</p>"
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
          "content": "HTTP/1.1 200 OK\n {\n     \"_id\": \"5bfa4f4a33f6a2091007450c\",\n     \"name\": \"apples\",\n     \"duration\": \"120\",\n     \"description\": \"test\",\n     \"__v\": 0\n }",
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
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Missingimage:",
          "content": "HTTP/1.1 400 Bad request\n{\n    \"message\": \"image not found\"\n}",
          "type": "json"
        },
        {
          "title": "InternalError:",
          "content": "HTTP/1.1 500 Internal error\n{  \n    \"message\": {\n                \"Cast to ObjectId failed for value \\\"test\\\" at path \\\"_id\\\" for model \\\"image\\\"\",\n                \"name\": \"CastError\",\n                \"stringValue\": \"\\\"test\\\"\",\n                \"kind\": \"ObjectId\",\n                \"value\": \"test\",\n                \"path\": \"_id\"\n               }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./image.controller.js",
    "groupTitle": "Images"
  }
] });
