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
    name: 'usersMesages'
})

Router.route('/dialogure/:_id', {
    name: 'dialogue'
})
