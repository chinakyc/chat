Template.messageItem.helpers({
    prepare: function() {
        this.owner = Meteor.users.findOne({_id: this.ownerId})
    },

    ownerName: function () {
        return this.owner.name
    },
});
