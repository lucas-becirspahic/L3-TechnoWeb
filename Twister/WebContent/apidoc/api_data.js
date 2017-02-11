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
          "content": "{\"key\" : \"110e8400-e29b-11d4-a716-446655440000\"}",
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
            "field": "login",
            "description": "<p>Login de l'utilisateur</p>"
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
          }
        ]
      }
    },
    "filename": "src/servlets/LogoutServlet.java",
    "groupTitle": "Authentification"
  },
  {
    "type": "get",
    "url": "/friend/add",
    "title": "Ajout d'ami",
    "version": "0.1.0",
    "name": "AddFriend",
    "group": "Friends",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "login1",
            "description": "<p>Login de l'utilisateur ajoutant un ami</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "login2",
            "description": "<p>Login de l'ami à ajouter</p>"
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
            "description": "<p>Utilisateurs déjà amis</p>"
          }
        ]
      }
    },
    "filename": "src/servlets/AddFriendServlet.java",
    "groupTitle": "Friends"
  },
  {
    "type": "get",
    "url": "/friend/list",
    "title": "Liste les amis",
    "version": "0.1.0",
    "name": "ListFriends",
    "group": "Friends",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>Login de l'utilisateur courant</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Succès:",
          "content": "{\"friends\":[{\"id\":3,\"username\":\"jean\"},{\"id\":4,\"username\":\"raoul\"}]}",
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
    "filename": "src/servlets/ListFriendsServlet.java",
    "groupTitle": "Friends"
  },
  {
    "type": "get",
    "url": "/friend/remove",
    "title": "Retrait d'ami",
    "version": "0.1.0",
    "name": "RemoveFriend",
    "group": "Friends",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "login1",
            "description": "<p>Login de l'utilisateur courant</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "login2",
            "description": "<p>Login de l'ami à supprimer</p>"
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
            "description": "<p>Utilisateurs non amis</p>"
          }
        ]
      }
    },
    "filename": "src/servlets/RemoveFriendServlet.java",
    "groupTitle": "Friends"
  },
  {
    "type": "post",
    "url": "/message/new",
    "title": "Nouveau message",
    "version": "0.1.0",
    "name": "CreateMessage",
    "group": "Message",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>Login de l'utilisateur courant</p>"
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
          }
        ]
      }
    },
    "filename": "src/servlets/NewMessageServlet.java",
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
  }
] });