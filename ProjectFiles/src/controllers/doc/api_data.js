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
    "group": "C__GitRepos_Vips_ProjectFiles_src_controllers_doc_main_js",
    "groupTitle": "C__GitRepos_Vips_ProjectFiles_src_controllers_doc_main_js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/vips/videos/test",
    "title": "Tests the api",
    "name": "testVideo",
    "group": "videos",
    "version": "0.2.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>message the controller works</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>Calculated age from Birthday</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success",
          "content": "{\n     message: 'Greetings from the Video contdroller!'\n     age:27\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./_apidoc.js",
    "groupTitle": "videos"
  },
  {
    "type": "get",
    "url": "/vips/videos/test",
    "title": "Tests the api",
    "name": "testVideo",
    "group": "videos",
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
          "content": "{\n Greetings from the Video contdroller!\n}",
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
    "filename": "./video.controller.js",
    "groupTitle": "videos"
  }
] });