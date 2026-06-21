const aCourse = {
    code: 'CSE121b',
    name: 'Javascript Language',
    logo: 'img/js-logo.png'
  };

  console.log(aCourse.code);
  console.log(aCourse.name);

  document.querySelector('#courseName').textContent = aCourse.name;
  document.querySelector('#courseCode').textContent = aCourse.code;

  document.querySelector('img').setAttribute('src', aCourse.logo);
  document.querySelector('img').setAttribute('src', aCourse.name);
  document.querySelector('img').style.width = '100px';
