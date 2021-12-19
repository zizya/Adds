
function onChange() {
    switch (screen.orientation.type) {
      case ('portrait-primary'):
      case ('portrait-secondary'):
        document.getElementById('na').style.visibility='visible';
        document.getElementById('bg').style.visibility='hidden';
        break;
      case ('landscape-primary'):
      case ('landscape-secondary'):
        document.getElementById('na').style.visibility='hidden';
        document.getElementById('bg').style.visibility='visible';
        break;
    }
  }
  onChange();
  screen.orientation.addEventListener('change', onChange);