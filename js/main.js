var $avatarUrl = document.querySelector('#avatar-url');
var $avatarPhoto = document.querySelector('.avatar-photo');
var $form = document.querySelector('#edit-profile');
var $dataEdit = document.querySelector('#edit-profile-view');
var $profileView = document.querySelector('#profile-view');

$avatarUrl.addEventListener('input', function (event) {
  $avatarPhoto.setAttribute('src', event.target.value);
});

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  data.profile.username = $form.elements.Username.value;
  data.profile.fullName = $form.elements['Full Name'].value;
  data.profile.location = $form.elements.Location.value;
  data.profile.avatarUrl = $form.elements['avatar-url'].value;
  data.profile.bio = $form.elements.bio.value;
  $avatarPhoto.setAttribute('src', 'images/placeholder-image-square.jpg');
  $form.reset();
  viewSwapping('profile');

});

function renderProfile() {
  var $colFormgroup = document.createElement('div');
  $colFormgroup.setAttribute('class', 'col form-group');

  var $py3ColSm = document.createElement('div');
  $py3ColSm.setAttribute('class', 'py-3 col-sm');
  $profileView.appendChild($py3ColSm);

  var $viewProfile = document.createElement('h3');
  $viewProfile.setAttribute('class', 'header row');
  $viewProfile.textContent = 'View Profile';
  $py3ColSm.appendChild($viewProfile);

  var $fullName = document.createElement('h4');
  $fullName.setAttribute('class', 'fas fa-id-card');
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

  var $colSmFormgroup2 = document.createElement('div');
  $colSmFormgroup2.setAttribute('class', 'row col-sm form-group');
  $colSm.appendChild($colSmFormgroup2);

  var $usernamelabel = document.createElement('i');
  $usernamelabel.setAttribute('class', 'fas fa-user form-group ');
  $colSmFormgroup2.appendChild($usernamelabel);

  var $username = document.createElement('div');
  $username.setAttribute('class', 'col form-group ');
  $username.textContent = data.profile.username;
  $colSmFormgroup2.appendChild($username);

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

  $profileView.appendChild($colFormgroup);

}

function viewSwapping(dataview) {

  if (dataview === 'edit-profile') {
    $dataEdit.className = 'container view';
    data.view = dataview;
    $form.reset();

  } else if (dataview === 'profile') {
    renderProfile();
    $profileView.className = 'container view';
    data.view = dataview;
    $dataEdit.remove();
    $form.reset();

  }
}

document.addEventListener('DOMContentLoaded', function (event) {
  if (data.profile.username === '') {
    viewSwapping('edit-profile');
  } else if (data.profile.username) {
    viewSwapping('profile');
  }

});
