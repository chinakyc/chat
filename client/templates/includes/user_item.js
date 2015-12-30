Template.userItem.helpers({
    noCurrentUser: function(_id) {
        return _id !== Meteor.userId()
    },

    message: function() {
        return Messages.findOne({
            $or: [{
                'ownerId': this._id,
                'toUserId': Meteor.userId()
            }, {
                'ownerId': Meteor.userId(),
                'toUserId': this._id,
            }],
        }, {
            sort: {
                'createTime': -1
            },
        })
    },

    displayContent: function(content) {
       if (content.length >= 10) {
           return content.slice(0, 10).concat('...');
       } else {
           return content;
       }
    },

    displayCreateTime: function(createTime) {
        return moment(createTime).fromNow();
    },
    
    unAreadlyRead: function(message) {
        if (!message){
            console.log(1)
            return false;
        } else if (message.ownerId === Meteor.userId()) {
            console.log(2)
            return false;
        } else if (message.readState) {
            console.log(3)
            return false;
        }else {
            console.log(4)
            return true;
        }
    }
});
