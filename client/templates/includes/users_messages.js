Template.usersMessages.helpers({
    users: function() {
        return Meteor.users.find({}, {
            sort:{
                lastMessageTime: -1
            }
        });
    }
});
