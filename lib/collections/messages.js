Messages = new Mongo.Collection('merssages')

Meteor.methods({
    messageInser: function(messageAttrs) {
        var user = Meteor.user();
        var toUser = Meteor.users.findOne(messageAttrs.toUserId)

        if (!(toUser && user)) {
            return null
        }

        var message = _.extend(messageAttrs, {
            ownerId: user._id,
            toUserId: toUser._id,
            readState: false,
            createTime: new Date()
        });

        message._id = Messages.insert(message, function(err, _id) {
            if (err){
                console.log('insert Error');
            } else {
                var date = new Date();

                Meteor.users.update(messageAttrs.ownerId, {
                    $set: {lastMessageTime: date}
                });

                Meteor.users.update(messageAttrs.toUserId, {
                    $set: {lastMessageTime: date}
                });
            }
        });
        
        return message._id;
    },

    readMessage: function(_id) {
        Messages.update({_id: _id, toUserId: Meteor.userId()}, {$set: {readState: true}});
    }
});
