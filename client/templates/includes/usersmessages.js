Template.postItem.helpers({
    users: function() {
        return Meteor.users.find()
    }
});
