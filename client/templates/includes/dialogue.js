Template.dialogue.helpers({
    messages: function (_id) {
        return Messages.find({
            $or: [{
                'ownerId': _id,
                'toUserId': Meteor.userId()
            }, {
                'ownerId': Meteor.userId(),
                'toUserId': _id,
            }],
        }, {
            sort: {
                'createTime': 1
            },
        })
    },
});

Template.dialogue.events({
    'submit form': function(e) {
        e.preventDefault();
        
        var message = {
            content: $(e.target).find('[name=content]').val(),
            toUserId: Session.get('toUserId')
        }
        
        Meteor.call('messageInser', message, function(err) {
            if (err){
                console.log(err);
            } else {
                $(e.target).find('[name=content]').val('')
            }
        });
    }
});
