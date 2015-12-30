Meteor.publish('users', function() {
    return Meteor.users.find({}, {fields: {
        "_id": 1,
        "username": 1,
        "lastMessageTime":1,
    }});
});

Meteor.publish('messages', function() {
    return Messages.find({
        $or: [ { toUserId: this.userId }, { ownerId: this.userId } ]
    });
});
