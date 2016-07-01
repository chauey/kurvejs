(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Kurve"] = factory();
	else
		root["Kurve"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(1));
	__export(__webpack_require__(3));


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var promises_1 = __webpack_require__(2);
	var identity_1 = __webpack_require__(3);
	var requestbuilder_1 = __webpack_require__(4);
	var Scopes;
	(function (Scopes) {
	    var Util = (function () {
	        function Util() {
	        }
	        Util.rootUrl = "https://graph.microsoft.com/";
	        return Util;
	    }());
	    var General = (function () {
	        function General() {
	        }
	        General.OpenId = "openid";
	        General.OfflineAccess = "offline_access";
	        return General;
	    }());
	    Scopes.General = General;
	    var User = (function () {
	        function User() {
	        }
	        User.Read = Util.rootUrl + "User.Read";
	        User.ReadWrite = Util.rootUrl + "User.ReadWrite";
	        User.ReadBasicAll = Util.rootUrl + "User.ReadBasic.All";
	        User.ReadAll = Util.rootUrl + "User.Read.All";
	        User.ReadWriteAll = Util.rootUrl + "User.ReadWrite.All";
	        return User;
	    }());
	    Scopes.User = User;
	    var Contacts = (function () {
	        function Contacts() {
	        }
	        Contacts.Read = Util.rootUrl + "Contacts.Read";
	        Contacts.ReadWrite = Util.rootUrl + "Contacts.ReadWrite";
	        return Contacts;
	    }());
	    Scopes.Contacts = Contacts;
	    var Directory = (function () {
	        function Directory() {
	        }
	        Directory.ReadAll = Util.rootUrl + "Directory.Read.All";
	        Directory.ReadWriteAll = Util.rootUrl + "Directory.ReadWrite.All";
	        Directory.AccessAsUserAll = Util.rootUrl + "Directory.AccessAsUser.All";
	        return Directory;
	    }());
	    Scopes.Directory = Directory;
	    var Group = (function () {
	        function Group() {
	        }
	        Group.ReadAll = Util.rootUrl + "Group.Read.All";
	        Group.ReadWriteAll = Util.rootUrl + "Group.ReadWrite.All";
	        Group.AccessAsUserAll = Util.rootUrl + "Directory.AccessAsUser.All";
	        return Group;
	    }());
	    Scopes.Group = Group;
	    var Mail = (function () {
	        function Mail() {
	        }
	        Mail.Read = Util.rootUrl + "Mail.Read";
	        Mail.ReadWrite = Util.rootUrl + "Mail.ReadWrite";
	        Mail.Send = Util.rootUrl + "Mail.Send";
	        return Mail;
	    }());
	    Scopes.Mail = Mail;
	    var Calendars = (function () {
	        function Calendars() {
	        }
	        Calendars.Read = Util.rootUrl + "Calendars.Read";
	        Calendars.ReadWrite = Util.rootUrl + "Calendars.ReadWrite";
	        return Calendars;
	    }());
	    Scopes.Calendars = Calendars;
	    var Files = (function () {
	        function Files() {
	        }
	        Files.Read = Util.rootUrl + "Files.Read";
	        Files.ReadAll = Util.rootUrl + "Files.Read.All";
	        Files.ReadWrite = Util.rootUrl + "Files.ReadWrite";
	        Files.ReadWriteAppFolder = Util.rootUrl + "Files.ReadWrite.AppFolder";
	        Files.ReadWriteSelected = Util.rootUrl + "Files.ReadWrite.Selected";
	        return Files;
	    }());
	    Scopes.Files = Files;
	    var Tasks = (function () {
	        function Tasks() {
	        }
	        Tasks.ReadWrite = Util.rootUrl + "Tasks.ReadWrite";
	        return Tasks;
	    }());
	    Scopes.Tasks = Tasks;
	    var People = (function () {
	        function People() {
	        }
	        People.Read = Util.rootUrl + "People.Read";
	        People.ReadWrite = Util.rootUrl + "People.ReadWrite";
	        return People;
	    }());
	    Scopes.People = People;
	    var Notes = (function () {
	        function Notes() {
	        }
	        Notes.Create = Util.rootUrl + "Notes.Create";
	        Notes.ReadWriteCreatedByApp = Util.rootUrl + "Notes.ReadWrite.CreatedByApp";
	        Notes.Read = Util.rootUrl + "Notes.Read";
	        Notes.ReadAll = Util.rootUrl + "Notes.Read.All";
	        Notes.ReadWriteAll = Util.rootUrl + "Notes.ReadWrite.All";
	        return Notes;
	    }());
	    Scopes.Notes = Notes;
	})(Scopes = exports.Scopes || (exports.Scopes = {}));
	var DataModelWrapper = (function () {
	    function DataModelWrapper(graph, _data) {
	        this.graph = graph;
	        this._data = _data;
	    }
	    Object.defineProperty(DataModelWrapper.prototype, "data", {
	        get: function () { return this._data; },
	        enumerable: true,
	        configurable: true
	    });
	    return DataModelWrapper;
	}());
	exports.DataModelWrapper = DataModelWrapper;
	var DataModelListWrapper = (function (_super) {
	    __extends(DataModelListWrapper, _super);
	    function DataModelListWrapper() {
	        _super.apply(this, arguments);
	    }
	    return DataModelListWrapper;
	}(DataModelWrapper));
	exports.DataModelListWrapper = DataModelListWrapper;
	var ProfilePhoto = (function (_super) {
	    __extends(ProfilePhoto, _super);
	    function ProfilePhoto() {
	        _super.apply(this, arguments);
	    }
	    return ProfilePhoto;
	}(DataModelWrapper));
	exports.ProfilePhoto = ProfilePhoto;
	(function (EventsEndpoint) {
	    EventsEndpoint[EventsEndpoint["events"] = 0] = "events";
	    EventsEndpoint[EventsEndpoint["calendarView"] = 1] = "calendarView";
	})(exports.EventsEndpoint || (exports.EventsEndpoint = {}));
	var EventsEndpoint = exports.EventsEndpoint;
	var User = (function (_super) {
	    __extends(User, _super);
	    function User() {
	        _super.apply(this, arguments);
	    }
	    User.prototype.events = function (callback, odataQuery) {
	        this.graph.eventsForUser(this._data.userPrincipalName, EventsEndpoint.events, callback, odataQuery);
	    };
	    User.prototype.eventsAsync = function (odataQuery) {
	        return this.graph.eventsForUserAsync(this._data.userPrincipalName, EventsEndpoint.events, odataQuery);
	    };
	    User.prototype.memberOf = function (callback, Error, odataQuery) {
	        this.graph.memberOfForUser(this._data.userPrincipalName, callback, odataQuery);
	    };
	    User.prototype.memberOfAsync = function (odataQuery) {
	        return this.graph.memberOfForUserAsync(this._data.userPrincipalName, odataQuery);
	    };
	    User.prototype.messages = function (callback, odataQuery) {
	        this.graph.messagesForUser(this._data.userPrincipalName, callback, odataQuery);
	    };
	    User.prototype.messagesAsync = function (odataQuery) {
	        return this.graph.messagesForUserAsync(this._data.userPrincipalName, odataQuery);
	    };
	    User.prototype.manager = function (callback, odataQuery) {
	        this.graph.managerForUser(this._data.userPrincipalName, callback, odataQuery);
	    };
	    User.prototype.managerAsync = function (odataQuery) {
	        return this.graph.managerForUserAsync(this._data.userPrincipalName, odataQuery);
	    };
	    User.prototype.profilePhoto = function (callback, odataQuery) {
	        this.graph.profilePhotoForUser(this._data.userPrincipalName, callback, odataQuery);
	    };
	    User.prototype.profilePhotoAsync = function (odataQuery) {
	        return this.graph.profilePhotoForUserAsync(this._data.userPrincipalName, odataQuery);
	    };
	    User.prototype.profilePhotoValue = function (callback, odataQuery) {
	        this.graph.profilePhotoValueForUser(this._data.userPrincipalName, callback, odataQuery);
	    };
	    User.prototype.profilePhotoValueAsync = function (odataQuery) {
	        return this.graph.profilePhotoValueForUserAsync(this._data.userPrincipalName, odataQuery);
	    };
	    User.prototype.calendarView = function (callback, odataQuery) {
	        this.graph.eventsForUser(this._data.userPrincipalName, EventsEndpoint.calendarView, callback, odataQuery);
	    };
	    User.prototype.calendarViewAsync = function (odataQuery) {
	        return this.graph.eventsForUserAsync(this._data.userPrincipalName, EventsEndpoint.calendarView, odataQuery);
	    };
	    User.prototype.mailFolders = function (callback, odataQuery) {
	        this.graph.mailFoldersForUser(this._data.userPrincipalName, callback, odataQuery);
	    };
	    User.prototype.mailFoldersAsync = function (odataQuery) {
	        return this.graph.mailFoldersForUserAsync(this._data.userPrincipalName, odataQuery);
	    };
	    User.prototype.message = function (messageId, callback, odataQuery) {
	        this.graph.messageForUser(this._data.userPrincipalName, messageId, callback, odataQuery);
	    };
	    User.prototype.messageAsync = function (messageId, odataQuery) {
	        return this.graph.messageForUserAsync(this._data.userPrincipalName, messageId, odataQuery);
	    };
	    User.prototype.event = function (eventId, callback, odataQuery) {
	        this.graph.eventForUser(this._data.userPrincipalName, eventId, callback, odataQuery);
	    };
	    User.prototype.eventAsync = function (eventId, odataQuery) {
	        return this.graph.eventForUserAsync(this._data.userPrincipalName, eventId, odataQuery);
	    };
	    User.prototype.messageAttachment = function (messageId, attachmentId, callback, odataQuery) {
	        this.graph.messageAttachmentForUser(this._data.userPrincipalName, messageId, attachmentId, callback, odataQuery);
	    };
	    User.prototype.messageAttachmentAsync = function (messageId, attachmentId, odataQuery) {
	        return this.graph.messageAttachmentForUserAsync(this._data.userPrincipalName, messageId, attachmentId, odataQuery);
	    };
	    return User;
	}(DataModelWrapper));
	exports.User = User;
	var Users = (function (_super) {
	    __extends(Users, _super);
	    function Users() {
	        _super.apply(this, arguments);
	    }
	    return Users;
	}(DataModelListWrapper));
	exports.Users = Users;
	var Message = (function (_super) {
	    __extends(Message, _super);
	    function Message() {
	        _super.apply(this, arguments);
	    }
	    return Message;
	}(DataModelWrapper));
	exports.Message = Message;
	var Messages = (function (_super) {
	    __extends(Messages, _super);
	    function Messages() {
	        _super.apply(this, arguments);
	    }
	    return Messages;
	}(DataModelListWrapper));
	exports.Messages = Messages;
	var Event = (function (_super) {
	    __extends(Event, _super);
	    function Event() {
	        _super.apply(this, arguments);
	    }
	    return Event;
	}(DataModelWrapper));
	exports.Event = Event;
	var Events = (function (_super) {
	    __extends(Events, _super);
	    function Events(graph, endpoint, _data) {
	        _super.call(this, graph, _data);
	        this.graph = graph;
	        this.endpoint = endpoint;
	        this._data = _data;
	    }
	    return Events;
	}(DataModelListWrapper));
	exports.Events = Events;
	var Contact = (function () {
	    function Contact() {
	    }
	    return Contact;
	}());
	exports.Contact = Contact;
	var Group = (function (_super) {
	    __extends(Group, _super);
	    function Group() {
	        _super.apply(this, arguments);
	    }
	    return Group;
	}(DataModelWrapper));
	exports.Group = Group;
	var Groups = (function (_super) {
	    __extends(Groups, _super);
	    function Groups() {
	        _super.apply(this, arguments);
	    }
	    return Groups;
	}(DataModelListWrapper));
	exports.Groups = Groups;
	var MailFolder = (function (_super) {
	    __extends(MailFolder, _super);
	    function MailFolder() {
	        _super.apply(this, arguments);
	    }
	    return MailFolder;
	}(DataModelWrapper));
	exports.MailFolder = MailFolder;
	var MailFolders = (function (_super) {
	    __extends(MailFolders, _super);
	    function MailFolders() {
	        _super.apply(this, arguments);
	    }
	    return MailFolders;
	}(DataModelListWrapper));
	exports.MailFolders = MailFolders;
	(function (AttachmentType) {
	    AttachmentType[AttachmentType["fileAttachment"] = 0] = "fileAttachment";
	    AttachmentType[AttachmentType["itemAttachment"] = 1] = "itemAttachment";
	    AttachmentType[AttachmentType["referenceAttachment"] = 2] = "referenceAttachment";
	})(exports.AttachmentType || (exports.AttachmentType = {}));
	var AttachmentType = exports.AttachmentType;
	var Attachment = (function (_super) {
	    __extends(Attachment, _super);
	    function Attachment() {
	        _super.apply(this, arguments);
	    }
	    Attachment.prototype.getType = function () {
	        switch (this._data['@odata.type']) {
	            case "#microsoft.graph.fileAttachment":
	                return AttachmentType.fileAttachment;
	            case "#microsoft.graph.itemAttachment":
	                return AttachmentType.itemAttachment;
	            case "#microsoft.graph.referenceAttachment":
	                return AttachmentType.referenceAttachment;
	        }
	    };
	    return Attachment;
	}(DataModelWrapper));
	exports.Attachment = Attachment;
	var Attachments = (function (_super) {
	    __extends(Attachments, _super);
	    function Attachments() {
	        _super.apply(this, arguments);
	    }
	    return Attachments;
	}(DataModelListWrapper));
	exports.Attachments = Attachments;
	var Graph = (function () {
	    function Graph(identityInfo) {
	        this.req = null;
	        this.accessToken = null;
	        this.KurveIdentity = null;
	        this.defaultResourceID = "https://graph.microsoft.com";
	        this.baseUrl = "https://graph.microsoft.com/v1.0/";
	        if (identityInfo.defaultAccessToken) {
	            this.accessToken = identityInfo.defaultAccessToken;
	        }
	        else {
	            this.KurveIdentity = identityInfo.identity;
	        }
	    }
	    Graph.prototype.scopesForV2 = function (scopes) {
	        if (!this.KurveIdentity)
	            return null;
	        if (this.KurveIdentity.getCurrentOauthVersion() === identity_1.OAuthVersion.v1)
	            return null;
	        else
	            return scopes;
	    };
	    Graph.prototype.meAsync = function (odataQuery) {
	        var d = new promises_1.Deferred();
	        this.me(function (error, user) { return error ? d.reject(error) : d.resolve(user); }, odataQuery);
	        return d.promise;
	    };
	    Graph.prototype.me = function (callback, odataQuery) {
	        var _this = this;
	        this.endpointGet(new requestbuilder_1.Root().me)
	            .then(function (result) { return callback(null, new User(_this, result)); })
	            .fail(function (error) { return callback(error); });
	    };
	    Graph.prototype.userAsync = function (userId, odataQuery, basicProfileOnly) {
	        if (basicProfileOnly === void 0) { basicProfileOnly = true; }
	        var d = new promises_1.Deferred();
	        this.user(userId, function (error, user) { return error ? d.reject(error) : d.resolve(user); }, odataQuery, basicProfileOnly);
	        return d.promise;
	    };
	    Graph.prototype.user = function (userId, callback, odataQuery, basicProfileOnly) {
	        if (basicProfileOnly === void 0) { basicProfileOnly = true; }
	        var scopes = basicProfileOnly ? [Scopes.User.ReadBasicAll] : [Scopes.User.ReadAll];
	        var urlString = this.buildUsersUrl(userId, odataQuery);
	        this.getUser(urlString, callback, this.scopesForV2(scopes));
	    };
	    Graph.prototype.usersAsync = function (odataQuery, basicProfileOnly) {
	        if (basicProfileOnly === void 0) { basicProfileOnly = true; }
	        var d = new promises_1.Deferred();
	        this.users(function (error, users) { return error ? d.reject(error) : d.resolve(users); }, odataQuery, basicProfileOnly);
	        return d.promise;
	    };
	    Graph.prototype.users = function (callback, odataQuery, basicProfileOnly) {
	        if (basicProfileOnly === void 0) { basicProfileOnly = true; }
	        var scopes = basicProfileOnly ? [Scopes.User.ReadBasicAll] : [Scopes.User.ReadAll];
	        var urlString = this.buildUsersUrl("", odataQuery);
	        this.getUsers(urlString, callback, this.scopesForV2(scopes), basicProfileOnly);
	    };
	    Graph.prototype.groupAsync = function (groupId, odataQuery) {
	        var d = new promises_1.Deferred();
	        this.group(groupId, function (error, group) { return error ? d.reject(error) : d.resolve(group); }, odataQuery);
	        return d.promise;
	    };
	    Graph.prototype.group = function (groupId, callback, odataQuery) {
	        var scopes = [Scopes.Group.ReadAll];
	        var urlString = this.buildGroupsUrl(groupId, odataQuery);
	        this.getGroup(urlString, callback, this.scopesForV2(scopes));
	    };
	    Graph.prototype.groupsAsync = function (odataQuery) {
	        var d = new promises_1.Deferred();
	        this.groups(function (error, groups) { return error ? d.reject(error) : d.resolve(groups); }, odataQuery);
	        return d.promise;
	    };
	    Graph.prototype.groups = function (callback, odataQuery) {
	        var scopes = [Scopes.Group.ReadAll];
	        var urlString = this.buildGroupsUrl("", odataQuery);
	        this.getGroups(urlString, callback, this.scopesForV2(scopes));
	    };
	    Graph.prototype.messageForUserAsync = function (userPrincipalName, messageId, odataQuery) {
	        var d = new promises_1.Deferred();
	        this.messageForUser(userPrincipalName, messageId, function (error, message) { return error ? d.reject(error) : d.resolve(message); }, odataQuery);
	        return d.promise;
	    };
	    Graph.prototype.messageForUser = function (userPrincipalName, messageId, callback, odataQuery) {
	        var scopes = [Scopes.Mail.Read];
	        var urlString = this.buildUsersUrl(userPrincipalName + "/messages/" + messageId, odataQuery);
	        this.getMessage(urlString, messageId, function (error, result) { return callback(error, result); }, this.scopesForV2(scopes));
	    };
	    Graph.prototype.messagesForUserAsync = function (userPrincipalName, odataQuery) {
	        var d = new promises_1.Deferred();
	        this.messagesForUser(userPrincipalName, function (error, messages) { return error ? d.reject(error) : d.resolve(messages); }, odataQuery);
	        return d.promise;
	    };
	    Graph.prototype.messagesForUser = function (userPrincipalName, callback, odataQuery) {
	        var scopes = [Scopes.Mail.Read];
	        var urlString = this.buildUsersUrl(userPrincipalName + "/messages", odataQuery);
	        this.getMessages(urlString, function (error, result) { return callback(error, result); }, this.scopesForV2(scopes));
	    };
	    Graph.prototype.mailFoldersForUserAsync = function (userPrincipalName, odataQuery) {
	        var d = new promises_1.Deferred();
	        this.mailFoldersForUser(userPrincipalName, function (error, messages) { return error ? d.reject(error) : d.resolve(messages); }, odataQuery);
	        return d.promise;
	    };
	    Graph.prototype.mailFoldersForUser = function (userPrincipalName, callback, odataQuery) {
	        var scopes = [Scopes.Mail.Read];
	        var urlString = this.buildUsersUrl(userPrincipalName + "/mailFolders", odataQuery);
	        this.getMailFolders(urlString, function (error, result) { return callback(error, result); }, this.scopesForV2(scopes));
	    };
	    Graph.prototype.eventForUserAsync = function (userPrincipalName, eventId, odataQuery) {
	        var d = new promises_1.Deferred();
	        this.eventForUser(userPrincipalName, eventId, function (error, event) { return error ? d.reject(error) : d.resolve(event); }, odataQuery);
	        return d.promise;
	    };
	    Graph.prototype.eventForUser = function (userPrincipalName, eventId, callback, odataQuery) {
	        var scopes = [Scopes.Calendars.Read];
	        var urlString = this.buildUsersUrl(userPrincipalName + "/events/" + eventId, odataQuery);
	        this.getEvent(urlString, eventId, function (error, result) { return callback(error, result); }, this.scopesForV2(scopes));
	    };
	    Graph.prototype.eventsForUserAsync = function (userPrincipalName, endpoint, odataQuery) {
	        var d = new promises_1.Deferred();
	        this.eventsForUser(userPrincipalName, endpoint, function (error, events) { return error ? d.reject(error) : d.resolve(events); }, odataQuery);
	        return d.promise;
	    };
	    Graph.prototype.eventsForUser = function (userPrincipalName, endpoint, callback, odataQuery) {
	        var scopes = [Scopes.Calendars.Read];
	        var urlString = this.buildUsersUrl(userPrincipalName + "/" + EventsEndpoint[endpoint], odataQuery);
	        this.getEvents(urlString, endpoint, function (error, result) { return callback(error, result); }, this.scopesForV2(scopes));
	    };
	    Graph.prototype.memberOfForUserAsync = function (userPrincipalName, odataQuery) {
	        var d = new promises_1.Deferred();
	        this.memberOfForUser(userPrincipalName, function (error, groups) { return error ? d.reject(error) : d.resolve(groups); }, odataQuery);
	        return d.promise;
	    };
	    Graph.prototype.memberOfForUser = function (userPrincipalName, callback, odataQuery) {
	        var scopes = [Scopes.Group.ReadAll];
	        var urlString = this.buildUsersUrl(userPrincipalName + "/memberOf", odataQuery);
	        this.getGroups(urlString, callback, this.scopesForV2(scopes));
	    };
	    Graph.prototype.managerForUserAsync = function (userPrincipalName, odataQuery) {
	        var d = new promises_1.Deferred();
	        this.managerForUser(userPrincipalName, function (error, user) { return error ? d.reject(error) : d.resolve(user); }, odataQuery);
	        return d.promise;
	    };
	    Graph.prototype.managerForUser = function (userPrincipalName, callback, odataQuery) {
	        var scopes = [Scopes.Directory.ReadAll];
	        var urlString = this.buildUsersUrl(userPrincipalName + "/manager", odataQuery);
	        this.getUser(urlString, callback, this.scopesForV2(scopes));
	    };
	    Graph.prototype.directReportsForUserAsync = function (userPrincipalName, odataQuery) {
	        var d = new promises_1.Deferred();
	        this.directReportsForUser(userPrincipalName, function (error, users) { return error ? d.reject(error) : d.resolve(users); }, odataQuery);
	        return d.promise;
	    };
	    Graph.prototype.directReportsForUser = function (userPrincipalName, callback, odataQuery) {
	        var scopes = [Scopes.Directory.ReadAll];
	        var urlString = this.buildUsersUrl(userPrincipalName + "/directReports", odataQuery);
	        this.getUsers(urlString, callback, this.scopesForV2(scopes));
	    };
	    Graph.prototype.profilePhotoForUserAsync = function (userPrincipalName, odataQuery) {
	        var d = new promises_1.Deferred();
	        this.profilePhotoForUser(userPrincipalName, function (error, profilePhoto) { return error ? d.reject(error) : d.resolve(profilePhoto); }, odataQuery);
	        return d.promise;
	    };
	    Graph.prototype.profilePhotoForUser = function (userPrincipalName, callback, odataQuery) {
	        var scopes = [Scopes.User.ReadBasicAll];
	        var urlString = this.buildUsersUrl(userPrincipalName + "/photo", odataQuery);
	        this.getPhoto(urlString, callback, this.scopesForV2(scopes));
	    };
	    Graph.prototype.profilePhotoValueForUserAsync = function (userPrincipalName, odataQuery) {
	        var d = new promises_1.Deferred();
	        this.profilePhotoValueForUser(userPrincipalName, function (error, result) { return error ? d.reject(error) : d.resolve(result); }, odataQuery);
	        return d.promise;
	    };
	    Graph.prototype.profilePhotoValueForUser = function (userPrincipalName, callback, odataQuery) {
	        var scopes = [Scopes.User.ReadBasicAll];
	        var urlString = this.buildUsersUrl(userPrincipalName + "/photo/$value", odataQuery);
	        this.getPhotoValue(urlString, callback, this.scopesForV2(scopes));
	    };
	    Graph.prototype.messageAttachmentsForUserAsync = function (userPrincipalName, messageId, odataQuery) {
	        var d = new promises_1.Deferred();
	        this.messageAttachmentsForUser(userPrincipalName, messageId, function (error, result) { return error ? d.reject(error) : d.resolve(result); }, odataQuery);
	        return d.promise;
	    };
	    Graph.prototype.messageAttachmentsForUser = function (userPrincipalName, messageId, callback, odataQuery) {
	        var scopes = [Scopes.Mail.Read];
	        var urlString = this.buildUsersUrl(userPrincipalName + "/messages/" + messageId + "/attachments", odataQuery);
	        this.getMessageAttachments(urlString, callback, this.scopesForV2(scopes));
	    };
	    Graph.prototype.messageAttachmentForUserAsync = function (userPrincipalName, messageId, attachmentId, odataQuery) {
	        var d = new promises_1.Deferred();
	        this.messageAttachmentForUser(userPrincipalName, messageId, attachmentId, function (error, attachment) { return error ? d.reject(error) : d.resolve(attachment); }, odataQuery);
	        return d.promise;
	    };
	    Graph.prototype.messageAttachmentForUser = function (userPrincipalName, messageId, attachmentId, callback, odataQuery) {
	        var scopes = [Scopes.Mail.Read];
	        var urlString = this.buildUsersUrl(userPrincipalName + "/messages/" + messageId + "/attachments/" + attachmentId, odataQuery);
	        this.getMessageAttachment(urlString, callback, this.scopesForV2(scopes));
	    };
	    Graph.prototype.getAsync = function (url) {
	        var d = new promises_1.Deferred();
	        this.get(url, function (error, response) { return error ? d.reject(error) : d.resolve(response); });
	        return d.promise;
	    };
	    Graph.prototype.get = function (url, callback, responseType, scopes) {
	        var _this = this;
	        var xhr = new XMLHttpRequest();
	        if (responseType)
	            xhr.responseType = responseType;
	        xhr.onreadystatechange = function () {
	            if (xhr.readyState === 4)
	                if (xhr.status === 200)
	                    callback(null, responseType ? xhr.response : xhr.responseText);
	                else
	                    callback(_this.generateError(xhr));
	        };
	        xhr.open("GET", url);
	        this.addAccessTokenAndSend(xhr, function (addTokenError) {
	            if (addTokenError) {
	                callback(addTokenError);
	            }
	        }, scopes);
	    };
	    Graph.prototype.generateError = function (xhr) {
	        var response = new identity_1.Error();
	        response.status = xhr.status;
	        response.statusText = xhr.statusText;
	        if (xhr.responseType === '' || xhr.responseType === 'text')
	            response.text = xhr.responseText;
	        else
	            response.other = xhr.response;
	        return response;
	    };
	    Graph.prototype.endpointGet = function (endpoint) {
	        var d = new promises_1.Deferred();
	        this.get(endpoint.pathWithQuery, function (error, result) {
	            var jsonResult = JSON.parse(result);
	            if (jsonResult.error) {
	                var errorODATA = new identity_1.Error();
	                errorODATA.other = jsonResult.error;
	                d.reject(errorODATA);
	                return;
	            }
	            d.resolve(jsonResult);
	        });
	        return d.promise;
	    };
	    Graph.prototype.getUsers = function (urlString, callback, scopes, basicProfileOnly) {
	        var _this = this;
	        if (basicProfileOnly === void 0) { basicProfileOnly = true; }
	        this.get(urlString, function (errorGet, result) {
	            if (errorGet) {
	                callback(errorGet);
	                return;
	            }
	            var usersODATA = JSON.parse(result);
	            if (usersODATA.error) {
	                var errorODATA = new identity_1.Error();
	                errorODATA.other = usersODATA.error;
	                callback(errorODATA);
	                return;
	            }
	            var resultsArray = (usersODATA.value ? usersODATA.value : [usersODATA]);
	            var users = new Users(_this, resultsArray.map(function (o) { return new User(_this, o); }));
	            var nextLink = usersODATA['@odata.nextLink'];
	            if (nextLink) {
	                users.nextLink = function (callback) {
	                    var scopes = basicProfileOnly ? [Scopes.User.ReadBasicAll] : [Scopes.User.ReadAll];
	                    var d = new promises_1.Deferred();
	                    _this.getUsers(nextLink, function (error, result) {
	                        if (callback)
	                            callback(error, result);
	                        else
	                            error ? d.reject(error) : d.resolve(result);
	                    }, _this.scopesForV2(scopes), basicProfileOnly);
	                    return d.promise;
	                };
	            }
	            callback(null, users);
	        }, null, scopes);
	    };
	    Graph.prototype.getUser = function (urlString, callback, scopes) {
	        var _this = this;
	        this.get(urlString, function (errorGet, result) {
	            if (errorGet) {
	                callback(errorGet);
	                return;
	            }
	            var userODATA = JSON.parse(result);
	            if (userODATA.error) {
	                var errorODATA = new identity_1.Error();
	                errorODATA.other = userODATA.error;
	                callback(errorODATA);
	                return;
	            }
	            var user = new User(_this, userODATA);
	            callback(null, user);
	        }, null, scopes);
	    };
	    Graph.prototype.addAccessTokenAndSend = function (xhr, callback, scopes) {
	        if (this.accessToken) {
	            xhr.setRequestHeader('Authorization', 'Bearer ' + this.accessToken);
	            xhr.send();
	        }
	        else {
	            if (scopes) {
	                this.KurveIdentity.getAccessTokenForScopes(scopes, false, (function (token, error) {
	                    if (error)
	                        callback(error);
	                    else {
	                        xhr.setRequestHeader('Authorization', 'Bearer ' + token);
	                        xhr.send();
	                        callback(null);
	                    }
	                }));
	            }
	            else {
	                this.KurveIdentity.getAccessToken(this.defaultResourceID, (function (error, token) {
	                    if (error)
	                        callback(error);
	                    else {
	                        xhr.setRequestHeader('Authorization', 'Bearer ' + token);
	                        xhr.send();
	                        callback(null);
	                    }
	                }));
	            }
	        }
	    };
	    Graph.prototype.getMessage = function (urlString, messageId, callback, scopes) {
	        var _this = this;
	        this.get(urlString, function (errorGet, result) {
	            if (errorGet) {
	                callback(errorGet);
	                return;
	            }
	            var ODATA = JSON.parse(result);
	            if (ODATA.error) {
	                var ODATAError = new identity_1.Error();
	                ODATAError.other = ODATA.error;
	                callback(ODATAError);
	                return;
	            }
	            var message = new Message(_this, ODATA);
	            callback(null, message);
	        }, null, scopes);
	    };
	    Graph.prototype.getMessages = function (urlString, callback, scopes) {
	        var _this = this;
	        this.get(urlString, function (errorGet, result) {
	            if (errorGet) {
	                callback(errorGet);
	                return;
	            }
	            var messagesODATA = JSON.parse(result);
	            if (messagesODATA.error) {
	                var errorODATA = new identity_1.Error();
	                errorODATA.other = messagesODATA.error;
	                callback(errorODATA);
	                return;
	            }
	            var resultsArray = (messagesODATA.value ? messagesODATA.value : [messagesODATA]);
	            var messages = new Messages(_this, resultsArray.map(function (o) { return new Message(_this, o); }));
	            var nextLink = messagesODATA['@odata.nextLink'];
	            if (nextLink) {
	                messages.nextLink = function (callback) {
	                    var scopes = [Scopes.Mail.Read];
	                    var d = new promises_1.Deferred();
	                    _this.getMessages(nextLink, function (error, messages) {
	                        if (callback)
	                            callback(error, messages);
	                        else
	                            error ? d.reject(error) : d.resolve(messages);
	                    }, _this.scopesForV2(scopes));
	                    return d.promise;
	                };
	            }
	            callback(null, messages);
	        }, null, scopes);
	    };
	    Graph.prototype.getEvent = function (urlString, EventId, callback, scopes) {
	        var _this = this;
	        this.get(urlString, function (errorGet, result) {
	            if (errorGet) {
	                callback(errorGet);
	                return;
	            }
	            var ODATA = JSON.parse(result);
	            if (ODATA.error) {
	                var ODATAError = new identity_1.Error();
	                ODATAError.other = ODATA.error;
	                callback(ODATAError);
	                return;
	            }
	            var event = new Event(_this, ODATA);
	            callback(null, event);
	        }, null, scopes);
	    };
	    Graph.prototype.getEvents = function (urlString, endpoint, callback, scopes) {
	        var _this = this;
	        this.get(urlString, function (errorGet, result) {
	            if (errorGet) {
	                callback(errorGet);
	                return;
	            }
	            var odata = JSON.parse(result);
	            if (odata.error) {
	                var errorODATA = new identity_1.Error();
	                errorODATA.other = odata.error;
	                callback(errorODATA);
	                return;
	            }
	            var resultsArray = (odata.value ? odata.value : [odata]);
	            var events = new Events(_this, endpoint, resultsArray.map(function (o) { return new Event(_this, o); }));
	            var nextLink = odata['@odata.nextLink'];
	            if (nextLink) {
	                events.nextLink = function (callback) {
	                    var scopes = [Scopes.Mail.Read];
	                    var d = new promises_1.Deferred();
	                    _this.getEvents(nextLink, endpoint, function (error, result) {
	                        if (callback)
	                            callback(error, result);
	                        else
	                            error ? d.reject(error) : d.resolve(result);
	                    }, _this.scopesForV2(scopes));
	                    return d.promise;
	                };
	            }
	            callback(null, events);
	        }, null, scopes);
	    };
	    Graph.prototype.getGroups = function (urlString, callback, scopes) {
	        var _this = this;
	        this.get(urlString, function (errorGet, result) {
	            if (errorGet) {
	                callback(errorGet);
	                return;
	            }
	            var groupsODATA = JSON.parse(result);
	            if (groupsODATA.error) {
	                var errorODATA = new identity_1.Error();
	                errorODATA.other = groupsODATA.error;
	                callback(errorODATA);
	                return;
	            }
	            var resultsArray = (groupsODATA.value ? groupsODATA.value : [groupsODATA]);
	            var groups = new Groups(_this, resultsArray.map(function (o) { return new Group(_this, o); }));
	            var nextLink = groupsODATA['@odata.nextLink'];
	            if (nextLink) {
	                groups.nextLink = function (callback) {
	                    var scopes = [Scopes.Group.ReadAll];
	                    var d = new promises_1.Deferred();
	                    _this.getGroups(nextLink, function (error, result) {
	                        if (callback)
	                            callback(error, result);
	                        else
	                            error ? d.reject(error) : d.resolve(result);
	                    }, _this.scopesForV2(scopes));
	                    return d.promise;
	                };
	            }
	            callback(null, groups);
	        }, null, scopes);
	    };
	    Graph.prototype.getGroup = function (urlString, callback, scopes) {
	        var _this = this;
	        this.get(urlString, function (errorGet, result) {
	            if (errorGet) {
	                callback(errorGet);
	                return;
	            }
	            var ODATA = JSON.parse(result);
	            if (ODATA.error) {
	                var ODATAError = new identity_1.Error();
	                ODATAError.other = ODATA.error;
	                callback(ODATAError);
	                return;
	            }
	            var group = new Group(_this, ODATA);
	            callback(null, group);
	        }, null, scopes);
	    };
	    Graph.prototype.getPhoto = function (urlString, callback, scopes) {
	        var _this = this;
	        this.get(urlString, function (errorGet, result) {
	            if (errorGet) {
	                callback(errorGet);
	                return;
	            }
	            var ODATA = JSON.parse(result);
	            if (ODATA.error) {
	                var errorODATA = new identity_1.Error();
	                errorODATA.other = ODATA.error;
	                callback(errorODATA);
	                return;
	            }
	            var photo = new ProfilePhoto(_this, ODATA);
	            callback(null, photo);
	        }, null, scopes);
	    };
	    Graph.prototype.getPhotoValue = function (urlString, callback, scopes) {
	        this.get(urlString, function (errorGet, result) {
	            if (errorGet) {
	                callback(null, errorGet);
	                return;
	            }
	            callback(result);
	        }, "blob", scopes);
	    };
	    Graph.prototype.getMailFolders = function (urlString, callback, scopes) {
	        var _this = this;
	        this.get(urlString, function (errorGet, result) {
	            if (errorGet) {
	                callback(errorGet);
	                return;
	            }
	            var odata = JSON.parse(result);
	            if (odata.error) {
	                var errorODATA = new identity_1.Error();
	                errorODATA.other = odata.error;
	                callback(errorODATA);
	            }
	            var resultsArray = (odata.value ? odata.value : [odata]);
	            var mailFolders = new MailFolders(_this, resultsArray.map(function (o) { return new MailFolder(_this, o); }));
	            var nextLink = odata['@odata.nextLink'];
	            if (nextLink) {
	                mailFolders.nextLink = function (callback) {
	                    var scopes = [Scopes.User.ReadAll];
	                    var d = new promises_1.Deferred();
	                    _this.getMailFolders(nextLink, function (error, result) {
	                        if (callback)
	                            callback(error, result);
	                        else
	                            error ? d.reject(error) : d.resolve(result);
	                    }, _this.scopesForV2(scopes));
	                    return d.promise;
	                };
	            }
	            callback(null, mailFolders);
	        }, null, scopes);
	    };
	    Graph.prototype.getMessageAttachments = function (urlString, callback, scopes) {
	        var _this = this;
	        this.get(urlString, function (errorGet, result) {
	            if (errorGet) {
	                callback(errorGet);
	                return;
	            }
	            var attachmentsODATA = JSON.parse(result);
	            if (attachmentsODATA.error) {
	                var errorODATA = new identity_1.Error();
	                errorODATA.other = attachmentsODATA.error;
	                callback(errorODATA);
	                return;
	            }
	            var resultsArray = (attachmentsODATA.value ? attachmentsODATA.value : [attachmentsODATA]);
	            var attachments = new Attachments(_this, resultsArray.map(function (o) { return new Attachment(_this, o); }));
	            var nextLink = attachmentsODATA['@odata.nextLink'];
	            if (nextLink) {
	                attachments.nextLink = function (callback) {
	                    var scopes = [Scopes.Mail.Read];
	                    var d = new promises_1.Deferred();
	                    _this.getMessageAttachments(nextLink, function (error, attachments) {
	                        if (callback)
	                            callback(error, attachments);
	                        else
	                            error ? d.reject(error) : d.resolve(attachments);
	                    }, _this.scopesForV2(scopes));
	                    return d.promise;
	                };
	            }
	            callback(null, attachments);
	        }, null, scopes);
	    };
	    Graph.prototype.getMessageAttachment = function (urlString, callback, scopes) {
	        var _this = this;
	        this.get(urlString, function (errorGet, result) {
	            if (errorGet) {
	                callback(errorGet);
	                return;
	            }
	            var ODATA = JSON.parse(result);
	            if (ODATA.error) {
	                var ODATAError = new identity_1.Error();
	                ODATAError.other = ODATA.error;
	                callback(ODATAError);
	                return;
	            }
	            var attachment = new Attachment(_this, ODATA);
	            callback(null, attachment);
	        }, null, scopes);
	    };
	    Graph.prototype.buildUrl = function (root, path, odataQuery) {
	        return this.baseUrl + root + path + (odataQuery ? "?" + odataQuery : "");
	    };
	    Graph.prototype.buildMeUrl = function (path, odataQuery) {
	        if (path === void 0) { path = ""; }
	        return this.buildUrl("me/", path, odataQuery);
	    };
	    Graph.prototype.buildUsersUrl = function (path, odataQuery) {
	        if (path === void 0) { path = ""; }
	        return this.buildUrl("users/", path, odataQuery);
	    };
	    Graph.prototype.buildGroupsUrl = function (path, odataQuery) {
	        if (path === void 0) { path = ""; }
	        return this.buildUrl("groups/", path, odataQuery);
	    };
	    return Graph;
	}());
	exports.Graph = Graph;


/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	function DispatchDeferred(closure) {
	    setTimeout(closure, 0);
	}
	var PromiseState;
	(function (PromiseState) {
	    PromiseState[PromiseState["Pending"] = 0] = "Pending";
	    PromiseState[PromiseState["ResolutionInProgress"] = 1] = "ResolutionInProgress";
	    PromiseState[PromiseState["Resolved"] = 2] = "Resolved";
	    PromiseState[PromiseState["Rejected"] = 3] = "Rejected";
	})(PromiseState || (PromiseState = {}));
	var Client = (function () {
	    function Client(_dispatcher, _successCB, _errorCB) {
	        this._dispatcher = _dispatcher;
	        this._successCB = _successCB;
	        this._errorCB = _errorCB;
	        this.result = new Deferred(_dispatcher);
	    }
	    Client.prototype.resolve = function (value, defer) {
	        var _this = this;
	        if (typeof (this._successCB) !== 'function') {
	            this.result.resolve(value);
	            return;
	        }
	        if (defer) {
	            this._dispatcher(function () { return _this._dispatchCallback(_this._successCB, value); });
	        }
	        else {
	            this._dispatchCallback(this._successCB, value);
	        }
	    };
	    Client.prototype.reject = function (error, defer) {
	        var _this = this;
	        if (typeof (this._errorCB) !== 'function') {
	            this.result.reject(error);
	            return;
	        }
	        if (defer) {
	            this._dispatcher(function () { return _this._dispatchCallback(_this._errorCB, error); });
	        }
	        else {
	            this._dispatchCallback(this._errorCB, error);
	        }
	    };
	    Client.prototype._dispatchCallback = function (callback, arg) {
	        var result, then, type;
	        try {
	            result = callback(arg);
	            this.result.resolve(result);
	        }
	        catch (err) {
	            this.result.reject(err);
	            return;
	        }
	    };
	    return Client;
	}());
	var Deferred = (function () {
	    function Deferred(dispatcher) {
	        this._stack = [];
	        this._state = PromiseState.Pending;
	        if (dispatcher)
	            this._dispatcher = dispatcher;
	        else
	            this._dispatcher = DispatchDeferred;
	        this.promise = new Promise(this);
	    }
	    Deferred.prototype.DispatchDeferred = function (closure) {
	        setTimeout(closure, 0);
	    };
	    Deferred.prototype.then = function (successCB, errorCB) {
	        if (typeof (successCB) !== 'function' && typeof (errorCB) !== 'function') {
	            return this.promise;
	        }
	        var client = new Client(this._dispatcher, successCB, errorCB);
	        switch (this._state) {
	            case PromiseState.Pending:
	            case PromiseState.ResolutionInProgress:
	                this._stack.push(client);
	                break;
	            case PromiseState.Resolved:
	                client.resolve(this._value, true);
	                break;
	            case PromiseState.Rejected:
	                client.reject(this._error, true);
	                break;
	        }
	        return client.result.promise;
	    };
	    Deferred.prototype.resolve = function (value) {
	        if (this._state !== PromiseState.Pending) {
	            return this;
	        }
	        return this._resolve(value);
	    };
	    Deferred.prototype._resolve = function (value) {
	        var _this = this;
	        var type = typeof (value), then, pending = true;
	        try {
	            if (value !== null &&
	                (type === 'object' || type === 'function') &&
	                typeof (then = value.then) === 'function') {
	                if (value === this.promise) {
	                    throw new TypeError('recursive resolution');
	                }
	                this._state = PromiseState.ResolutionInProgress;
	                then.call(value, function (result) {
	                    if (pending) {
	                        pending = false;
	                        _this._resolve(result);
	                    }
	                }, function (error) {
	                    if (pending) {
	                        pending = false;
	                        _this._reject(error);
	                    }
	                });
	            }
	            else {
	                this._state = PromiseState.ResolutionInProgress;
	                this._dispatcher(function () {
	                    _this._state = PromiseState.Resolved;
	                    _this._value = value;
	                    var i, stackSize = _this._stack.length;
	                    for (i = 0; i < stackSize; i++) {
	                        _this._stack[i].resolve(value, false);
	                    }
	                    _this._stack.splice(0, stackSize);
	                });
	            }
	        }
	        catch (err) {
	            if (pending) {
	                this._reject(err);
	            }
	        }
	        return this;
	    };
	    Deferred.prototype.reject = function (error) {
	        if (this._state !== PromiseState.Pending) {
	            return this;
	        }
	        return this._reject(error);
	    };
	    Deferred.prototype._reject = function (error) {
	        var _this = this;
	        this._state = PromiseState.ResolutionInProgress;
	        this._dispatcher(function () {
	            _this._state = PromiseState.Rejected;
	            _this._error = error;
	            var stackSize = _this._stack.length, i = 0;
	            for (i = 0; i < stackSize; i++) {
	                _this._stack[i].reject(error, false);
	            }
	            _this._stack.splice(0, stackSize);
	        });
	        return this;
	    };
	    return Deferred;
	}());
	exports.Deferred = Deferred;
	var Promise = (function () {
	    function Promise(_deferred) {
	        this._deferred = _deferred;
	    }
	    Promise.prototype.then = function (successCallback, errorCallback) {
	        return this._deferred.then(successCallback, errorCallback);
	    };
	    Promise.prototype.fail = function (errorCallback) {
	        return this._deferred.then(undefined, errorCallback);
	    };
	    return Promise;
	}());
	exports.Promise = Promise;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var promises_1 = __webpack_require__(2);
	(function (OAuthVersion) {
	    OAuthVersion[OAuthVersion["v1"] = 1] = "v1";
	    OAuthVersion[OAuthVersion["v2"] = 2] = "v2";
	})(exports.OAuthVersion || (exports.OAuthVersion = {}));
	var OAuthVersion = exports.OAuthVersion;
	var Error = (function () {
	    function Error() {
	    }
	    return Error;
	}());
	exports.Error = Error;
	var CachedToken = (function () {
	    function CachedToken(id, scopes, resource, token, expiry) {
	        this.id = id;
	        this.scopes = scopes;
	        this.resource = resource;
	        this.token = token;
	        this.expiry = expiry;
	    }
	    ;
	    Object.defineProperty(CachedToken.prototype, "isExpired", {
	        get: function () {
	            return this.expiry <= new Date(new Date().getTime() + 60000);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    CachedToken.prototype.hasScopes = function (requiredScopes) {
	        var _this = this;
	        if (!this.scopes) {
	            return false;
	        }
	        return requiredScopes.every(function (requiredScope) {
	            return _this.scopes.some(function (actualScope) { return requiredScope === actualScope; });
	        });
	    };
	    return CachedToken;
	}());
	var TokenCache = (function () {
	    function TokenCache(tokenStorage) {
	        var _this = this;
	        this.tokenStorage = tokenStorage;
	        this.cachedTokens = {};
	        if (tokenStorage) {
	            tokenStorage.getAll().forEach(function (_a) {
	                var id = _a.id, scopes = _a.scopes, resource = _a.resource, token = _a.token, expiry = _a.expiry;
	                var cachedToken = new CachedToken(id, scopes, resource, token, new Date(expiry));
	                if (cachedToken.isExpired) {
	                    _this.tokenStorage.remove(cachedToken.id);
	                }
	                else {
	                    _this.cachedTokens[cachedToken.id] = cachedToken;
	                }
	            });
	        }
	    }
	    TokenCache.prototype.add = function (token) {
	        this.cachedTokens[token.id] = token;
	        this.tokenStorage && this.tokenStorage.add(token.id, token);
	    };
	    TokenCache.prototype.getForResource = function (resource) {
	        var cachedToken = this.cachedTokens[resource];
	        if (cachedToken && cachedToken.isExpired) {
	            this.remove(resource);
	            return null;
	        }
	        return cachedToken;
	    };
	    TokenCache.prototype.getForScopes = function (scopes) {
	        for (var key in this.cachedTokens) {
	            var cachedToken = this.cachedTokens[key];
	            if (cachedToken.hasScopes(scopes)) {
	                if (cachedToken.isExpired) {
	                    this.remove(key);
	                }
	                else {
	                    return cachedToken;
	                }
	            }
	        }
	        return null;
	    };
	    TokenCache.prototype.clear = function () {
	        this.cachedTokens = {};
	        this.tokenStorage && this.tokenStorage.clear();
	    };
	    TokenCache.prototype.remove = function (key) {
	        this.tokenStorage && this.tokenStorage.remove(key);
	        delete this.cachedTokens[key];
	    };
	    return TokenCache;
	}());
	var IdToken = (function () {
	    function IdToken() {
	    }
	    return IdToken;
	}());
	exports.IdToken = IdToken;
	var Identity = (function () {
	    function Identity(identitySettings) {
	        var _this = this;
	        this.policy = "";
	        this.clientId = identitySettings.clientId;
	        this.tokenProcessorUrl = identitySettings.tokenProcessingUri;
	        if (identitySettings.version)
	            this.version = identitySettings.version;
	        else
	            this.version = OAuthVersion.v1;
	        this.tokenCache = new TokenCache(identitySettings.tokenStorage);
	        window.addEventListener("message", function (event) {
	            if (event.data.type === "id_token") {
	                if (event.data.error) {
	                    var e = new Error();
	                    e.text = event.data.error;
	                    _this.loginCallback(e);
	                }
	                else {
	                    if (_this.state !== event.data.state) {
	                        var error = new Error();
	                        error.statusText = "Invalid state";
	                        _this.loginCallback(error);
	                    }
	                    else {
	                        _this.decodeIdToken(event.data.token);
	                        _this.loginCallback(null);
	                    }
	                }
	            }
	            else if (event.data.type === "access_token") {
	                if (event.data.error) {
	                    var e = new Error();
	                    e.text = event.data.error;
	                    _this.getTokenCallback(null, e);
	                }
	                else {
	                    var token = event.data.token;
	                    var iframe = document.getElementById("tokenIFrame");
	                    iframe.parentNode.removeChild(iframe);
	                    if (event.data.state !== _this.state) {
	                        var error = new Error();
	                        error.statusText = "Invalid state";
	                        _this.getTokenCallback(null, error);
	                    }
	                    else {
	                        _this.getTokenCallback(token, null);
	                    }
	                }
	            }
	        });
	    }
	    Identity.prototype.checkForIdentityRedirect = function () {
	        function token(s) {
	            var start = window.location.href.indexOf(s);
	            if (start < 0)
	                return null;
	            var end = window.location.href.indexOf("&", start + s.length);
	            return window.location.href.substring(start, ((end > 0) ? end : window.location.href.length));
	        }
	        function parseQueryString(str) {
	            var queryString = str || window.location.search || '';
	            var keyValPairs = [];
	            var params = {};
	            queryString = queryString.replace(/.*?\?/, "");
	            if (queryString.length) {
	                keyValPairs = queryString.split('&');
	                for (var pairNum in keyValPairs) {
	                    var key = keyValPairs[pairNum].split('=')[0];
	                    if (!key.length)
	                        continue;
	                    if (typeof params[key] === 'undefined')
	                        params[key] = [];
	                    params[key].push(keyValPairs[pairNum].split('=')[1]);
	                }
	            }
	            return params;
	        }
	        var params = parseQueryString(window.location.href);
	        var idToken = token("#id_token=");
	        var accessToken = token("#access_token");
	        if (idToken) {
	            if (true) {
	                this.decodeIdToken(idToken);
	                this.loginCallback && this.loginCallback(null);
	            }
	            else {
	                var error = new Error();
	                error.statusText = "Invalid state";
	                this.loginCallback && this.loginCallback(error);
	            }
	            return true;
	        }
	        else if (accessToken) {
	            throw "Should not get here.  This should be handled via the iframe approach.";
	        }
	        return false;
	    };
	    Identity.prototype.decodeIdToken = function (idToken) {
	        var _this = this;
	        var decodedToken = this.base64Decode(idToken.substring(idToken.indexOf('.') + 1, idToken.lastIndexOf('.')));
	        var decodedTokenJSON = JSON.parse(decodedToken);
	        var expiryDate = new Date(new Date('01/01/1970 0:0 UTC').getTime() + parseInt(decodedTokenJSON.exp) * 1000);
	        this.idToken = new IdToken();
	        this.idToken.FullToken = decodedTokenJSON;
	        this.idToken.Token = idToken;
	        this.idToken.Expiry = expiryDate;
	        this.idToken.UPN = decodedTokenJSON.upn;
	        this.idToken.TenantId = decodedTokenJSON.tid;
	        this.idToken.FamilyName = decodedTokenJSON.family_name;
	        this.idToken.GivenName = decodedTokenJSON.given_name;
	        this.idToken.Name = decodedTokenJSON.name;
	        this.idToken.PreferredUsername = decodedTokenJSON.preferred_username;
	        var expiration = expiryDate.getTime() - new Date().getTime() - 300000;
	        this.refreshTimer = setTimeout((function () {
	            _this.renewIdToken();
	        }), expiration);
	    };
	    Identity.prototype.decodeAccessToken = function (accessToken, resource, scopes) {
	        var decodedToken = this.base64Decode(accessToken.substring(accessToken.indexOf('.') + 1, accessToken.lastIndexOf('.')));
	        var decodedTokenJSON = JSON.parse(decodedToken);
	        var expiryDate = new Date(new Date('01/01/1970 0:0 UTC').getTime() + parseInt(decodedTokenJSON.exp) * 1000);
	        var key = resource || scopes.join(" ");
	        var token = new CachedToken(key, scopes, resource, accessToken, expiryDate);
	        this.tokenCache.add(token);
	    };
	    Identity.prototype.getIdToken = function () {
	        return this.idToken;
	    };
	    Identity.prototype.isLoggedIn = function () {
	        if (!this.idToken)
	            return false;
	        return (this.idToken.Expiry > new Date());
	    };
	    Identity.prototype.renewIdToken = function () {
	        clearTimeout(this.refreshTimer);
	        this.login(function () { });
	    };
	    Identity.prototype.getCurrentOauthVersion = function () {
	        return this.version;
	    };
	    Identity.prototype.getAccessTokenAsync = function (resource) {
	        var d = new promises_1.Deferred();
	        this.getAccessToken(resource, (function (error, token) {
	            if (error) {
	                d.reject(error);
	            }
	            else {
	                d.resolve(token);
	            }
	        }));
	        return d.promise;
	    };
	    Identity.prototype.getAccessToken = function (resource, callback) {
	        var _this = this;
	        if (this.version !== OAuthVersion.v1) {
	            var e = new Error();
	            e.statusText = "Currently this identity class is using v2 OAuth mode. You need to use getAccessTokenForScopes() method";
	            callback(e);
	            return;
	        }
	        var token = this.tokenCache.getForResource(resource);
	        if (token) {
	            return callback(null, token.token);
	        }
	        this.getTokenCallback = (function (token, error) {
	            if (error) {
	                callback(error);
	            }
	            else {
	                _this.decodeAccessToken(token, resource);
	                callback(null, token);
	            }
	        });
	        this.nonce = "token" + this.generateNonce();
	        this.state = "token" + this.generateNonce();
	        var iframe = document.createElement('iframe');
	        iframe.style.display = "none";
	        iframe.id = "tokenIFrame";
	        iframe.src = this.tokenProcessorUrl + "?clientId=" + encodeURIComponent(this.clientId) +
	            "&resource=" + encodeURIComponent(resource) +
	            "&redirectUri=" + encodeURIComponent(this.tokenProcessorUrl) +
	            "&state=" + encodeURIComponent(this.state) +
	            "&version=" + encodeURIComponent(this.version.toString()) +
	            "&nonce=" + encodeURIComponent(this.nonce) +
	            "&op=token";
	        document.body.appendChild(iframe);
	    };
	    Identity.prototype.getAccessTokenForScopesAsync = function (scopes, promptForConsent) {
	        if (promptForConsent === void 0) { promptForConsent = false; }
	        var d = new promises_1.Deferred();
	        this.getAccessTokenForScopes(scopes, promptForConsent, function (token, error) {
	            if (error) {
	                d.reject(error);
	            }
	            else {
	                d.resolve(token);
	            }
	        });
	        return d.promise;
	    };
	    Identity.prototype.getAccessTokenForScopes = function (scopes, promptForConsent, callback) {
	        var _this = this;
	        if (promptForConsent === void 0) { promptForConsent = false; }
	        if (this.version !== OAuthVersion.v2) {
	            var e = new Error();
	            e.statusText = "Dynamic scopes require v2 mode. Currently this identity class is using v1";
	            callback(null, e);
	            return;
	        }
	        var token = this.tokenCache.getForScopes(scopes);
	        if (token) {
	            return callback(token.token, null);
	        }
	        this.getTokenCallback = (function (token, error) {
	            if (error) {
	                if (promptForConsent || !error.text) {
	                    callback(null, error);
	                }
	                else if (error.text.indexOf("AADSTS65001") >= 0) {
	                    _this.getAccessTokenForScopes(scopes, true, _this.getTokenCallback);
	                }
	                else {
	                    callback(null, error);
	                }
	            }
	            else {
	                _this.decodeAccessToken(token, null, scopes);
	                callback(token, null);
	            }
	        });
	        this.nonce = "token" + this.generateNonce();
	        this.state = "token" + this.generateNonce();
	        if (!promptForConsent) {
	            var iframe = document.createElement('iframe');
	            iframe.style.display = "none";
	            iframe.id = "tokenIFrame";
	            iframe.src = this.tokenProcessorUrl + "?clientId=" + encodeURIComponent(this.clientId) +
	                "&scopes=" + encodeURIComponent(scopes.join(" ")) +
	                "&redirectUri=" + encodeURIComponent(this.tokenProcessorUrl) +
	                "&version=" + encodeURIComponent(this.version.toString()) +
	                "&state=" + encodeURIComponent(this.state) +
	                "&nonce=" + encodeURIComponent(this.nonce) +
	                "&login_hint=" + encodeURIComponent(this.idToken.PreferredUsername) +
	                "&domain_hint=" + encodeURIComponent(this.idToken.TenantId === "9188040d-6c67-4c5b-b112-36a304b66dad" ? "consumers" : "organizations") +
	                "&op=token";
	            document.body.appendChild(iframe);
	        }
	        else {
	            window.open(this.tokenProcessorUrl + "?clientId=" + encodeURIComponent(this.clientId) +
	                "&scopes=" + encodeURIComponent(scopes.join(" ")) +
	                "&redirectUri=" + encodeURIComponent(this.tokenProcessorUrl) +
	                "&version=" + encodeURIComponent(this.version.toString()) +
	                "&state=" + encodeURIComponent(this.state) +
	                "&nonce=" + encodeURIComponent(this.nonce) +
	                "&op=token", "_blank");
	        }
	    };
	    Identity.prototype.loginAsync = function (loginSettings) {
	        var d = new promises_1.Deferred();
	        this.login(function (error) {
	            if (error) {
	                d.reject(error);
	            }
	            else {
	                d.resolve(null);
	            }
	        }, loginSettings);
	        return d.promise;
	    };
	    Identity.prototype.login = function (callback, loginSettings) {
	        this.loginCallback = callback;
	        if (!loginSettings)
	            loginSettings = {};
	        if (loginSettings.policy)
	            this.policy = loginSettings.policy;
	        if (loginSettings.scopes && this.version === OAuthVersion.v1) {
	            var e = new Error();
	            e.text = "Scopes can only be used with OAuth v2.";
	            callback(e);
	            return;
	        }
	        if (loginSettings.policy && !loginSettings.tenant) {
	            var e = new Error();
	            e.text = "In order to use policy (AAD B2C) a tenant must be specified as well.";
	            callback(e);
	            return;
	        }
	        this.state = "login" + this.generateNonce();
	        this.nonce = "login" + this.generateNonce();
	        var loginURL = this.tokenProcessorUrl + "?clientId=" + encodeURIComponent(this.clientId) +
	            "&redirectUri=" + encodeURIComponent(this.tokenProcessorUrl) +
	            "&state=" + encodeURIComponent(this.state) +
	            "&nonce=" + encodeURIComponent(this.nonce) +
	            "&version=" + encodeURIComponent(this.version.toString()) +
	            "&op=login" +
	            "&p=" + encodeURIComponent(this.policy);
	        if (loginSettings.tenant) {
	            loginURL += "&tenant=" + encodeURIComponent(loginSettings.tenant);
	        }
	        if (this.version === OAuthVersion.v2) {
	            if (!loginSettings.scopes)
	                loginSettings.scopes = [];
	            if (loginSettings.scopes.indexOf("profile") < 0)
	                loginSettings.scopes.push("profile");
	            if (loginSettings.scopes.indexOf("openid") < 0)
	                loginSettings.scopes.push("openid");
	            loginURL += "&scopes=" + encodeURIComponent(loginSettings.scopes.join(" "));
	        }
	        window.open(loginURL, "_blank");
	    };
	    Identity.prototype.loginNoWindowAsync = function (toUrl) {
	        var d = new promises_1.Deferred();
	        this.loginNoWindow(function (error) {
	            if (error) {
	                d.reject(error);
	            }
	            else {
	                d.resolve(null);
	            }
	        }, toUrl);
	        return d.promise;
	    };
	    Identity.prototype.loginNoWindow = function (callback, toUrl) {
	        this.loginCallback = callback;
	        this.state = "clientId=" + this.clientId + "&" + "tokenProcessorUrl=" + this.tokenProcessorUrl;
	        this.nonce = this.generateNonce();
	        var redirected = this.checkForIdentityRedirect();
	        if (!redirected) {
	            var redirectUri = (toUrl) ? toUrl : window.location.href.split("#")[0];
	            var url = "https://login.microsoftonline.com/common/oauth2/authorize?response_type=id_token" +
	                "&client_id=" + encodeURIComponent(this.clientId) +
	                "&redirect_uri=" + encodeURIComponent(redirectUri) +
	                "&state=" + encodeURIComponent(this.state) +
	                "&nonce=" + encodeURIComponent(this.nonce);
	            window.location.href = url;
	        }
	    };
	    Identity.prototype.logOut = function () {
	        this.tokenCache.clear();
	        var url = "https://login.microsoftonline.com/common/oauth2/logout?post_logout_redirect_uri=" + encodeURI(window.location.href);
	        window.location.href = url;
	    };
	    Identity.prototype.base64Decode = function (encodedString) {
	        var e = {}, i, b = 0, c, x, l = 0, a, r = '', w = String.fromCharCode, L = encodedString.length;
	        var A = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	        for (i = 0; i < 64; i++) {
	            e[A.charAt(i)] = i;
	        }
	        for (x = 0; x < L; x++) {
	            c = e[encodedString.charAt(x)];
	            b = (b << 6) + c;
	            l += 6;
	            while (l >= 8) {
	                ((a = (b >>> (l -= 8)) & 0xff) || (x < (L - 2))) && (r += w(a));
	            }
	        }
	        return r;
	    };
	    Identity.prototype.generateNonce = function () {
	        var text = "";
	        var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	        for (var i = 0; i < 32; i++) {
	            text += chars.charAt(Math.floor(Math.random() * chars.length));
	        }
	        return text;
	    };
	    return Identity;
	}());
	exports.Identity = Identity;


/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Action = (function () {
	    function Action(pathWithQuery, scopes) {
	        this.pathWithQuery = pathWithQuery;
	        this.scopes = scopes;
	    }
	    return Action;
	}());
	exports.Action = Action;
	function queryUnion(query1, query2) {
	    if (query1)
	        return query1 + (query2 ? "&" + query2 : "");
	    else
	        return query2;
	}
	var pathWithQuery = function (path, query) { return path + (query ? "?" + query : ""); };
	var Endpoint = (function () {
	    function Endpoint(path, query) {
	        var _this = this;
	        this.path = path;
	        this.query = query;
	        this.addQuery = function (query) { return new AddQuery(_this.path, queryUnion(_this.query, query), _this.actions); };
	        this.pathWithQuery = pathWithQuery(this.path, this.query);
	        this.path = path;
	        this.query = query;
	    }
	    return Endpoint;
	}());
	exports.Endpoint = Endpoint;
	var AddQuery = (function (_super) {
	    __extends(AddQuery, _super);
	    function AddQuery(path, query, actions) {
	        _super.call(this, path, query);
	        if (actions) {
	            for (var verb in actions)
	                actions[verb].pathWithQuery = pathWithQuery(path, query);
	            this.actions = actions;
	        }
	    }
	    return AddQuery;
	}(Endpoint));
	exports.AddQuery = AddQuery;
	var Attachment = (function (_super) {
	    __extends(Attachment, _super);
	    function Attachment(path, attachmentId) {
	        _super.call(this, path + "/attachments/" + attachmentId);
	        this.actions = {
	            GET: new Action(this.path)
	        };
	    }
	    return Attachment;
	}(Endpoint));
	exports.Attachment = Attachment;
	var attachment = function (path) { return function (attachmentId) { return new Attachment(path, attachmentId); }; };
	var Attachments = (function (_super) {
	    __extends(Attachments, _super);
	    function Attachments(path) {
	        _super.call(this, path + "/attachments");
	        this.actions = {
	            GETCOLLECTION: new Action(this.path),
	        };
	    }
	    return Attachments;
	}(Endpoint));
	exports.Attachments = Attachments;
	var attachments = function (path) { return new Attachments(path); };
	var Message = (function (_super) {
	    __extends(Message, _super);
	    function Message(path, messageId) {
	        _super.call(this, path + "/messages/" + messageId);
	        this.actions = {
	            GET: new Action(this.path),
	            POST: new Action(this.path)
	        };
	        this.attachment = attachment(this.path);
	        this.attachments = attachments(this.path);
	    }
	    return Message;
	}(Endpoint));
	exports.Message = Message;
	var message = function (path) { return function (messageId) { return new Message(path, messageId); }; };
	var Messages = (function (_super) {
	    __extends(Messages, _super);
	    function Messages(path) {
	        _super.call(this, path + "/messages/");
	        this.actions = {
	            GETCOLLECTION: new Action(this.path),
	        };
	    }
	    return Messages;
	}(Endpoint));
	exports.Messages = Messages;
	var messages = function (path) { return new Messages(path); };
	var Event = (function (_super) {
	    __extends(Event, _super);
	    function Event(path, eventId) {
	        _super.call(this, path + "/events/");
	        this.actions = {
	            GET: new Action(this.path),
	        };
	        this.attachment = attachment(this.path);
	        this.attachments = attachments(this.path);
	    }
	    return Event;
	}(Endpoint));
	exports.Event = Event;
	var event = function (path) { return function (eventId) { return new Event(path, eventId); }; };
	var Events = (function (_super) {
	    __extends(Events, _super);
	    function Events(path) {
	        _super.call(this, path + "/events/");
	        this.actions = {
	            GETCOLLECTION: new Action(this.path),
	        };
	    }
	    return Events;
	}(Endpoint));
	exports.Events = Events;
	var events = function (path) { return new Events(path); };
	var CalendarView = (function (_super) {
	    __extends(CalendarView, _super);
	    function CalendarView(path, startDate, endDate) {
	        _super.call(this, path + "/calendarView", "startDateTime=" + startDate.toString() + "&endDateTime=" + endDate.toString());
	        this.actions = {
	            GETCOLLECTION: new Action(pathWithQuery(this.path, this.query))
	        };
	    }
	    return CalendarView;
	}(Endpoint));
	exports.CalendarView = CalendarView;
	var calendarView = function (path) { return function (startDate, endDate) { return new CalendarView(path, startDate, endDate); }; };
	var User = (function (_super) {
	    __extends(User, _super);
	    function User(path, userId) {
	        if (path === void 0) { path = ""; }
	        _super.call(this, userId ? path + "/users/" + userId : path + "/me");
	        this.actions = {
	            GET: new Action(this.path),
	        };
	        this.message = message(this.path);
	        this.messages = messages(this.path);
	        this.event = event(this.path);
	        this.events = events(this.path);
	        this.calendarView = calendarView(this.path);
	    }
	    return User;
	}(Endpoint));
	exports.User = User;
	var me = new User("https://graph.microsoft.com/v1.0");
	var user = function (userId) { return new User("", userId); };
	var Users = (function (_super) {
	    __extends(Users, _super);
	    function Users(path) {
	        if (path === void 0) { path = ""; }
	        _super.call(this, path + "/users");
	        this.actions = {
	            GETCOLLECTION: new Action(this.path),
	        };
	    }
	    return Users;
	}(Endpoint));
	exports.Users = Users;
	var users = new Users();
	var Root = (function () {
	    function Root() {
	        this.me = me;
	        this.user = user;
	        this.users = users;
	    }
	    return Root;
	}());
	exports.Root = Root;
	var MockGraph = (function () {
	    function MockGraph() {
	    }
	    MockGraph.prototype.getUntypedCollection = function (path, scopes) {
	        return {};
	    };
	    MockGraph.prototype.getTypedCollection = function (path, scopes) {
	        return this.getUntyped(path, scopes);
	    };
	    MockGraph.prototype.getCollection = function (endpoint) {
	        var action = endpoint.actions && endpoint.actions.GETCOLLECTION;
	        if (!action) {
	            console.log("no GETCOLLECTION endpoint, sorry!");
	        }
	        else {
	            console.log("GETCOLLECTION path", action.pathWithQuery);
	            return this.getTypedCollection(action.pathWithQuery, action.scopes);
	        }
	    };
	    MockGraph.prototype.getUntyped = function (path, scopes) {
	        return {};
	    };
	    MockGraph.prototype.getTyped = function (path, scopes) {
	        return;
	    };
	    MockGraph.prototype.get = function (endpoint) {
	        var action = endpoint.actions && endpoint.actions.GET;
	        if (!action) {
	            console.log("no GET endpoint, sorry!");
	        }
	        else {
	            console.log("GET path", action.pathWithQuery);
	            return this.getTyped(action.pathWithQuery, action.scopes);
	        }
	    };
	    MockGraph.prototype.postUntyped = function (path, scopes, request) {
	        return {};
	    };
	    MockGraph.prototype.postTyped = function (path, scopes, request) {
	        return this.postUntyped(path, scopes, request);
	    };
	    MockGraph.prototype.post = function (endpoint, request) {
	        var action = endpoint.actions && endpoint.actions.POST;
	        if (!action) {
	            console.log("no POST endpoint, sorry!");
	        }
	        else {
	            console.log("POST path", action.pathWithQuery);
	            return this.postTyped(action.pathWithQuery, action.scopes, request);
	        }
	    };
	    MockGraph.prototype.patchUntyped = function (path, scopes, request) {
	        return {};
	    };
	    MockGraph.prototype.patchTyped = function (path, scopes, request) {
	        return this.patchUntyped(path, scopes, request);
	    };
	    MockGraph.prototype.patch = function (endpoint, request) {
	        var action = endpoint.actions && endpoint.actions.PATCH;
	        if (!action) {
	            console.log("no PATCH endpoint, sorry!");
	        }
	        else {
	            console.log("PATCH path", action.pathWithQuery);
	            return this.patchTyped(action.pathWithQuery, action.scopes, request);
	        }
	    };
	    MockGraph.prototype.deleteUntyped = function (path, scopes) {
	    };
	    MockGraph.prototype.deleteTyped = function (path, scopes) {
	    };
	    MockGraph.prototype.delete = function (endpoint) {
	        var action = endpoint.actions.DELETE;
	        if (!action) {
	            console.log("no DELETE endpoint, sorry!");
	        }
	        else {
	            console.log("DELETE path", action.pathWithQuery);
	            this.getTyped(action.pathWithQuery, action.scopes);
	        }
	    };
	    return MockGraph;
	}());
	var rb = new Root();
	var graph = new MockGraph();


/***/ }
/******/ ])
});
;
//# sourceMappingURL=kurve.js.map