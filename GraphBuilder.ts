/*

RequestBuilder allows you to discover and access the Microsoft Graph using Visual Studio Code intellisense.

Just start typing at the bottom of this file and see how intellisense helps you explore the graph:
    root.                      me, path, users, endpoints
    root.me                    event, events, message, messages, path
    root.me.event              event(eventId:string) => Event
    
The API mirrors the structure of the Graph paths:
    to access:
        /users/billba@microsoft.com/messages/123-456-789/attachments
    instead of the Kurve-y way of doing things:
        graph.messageAttachmentsForUser("billba@microsoft.com", "123-456-789")
    we do:
        root.user("billba@microsoft.com").message("123-456-789").attachments

Different nodes surface appropriate functionality:
    root.user("bill").         delete, event, events, get, message, messages, path
    root.users.                get, path

Each node surfaces a path which can be passed to the channel of your choice to access the MS Graph: 
    root.user("billba@microsoft.com").message("123-456-789").attachments.pathWithQuery("$select=id,inline")
    => '/users/billba@microsoft.com/messages/123-456-789/attachments?$select=id,inline'

Or use the convenient built-in strongly-typed REST methods!
    root.user("bill").messages().get()        => Graph.MessageDataModel
    root.user("bill").event("123").get()      => Graph.EventDataModel

Each REST method has available to it the appropriate path via "this.pathWithQuery".
A similar approach would be used to convey scopes down the call chain.

In this proof-of-concept the path building works, but the REST methods are stubs, and greatly simplified ones at that.
In a real version we'd add Async versions and incorporate identity handling.

Finally this initial stab only includes a few familiar pieces of the Microsoft Graph.
However I have examined the 1.0 and Beta docs closely and I believe that this approach is extensible to the full graph.

*/

// A mock of Kurve for testing purposes.

module Kurve {
    export class UserDataModel {
        id:string;
        userField = "I am a user.";
    }

    export class MessageDataModel {
        id:string;
        messageField = "I am a message.";
    }
    
    export class EventDataModel {
        id:string;
        eventField = "I am an event.";
    }
    
    export class AttachmentDataModel {
        id:string;
        attachmentField = "I am an attachment.";
    }
}

module RequestBuilder {

    export class Endpoint {
        constructor(public pathWithQuery:string, public scopes?:string[]){}
    }
    
    interface Endpoints<Model> {
        GET?:Endpoint;
        GETCOLLECTION?:Endpoint;
        POST?:Endpoint;
        DELETE?:Endpoint;
        PATCH?:Endpoint;
    }

    export abstract class Node<Model> {
        endpoints:Endpoints<Model>;
        constructor(protected path: string = "", protected query?: string, endpoints?: Endpoints<Model>) {
        }
        protected get pathWithQuery() { return this.path + (this.query ? "?" + this.query : "") }
    }

    function queryUnion(query1?:string, query2?:string) {
        if (query1)
            return query1 + (query2 ? "&" + query2 : "");
        else
            return query2; 
    }

    export class AddQuery<Model> extends Node<Model> {
        constructor(protected path: string = "", protected query?: string, endpoints?: Endpoints<Model>) {
            super(path, query, endpoints);
            if (endpoints)
                for (var verb in endpoints)
                    endpoints[verb].pathWithQuery = this.pathWithQuery;
        }
    }

    abstract class NodeWithQuery<Model> extends Node<Model> {
        addQuery = (query?:string) => new AddQuery<Model>(this.path, queryUnion(this.query, query), this.endpoints);
    }

    export class Attachment extends Node<Kurve.AttachmentDataModel> {
    }

    export class Attachments extends Node<Kurve.AttachmentDataModel> {
    }
    
    abstract class NodeWithAttachments<T> extends NodeWithQuery<T> {
        attachment = (attachmentId:string) => new Attachment(this.path + "/attachments/" + attachmentId);
        attachments = new Attachments(this.path + "/attachments");
    }

    export class Message extends NodeWithAttachments<Kurve.MessageDataModel> {
        endpoints = {
            GET: new Endpoint(this.pathWithQuery),
            POST: new Endpoint(this.pathWithQuery)
        }
    }

    export class Messages extends NodeWithQuery<Kurve.MessageDataModel> {
        endpoints = {
            GETCOLLECTION: new Endpoint(this.pathWithQuery),
            POST: new Endpoint(this.pathWithQuery)
        }
    }
    
    export class Event extends NodeWithAttachments<Kurve.EventDataModel> {
    }

    export class Events extends NodeWithQuery<Kurve.EventDataModel[]> {
    }

    export class User extends NodeWithQuery<Kurve.UserDataModel> {
        message = (messageId: string) => new Message(this.path + "/messages/" + messageId);
        messages = new Messages(this.path + "/messages");
        event = (eventId: string) => new Event(this.path + "/events/" + eventId);
        events = new Events(this.path + "/events");
        calendarView = (startDate:Date, endDate:Date) => new Events(this.path + "/calendarView", "startDateTime=" + startDate.toISOString() + "&endDateTime=" + endDate.toISOString());
    }

    export class Users extends NodeWithQuery<Kurve.UserDataModel> {
    }

    export class Root {
        me = new User("/me");
        user = (userId:string) => new User("/users/" + userId);
        users = new Users("/users/");
    }
}

interface Collection<Model> {
    collection:Model[];
    //  nextLink callback will go here 
}

class MockGraph {
    getCollection<Model>(query:RequestBuilder.Node<Model>):Collection<Model> {
        var endpoint = query.endpoints.GETCOLLECTION;
        if (!endpoint) {
            console.log("no GETCOLLECTION endpoint, sorry!");
        } else {
            console.log("GETCOLLECTION path", endpoint.pathWithQuery);
            return {} as Collection<Model>;
        }
    }

    get<Model>(query:RequestBuilder.Node<Model>):Model {
        var endpoint = query.endpoints.GET;
        if (!endpoint) {
            console.log("no GET endpoint, sorry!");
        } else {
            console.log("GET path", endpoint.pathWithQuery);
            return {} as Model;
        }
    }
    
    post<Model>(query:RequestBuilder.Node<Model>, request:Model):void {
        var endpoint = query.endpoints.POST;
        if (!endpoint) {
            console.log("no POST endpoint, sorry!");
        } else {
            console.log("POST path", endpoint.pathWithQuery);
        }
    }

    patch<Model>(query:RequestBuilder.Node<Model>, request:Model):void {
        var endpoint = query.endpoints.PATCH;
        if (!endpoint) {
            console.log("no PATCH endpoint, sorry!");
        } else {
            console.log("PATCH path", endpoint.pathWithQuery);
        }
    }
    
    delete<Model>(query:RequestBuilder.Node<Model>, request:Model):void {
        var endpoint = query.endpoints.DELETE;
        if (!endpoint) {
            console.log("no DELETE endpoint, sorry!");
        } else {
            console.log("DELETE path", endpoint.pathWithQuery);
        }
    }

}

var rb = new RequestBuilder.Root();
var graph = new MockGraph();

//root.me().event("123").endpoints.get
//graph.get(root.me().message("123")).body.content
//graph.post(root.me().message("123"), new Kurve.MessageDataModel());