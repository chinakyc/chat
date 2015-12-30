Template.messageItem.helpers({
    readMessage: function(_id) {
        Meteor.call('readMessage', _id);
    },

    noCurrentUser: function(_id) {
        return _id !== Meteor.userId()
    },

    username: function (id) {
        return Meteor.users.findOne({_id: id}).username
    },

    displayCreateTime: function(createTime) {
        return moment(createTime).fromNow()
    },

});
