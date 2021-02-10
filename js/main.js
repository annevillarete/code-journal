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

var $dataview = document.querySelector('#profile-view');

function renderProfile() {
  var $colFormgroup = document.createElement('div');
  $colFormgroup.setAttribute('class', 'col form-group');

  var $py3ColSm = document.createElement('div');
  $py3ColSm.setAttribute('class', 'py-3 col-sm');
  $dataview.appendChild($py3ColSm);

  var $fullName = document.createElement('h3');
  $fullName.setAttribute('class', 'fas fa-id-card header');
  $fullName.textContent = data.profile.fullName;
  $py3ColSm.appendChild($fullName);

  var $row = document.createElement('div');
  $row.setAttribute('class', 'row');
  $colFormgroup.appendChild($row);

  var $colSmFormgroup = document.createElement('div');
  $colSmFormgroup.setAttribute('class', 'col-sm form-group');
  $row.appendChild($colSmFormgroup);

  var $image = document.createElement('img');
  $image.setAttribute('src', data.profile.avatarUrl);
  $image.setAttribute('class', 'col img-thumbnail avatar-photo form-group');
  $colSmFormgroup.appendChild($image);

  var $colSm = document.createElement('div');
  $colSm.setAttribute('class', 'col-sm');
  $row.appendChild($colSm);

  var $rowcolSmFormgroup = document.createElement('div');
  $rowcolSmFormgroup.setAttribute('class', 'row col-sm form-group');
  $colSm.appendChild($rowcolSmFormgroup);

  var $usernamelabel = document.createElement('i');
  $usernamelabel.setAttribute('class', 'fas fa-user form-group ');
  $rowcolSmFormgroup.appendChild($usernamelabel);

  var $username = document.createElement('div');
  $username.setAttribute('class', 'col form-group ');
  $username.textContent = data.profile.username;
  $rowcolSmFormgroup.appendChild($username);

  var $colFormgroup3 = document.createElement('div');
  $colFormgroup3.setAttribute('class', 'row col-sm form-group ');
  $colSm.appendChild($colFormgroup3);

  var $locationIcon = document.createElement('i');
  $locationIcon.setAttribute('class', 'fas fa-map-marker-alt form-group ');
  $colFormgroup3.appendChild($locationIcon);

  var $location = document.createElement('div');
  $location.setAttribute('class', 'col form-group ');
  $location.textContent = data.profile.location;
  $colFormgroup3.appendChild($location);

  var $colFormgroup4 = document.createElement('div');
  $colFormgroup4.setAttribute('class', 'row col-sm form-group');
  $colSm.appendChild($colFormgroup4);

  var $bioIcon = document.createElement('i');
  $bioIcon.setAttribute('class', 'fas fa-comment form-group ');
  $colFormgroup4.appendChild($bioIcon);

  var $bio = document.createElement('div');
  $bio.setAttribute('class', 'col form-group ');
  $bio.textContent = data.profile.bio;
  $colFormgroup4.appendChild($bio);

  $row.appendChild($colSm);
  $dataview.appendChild($colFormgroup);

  return $colFormgroup;
}

for (var i = 0; i < data.profile.length; i++) {
  var $profile = renderProfile(data[i]);
  $dataview.appendChild($profile);

}
