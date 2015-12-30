Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function () {
        return [Meteor.subscribe('users'), Meteor.subscribe('messages')]
    }
})

Router.onBeforeAction(function() {
    if (! Meteor.userId()) {
        if (Meteor.loggingIn()){
            this.render(this.loadingTemplate);
        } else {
            this.render('nologin');
        }
    } else {
        this.next();
    }
});

Router.route('/', {
    name: 'usersMessages'
})

Router.route('/dialogure/:_id', {
    name: 'dialogue',
    data: function () {
        return Meteor.users.findOne({_id: this.params._id})
    },
    onAfterAction: function () {
        Session.set('toUserId', this.params._id);
    }
})
