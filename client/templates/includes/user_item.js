Template.userItem.helpers({
    prepare: function() {
        this.message = Messages.findOne({
            $or: [{
                ownerId: this._id,
                toUserId: Meteor.userId()
            }, {
                ownerId: Meteor.userId(),
                toUserId: this._id,
            }],
        }, {
            $sort: {
                createTime: -1
            },
            $limit: 1
        })
    },

    readState: function () {
        return this.message.readState
    },

    messageContent: function () {
        if (message.content.lenght >= 10){
            return this.message.content.slice(-10);
        } else {
            return this.message.content
        }
    },

    createTime: function () {
        return this.message.createTime
    }
});
