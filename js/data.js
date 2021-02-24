/* exported data */

var data = {
  view: 'edit-profile',
  profile: {
    username: '',
    fullName: '',
    location: '',
    avatarUrl: '',
    bio: ''
  },
  entries: []
};

var profileInput = localStorage.getItem('data');
if (profileInput !== null) {
  data = JSON.parse(profileInput);
}

var inputJSON = JSON.stringify(data);
localStorage.setItem('data', inputJSON);

localStorage.getItem('data');
if (profileInput !== null) {
  data = JSON.parse(profileInput);
}
