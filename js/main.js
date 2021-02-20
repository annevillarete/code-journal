var $avatarUrl = document.querySelector('#avatar-url');
var $avatarPhoto = document.querySelector('.avatar-photo');
var $form = document.querySelector('#save-profile');
var $dataEdit = document.querySelector('#edit-profile-view');
var $profileView = document.querySelector('#profile-view');
var $imageContainer = document.querySelector('#image-container');

$avatarUrl.addEventListener('input', function (event) {
  $avatarPhoto.setAttribute('class', 'container view');
  $avatarPhoto.setAttribute('src', event.target.value);
  $imageContainer.setAttribute('class', 'hidden');
});

function viewSwapping(dataview) {

  if (dataview === 'edit-profile') {
    $dataEdit.className = 'container view';
    document.getElementById('username').setAttribute('value', data.profile.username);
    document.getElementById('fullName').setAttribute('value', data.profile.fullName);
    document.getElementById('bio').setAttribute('value', data.profile.bio);
    document.getElementById('location').setAttribute('value', data.profile.location);
    $avatarUrl.setAttribute('value', data.profile.avatarUrl);
    $avatarPhoto.setAttribute('src', data.profile.avatarUrl);
    $avatarPhoto.setAttribute('class', 'container view');
    $profileView.className = 'container hidden';
    data.view = dataview;
    $form.reset();

  } else if (dataview === 'profile') {
    renderProfile();
    $profileView.className = 'container view';
    data.view = dataview;
    $dataEdit.className = 'container hidden';
    $form.reset();
  }
}

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  data.profile.username = $form.elements.Username.value;
  data.profile.fullName = $form.elements['Full Name'].value;
  data.profile.location = $form.elements.Location.value;
  data.profile.avatarUrl = $form.elements['avatar-url'].value;
  data.profile.bio = $form.elements.bio.value;
  $avatarPhoto.setAttribute('src', 'images/placeholder-image-square.jpg');
  $form.reset();

  var $editProfileForm = document.querySelector('.editProfileContainer');

  if ($editProfileForm !== null) {
    $editProfileForm.remove();
  }

  viewSwapping('profile');
});

function renderProfile() {

  var containerdiv = document.createElement('div');
  containerdiv.className = 'editProfileContainer';

  var $form2 = document.createElement('form');
  $form2.setAttribute('id', 'edit-profile');

  var $colFormgroup = document.createElement('div');
  $colFormgroup.setAttribute('class', 'col form-group');
  $form2.appendChild($colFormgroup);

  var $py3ColSm = document.createElement('div');
  $py3ColSm.setAttribute('class', 'py-3 col-sm');
  containerdiv.appendChild($py3ColSm);

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

  var $colFormgroup5 = document.createElement('div');
  $colFormgroup5.setAttribute('class', 'row col-sm form-group flex-end');
  $colSm.appendChild($colFormgroup5);

  var $editButton = document.createElement('button');
  $editButton.setAttribute('class', 'save-btn btn save-btn:hover save-btn');
  $editButton.setAttribute('id', 'edit-button');
  $editButton.setAttribute('a', '');
  $editButton.setAttribute('href', '#');
  $editButton.setAttribute('dataview', 'edit-profile');
  $editButton.setAttribute('type', 'button');
  $editButton.textContent = 'EDIT';
  $colFormgroup5.appendChild($editButton);

  containerdiv.appendChild($form2);
  $profileView.appendChild(containerdiv);

  $editButton.addEventListener('click', function (event) {
    event.preventDefault();
    viewSwapping('edit-profile');
  });

}

var $profileButton = document.querySelector('#navbar-profile > div > a:nth-child(1)');

$profileButton.addEventListener('click', function (event) {
  var $editProfileForm = document.querySelector('.editProfileContainer');
  if ($editProfileForm !== null) {
    $editProfileForm.remove();

  }

  if (data.profile.username === '') {
    viewSwapping('edit-profile');
  } else {
    viewSwapping('profile');
  }

});

document.addEventListener('DOMContentLoaded', function (event) {
  if (data.profile.username === '') {
    viewSwapping('edit-profile');

  } else if (data.profile.username) {
    viewSwapping('profile');
    $imageContainer.setAttribute('class', 'hidden');

  }

});
