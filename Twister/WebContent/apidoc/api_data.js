define({ "api": [
  {
    "type": "post",
    "url": "/auth/login",
    "title": "Connexion",
    "version": "0.1.0",
    "name": "Login",
    "group": "Authentification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>Login de l'utilisateur</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pwd",
            "description": "<p>Mot de passe de l'utilisateur</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Succès:",
          "content": "\t\t\t{\n    \"follows\": [\n        {\n            \"id\": 3,\n            \"username\": \"jean\"\n        },\n        {\n            \"id\": 4,\n            \"username\": \"raoul\"\n        }\n    ],\n    \"id\": 2,\n    \"login\": \"toto\",\n    \"key\": \"f48c863b-6b1f-44c9-8006-287e06efc6ad\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "ErrorJSON": [
          {
            "group": "ErrorJSON",
            "optional": false,
            "field": "-1",
            "description": "<p>Mauvais arguments</p>"
          },
          {
            "group": "ErrorJSON",
            "optional": false,
            "field": "1",
            "description": "<p>Utilisateur non existant</p>"
          },
          {
            "group": "ErrorJSON",
            "optional": false,
            "field": "2",
            "description": "<p>Mot de passe incorrect</p>"
          },
          {
            "group": "ErrorJSON",
            "optional": false,
            "field": "3",
            "description": "<p>Utilisteur déjà connecté</p>"
          }
        ]
      }
    },
    "filename": "src/servlets/LoginServlet.java",
    "groupTitle": "Authentification"
  },
  {
    "type": "get",
    "url": "/auth/logout",
    "title": "Déconnexion",
    "version": "0.1.0",
    "name": "Logout",
    "group": "Authentification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Clé de session de l'utilisateur courant</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Succès:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "ErrorJSON": [
          {
            "group": "ErrorJSON",
            "optional": false,
            "field": "-1",
            "description": "<p>Mauvais arguments</p>"
          },
          {
            "group": "ErrorJSON",
            "optional": false,
            "field": "2",
            "description": "<p>Utilisateur non connecté</p>"
          }
        ]
      }
    },
    "filename": "src/servlets/LogoutServlet.java",
    "groupTitle": "Authentification"
  },
  {
    "type": "get",
    "url": "/block/add",
    "title": "Bloquer un utilisateur",
    "version": "0.1.0",
    "name": "BlockUser",
    "group": "Block",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Clé de session de l'utilisateur courant</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id_block",
            "description": "<p>id de l'utilisateur à bloquer</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Succès:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "ErrorJSON": [
          {
            "group": "ErrorJSON",
            "optional": false,
            "field": "-1",
            "description": "<p>Mauvais arguments</p>"
          },
          {
            "group": "ErrorJSON",
            "optional": false,
            "field": "1",
            "description": "<p>Utilisateur non existant</p>"
          },
          {
            "group": "ErrorJSON",
            "optional": false,
            "field": "2",
            "description": "<p>Utilisateur non connecté</p>"
          },
          {
            "group": "ErrorJSON",
            "optional": false,
            "field": "3",
            "description": "<p>Utilisateurs déjà bloqué</p>"
          }
        ]
      }
    },
    "filename": "src/servlets/BlockUserServlet.java",
    "groupTitle": "Block"
  },
  {
    "type": "get",
    "url": "/block/remove",
    "title": "Supprime l'utilisateur des profils bloqués",
    "version": "0.1.0",
    "name": "UnblockUser",
    "group": "Block",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Clé de session de l'utilisateur courant</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id_block",
            "description": "<p>id à supprimer des profils bloqués</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Succès:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "ErrorJSON": [
          {
            "group": "ErrorJSON",
            "optional": false,
            "field": "-1",
            "description": "<p>Mauvais arguments</p>"
          },
          {
            "group": "ErrorJSON",
            "optional": false,
            "field": "2",
            "description": "<p>Utilisateur non connecté</p>"
          },
          {
            "group": "ErrorJSON",
            "optional": false,
            "field": "3",
            "description": "<p>Utilisateur non bloqué</p>"
          }
        ]
      }
    },
    "filename": "src/servlets/UnblockUserServlet.java",
    "groupTitle": "Block"
  },
  {
    "type": "post",
    "url": "/comment/new",
    "title": "Nouveau commentaire",
    "version": "0.1.0",
    "name": "NewComment",
    "group": "Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Clé de session de l'utilisateur courant</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id_message",
            "description": "<p>id du message commenté</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Texte du comentaire</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Succès:",
          "content": "{\"id\":2,\"author\":{\"id\":2,\"username\":\"toto\"},\"text\":\"comment\",\"date\":1491315119198}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "ErrorJSON": [
          {
            "group": "ErrorJSON",
            "optional": false,
            "field": "-1",
            "description": "<p>Mauvais arguments</p>"
          },
          {
            "group": "ErrorJSON",
            "optional": false,
            "field": "-11",
            "description": "<p>Mauvais arguments</p>"
          },
          {
            "group": "ErrorJSON",
            "optional": false,
            "field": "2",
            "description": "<p>Utilisateur non connecté</p>"
          }
        ]
      }
    },
    "filename": "src/servlets/NewCommentServlet.java",
    "groupTitle": "Comment"
  },
  {
    "type": "get",
    "url": "/follow/add",
    "title": "Suivre un profil",
    "version": "0.1.0",
    "name": "Follow",
    "group": "Follow",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Clé de session de l'utilisateur courant</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id_follow",
            "description": "<p>id de l'utilisateur à suivre</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Succès:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "ErrorJSON": [
          {
            "group": "ErrorJSON",
            "optional": false,
            "field": "-1",
            "description": "<p>Mauvais arguments</p>"
          },
          {
            "group": "ErrorJSON",
            "optional": false,
            "field": "1",
            "description": "<p>Utilisateur non existant</p>"
          },
          {
            "group": "ErrorJSON",
            "optional": false,
            "field": "2",
            "description": "<p>Utilisateur non connecté</p>"
          },
          {
            "group": "ErrorJSON",
            "optional": false,
            "field": "3",
            "description": "<p>Utilisateurs déjà suivi</p>"
          }
        ]
      }
    },
    "filename": "src/servlets/FollowServlet.java",
    "groupTitle": "Follow"
  },
  {
    "type": "get",
    "url": "/follow/list",
    "title": "Liste les utilisateurs suivis",
    "version": "0.1.0",
    "name": "ListFollows",
    "group": "Follow",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Clé de session de l'utilisateur courant</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Succès:",
          "content": "{\"follows\":[{\"id\":3,\"username\":\"jean\"},{\"id\":4,\"username\":\"raoul\"}]}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "ErrorJSON": [
          {
            "group": "ErrorJSON",
            "optional": false,
            "field": "-1",
            "description": "<p>Mauvais argument</p>"
          },
          {
            "group": "ErrorJSON",
            "optional": false,
            "field": "2",
            "description": "<p>Utilisateur non connecté</p>"
          }
        ]
      }
    },
    "filename": "src/servlets/ListFollowsServlet.java",
    "groupTitle": "Follow"
  },
  {
    "type": "get",
    "url": "/follow/remove",
    "title": "Supprime l'utilisateur des profils suivis",
    "version": "0.1.0",
    "name": "StopFollow",
    "group": "Follow",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Clé de session de l'utilisateur courant</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_follow",
            "description": "<p>id à supprimer des profils suivis</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Succès:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "ErrorJSON": [
          {
            "group": "ErrorJSON",
            "optional": false,
            "field": "-1",
            "description": "<p>Mauvais arguments</p>"
          },
          {
            "group": "ErrorJSON",
            "optional": false,
            "field": "2",
            "description": "<p>Utilisateur non connecté</p>"
          },
          {
            "group": "ErrorJSON",
            "optional": false,
            "field": "3",
            "description": "<p>Utilisateur non suivi</p>"
          }
        ]
      }
    },
    "filename": "src/servlets/StopFollowServlet.java",
    "groupTitle": "Follow"
  },
  {
    "type": "get",
    "url": "/message/list",
    "title": "Liste des messages",
    "version": "0.1.0",
    "name": "ListMessages",
    "group": "Message",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Clé de session de l'utilisateur courant</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Succès:",
          "content": "{\"messages\":[{\"text\":\"test\",\"author_username\":\"toto\",\"_id\":{\"$oid\":\"589af353e4b02b8b69b540be\"},\"author_id\":2,\"date\":{\"$date\":\"2017-02-08T10:30:43.411Z\"}},\n{\"text\":\"deuxieme message\",\"author_username\":\"toto\",\"_id\":{\"$oid\":\"589afd29e4b0c2f81a2b7eb6\"},\"author_id\":2,\"date\":{\"$date\":\"2017-02-08T11:12:41.561Z\"}}]}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "ErrorJSON": [
          {
            "group": "ErrorJSON",
            "optional": false,
            "field": "-1",
            "description": "<p>Mauvais arguments</p>"
          },
          {
            "group": "ErrorJSON",
            "optional": false,
            "field": "2",
            "description": "<p>Utilisateur non connecté</p>"
          }
        ]
      }
    },
    "filename": "src/servlets/ListMessagesServlet.java",
    "groupTitle": "Message"
  },
  {
    "type": "post",
    "url": "/message/new",
    "title": "Nouveau message",
    "version": "0.1.0",
    "name": "NewMessage",
    "group": "Message",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Clé de session de l'utilisateur courant</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Succès:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "ErrorJSON": [
          {
            "group": "ErrorJSON",
            "optional": false,
            "field": "-1",
            "description": "<p>Mauvais arguments</p>"
          },
          {
            "group": "ErrorJSON",
            "optional": false,
            "field": "2",
            "description": "<p>Utilisateur non connecté</p>"
          }
        ]
      }
    },
    "filename": "src/servlets/NewMessageServlet.java",
    "groupTitle": "Message"
  },
  {
    "type": "get",
    "url": "/message/search",
    "title": "Chercher un message dans ceux des amis",
    "version": "0.1.0",
    "name": "SearchMsg",
    "group": "Message",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Clé de session de l'utilisateur courant</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>Motif de recherche</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Succès:",
          "content": "\t\t\t{\"messages\": [\n    {\n        \"text\": \"second message\",\n        \"author_username\": \"raoul\",\n        \"_id\": {\"$oid\": \"58a35b83e4b052853c124fbc\"},\n        \"author_id\": 4,\n        \"date\": {\"$date\": \"2017-02-14T19:33:23.748Z\"}\n    },\n    {\n        \"text\": \"secondmessage\",\n        \"author_username\": \"jean\",\n        \"_id\": {\"$oid\": \"58a35b46e4b052853c124fba\"},\n        \"author_id\": 3,\n        \"date\": {\"$date\": \"2017-02-14T19:32:22.377Z\"}\n    }\n]}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "ErrorJSON": [
          {
            "group": "ErrorJSON",
            "optional": false,
            "field": "-1",
            "description": "<p>Mauvais arguments</p>"
          },
          {
            "group": "ErrorJSON",
            "optional": false,
            "field": "2",
            "description": "<p>Utilisateur non connecté</p>"
          }
        ]
      }
    },
    "filename": "src/servlets/SearchMsgServlet.java",
    "groupTitle": "Message"
  },
  {
    "type": "post",
    "url": "/usr/create",
    "title": "Créer un nouvel utilisateur",
    "version": "0.1.0",
    "name": "NewUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>Login de l'utilisateur</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pwd",
            "description": "<p>Mot de passe de l'utilisateur</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lname",
            "description": "<p>Nom</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fname",
            "description": "<p>Prénom</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>Adresse e-mail</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Succès:",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "ErrorJSON": [
          {
            "group": "ErrorJSON",
            "optional": false,
            "field": "-1",
            "description": "<p>Mauvais arguments</p>"
          },
          {
            "group": "ErrorJSON",
            "optional": false,
            "field": "1",
            "description": "<p>Utilisateur déjà existant</p>"
          }
        ]
      }
    },
    "filename": "src/servlets/NewUserServlet.java",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/info",
    "title": "Informations utilisateur",
    "version": "0.1.0",
    "name": "UserInfo",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Clé de session de l'utilisateur courant</p>"
          },
          {
            "group": "Parameter",
            "type": "key",
            "optional": false,
            "field": "user",
            "description": "<p>Nom de l'utilisateur recherché</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Succès:",
          "content": "\t\t\t{\n    \"follows\": [\n        {\n            \"id\": 3,\n            \"username\": \"jean\"\n        },\n        {\n            \"id\": 4,\n            \"username\": \"raoul\"\n        }\n    ],\n    \"id\": 2,\n    \"login\": \"toto\",\n    \"subscribers\": [\n        {\n            \"id\": 3,\n            \"login\": \"jean\"\n        },\n        {\n            \"id\": 6,\n            \"login\": \"newtoto\"\n        }\n    ],\n    \"registration\": \"2017-03-08 00:00:00.0\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "ErrorJSON": [
          {
            "group": "ErrorJSON",
            "optional": false,
            "field": "-1",
            "description": "<p>Mauvais arguments</p>"
          },
          {
            "group": "ErrorJSON",
            "optional": false,
            "field": "1",
            "description": "<p>Utilisateur non existant</p>"
          },
          {
            "group": "ErrorJSON",
            "optional": false,
            "field": "2",
            "description": "<p>Utilisateur non connecté</p>"
          }
        ]
      }
    },
    "filename": "src/servlets/UserInfoServlet.java",
    "groupTitle": "User"
  }
] });
