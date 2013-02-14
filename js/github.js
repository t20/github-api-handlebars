var get_github_user_data = function(obj) {
    var user = $('#username', $(obj)).val();
    if (!user)
        return;
    var url = 'https://api.github.com/users/' + user + '/repos';
    // url = 'https://api.github.com/users/mozilla/repos'
    
    $.ajax({
      url: url,
      dataType: 'jsonp',
      success: function(data) {
          var source   = $("#github-template").html();
          var template = Handlebars.compile(source);
          var context  = data;
          var html     = template(context);
          $('#textbox').html(html);
      }
    });
};