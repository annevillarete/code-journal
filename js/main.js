var $avatarUrl = document.querySelector('#avatar-url');
var $avatarPhoto = document.querySelector('.avatar-photo');

$avatarUrl.addEventListener('input', function (event) {
  $avatarPhoto.setAttribute('src', event.target.value);

});

var $form = document.querySelector('#edit-profile');

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  data.profile.username = $form.elements.Username.value;
  data.profile.fullName = $form.elements['Full Name'].value;
  data.profile.location = $form.elements.Location.value;
  data.profile.avatarUrl = $form.elements['avatar-url'].value;
  data.profile.bio = $form.elements.bio.value;
  $form.reset();
  $avatarPhoto.setAttribute('src', 'images/placeholder-image-square.jpg');

});
