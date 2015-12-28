Merssages = new Mongo.Collection('merssages')

Meteor.methods({
    messagesInser: function(messagesAttrs) {
        var user = Meteor.user();
        var toUser = Users.findOne(messagesAttrs.toUserId)

        message = _.extend(messagesAttributes, {
            ownerId: user._id,
            toUserId: toUser._id,
            readState: false,
            createTime: new Date()
        });

        message._id = Messages.insert(message);
        
        return message._id;
    }

});
