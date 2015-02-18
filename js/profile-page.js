app.router.add('profiles/:userId', function (url) {
  var api = app.EtsyApi({ apiKey: 'jgeqmbakgybo48lww24232km' });
  var profileTemplate = _.template($('#etsyProfile').html(), { variable: 'm' });

  api.userDetail(url.params.userId)
    .done(function (data) {
      $('.main-content').html(profileTemplate(data.results[0]));
    })
    .fail(function (req, status, err) {
      console.log('Failed');
      console.log(err);
      $('.main-content').html(err);
    });

});
