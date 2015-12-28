Meteor.publish('users', function() {
    return Meteor.users.find();
});

Meteor.publish('messages', function() {
    return Messages.find({
        $or: [ { toUserId: Meteor.userId() }, {OwnerId: Meteor.userId()} ]
    });
});
